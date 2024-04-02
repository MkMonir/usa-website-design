import Image from 'next/image';
import AboutImg from '@/public/assets/images/about-img.jpg';

const AboutUsSection = () => {
  return (
    <section className="mt-10">
      <div className="container">
        <div className="flex flex-col md:flex-row md:gap-20 gap-5">
          {/* TITLE */}
          <div>
            <h5 className="text-gray-700 font-medium">About Us</h5>
            <h3 className="text-gray-900 text-3xl font-semibold">History</h3>
          </div>

          {/* SHORT TEXT */}
          <p className="sm:text-base text-xs font-medium text-[#6B7280]">
            In 1962, the Southern Michigan Mutual Insurance Company celebrated it’s 100th year in
            continuous operation and was presented with a plaque by the State of Michigan as a
            Centenary Business.
          </p>
        </div>

        {/* IMAGE */}
        <div className="md:my-12 my-5">
          <Image src={AboutImg} alt="About Image" className="w-full" />
        </div>

        {/* TEXT */}
        <p className="sm:text-base text-xs font-medium text-[#6B7280] hidden md:block">
          In 2013, Southern Michigan Mutual Insurance Company became USA Underwriters. The name may
          have changed, but the dedication to our customers, our drive to serve them and their
          communities hasn’t. USA Underwriters’ mission as a leading Property and Casualty Insurance
          company in Michigan, remains largely unchanged from the mission of it’s progenitor: to
          provide affordable, quality insurance solutions to families and individuals. <br />
          <br />
          Insurance has changed a lot in the last century and a half. When Southern Michigan Mutual
          Insurance Company was founded, automobiles simply didn’t exist. That all changed — right
          in the company’s back yard — at the turn of the 20th century when Henry Ford’s Model T
          began rolling off the assembly line. <br /> <br /> In an instant of history, the car
          supplanted the horse and buggy as American’s primary mode of transportation. The era of
          the Automobile had begun, and the Southern Michigan Mutual Insurance Company was front and
          center for one of the most dramatic shifts in American history. The car accelerated
          economic growth, and offered a freedom of travel that had been nigh-unimaginable for the
          vast majority of people through the whole of human history.
        </p>

        <p className="sm:text-base text-xs block md:hidden font-medium text-[#6B7280]">
          In 2013, Southern Michigan Mutual Insurance Company became USA Underwriters. The name may
          have changed, but the dedication to our customers, our drive to serve them and their
          communities hasn’t.
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;
