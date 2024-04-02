'use client';

import { Collapse } from 'react-collapse';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';

const Accordion = ({ item, toggle, open }) => {
  return (
    <div className="w-full rounded-md border-b border-gray-700">
      {/* Header section of the accordion */}
      <div
        className={twMerge(
          'flex items-center justify-between cursor-pointer hover:text-primary transition-colors pb-1 hover:opacity-100 gap-6 p-5',
          open ? 'opacity-100' : 'opacity-70'
        )}
        onClick={toggle}
      >
        {/* Title of the accordion item, which can be clicked to toggle open/close */}
        <h4 className="font-medium cursor-pointer text-lg text-white">{item?.title}</h4>

        {/* Button to toggle open/close the accordion */}
        <button className="text-2xl text-white">
          {open ? <FiChevronUp className="" /> : <FiChevronDown />}
        </button>
      </div>

      {/* Content of the accordion, displayed when it's open */}
      <Collapse isOpened={open}>
        {/* Description text */}
        <ul className="max-w-[980px] pt-3 text-gray-200 p-5 bg-gray-900">
          {item.items.map((item, i) => (
            <li key={i}>{item.text}</li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
};

export default Accordion;
