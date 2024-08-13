import p1 from "../../assets/images/cards/p1.png";
import p2 from "../../assets/images/cards/p2.png";
import p3 from "../../assets/images/cards/p3.png";

function Cards() {
  return (
    <div className="flex flex-row justify-center w-full px-4 mt-10">
      <div className="grid w-full grid-flow-row gap-3 mx-0 md:mx-32 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <div className="bg-[#E9C0E9] flex flex-col items-center rounded-3xl h-full">
            <div className="flex gap-4 my-6 md:my-12">
              <img
                src={p1}
                className="max-h-[400px] md:max-h-[600px] rounded-2xl"
                alt=""
              />
            </div>
            <div className="text-[#502274] mb-4 md:mb-6 underline text-lg md:text-2xl font-bold max-w-full mx-4 md:mx-6">
              Share your content in limitless ways on your Linktree.
            </div>
          </div>
          <div className="bg-[#D2E823] flex flex-col items-center rounded-3xl h-full">
            <div className="flex gap-4 my-6 md:my-12">
              <img
                src={p2}
                className="max-h-[200px] md:max-h-[250px] rounded-2xl"
                alt=""
              />
            </div>
            <div className="text-[#502274] mb-4 md:mb-6 underline text-lg md:text-2xl font-bold max-w-full mx-4 md:mx-6">
              Sell products and collect payments. It’s monetization made simple.
            </div>
          </div>
        </div>
        <div className="bg-[#780016] flex flex-col items-center rounded-3xl h-full">
          <div className="my-10 md:my-20">
            <img src={p3} className="max-h-[400px] md:max-h-[600px]" alt="" />
          </div>
          <div className="text-[#E9C0E9] underline text-xl md:text-2xl lg:text-3xl font-bold text-center mx-4 md:mx-12 mb-6 md:mb-12 pr-4 md:pr-8">
            Grow, own and engage your audience by unifying them in one place.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
