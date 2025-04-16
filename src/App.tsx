import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import FeaturedPosts from './components/FeaturedPosts';
import MarketplacePreview from './components/MarketplacePreview';
import BlogsPage from './pages/BlogsPage';
import MarketplacePage from './pages/MarketplacePage';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-indigo-700 h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=2000"
            alt="Guitar background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Connect with Guitar Enthusiasts
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Share your music journey, learn from others, and find your perfect instrument in our community of passionate guitarists.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="/blogs" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeaturedPosts />
      <MarketplacePreview />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-16"> {/* Add padding to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;