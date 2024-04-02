import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const Button = ({ text, className, link, icon }) => {
  return (
    <Link
      href={link}
      className={twMerge('btn flex items-center justify-center gap-2 group/btn', className)}
    >
      {/* TEXT */}
      {text}
      {/* ICON */}
      {icon && <span className="group-hover/btn:ml-1 transition-all">{icon}</span>}
    </Link>
  );
};

export default Button;
