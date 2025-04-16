import React from 'react';
import { IndianRupee } from 'lucide-react';

const FEATURED_GUITARS = [
  {
    id: '1',
    title: 'Fender Stratocaster American Professional',
    price: 1499.99,
    image: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&q=80&w=400',
    condition: 'mint'
  },
  {
    id: '2',
    title: 'Gibson Les Paul Standard',
    price: 2199.99,
    image: 'https://images.unsplash.com/photo-1619558041249-0523903712e1?auto=format&fit=crop&q=80&w=400',
    condition: 'used'
  },
  {
    id: '3',
    title: 'Martin D-28',
    price: 2899.99,
    image: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?auto=format&fit=crop&q=80&w=400',
    condition: 'new'
  }
];

export default function MarketplacePreview() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Featured Guitars</h2>
        <a href="#" className="text-indigo-600 hover:text-indigo-800">View All</a>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {FEATURED_GUITARS.map(guitar => (
          <div key={guitar.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={guitar.image} alt={guitar.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{guitar.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-indigo-600">
                  <IndianRupee className="h-5 w-5" />
                  <span className="font-bold">{guitar.price.toLocaleString()}</span>
                </div>
                <span className="px-2 py-1 text-sm rounded-full bg-gray-100 text-gray-800">
                  {guitar.condition}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}