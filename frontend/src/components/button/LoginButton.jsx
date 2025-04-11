import { Link } from "react-router";

const LoginButton = ({ text, link, target }) => {
  return (
    <div>
      <Link to={link} target={target}>
        <button
          className="group relative rounded-full p-px text-zinc-200/90 duration-300 hover:text-zinc-100 hover:shadow-glow hover:shadow-[0_0_11px_2px_#22d3ee29] cursor-pointer z-10 tracking-wider"
          aria-label={`${text} button`}
        >
          <div className="relative text-lg rounded-full bg-zinc-950 px-8 py-1.5 ring-1 ring-white/10">
            {text}
          </div>
          <span className="absolute left-[1.125rem] -bottom-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 duration-500 group-hover:opacity-40"></span>
        </button>
      </Link>
    </div>
  );
};

export default LoginButton;
