import {
  ShieldCheck,
  Rocket,
  Stars,
  IndianRupee,
  Hotel,
  CodeXml,
  FlaskConical,
} from "lucide-react";

const KeyBenefits = () => {
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
    <div className="px-6 md:px-16 lg:px-16 xl:px-18 2xl:px-55 flex flex-col justify-center items-center mt-10">
      <h2 className="text-5xl font-semibold tracking-wider">
        Key Benefits of Cohorts
      </h2>
      <p className="w-[30%] text-center text-gray-300 mt-5 mb-10">
        Cohorts are best way to learn because you finish the course in a timely
        manner
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 cursor-pointer">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg border hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div className="mb-4 animate-fade-in">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-300 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-400">{feature.text}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2 border-1 p-6 rounded border-green-600">
        <div className="w-[50%] bg-gray-700 h-[280px] rounded-lg">Face</div>
        <div className="w-[50%] flex  flex-col items-center justify-center text-center">
          <h2 className="text-[30px] font-bold tracking-wide text-orange-400 mb-4">Alumni Network and job listings</h2>
          <p className="w-[90%] text-gray-200 tracking-wide">
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
