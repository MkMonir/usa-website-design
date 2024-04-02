'use client';

import Link from 'next/link';
import Accordion from '@/components/Accordion';
import { useState } from 'react';
import { footerData } from './footerData';

const Footer = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  // ACCORDION TOGGLE FUNCTION
  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      return setOpenAccordion(null);
    }
    setOpenAccordion(index);
  };

  return (
    <footer className="bg-[#1F2A37]">
      <div className="container md:py-20 py-10">
        {/* FOOTER ITEMS FOR LARGE SCREEN */}
        <ul className="hidden sm:grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-28 gap-14 text-white px-6">
          {footerData.map((data, i) => (
            <li key={i}>
              {/* TITLE */}
              <h5 className="text-xl font-semibold mb-3">{data.title}</h5>

              {/* ITEMS */}
              <ul className="text-sm flex flex-col gap-1">
                {data.items?.map((item, i2) => (
                  // ITEM
                  <li className="flex items-center gap-1" key={i2}>
                    {/* IF IT IS NUMBER OR EMAIL THEN IT WILL RENDER THIS ONE AS LINK */}
                    {item.link && (
                      <a
                        href={`${item.link === 'email' ? 'mailto:' : 'tel:'}${item.text}`}
                        className="flex items-center gap-1"
                      >
                        {item.icon && <span>{item.icon}</span>} {item.text}
                      </a>
                    )}

                    {/* IF IT IS NOT NUMBER OR EMAIL THEN IT WILL RENDER THIS ONE*/}
                    {!item.link && (
                      <>
                        {item.icon && <span>{item.icon}</span>} {item.text}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* FOOTER ITEMS FOR MOBILE SCREEN AS ACCORDION */}
        <div className="block sm:hidden rounded-md border border-gray-700 mb-6">
          {footerData?.slice(0, 3).map((data, i) => (
            <Accordion
              item={data}
              open={openAccordion === i}
              toggle={() => toggleAccordion(i)}
              key={i}
            />
          ))}
        </div>

        {/* FOOTER ITEMS FOR MOBILE SCREEN AS ACCORDION */}

        <div className="block sm:hidden rounded-md border border-gray-700">
          {footerData?.slice(3, 6).map((data, i) => (
            <Accordion
              item={data}
              open={openAccordion === i}
              toggle={() => toggleAccordion(i)}
              key={i}
            />
          ))}
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="sm:bg-white bg-gray-800">
        <div className="flex items-center justify-between text-center sm:gap-10 gap-4 flex-col sm:flex-row container py-4 sm:text-gray-900 text-white text-sm">
          <p>
            Copyright 2022 USA Underwriters |{' '}
            <Link href="#" className="font-bold">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link href="#" className="font-bold">
              Terms of Use
            </Link>
          </p>

          <p>( Built by Neutrix - Powered by Neutrix Systems )</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
