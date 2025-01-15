import React from 'react';
import { ArrowRight } from 'lucide-react';

const featuredPosts = [
  {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
    category: 'Future Content Marketing',
    title: '10 Content Marketing Trends That Will Define 2024',
    excerpt: 'Discover the emerging trends that will shape the future of content marketing and how to stay ahead of the curve.',
    author: 'Emma Louise',
    date: 'March 15, 2024',
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    category: 'Industry Insights',
    title: 'The Evolution of Virtual Business Management',
    excerpt: 'How remote work and virtual assistance are transforming the way businesses operate in the digital age.',
    author: 'Emma Louise',
    date: 'March 12, 2024',
  },
];

export function FeaturedPosts() {
  return (
    <section className="py-20 bg-brand-ice">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-brand-teal mb-12">
          Featured Articles
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl overflow-hidden shadow-sm group">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="text-brand-sage text-sm font-medium mb-4">
                  {post.category}
                </div>
                <h3 className="text-2xl font-medium text-brand-teal mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">{post.author}</span>
                    <span className="mx-2">·</span>
                    <span>{post.date}</span>
                  </div>
                  <button className="text-brand-teal flex items-center group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}