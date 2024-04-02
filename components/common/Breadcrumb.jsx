'use client';

import { usePathname } from 'next/navigation';
import { FaHome } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export const Breadcrumb = ({ title }) => {
  const router = usePathname();

  const pathSegments = router.split('/').filter((segment) => segment);

  return (
    <div className="py-12">
      <div className="text-center">
        {/* TITLE */}
        <h1 className="sm:text-4xl text-2xl text-gray-900 font-medium mb-5 capitalize container max-w-4xl tracking-wide">
          {title}
        </h1>
        <nav aria-label="Breadcrumb">
          <ul className="text-lg mt-3 flex justify-center flex-wrap capitalize gap-4 text-gray-900">
            {/* The first breadcrumb item is usually a link to the home page */}
            <li>
              <a href="/" className="inline-flex items-center gap-4 text-gray-700">
                <FaHome className="text-gray-700 mr-4 text-xl" /> Home
                <span className="text-gray-500 text-2xl">
                  <MdOutlineKeyboardArrowRight />
                </span>
              </a>
            </li>
            {/* Map through the pathSegments to create breadcrumb links */}
            {pathSegments.map((segment, index) => (
              <li key={index}>
                {/* Render a link for each segment, except the last one */}
                {index !== pathSegments.length - 1 ? (
                  <a
                    href={`/${pathSegments.slice(0, index + 1).join('/')}`}
                    className="text-gray-700"
                  >
                    {segment?.split('-')?.join(' ')}
                    <span className="text-gray-500 text-2xl">
                      <MdOutlineKeyboardArrowRight />
                    </span>
                  </a>
                ) : (
                  // Render the last segment as plain text
                  <span>{segment?.split('-')?.join(' ')}</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
