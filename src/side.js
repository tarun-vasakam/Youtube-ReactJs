import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdHome } from "react-icons/md";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { RiFolderVideoFill } from "react-icons/ri";

export default function Side(){
  return(
    <nav className='side-main'>
        <div className='side-icon'>
            <div className='side-icon-ham'>
                <RxHamburgerMenu />
            </div>
            <div className='side-icon-row'>
            <MdHome />
            <p>Home</p>
            </div>
            <div className='side-icon-row'>
            <MdVideoLibrary />
            <p>Shorts</p>
            </div>
            <div className='side-icon-row'>
            <MdOutlineSlowMotionVideo />
            <p>Subscriptions</p>
            </div>
            <div className='side-icon-row'>
            <RiFolderVideoFill />
            <p>You</p>
            </div>            
        </div>
    </nav>
  );
}