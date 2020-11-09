import { GiRibbonMedal } from 'react-icons/gi';
import { RiTruckLine, RiShieldCheckLine } from 'react-icons/ri';

import BannerImg2x from '../../Assets/images/banner@2x.jpg';
import HeroImg1 from '../../Assets/images/image-1@2x.jpg';
import HeroImg2 from '../../Assets/images/image-2@2x.jpg';

import Banner from '../../Components/Banner/';
import { BoxItem, Benefits } from '../../Components/Benefits/';
import { BoxNumber, Experience } from '../../Components/Experience/';
import { TimeLine, Process } from '../../Components/Process/';
import { BoxCustomer, Customers } from '../../Components/Customers/';

function Home() {
  return (
    <>
      <Banner
        title="We Help You Make Modern Interior"
        text="We will help you to make an elegant and luxurious interior designed by professional interior designer."
        image={BannerImg2x}
      />
      <Benefits title="Benefits You Get When  Using Our Services">
        <BoxItem 
          title="Best Quality"
          text="All of our furniture uses the best materials and choices for our customers"
          icon={<GiRibbonMedal size="100%" color="#244d4d"/>}
        />
        <BoxItem 
          title="Free Shipping"
          text="Free shipping everytime you buy furniture from us without exception."
          icon={<RiTruckLine size="100%" color="#244d4d"/>}
        />
        <BoxItem 
          title="Warranty"
          text="Everytime you buy our furniture products, you will get a warranty without exception."
          icon={<RiShieldCheckLine size="100%" color="#244d4d"/>}
        />
      </Benefits>
      
      <Experience
        image={HeroImg1}
        title="We Provide You The Best Experience"
        text="You don't have to worry about the results bacause all of these interiors are made by
        people who are professionals in their fields with an elegant and luxurious style and with premium quality materials"
      >
        <BoxNumber number={15} text="Year Experience"/>
        <BoxNumber number={95} text="Year Experience"/>
        <BoxNumber number={95} text="Year Experience"/>
      </Experience>
      
      <Process
        title="We Provide The Best Process Experience"
        image={HeroImg2}
      >
        <TimeLine 
          number="01"
          title="Briefing"
          text="You don't have to worry about the results bacause all of these interiors are made by
          people who are professionals in their fields with an elegant and luxurious style and with premium quality materials"
        />

        <TimeLine 
          number="02"
          title="Briefing"
          text="You don't have to worry about the results bacause all of these interiors are made by
          people who are professionals in their fields with an elegant and luxurious style and with premium quality materials"
        />

        <TimeLine 
          number="03"
          title="Brief"
          text="You don't have to worry about the results bacause all of these interiors are made by
          people who are professionals in their fields with an elegant and luxurious style and with premium quality materials"
        />
      </Process>

      <Customers
        title="We Our Customers Are Saying"
      >
        <BoxCustomer 
          title="The results given are very sastifying"
          text="You don't have to worry about the results bacause all of these interiors are made by"
          avatar=""
          name="Alex dk"
          description="Web developer"
        />

        <BoxCustomer 
          title="The results given are very sastifying"
          text="You don't have to worry about the results bacause all of these interiors are made by"
          avatar=""
          name="Alex dk"
          description="Web developer"
        />
        
        <BoxCustomer 
          title="The results given are very sastifying"
          text="You don't have to worry about the results bacause all of these interiors are made by"
          avatar=""
          name="Alex dk"
          description="Web developer"
        />
        
        <BoxCustomer 
          title="The results given are very sastifying"
          text="You don't have to worry about the results bacause all of these interiors are made by"
          avatar=""
          name="Alex dk"
          description="Web developer"
        />

      </Customers>
    </>
  );
}

export default Home;
