import Image from 'next/image';

const Service = ({ item }) => {
  return (
    <div className="xl:p-12 xl:pb-[70px] sm:p-8 sm:pb-20 p-5 pb-10 border border-gray-200 rounded-[17px] flex flex-col md:h-[320px] h-[260px] w-full shadow-sm">
      {/* IMAGE */}
      <span className="w-[62px] min-h-[62px] rounded-full bg-gray-200 text-3xl text-primary grid place-items-center">
        <Image src={item.icon} alt="Money Icon" />
      </span>

      {/* TITLE */}
      <h5 className="text-[20px] font-semibold mt-[18px] mb-[10px]">{item.title}</h5>

      {/* DESCRIPTION */}
      <p className="text-gray-500 font-medium">{item.description}</p>
    </div>
  );
};

export default Service;
