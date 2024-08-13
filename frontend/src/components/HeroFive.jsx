import QNA from "./subcomponents/QNA";

function HeroFive() {
  return (
    <div className="w-full min-h-screen text-[#E9C0E9] bg-[#780016] flex flex-col items-center">
      <div className="max-w-[1430px]">
        <div className="w-full p-4 font-bold text-center text-[20px] pt-14 sm:text-[60px]">
          Got questions?
        </div>
        <QNA />
      </div>
    </div>
  );
}

export default HeroFive;
