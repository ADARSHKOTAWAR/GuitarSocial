export interface Post {
  id: string;
  title: string;
  content: string;
  author: User;
  createdAt: string;
  likes: number;
  type: 'blog' | 'chord-progression';
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  bio?: string;
}

export interface GuitarListing {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  seller: User;
  condition: 'new' | 'used' | 'mint';
}