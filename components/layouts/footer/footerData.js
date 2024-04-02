import { MdOutlineAccessTimeFilled, MdEmail } from 'react-icons/md';
import { IoCallSharp } from 'react-icons/io5';
import { HiLocationMarker } from 'react-icons/hi';

export const footerData = [
  {
    title: 'USA Underwriter',
    items: [
      {
        icon: '',
        text: 'NAIC #: 30457',
      },
      {
        icon: '',
        text: 'P.O. Box 2426',
      },
      {
        icon: '',
        text: 'Rancho Cucamonga, CA, 91729',
      },
    ],
  },

  {
    title: 'Underwriting Support',
    items: [
      {
        icon: <MdOutlineAccessTimeFilled />,
        text: 'Monday - Friday, 9:00 am - 6:00 pm ET',
      },
      {
        icon: <IoCallSharp />,
        text: '+1 (248) 541-2800',
        link: 'number',
      },
      {
        icon: <MdEmail />,
        text: 'customerservice@usaunderwriters.com',
        link: 'email',
      },
    ],
  },

  {
    title: 'Policy Suspensions And Coverage Approvals',
    items: [
      {
        icon: <MdOutlineAccessTimeFilled />,
        text: 'Monday - Friday, 9:00 am - 6:00 pm ET',
      },
    ],
  },

  {
    title: 'Customer Service & Support',
    items: [
      {
        icon: <MdOutlineAccessTimeFilled />,
        text: 'Monday - Friday, 9:00 am - 6:00 pm ET',
      },
      {
        icon: <IoCallSharp />,
        text: '+1 (248) 541-2800',
        link: 'number',
      },
      {
        icon: <MdEmail />,
        text: 'customerservice@usaunderwriters.com',
        link: 'email',
      },
    ],
  },

  {
    title: 'Claims Administration',
    items: [
      {
        icon: <MdOutlineAccessTimeFilled />,
        text: 'Monday - Friday, 9:00 am - 6:00 pm ET',
      },
      {
        icon: <IoCallSharp />,
        text: '+1 (248) 541-2800',
        link: 'number',
      },
      {
        icon: <HiLocationMarker />,
        text: 'P.O. Box 647 | Battle Creek, MI 49016',
      },
    ],
  },

  {
    title: 'PIP Qualification Question and Submissions for Coverage',
    items: [
      {
        icon: <IoCallSharp />,
        text: '+1 (248) 541-2800',
        link: 'number',
      },
      {
        icon: <MdEmail />,
        text: 'customerservice@usaunderwriters.com',
        link: 'email',
      },
    ],
  },
];
