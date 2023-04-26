import React from 'react'
import './Followers.css'

export default function Followers(props) {
    if (props.folrs) {
        return (
            // <div className="container">
            //     <p className='centerText'>
            //         1. Sanchit <br />
            //         2. Tichnas <br />
            //         3. Chitnas <br />
            //     </p>
            // </div>
            <>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="shadow mx-auto">
                    <div className="card mx-auto">
                        <div className="card-header"> Followers </div>
                        <div className="card-body">
                            <p className="card-text">1. Tichnas</p>
                            <p className="card-text">2. Sanchit</p>
                            <p className="card-text">3. SichuanTang Clan</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}