import Button from '../Button';
import Image from 'next/image';
import HeroImg from '@/public/assets/images/hero-img.png';
import { FaArrowRightLong } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section className="my-10">
      <div className="container">
        {/* HERO CONTENTS */}
        <div className="flex gap-28 bg-primary rounded-[10px] w-full">
          {/* LEFT CONTENT */}
          <div className="lg:pl-[54px] lg:pt-[67px] lg:pb-[83px] p-6 text-white max-w-[650px]">
            {/* TITLE */}
            <h1 className="md:text-5xl text-3xl font-bold uppercase md:leading-[125%]">
              Get affordable, same-day coverage in no time.
            </h1>
            {/* DESCRIPTION */}
            <p className="leading-[150%] font-medium mt-4 text-sm md:text-base">
              With roots over a century deep in the birthplace of the automobile industry, USA
              Underwriters has the knowledge and expertise to help tailor a policy to suit your
              lifestyle, your budget, and your priorities.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-10 flex items-center gap-5">
              <Button
                text="Report a Claim"
                link="#"
                className="bg-white hover:bg-gray-200 text-gray-900"
              />
              <Button
                text="Learn More"
                link="#"
                className="bg-transparent hover:bg-transparent p-0"
                icon={<FaArrowRightLong />}
              />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <Image src={HeroImg} alt="Hero Image" className="hidden lg:inline-block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
