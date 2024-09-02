import React from 'react';
import { CiSearch } from "react-icons/ci";
import { TiMicrophone } from "react-icons/ti";
import { RiVideoAddLine } from "react-icons/ri";
import { GoBellFill } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import YT from './assets/yt.png';

export default function Head(){
    return(
        <header className='header-main'>
            <div className='header-logo'>
                <img src={YT} alt="logo" height={25}></img>
                <p>YouTube</p>
            </div>
            <div className='header-search'>
                <div className='header-searchbar'>
                    <input placeholder='Search' type='text' size="55"/>
                    <button className='search-btn'><CiSearch /></button>
                </div>
                <div className='header-mic'>
                <TiMicrophone />
                </div>
            </div>
            <div className='header-profile'>
                <RiVideoAddLine />
                <GoBellFill />
                <CgProfile />
            </div>
        </header>
    );
}