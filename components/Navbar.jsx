import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-30 py-3 px-8 flex justify-between items-center fixed top-4 left-1/4 right-1/4 z-50 rounded-lg border border-gray-900">

      <div className="flex items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          <span className="text-gray-500">p<span className="text-gray-500">-</span></span>fy
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <Link href="/" className="text-white hover:text-yellow-400 px-3">Home</Link>
         <Link href="/solutions" className="text-white hover:text-yellow-400 px-3">Solutions</Link> 
        <Link href="/about" className="text-white hover:text-yellow-400 px-3">About Us</Link>
        <Link href="/contact" className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-full hover:bg-yellow-500 ml-2">
          Book a Demo
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
