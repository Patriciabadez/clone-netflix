import React from 'react';
import './Header.css';

export default ({black})=> {
    return(
        <header className={black ?'black': ''}>
            <div className='header--logo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg' alt="Netflix"/>
                </a>
            </div>
            <div className='header--user'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Avatar_toolbox.png/640px-Avatar_toolbox.png' alt='usuário'/>
                </a>
            </div>
        </header>

    );
}