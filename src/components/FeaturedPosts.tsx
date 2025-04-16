import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const FEATURED_POSTS = [
  {
    id: '1',
    title: 'Mastering the F Chord: A Beginner\'s Guide',
    excerpt: 'Learn the techniques to nail the F chord and take your playing to the next level...',
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100'
    },
    image: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&q=80&w=800',
    likes: 245,
    comments: 32
  },
  {
    id: '2',
    title: 'New Song Breakdown: "Sweet Child O\' Mine"',
    excerpt: 'Complete chord progression and analysis of this classic Guns N\' Roses track...',
    author: {
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
    },
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800',
    likes: 189,
    comments: 24
  }
];

export default function FeaturedPosts() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Posts</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {FEATURED_POSTS.map(post => (
          <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img src={post.author.avatar} alt={post.author.name} className="h-10 w-10 rounded-full" />
                <span className="ml-2 text-sm text-gray-600">{post.author.name}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center space-x-4 text-gray-500">
                <button className="flex items-center space-x-1 hover:text-indigo-600">
                  <Heart className="h-5 w-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-indigo-600">
                  <MessageCircle className="h-5 w-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-indigo-600">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}