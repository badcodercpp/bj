import React, { useEffect } from 'react';
import Popover from 'react-bootstrap/Popover';
import PopoverContent from 'react-bootstrap/PopoverContent';
import PopoverTitle from 'react-bootstrap/PopoverTitle';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const allCities = [
    {
        label: 'Bangalore',
        value: 'BANGALORE'
    },
    {
        label: 'Pune',
        value: 'PUNE'
    },
    {
        label: 'Delhi-NCR',
        value: 'DELHI-NCR'
    },
    {
        label: 'Chennai',
        value: 'CHENNAI'
    },
    {
        label: 'Hyderabad',
        value: 'HYDERABAD'
    },
    {
        label: 'Kolkata',
        value: 'KOLKATA'
    }
 ];

const _handleWalkins = (city, _index) =>{
    window.location.href=`/walkins?origin=BJSHUB&locality=${city.value.toLowerCase()}`
}

const popover = (
    <Popover id="popover-basic" rootClose={true} >
      <PopoverTitle as="h3">Our Walkins</PopoverTitle>
      <PopoverContent>
        <div style={{width:'300px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <ListGroup>
                {
                    allCities.map( (city, index) => {
                        return (
                            <div style={{marginTop: '10px', marginLeft: '-40px', width: '230px', cursor: 'pointer'}} >
                                <ListGroup.Item as="div" key={`__KA__${index}`} variant="light" style={{height:"50px"}} onClick={e => _handleWalkins(city, index)} >
                                    <p style={{width: '100%', textAlign: 'center', color: 'black'}} >
                                        {
                                            city.label
                                        }
                                    </p>
                                </ListGroup.Item>
                            </div>
                        )
                    } )
                }
            </ListGroup>
        </div>
      </PopoverContent>
    </Popover>
);

export function WalkinPopover(params) {
    
    useEffect(() => {
        const elem = document.getElementsByClassName('__KA__home_routes')[0];
        if (elem) {
            document.getElementsByClassName('__KA__home_routes')[0].style.paddingTop = '0px';
        }
    });
    return (
        <OverlayTrigger trigger={"hover"} placement="bottom" overlay={popover} delay={{ show: 100, hide: 1500 }} >
            <p className='nav-link active' style={{ marginBottom: '-2px', color: '#007bff', cursor: 'pointer' }} >Daily Walkins</p>
        </OverlayTrigger>
    )
}

export default WalkinPopover;