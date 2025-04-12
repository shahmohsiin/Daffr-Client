import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/storeContext';

const Displayproduct = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const galleryImages = [product?.image, product?.image, product?.image, product?.image];

  return (
    <div className="bg-white px-4 sm:px-8 lg:px-20 py-6">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* Left: Image Gallery */}
        <div className="flex flex-col lg:flex-row gap-5 w-full lg:w-1/2">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-3 justify-center order-2 lg:order-none">
            {galleryImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="thumb"
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer border ${
                  selectedImage === img ? 'border-black' : 'border-gray-200'
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="bg-[#f7f7f7] rounded-3xl p-4 shadow-sm flex justify-center items-center w-full h-[55vh] sm:h-[65vh] lg:h-[75vh]">
            <img
              src={selectedImage}
              alt={product?.name}
              className="max-w-full max-h-full object-contain rounded-xl"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
          {/* Title + Tagline */}
          <div className="mt-1">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {product?.name}
            </h1>
            <p className="text-sm text-gray-500 mt-1 tracking-wide">
              Trending product · Popular in India now
            </p>
          </div>

          {/* Price */}
          <div className="space-y-0.5">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-semibold text-gray-900">₹{product?.new_price}</span>
              <span className="text-lg text-gray-400 line-through">₹{product?.old_price}</span>
            </div>
            <p className="text-sm text-gray-400">Inclusive of all taxes</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.567-.955L10 0l2.945 5.955 6.567.955-4.756 4.635 1.122 6.545z" />
              </svg>
            ))}
            <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.567-.955L10 0l2.945 5.955 6.567.955-4.756 4.635 1.122 6.545z" />
            </svg>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-base font-semibold text-gray-800">Product Description</h2>
            <p className={`text-gray-600 text-sm mt-2 leading-relaxed ${showFullDesc ? '' : 'line-clamp-4'}`}>
              {product?.description}
            </p>
            <button
              onClick={() => setShowFullDesc(!showFullDesc)}
              className="mt-1 text-sm font-medium text-blue-600 hover:underline"
            >
              {showFullDesc ? 'Read Less' : 'Read More'}
            </button>
          </div>

          {/* Add to Cart */}
          <div>
            <button
              onClick={() => addToCart(product?.id)}
              className="w-full bg-black text-white py-3 rounded-lg text-base font-medium hover:bg-gray-900 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Displayproduct;
