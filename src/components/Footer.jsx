const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-6 pt-12 pb-6">
        
        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-teal-400">Shop</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-teal-300 transition">Coasters</a></li>
              <li><a href="#" className="hover:text-teal-300 transition">Trays & Dishes</a></li>
              <li><a href="#" className="hover:text-teal-300 transition">Wall Art</a></li>
              <li><a href="#" className="hover:text-teal-300 transition">Custom Orders</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-teal-400">Help</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-teal-300 transition">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-teal-300 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-teal-300 transition">Care Instructions</a></li>
              <li><a href="#" className="hover:text-teal-300 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* <div className="col-span-2">
            <h4 className="text-lg font-bold mb-4 text-teal-400">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">
              Get 10% off your first order and see new collection releases.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address"
                className="p-3 w-full rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-4 rounded-r-lg transition">
                Sign Up
              </button>
            </div>
          </div> */}
        </div>

        {/* Copyright and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Epoxy + Dreams. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a href="#" aria-label="Pinterest" className="text-gray-400 hover:text-red-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.186 2c-4.437 0-8.04 3.603-8.04 8.04 0 2.219.889 4.225 2.33 5.766-.02.164-.094.63-.306 1.488-.13.53.385.643.766.49 1.144-.457 2.016-.763 2.502-.857 1.258.46 2.658.71 4.148.71 4.436 0 8.04-3.604 8.04-8.04C20.226 5.603 16.623 2 12.186 2zm0 14.86c-1.42 0-2.73-.395-3.876-1.077-.48.24-.87.48-1.26.69-.19.1-.38.19-.57.28-.27.12-.51.24-.72.33-.24.1-.47.19-.68.25-.19.05-.38.08-.57.1-.19.01-.38.02-.57.02-.19 0-.38 0-.57 0-.19 0-.38-.01-.57-.02-.19-.01-.38-.04-.57-.08-.19-.04-.38-.09-.57-.14-.19-.05-.38-.1-.57-.16-.19-.06-.38-.13-.57-.2-.19-.07-.38-.15-.57-.24-.19-.08-.38-.17-.57-.27-.19-.1-.38-.2-.57-.31-.19-.1-.38-.2-.57-.31-.19-.11-.38-.23-.57-.35-.19-.12-.38-.24-.57-.37-.19-.13-.38-.26-.57-.4-.19-.13-.38-.27-.57-.42-.19-.15-.38-.3-.57-.46-.19-.16-.38-.32-.57-.5-.19-.17-.38-.35-.57-.53-.19-.19-.38-.37-.57-.57-.19-.2-.38-.4-.57-.61-.19-.21-.38-.43-.57-.65-.19-.22-.38-.46-.57-.69-.19-.24-.38-.49-.57-.75-.19-.26-.38-.53-.57-.81-.19-.28-.38-.57-.57-.88-.19-.3-.38-.63-.57-.98-.19-.35-.38-.72-.57-1.11-.19-.39-.38-.81-.57-1.26-.19-.45-.38-.93-.57-1.45-.19-.52-.38-1.07-.57-1.66-.19-.59-.38-1.23-.57-1.91-.19-.68-.38-1.42-.57-2.22-.19-.8-.38-1.68-.57-2.66-.19-1.47 0-2.89.58-4.08-.19-.11-.38-.23-.57-.36-.19-.13-.38-.27-.57-.41-.19-.14-.38-.29-.57-.45-.19-.16-.38-.32-.57-.48-.19-.17-.38-.35-.57-.53-.19-.19-.38-.38-.57-.58-.19-.2-.38-.41-.57-.62-.19-.21-.38-.44-.57-.66-.19-.23-.38-.47-.57-.71-.19-.25-.38-.5-.57-.76-.19-.26-.38-.54-.57-.82-.19-.29-.38-.59-.57-.91-.19-.32-.38-.65-.57-.99-.19-.34-.38-.7-.57-1.08-.19-.38-.38-.79-.57-1.22-.19-.43-.38-.89-.57-1.38-.19-.49-.38-1.02-.57-1.58-.19-.56-.38-1.17-.57-1.83-.19-.66-.38-1.37-.57-2.14-.19-.77-.38-1.62-.57-2.55-.19-1.42 0-2.79.58-3.95z"></path></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer