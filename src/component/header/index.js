import React from 'react';

import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';

import WalkinPopover from '../sections/header/popover/walkin';
import BjsLogo from '../../images/BJS.png';

const styles = {
    logo: {
        width: '150px',
        borderRadius: '20px',
        marginTop: '-10px',
        maxHeight: '100px',
        cursor: 'pointer'
    }
}

const imageClick = () => {
    window.location.href='/home';
}

function Header({logo, links = []}) {
    return (
        <div className = '__KA__header_container' >
            <Nav className="justify-content-end navbar navbar-light navbar-expand-md bg-white __KA__header_container_media__nav" activeKey="/home">
                <div className='__KA__header_container_media' style={{marginRight: '40%'}} >
                    <img src={BjsLogo} alt='loading' style={styles.logo} onClick={imageClick} />
                </div>
                <Nav.Item>
                    <Nav.Link href="/home">
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.bjs360training.com/">
                        Training
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/ourClients">
                        Our Clients
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.bjshub.com/index.html#team">
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">
                        
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <WalkinPopover />
                </Nav.Item>
            </Nav>
        </div>
    )
}



export default Header;
