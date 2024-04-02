import { Breadcrumb } from '../common/Breadcrumb';
import Services from '../home/Services';
import AboutUsSection from './AboutUsSection';
import OurMission from './OurMission';

const About = () => {
  return (
    <div>
      <Breadcrumb title="About Us" />
      <AboutUsSection />
      <OurMission />
      <div className="mb-16">
        <Services />
      </div>
    </div>
  );
};

export default About;
