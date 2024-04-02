import { CostEffective } from './CostEffective';
import Features from './Features';
import HeroSLider from './HeroSlider';
import Services from './Services';

const Home = () => {
  return (
    <div>
      <HeroSLider />
      <Features />
      <Services />
      <CostEffective />
    </div>
  );
};

export default Home;
