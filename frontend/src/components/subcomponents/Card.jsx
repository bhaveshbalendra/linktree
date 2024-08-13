// eslint-disable-next-line react/prop-types

function Card({ paras, p }) {
  return (
    <div className="flex justify-center">
      <div className="bg-[#FFFFFF] flex flex-col items-center rounded-3xl w-[330px] h-full lg:h-[550px]">
        <div className="flex items-center justify-center flex-grow my-10">
          <img
            src={p}
            className="rounded-2xl max-h-[200px] max-w-full object-cover"
            alt=""
          />
        </div>
        <div className="w-full px-4 mb-10 overflow-hidden text-lg font-semibold text-center whitespace-normal sm:text-xl md:text-2xl lg:text-3xl text-ellipsis">
          {paras}
        </div>
      </div>
    </div>
  );
}

export default Card;
