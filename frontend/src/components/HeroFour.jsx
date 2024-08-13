import friend from "../assets/images/friend.png";
import p4 from "../assets/images/cards/p4.png";
import p5 from "../assets/images/cards/p5.png";
import p6 from "../assets/images/cards/p6.png";

import Cards from "./subcomponents/Cards";
import Card from "./subcomponents/Card";
import Tag from "./subcomponents/Tag";
import Last from "./subcomponents/Last";
import Carousel from "./subcomponents/Carousel";
import styles from "./HeroFour.module.css";

function HeroFour() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#F3F3F1]">
      <div className="flex flex-col lg:flex-row items-center mx-[20px] sm:mx-[50px] max-w-[1550px] mt-2 lg:mt-32 mb-20 lg:mb-[140px]">
        <div className="flex flex-col items-center flex-1 mx-5 sm:mx-10 lg:mt-0">
          <img src={friend} className="w-auot max-h-[600px]" alt="friend" />
        </div>
        <div className="flex flex-col flex-1 gap-10 text-center lg:mr-10 lg:text-left">
          <div>
            <h1 className="text-[40px] sm:text-[60px] lg:text-[60px] font-extrabold leading-none pb-4">
              Analyze your audience and keep your followers engaged
            </h1>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] ">
              Track your engagement over time, monitor revenue, and learn what’s
              converting your audience. Make informed updates on the fly to keep
              them coming back.
            </p>
          </div>
          <div className="flex justify-center gap-3 lg:justify-start">
            <span className="bg-[#DDB6DD] p-4 sm:p-5 px-5 sm:px-7 rounded-[50px]">
              Get started for free
            </span>
          </div>
        </div>
      </div>

      <div
        className={`${styles.outerHeadings}  flex flex-col items-center text-center text-[30px] sm:text-[40px] lg:text-[60px] font-extrabold leading-none mb-20`}
      >
        <h1>
          The only link in bio trusted by 50M+
          <div
            className={`${styles.innerHeadings} hidden lg:block text-[#2665D6]`}
          >
            <span>
              brands <br />
              models <br />
              wellness leaders <br />
              writer <br />
            </span>
          </div>
        </h1>
        <h1 className="lg:hidden text-[#2665D6]">wellness leaders</h1>
      </div>

      <Carousel />

      <Cards />
      <div className="flex flex-col items-center px-4 my-8 sm:my-12 lg:my-16">
        <div className="text-3xl font-extrabold leading-tight text-center sm:text-4xl lg:text-5xl">
          The fast, friendly, and powerful link in bio tool.
        </div>
        <span className="bg-[#DDB6DD] p-3 sm:p-4 lg:p-5 px-4 sm:px-6 lg:px-7 rounded-full mt-4 sm:mt-5">
          Explore all plans
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-[20px] lg:mx-0">
        <Card
          p={p5}
          paras={
            "Seamlessly connect your Linktree with the tools you already use."
          }
        />
        <Card
          p={p4}
          paras={
            "Customize your Linktree to match your brand. Make it feel like you."
          }
        />
        <Card
          p={p6}
          paras={
            "Manage, update and schedule content with our quick, easy editor."
          }
        />
      </div>

      <div className="flex flex-col items-center my-16">
        <div className="font-extrabold text-[40px] sm:text-[50px] lg:text-[70px] text-center leading-tight">
          As featured in...
        </div>
        <div className="flex flex-wrap justify-center gap-3 my-10">
          <Tag text={"TC"} />
          <Tag text={"INSIDER"} />
          <Tag text={"Mashable"} />
          <Tag text={"FORTUNE"} />
          <Tag text={"Forbes"} />
        </div>
      </div>

      <Last />
    </div>
  );
}

export default HeroFour;
