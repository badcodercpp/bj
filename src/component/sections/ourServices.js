import React from 'react';

const ourServices  = [
    {
        title: 'Daily Job Information',
        message: 'BJSHub team works 24*7 to provide daily walk-ins and job information on the daily basis for all IT cities in India. please keep checking our social community  freshers '
    },
    {
        title: 'BJS Exclusive Drive',
        message: 'Our team conducts FREE exclusive drives for all BJS members to help them to get their dream job.'
    },
    {
        title: 'Career Guidance',
        message: 'We provide real-time career guidance by our industry expert.'
    }
]

function OurServices({logo, links = []}) {
    return (
        <div className = '__KA__why_us' >
            <div className="pt-5">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 animate-enter fadeInUp">
                        <h1 className="text-center mb-0" id="why">Our Services</h1>
                        <div>
                            {
                                ourServices.map((services, index) => {
                                    return (
                                        <div key={`__KA__${index}`}>
                                            <div>
                                                {
                                                    services.title
                                                }
                                            </div>
                                            <div>
                                                {
                                                    services.message
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <p className="text-center mb-5 subtitle">Startups love HireFast because it saves time, is super easy, and connects them with the right candidates. If this sounds like your dream, let's <a data-toggle="modal" href="/apply">get started</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices;
