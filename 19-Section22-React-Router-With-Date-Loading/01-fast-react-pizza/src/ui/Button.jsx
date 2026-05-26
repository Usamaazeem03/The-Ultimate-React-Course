import { Link } from "react-router-dom";
export function Button({ children, disabled, to }) {
  const className =
    "sm:px-6 sm:py-4 fount-semibold inline-block rounded-full bg-yellow-400 px-4 py-3 uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}
