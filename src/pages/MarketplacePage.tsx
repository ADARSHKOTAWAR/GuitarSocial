import React, { useState } from 'react';
import { IndianRupee, Search, Filter } from 'lucide-react';

const ALL_GUITARS = [
  {
    id: '1',
    title: 'Fender Stratocaster American Professional',
    price: 1499.99,
    image: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&q=80&w=400',
    condition: 'mint',
    location: 'New York, NY',
    seller: {
      name: 'Guitar Center',
      rating: 4.8
    }
  },
  {
    id: '2',
    title: 'Gibson Les Paul Standard',
    price: 2199.99,
    image: 'https://images.unsplash.com/photo-1619558041249-0523903712e1?auto=format&fit=crop&q=80&w=400',
    condition: 'used',
    location: 'Los Angeles, CA',
    seller: {
      name: 'John\'s Guitars',
      rating: 4.9
    }
  },
  {
    id: '3',
    title: 'Martin D-28',
    price: 2899.99,
    image: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?auto=format&fit=crop&q=80&w=400',
    condition: 'new',
    location: 'Nashville, TN',
    seller: {
      name: 'Music City Guitars',
      rating: 5.0
    }
  },
  {
    id: '4',
    title: 'Taylor 814ce',
    price: 3299.99,
    image: 'https://images.unsplash.com/photo-1605020420620-20c943cc4669?auto=format&fit=crop&q=80&w=400',
    condition: 'mint',
    location: 'Austin, TX',
    seller: {
      name: 'Austin Guitar House',
      rating: 4.7
    }
  },
  {
    id: '5',
    title: 'PRS Custom 24',
    price: 3599.99,
    image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&q=80&w=400',
    condition: 'new',
    location: 'Seattle, WA',
    seller: {
      name: 'Premium Guitars',
      rating: 4.9
    }
  },
  {
    id: '6',
    title: 'Ibanez RG550',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&q=80&w=400',
    condition: 'used',
    location: 'Chicago, IL',
    seller: {
      name: 'Windy City Music',
      rating: 4.6
    }
  }
];

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        <h1 className="text-3xl font-bold text-gray-900">Guitar Marketplace</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search guitars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Sell Guitar
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {ALL_GUITARS.map(guitar => (
          <div key={guitar.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={guitar.image} alt={guitar.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{guitar.title}</h3>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center text-indigo-600">
                  <IndianRupee className="h-5 w-5" />
                  <span className="font-bold">{guitar.price.toLocaleString()}</span>
                </div>
                <span className="px-2 py-1 text-sm rounded-full bg-gray-100 text-gray-800">
                  {guitar.condition}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                <p>{guitar.location}</p>
                <p className="flex items-center mt-1">
                  Seller: {guitar.seller.name} • ⭐ {guitar.seller.rating}
                </p>
              </div>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
                Contact Seller
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}