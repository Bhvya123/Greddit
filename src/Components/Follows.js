import React from 'react'
import './Follows.css'

export default function Follows(props) {
    if (props.fols) {
        return (
            // <div className="container">
            //     <p className='centerText'>
            //         1. Tichnas <br />
            //         2. Sanchit <br />
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
                <div class="shadow mx-auto">
                    <div className="card mx-auto">
                        <div className="card-header"> Followes </div>
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
    else return;
}