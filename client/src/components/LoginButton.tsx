import { Link } from "wouter";

const LoginButton = () => {
  return (
    <Link href="/login">
      <a className="inline-block bg-black text-white py-3 px-12 text-lg font-medium rounded hover:bg-neutral-800 transition duration-300 shadow-md">
        LOGIN
      </a>
    </Link>
  );
};

export default LoginButton;
