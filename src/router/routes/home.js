import React from "react";
import GetStarted from '../../component/sections/getStarted';
import WhyUs from '../../component/sections/whyUs';
import Info from '../../component/sections/info';
import GetStartedCopy from '../../component/sections/getStartedCopy';
import OurClients from '../../component/sections/ourClients';
import Loader from '../../component/sections/loader';
import AboutUs from '../../component/sections/aboutUs';

function HomePageWithoutHeader() {
  return (
      <div className='__KA__home_routes' >
            <div className='__KA__media_link_web_only' style={{width: '500px', height: '500px', position: 'absolute', backgroundColor:'blue', right: 200, top: 150, padding: '20px' }} >
              <Loader />
            </div>
            <GetStarted />
            <br />
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
              <AboutUs />
            </div>
            <WhyUs />
            <Info />
            <OurClients />
            <br />
            <GetStartedCopy />
            <br />
      </div>
  );
}

export default HomePageWithoutHeader;