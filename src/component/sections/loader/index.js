import React from 'react';
import Facebook from './facebook';
import Instagram from './instagram';
import Code from './code';
import Chat from './chat';

function Loader(){
    return (
        <React.Fragment>
            <Facebook />
            <Code />
            <Chat  />
            <Instagram />
        </React.Fragment>
    )
}

export default Loader;
