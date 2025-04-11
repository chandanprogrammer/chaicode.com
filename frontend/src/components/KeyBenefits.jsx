import {
  ShieldCheck,
  Rocket,
  Stars,
  IndianRupee,
  Hotel,
  CodeXml,
  FlaskConical,
} from "lucide-react";
import HeadingText from "./design/HeadingText";

const KeyBenefits = () => {
  const imageNetworkUrl = [
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    "",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    "",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    "",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    "",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    "",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    "",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    "",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    "",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    "",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    "",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  ];
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
      title: "Taught by Professionals",
      text: "Our cohorts arebeing taught by top industry experts and educators",
    },
    {
      icon: <IndianRupee className="w-8 h-8 text-green-600" />,
      title: "Bounties",
      text: "Ear rewards, from Cash to MacBook. Keeps you motivated to work hard",
    },
    {
      icon: <Hotel className="w-8 h-8 text-yellow-500" />,
      title: "Coding hostels",
      text: "There is nothing like late night discussion with fellow learners and solving bugs",
    },
    {
      icon: <CodeXml className="w-8 h-8 text-blue-600" />,
      title: "Peer Code Reviews",
      text: "With Our internal tools like Masterji, every code assignment gets feedback to improve your code",
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-orange-600" />,
      title: "Leet Lab",
      text: "Our In-house built LeetCode style platform that helps you to understand foundation of programming language",
    },
    {
      icon: <Stars className="w-8 h-8 text-cyan-500" />,
      title: "Revision classes",
      text: "We have so many peer classes by fellow learners that you get so manychances to learn that topic",
    },
  ];

  return (
    <div className="px-6 md:px-16 lg:px-16 xl:px-20 2xl:px-55 flex flex-col justify-center items-center mt-10">
      <HeadingText
        heading="Key Benefits of Cohorts"
        text="Cohorts are best way to learn because you finish the course in a timely
        manner"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-6 cursor-pointer ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-300/40 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out bg-radial-[at_20%_65%] from-orange-500/20 to-[#101426]/20 to-90% hover:bg-radial-[at_20%_65%] hover:from-[#101426]/20 hover:via-white-400/14 hover:to-orange-500/20 hover:to-80%"
          >
            <div className="mb-4 animate-fade-in">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-400">{feature.text}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-2 mt-8 md:mt-0 md:p-6 rounded">
        <div className="lg:w-[50%] bg-gray-700 h-[280px] rounded-lg p-6 grid grid-cols-7 gap-2">
          {imageNetworkUrl.map((link, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full">
                <img src={link} alt="" className=" w-[100%] rounded-full " />
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-[50%] flex  flex-col items-center justify-center text-center">
          <h2 className="text-[25px] lg:text-[30px] font-bold tracking-wide text-orange-400/60 mb-4">
            Alumni Network and job listings
          </h2>
          <p className="w-[90%] text-gray-300/60 tracking-wide">
            The alumni Network that you always wished for in your college. We
            have a dedicated platform where students get to know each other, do
            projects, make agencies and join Hackathons. Our HR team also post
            regular job updates that you can apply directly whenever you are
            ready
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;
