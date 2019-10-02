import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import enhanceLogo from '../../images/enhance-logo.jpg';
import finastraLogo from '../../images/finastra-logo-1200x630_0.png';
import marlabs from '../../images/marlabs.png';
import indoecon from '../../images/indoecon.png';
import readyassist from '../../images/readyassist.png';
import teamware from '../../images/teamware.png';
import vyomlabs from '../../images/vyomlabs.png';

const styles = {
    carousel: {
        image: {
            width: '600px',
            height: '450px'
        }
    },
    container: {
        width: '100%'
    }
}

const clientsArray = [];
clientsArray.push(enhanceLogo)
clientsArray.push(finastraLogo)
clientsArray.push(marlabs)
clientsArray.push(indoecon)
clientsArray.push(readyassist)
clientsArray.push(teamware)
clientsArray.push(vyomlabs)
function OurClients({logo, links = []}) {
    return (
        <div className = '__KA__why_us' style={styles.container} >
            <div>
                <h1 className="text-center mb-0" id="why">Our Clients</h1>
            </div>
            <br />
            <br />
            <Carousel>
                {
                    clientsArray.map( (client, index) => {
                        return (
                            <Carousel.Item key={index} >
                                <img
                                className="d-block w-100"
                                src={client}
                                alt="our clients"
                                style={styles.carousel.image}
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    } )
                }
            </Carousel>
        </div>
    )
}

export default OurClients;
