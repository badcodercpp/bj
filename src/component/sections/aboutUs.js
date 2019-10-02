import React from 'react';
import OurServices from './ourServices';

function AboutUs({logo, links = []}) {
    return (
        <div className = '__KA__about_us' style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            {/* <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 animate-enter fadeInUp">
                        
                        <div style={{display: 'flex'}} >
                            <div style={{width: '50%', justifyContent: 'flex-start', alignItems: 'flex-strt'}} >
                                <h1 className="text-center mb-0" id="why">About Us</h1>
                                <p>
                                    BJSHUB™ is India's first largest social networking community for job seekers <a href="https://www.facebook.com/groups/Aashu.BJS/" target="new" class="facebook"><i class="fa fa-facebook"></i></a> and IT  professionals <a href="https://www.facebook.com/groups/Aashu.In.BJS.Experienced/" target="new" class="facebook"><i class="fa fa-facebook"></i></a>. Please follow our official social community freshers <a href="https://www.facebook.com/groups/Aashu.BJS/" target="new" class="facebook"><i class="fa fa-facebook"></i></a> experience <a href="https://www.facebook.com/groups/Aashu.In.BJS.Experienced/" target="new" class="facebook"><i class="fa fa-facebook"></i></a>. BJSHUB™ started with name BJS(Bangalore Job Seeker) 8 years back to help freshers, technical graduates &amp; IT professionals with job information &amp; technical guidance. Since Bangalore is known as IT city(silicon valley of India) and a job seeker hub. So we created a job seekers platform with name BJSHUB. BJSHUB™ providing a platform for fresh graduates &amp; <a href="https://www.programmingwithbasics.com/" rel="dofollow"></a>IT experienced professional <a href="https://www.facebook.com/groups/Aashu.In.BJS.Experienced/" target="new" class="facebook"><i class="fa fa-facebook"></i></a> to connect and build a professional network for job infromation and knowledge sharing. The main motive of BJSHUB™ is to provide job information, technical &amp; soft skill guidance by BJSHUB™ team &amp; industry experts...
                                </p>
                            </div>
                            <div style={{width: '50%'}} >
                                <OurServices />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="col-lg-6 content order-lg-1 order-2" style={{maxWidth: '70%', flex: 1}}>
            <h2 className="title">About BJSHub</h2>
            <p>
              BJSHUB™ is India's first largest social networking community for job seekers <a href="https://www.facebook.com/groups/Aashu.BJS/" target="new" class="facebook"><i class="fa fa-facebook"></i></a> and IT  professionals <a href="https://www.facebook.com/groups/Aashu.In.BJS.Experienced/" target="new" class="facebook"><i class="fa fa-facebook"></i></a>. Please follow our official social community freshers <a href="https://www.facebook.com/groups/Aashu.BJS/" target="new" class="facebook"><i class="fa fa-facebook"></i></a> experience <a href="https://www.facebook.com/groups/Aashu.In.BJS.Experienced/" target="new" class="facebook"><i class="fa fa-facebook"></i></a>. BJSHUB™ started with name BJS(Bangalore Job Seeker) 8 years back to help freshers, technical graduates &amp; IT professionals with job information &amp; technical guidance. Since Bangalore is known as IT city(silicon valley of India) and a job seeker hub. So we created a job seekers platform with name BJSHUB. BJSHUB™ providing a platform for fresh graduates &amp; <a href="https://www.programmingwithbasics.com/" rel="dofollow"></a>IT experienced professional <a href="https://www.facebook.com/groups/Aashu.In.BJS.Experienced/" target="new" class="facebook"><i class="fa fa-facebook"></i></a> to connect and build a professional network for job infromation and knowledge sharing. The main motive of BJSHUB™ is to provide job information, technical &amp; soft skill guidance by BJSHUB™ team &amp; industry experts...
            </p>

            <div className="icon-box wow fadeInUp" style={{visibility: "visible",animationName: "fadeInUp", display: 'flex'}}>
              <div className="icon"><i className="fa fa-shopping-bag"></i></div>
              <h4 className="title" style={{width: '500px'}} ><a href="#">Daily Job Information</a></h4>
              <p className="description">BJSHub team works 24*7 to provide daily walk-ins and job information on the daily basis for all IT cities in India. please keep checking our social community  freshers <a href="https://www.facebook.com/groups/Aashu.BJS/" target="new" class="facebook"><i class="fa fa-facebook"></i></a> experience <a href="https://www.facebook.com/groups/Aashu.In.BJS.Experienced/" target="new" class="facebook"><i class="fa fa-facebook"></i></a> </p>
            </div>

            <div className="icon-box wow fadeInUp" data-wow-delay="0.2s" style={{visibility: "visible",animationDelay: '0.2s', animationName: 'fadeInUp', display: 'flex'}}>
              <div className="icon"><i class="fa fa-photo"></i></div>
              <h4 className="title" style={{width: '500px'}}><a href="#">BJS Exclusive Drive</a></h4>
              <p className="description">Our team conducts FREE exclusive drives for all BJS members to help them to get their dream job.</p>
            </div>

            <div className="icon-box wow fadeInUp" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp', display: 'flex'}}>
              <div className="icon"><i class="fa fa-bar-chart"></i></div>
              <h4 className="title" style={{width: '500px'}} ><a href="#">Career Guidance</a></h4>
              <p className="description">We provide real-time career guidance by our industry expert.</p>
            </div>

          </div>
        </div>
    )
}

export default AboutUs;
