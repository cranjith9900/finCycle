import '@mantine/core/styles.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection ';
import Em from '../components/em';
import HowItWorksAndMore from '../components/HowItWorksAndMore';
import HeroSection2 from '../components/HeroSection2';
import Testimonial from '../components/TestiMonials';
function home() {
    return (
      <div >
           
           <Header />
           <Navbar/>
          <HeroSection/>
          <FeaturesSection/>
          <HowItWorksAndMore/>
          <Em/>
          <Testimonial/>
         <HeroSection2/>
         
         
      </div>
    );
  }
  
  export default home;
  