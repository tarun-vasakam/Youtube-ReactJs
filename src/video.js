import React from 'react';
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function Video(props){
    return(
        <div className='video-main'>
            <div className='video-iframe'>
                {props.iframe}
            </div>
            <div className='video-content'>
                <div className='video-logo'>
                    <img src={props.imag} alt="logo"></img>
                </div>
                <div className='video-detail'>
                    <div className='video-name'>
                        <h3>{props.title}</h3>
                    </div>
                    <div className='video-cname'>
                        <p>{props.cname}</p>
                    </div>
                    <div className='video-views'>
                        <p>{props.views} &#8226; {props.age}</p>
                    </div>
                </div>
                <div className='video-dot'>
                    <HiOutlineDotsVertical size="15"/>
                </div>
            </div>
        </div>
    );
}