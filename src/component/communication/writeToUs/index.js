import React, { useEffect } from 'react';

const send_message = () => {

}

function WriteToUs({logo, links = []}) {
    useEffect(() => {
        const elem = document.getElementsByClassName('__KA__home_routes')[0];
        if (elem) {
            document.getElementsByClassName('__KA__home_routes')[0].style.paddingTop = '0px';
        }
    });
    return (
        <div style={{width:"100%", display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <div className = '__KA__write_to_us'  >
            <div class="container">  
            <form id="contact" action="" method="post">
                <h3>BJS Contact Form</h3>
                <h4>feel free to write us !!</h4>
                <fieldset>
                <input placeholder="Your name" type="text" tabindex="1" required autofocus />
                </fieldset>
                <fieldset>
                <input placeholder="Your Email Address" type="email" tabindex="2" required />
                </fieldset>
                <fieldset>
                <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required />
                </fieldset>
                <fieldset>
                <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required />
                </fieldset>
                <fieldset>
                <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
                </fieldset>
                <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" onClick={send_message} >Submit</button>
                </fieldset>
            </form>
            </div>
            </div>
        </div>
    )
}

export default WriteToUs;
