import React from 'react';
import { Navigate, useNavigate } from "react-router-dom";

export default function Home(props) {

    const nav = useNavigate();
    const item1 = localStorage.getItem("AuthTok");

    if(item1)
    {
        return (
            <Navigate to="/profile" />
        );
    }

    if (props.homer === "home" && !item1) {
        return (
            <div className="head-text">
                <div className='text-on-image'>
                    <h1>Welcome to GREDDIIT!!!</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                {/* <div className='container'> */}
                                <img src={require('./Pictures/greddiitLogo2.png')} className="rounded" alt="Couldnt be loaded" height="100%" width="100%" />
                                {/* </div> */}
                            </td>
                            <td>
                                <p>
                                    Welcome to Greddiit. Here we are all about having fun and socialising with people of different cultures and
                                    ofcourse memers by heart. Posting memes will get you upvotes and downvotes depending on what type of meme that is.
                                    So buckle up and get on with surfing on this community of awsm people. In case you didnt notice our logo is generated
                                    by the help of OpenAI's Dall-E.
                                </p>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
    else return;
}