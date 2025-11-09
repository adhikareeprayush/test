import Link from "next/link";

const Button = () => {
  return (
    <Link
      href="/contact"
      className="px-4 md:px-5 py-2 md:py-1 bg-primary text-white text-sm md:text-base cursor-pointer font-medium rounded hover:bg-opacity-90 transition-all whitespace-nowrap inline-block"
    >
      Contact
    </Link>
  );
};

export default Button;
