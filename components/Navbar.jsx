import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black py-4 px-12 flex justify-between items-center fixed top-0 left-0 right-0 z-50">

      <div className="flex items-center">
        <Link href="/" className="text-white text-3xl font-bold">
          <span className="text-gray-500">p<span className="text-gray-500">-</span></span>fy
        </Link>
      </div>

      <div className="flex items-center space-x-8">
        <Link href="/" className="text-white hover:text-yellow-400 px-4">Home</Link>
        {/* <Link href="/solutions" className="text-white hover:text-lime-400 px-4">Solutions</Link> */}
        <Link href="/about" className="text-white hover:text-yellow-400 px-4">About Us</Link>
        <Link href="/contact" className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 ml-4">
          Book a Demo
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
