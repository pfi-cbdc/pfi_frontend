import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-slate-400 py-4 pt-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-slate-400">Contact</h3>
            {/*<p>F 303, Kruthi Apartments,</p> */}
            <p className="text-slate-300">Altura, Chandigarh</p>
            <p className="text-slate-300">India, 140603</p>
            <p className="text-slate-300"><a href="mailto:pfilending@gmail.com" className="hover:text-yellow-500">pfilending@gmail.com</a></p>
            <p className="text-slate-300"><a href="tel:+91 79867 85651" className="hover:text-yellow-500">+91 79867 85651</a></p>
            {/* <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full mt-4 hover:bg-yellow-500 transition duration-300">
              Get a Quote
            </button> */}
          </div>

          <div className='mr-12'>
            <h3 className="text-xl font-semibold mb-3 text-yellow-500">Subscribe to our newsletter</h3>
            <form>
              <input type="email" placeholder="Email *" required className="bg-gray-800 text-white px-2 py-2 rounded-full mb-2 w-full" />
              <button type="submit" className="bg-yellow-400 text-gray-900 px-3 py-2 rounded-full hover:bg-yellow-500 transition duration-300 w-full">
                Subscribe
              </button>
            </form>
          </div>

          <div className="hidden lg:block">
            <h3 className="text-xl font-semibold mb-3 text-slate-400">Menu</h3>
            <Link href="/" className="block mb-2 hover:text-yellow-500">Home</Link>
            <Link href="/solutions" className="block mb-2 hover:text-yellow-500">Solutions</Link>
            {/*<Link href="/technology" className="block mb-2 hover:text-yellow-500">Technology</Link>
            <Link href="/about" className="block mb-2 hover:text-yellow-500">About us</Link> */}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-slate-400">Follow us on</h3>
            <Link href="https://www.linkedin.com/in/p-fi-15939532a/" className="block mb-2 hover:text-yellow-500">LinkedIn</Link>
            {/* <Link href="https://www.twitter.com" className="block mb-2 hover:text-yellow-500">Twitter</Link> */}
          </div>
        </div>

        <div className="mt-3 pt-2 border-t border-gray-800 text-white">
          <p className="text-slate-300">&copy;p-fi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
