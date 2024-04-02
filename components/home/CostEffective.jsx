import Image from 'next/image';
import CostEffectiveImg from '@/public/assets/images/cost-effective.jpg';
import Button from '@/components/Button';

export const CostEffective = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="relative">
          {/* IMAGE */}
          <Image src={CostEffectiveImg} alt="Cost Effective" className="w-full hidden md:block" />

          <div className="md:absolute inset-0 w-full h-full md:pl-[115px] md:py-[51px] flex md:items-end">
            <div className="md:py-6 md:px-8 p-5 rounded-[10px] bg-primary text-white md:max-w-[460px] w-full">
              {/* TITLE */}
              <h4 className="text-lg font-bold">
                Obtain cost-effective same-day insurance coverage quickly.
              </h4>

              {/* DESCRIPTION */}
              <p className="font-medium my-[18px] text-xs leading-[150%]">
                Lorem ipsum dolor sit amet consectetur. Ut nisi risus ipsum urna leo. Etiam enim
                varius dictum amet hac imperdiet facilisis malesuada.
              </p>

              {/* ACTION BUTTON */}
              <Button
                text="Report a Claim"
                link="#"
                className="bg-gray-900 hover:bg-gray-800 sm:w-fit w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
