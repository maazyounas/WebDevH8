import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent tracking-tighter">
              Maxi.
            </Link>
            <p className="mt-4 text-gray-500 max-w-xs">
              Elevating your style with curated premium collections. Experience the pinnacle of fashion and comfort.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/product/men" className="text-gray-500 hover:text-indigo-600 transition-colors">Men's Collection</Link></li>
              <li><Link to="/product/women" className="text-gray-500 hover:text-indigo-600 transition-colors">Women's Collection</Link></li>
              <li><Link to="/product" className="text-gray-500 hover:text-indigo-600 transition-colors">All Products</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-gray-500 hover:text-indigo-600 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-indigo-600 transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Maxi Fashion Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Social icons placeholder */}
            <span className="text-gray-400 hover:text-indigo-600 cursor-pointer transition-colors">Instagram</span>
            <span className="text-gray-400 hover:text-indigo-600 cursor-pointer transition-colors">Twitter</span>
            <span className="text-gray-400 hover:text-indigo-600 cursor-pointer transition-colors">Facebook</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
