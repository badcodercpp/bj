import React from 'react';
//import FacebookStyle from './contentLoader';

const styles = {
    px_py: {
        paddingTop: '300px',
        backgroundColor: 'blue',
        marginTop: '50px'
    },
    image: {
        width: '450px',
        height: '450px',
        paddingTop: '50px'
    },
    container: {
        backgroundColor: 'blue',
        height: '650px'
    },
    bootstrap_container: {
        backgroundColor: 'blue',
    }
}

function GetStarted({logo, links = []}) {
    return (
        <div className='__KA__get_started __KA__get_started_media__mobile' style={styles.container} >
            <div className="container-fluid mb-5 bg-primary" style={styles.bootstrap_container} >
                <div className="row animate-enter fadeInUp" style={styles.bootstrap_container} >
                    <div className="col text-center text-md-left">
                        <div className="px-4 py-10" style={styles.px_py} >
                            <h1 className="mb-3 text-white">Connect with us to faster your Job-search and get career  <span className="text-success">guidelines</span> from <span className="text-success">INDUSTRY Expert!</span></h1>
                            <p className="lead mb-3 text-white">Find qualified leads faster than any other search platform.</p>
                            <div className="row">
                                <div className="col"><a className="btn btn-success btn-lg rounded-pill animate-enter" role="button"  href="/apply">Get Started</a></div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="col-6 d-none d-md-flex align-items-center" style={{height:'20px'}}>
                        {/* <img className="img-fluid loaded" src='https://www.gstatic.com/webp/gallery/1.jpg' alt='loading' style = {styles.image} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default GetStarted;
