import React from 'react';
import { Link } from 'react-router-dom';

const RelatedProduct = ({ product }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-12 py-8 font-sans mx-auto max-w-screen-2xl">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6 sm:mb-10">
        Related Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {product.slice(1, 10).map((item, i) => (
          <Link to={`/product/${item.id}`} key={i}>
            <div className="bg-white rounded-xl overflow-hidden flex flex-col transition-all hover:scale-[1.02] hover:shadow-md cursor-pointer border border-gray-200">
              
              {/* Image */}
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="bg-gray-50 p-4 flex-1 flex flex-col">
                <div className="flex-1">
                  <h5 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">
                    {item.name}
                  </h5>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-1">
                    Popular in India Now
                  </p>
                </div>

                {/* Price & Wishlist */}
                <div className="mt-4 flex items-center justify-between">
                  <h6 className="text-sm sm:text-base font-bold text-gray-800">
                    ₹{item.new_price}
                  </h6>
                  <div
                    className="bg-gray-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
                    title="Wishlist"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-gray-800 w-5 h-5"
                      viewBox="0 0 512 512"
                    >
                      <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
