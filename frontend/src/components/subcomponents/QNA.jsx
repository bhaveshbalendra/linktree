/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa"; 

const questions = [
  {
    question: "Why do I need a link in bio tool?",
    answer: `Right now, every time you’ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It’s time-consuming and complicated – making it so much harder to keep everything up to date.

A link in bio tool means you never have to compromise, or remove one link from your bio so you can add another. You can keep everything you want to share online in one link. When you’ve got a change, you only ever have to make it once.`,
  },
  {
    question: "Is Linktree the original link in bio tool?",
    answer: `The short answer? Yes!

Back in 2016, we created Linktree as an easy way to link out to all socials and unify digital ecosystems, pioneering the link-in-bio category. Linktree remains the leading, biggest and most popular link-in-bio solution – but that’s just the beginning.  You can use your Linktree URL or QR code anywhere your audience is, including on your business cards, in your email signature, on paper-based posters and brochures, and even on your resumé. If you don’t have a website, that’s fine. If you have a Linktree, you don’t need one!`,
  },
  {
    question: "Can you get paid and sell things from a Linktree?",
    answer: `Can you get paid and sell things from a Linktree?
Yes, you can! We offer plenty of ways to sell products and monetize your audience. You can collect tips, request payments for services, collect revenue from affiliate links, and sell your products right in your Linktree.

A lot of Linktree creators see incredible results with online sales on Linktree, because it removes the extra steps involved in a purchase. With Paypal or Square right in your Linktree, your customers won’t even need to leave your social media to go to another site and pay!

“We love how Linktree has helped us manage our business by having all social media and ways to pay in one location. The QR code has made it easy for customers to access it all!” – Tiffany`,
  },
  {
    question: "Is Linktree safe to use on all of my social media profiles?",
    answer: `Linktree is trusted by all social platforms, and is even used on many of Facebook, Instagram and TikTok’s own social media accounts! Because Linktree is the original and most popular link-in-bio tool, the linktr.ee URL is a trusted, identifiable and familiar link that audiences feel comfy and safe clicking on.`,
  },
  {
    question: "What makes Linktree better than the other link in bio options?",
    answer: `We have our own opinions here, of course, but the stories of the people who use Linktree matter more. Let’s hear what they have to say:

“Four months into creating, someone messaged me like: You need a Linktree. I can’t remember what I was using at the time, but it was one of those ones that were supposed to be easy. Once I got Linktree set up, I was like, oh my god – why did I spend $100 on a website? I don’t need all of that! Now, I can see the monetization of my following becoming a full-time thing.” – David Coleman

”It’s so much easier to set up and have all of your links in one place in a well designed format.” – Catie T

”Websites are cool (I have one) but Linktrees just make it so much easier.” – Tan Nguyen

“I love their analytics. Other link-in-bio companies don’t provide extensive data on what’s going on.” – Riley Lemon

Linktree invented the bio link tool in 2016, and it continues to be the world’s most popular bio link to this day – with 50M+ people using it as their trusted place to share, sell and grow online. Join them on Linktree today and see for yourself!`,
  },
  {
    question: "How can I drive more traffic to and through my Linktree?",
    answer: `Sharing your Linktree on every social platform you have makes it easy for your most important content to be seen and engaged with by all of your followers. You can even use QR codes to generate online traffic in offline places, and drive people to your links.

Once visitors arrive on your Linktree, easy-to-understand analytics help you quickly and easily discover where they’re coming from, and what they’re clicking on. You can immediately see what’s working and what’s not and improve your Linktree on the fly with different link placement, prioritized links, subheadings, animation and more to make sure your traffic is landing exactly where you want it!`,
  },
  {
    question: "How many links should I have on my Linktree?",
    answer: `This depends on two things. If your priority is click-throughs and conversion, we recommend having 3-7 links on your Linktree at once (based on our most successful creators). Including too many options for your visitors slows down their course of action.

That said: for certain creators whose priority is display, education and showcasing (e.g. a record label with a library of new releases to promote, or a management company looking to showcase their full roster of clients), including more than seven links fulfils their purpose perfectly.

You can use features on Linktree to add subheadings, sections, animation and other prioritisation methods to your links – so no matter how many things you’ve got to share, you can drive your visitors to what’s most important, first.`,
  },
  {
    question: "Do I need a website to use Linktree?",
    answer: `No, you don’t! Linktree can act as your very own mini-website to share, sell and grow without any of the time and effort it takes to build and maintain a regular website. You can create a design that fully reflects your personality and brand in seconds, with no knowledge, skills or experience needed. If you already have a website, that’s great: you can add it to your Linktree.

“I hardly touch my website any more. I just send people to my Linktree! It’s a good-looking, fresh interface… so much more dynamic. I can take a few minutes, update my links and put my phone away rather than spending 45 struggling on WordPress.” – @ashleyhopeperez`,
  },
  {
    question: "Where can I download the app?",
    answer: `Find it in the App Store, and in the Google Play store!`,
  },
];

function QNA() {
  return (
    <ul className="flex flex-col items-center gap-4 p-4">
      {questions.map((question, index) => (
        <Lists key={index} q={question} />
      ))}
    </ul>
  );
}

export default QNA;

function Lists({ q }) {
  const [toggle, setToggle] = useState(false);
  const contentRef = useRef(null);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = toggle
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [toggle]);

  return (
    <li
      onClick={handleToggle}
      className="bg-[#51000F] rounded-3xl p-6 w-full max-w-[1200px] cursor-pointer overflow-hidden transition-all duration-500"
    >
      <div className="flex items-center justify-between text-lg sm:text-xl md:text-2xl">
        <h1 className="text-sm sm:text-base md:text-lg">{q.question}</h1>
        {toggle ? (
          <FaChevronUp size={20} /> 
        ) : (
          <FaChevronDown size={20} /> 
        )}
      </div>
      <div
        ref={contentRef}
        className="mt-4 overflow-hidden text-xs whitespace-normal duration-500 ease-in-out transition-max-height sm:text-sm md:text-base"
      >
        {q.answer}
      </div>
    </li>
  );
}
