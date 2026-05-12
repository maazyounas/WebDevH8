import { Link, Outlet, useLocation } from 'react-router-dom'

const Product = () => {
  const location = useLocation();
  const isBaseProductPath = location.pathname === '/product' || location.pathname === '/product/';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Our Collections
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Discover the latest trends in men's and women's fashion.
        </p>
      </div>

      <div className="flex justify-center space-x-8 mb-12">
        <Link 
          to="/product/men" 
          className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
            location.pathname.includes('/men') 
              ? 'bg-indigo-600 text-white shadow-lg scale-105' 
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          Men's Collection
        </Link>
        <Link 
          to="/product/women" 
          className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
            location.pathname.includes('/women') 
              ? 'bg-indigo-600 text-white shadow-lg scale-105' 
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          Women's Collection
        </Link>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden min-h-[400px] border border-gray-100">
        {isBaseProductPath ? (
          <div className="flex flex-col items-center justify-center h-full py-20 px-4 text-center">
            <div className="bg-indigo-100 p-6 rounded-full mb-6">
              <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to explore?</h2>
            <p className="text-gray-500 max-w-md">
              Please select a category above to view our exclusive range of products curated just for you.
            </p>
          </div>
        ) : (
          <div className="p-8">
            <Outlet />
          </div>
        )}
      </div>
    </div>
  )
}

export default Product
