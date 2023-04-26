const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
    try {
        const { fname, lname, uname, email, password, age, contactNo } = req.body

        if (!fname || !lname || !uname || !email || !password || !age || !contactNo) {
            return res.status(400).send("Please add all fields")
        }

        const userExists = await User.findOne({ email })

        if (userExists) {
            // console.log("abc");
            return res.status(400).send("User already exists");
        }
        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, salt)

        // Create User

        const user = await User.create({
            fname,
            lname,
            uname,
            email,
            password: hashedPass,
            age,
            contactNo,
        })

        if (user) {
            return res.status(201).json({
                Id: user.id,
                name: [user.fname, user.lname],
                username: user.uname,
                email: user.email,
                age: user.age,
                contactNumber: user.contactNo,
                token: generateToken(user.Id),
            })
        }
        else {
            return res.status(400).send('Invalid User Data')
        }
    }
    catch (e) {
        console.log(e);
    }
})

const loginUser = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body

        // Check if email exists
        const user = await User.findOne({ email })

        if (user && (await bcrypt.compare(password, user.password))) {
            return res.status(200).json({
                Id: user.id,
                name: [user.fname, user.lname],
                username: user.uname,
                email: user.email,
                age: user.age,
                contactNumber: user.contactNo,
                token: generateToken(user.Id),
            })
        }
        else {
            return res.status(400).send('invalid Credentials')
        }
    }
    catch (e) {
        console.log(e);
    }
})

const getMe = asyncHandler(async (req, res) => {
    // const {email} = await User.findById(req.body._id)
    const { email } = req.body
    const user = await User.findOne({ email })

    res.status(200).json({
        user
    })
    // return res.status(200).json({ message: "Well done"})
})

const EditUser = asyncHandler(async (req, res) => {
    const { email, username, age, contact } = req.body
    const user = await User.findOneAndUpdate({ 'email': email }, { 'uname': username, 'age': age, 'contactNo': contact }, { new: true })

    res.status(200).json({
        username: user.uname,
        age: user.age,
        contact: user.contactNo
    })
})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET,
        { expiresIn: '30d' })
}


module.exports = {
    loginUser,
    getMe,
    registerUser,
    EditUser
}