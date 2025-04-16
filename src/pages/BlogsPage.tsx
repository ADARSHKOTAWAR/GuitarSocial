import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const ALL_POSTS = [
  {
    id: '1',
    title: 'Mastering the F Chord: A Beginner\'s Guide',
    excerpt: 'Learn the techniques to nail the F chord and take your playing to the next level. We\'ll cover finger positioning, common mistakes, and practice exercises.',
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100'
    },
    image: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&q=80&w=800',
    likes: 245,
    comments: 32,
    date: '2024-03-15'
  },
  {
    id: '2',
    title: 'New Song Breakdown: "Sweet Child O\' Mine"',
    excerpt: 'Complete chord progression and analysis of this classic Guns N\' Roses track. Learn the iconic intro riff and solo sections step by step.',
    author: {
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
    },
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800',
    likes: 189,
    comments: 24,
    date: '2024-03-14'
  },
  {
    id: '3',
    title: 'Essential Guitar Maintenance Tips',
    excerpt: 'Keep your instrument in top condition with these maintenance tips. From string changing to cleaning and storage advice.',
    author: {
      name: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100'
    },
    image: 'https://images.unsplash.com/photo-1550291652-6ea9114a47b1?auto=format&fit=crop&q=80&w=800',
    likes: 156,
    comments: 18,
    date: '2024-03-13'
  },
  {
    id: '4',
    title: 'Blues Guitar Techniques for Beginners',
    excerpt: 'Dive into the world of blues guitar. Learn essential scales, chord progressions, and techniques to start playing blues.',
    author: {
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100'
    },
    image: 'https://images.unsplash.com/photo-1621626618017-c7c06a7cd6e0?auto=format&fit=crop&q=80&w=800',
    likes: 210,
    comments: 28,
    date: '2024-03-12'
  }
];

export default function BlogsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Guitar Blog Posts</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Create Post
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {ALL_POSTS.map(post => (
          <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src={post.author.avatar} alt={post.author.name} className="h-10 w-10 rounded-full" />
                  <div className="ml-2">
                    <span className="text-sm font-medium text-gray-900">{post.author.name}</span>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
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