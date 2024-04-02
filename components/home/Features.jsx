import Button from '@/components/Button';

const Features = () => {
  return (
    <section>
      <div className="container py-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start md:text-left text-center lg:gap-20 md:gap-16 gap-10">
          <div>
            {/* SUBTITLE */}
            <p className="text-gray-700">Our Features</p>
            {/* TTILE */}
            <h3 className="sm:text-3xl text-[20px] font-semibold mb-6">MCCA REFUND INFORMATION</h3>

            {/* BUTTON */}
            <Button text="MCCA Refund FAQ" link="#" className="w-full md:w-fit" />
          </div>

          {/* TEXT */}
          <div className="max-w-2xl">
            <p className="font-medium text-gray-500 text-left sm:text-base text-sm">
              The Michigan Catastrophic Claims Association approved refunds for certain Michigan
              Policyholders due a surplus of funds being held by the MCCA. The approved refund will
              be $400 per eligible vehicle insured with USA Underwriters on October 31st, 2021 at
              11:59 PM, or $80 if the vehicle is an insured historical vehicle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
