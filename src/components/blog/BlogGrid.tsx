import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80',
    category: 'Client Success Stories',
    title: 'How TechStart Doubled Productivity with Virtual Support',
    excerpt: 'A detailed case study on implementing virtual assistance solutions.',
    date: 'March 10, 2024',
  },
  {
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80',
    category: 'Business Tips',
    title: '7 Essential Tools for Remote Team Management',
    excerpt: 'The best tools and practices for managing distributed teams effectively.',
    date: 'March 8, 2024',
  },
  {
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80',
    category: 'Industry Insights',
    title: 'The Future of Event Management in 2024',
    excerpt: 'Emerging trends and technologies shaping the events industry.',
    date: 'March 5, 2024',
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    category: 'Future Content Marketing',
    title: 'AI-Powered Content Creation Strategies',
    excerpt: 'Leveraging artificial intelligence for better content marketing.',
    date: 'March 3, 2024',
  },
  {
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80',
    category: 'Business Tips',
    title: 'Scaling Your Business with Virtual Teams',
    excerpt: 'A comprehensive guide to building and managing virtual teams.',
    date: 'March 1, 2024',
  },
  {
    image: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?auto=format&fit=crop&q=80',
    category: 'Client Success Stories',
    title: 'Event Success: Global Tech Conference 2024',
    excerpt: 'Behind the scenes of planning and executing a major tech conference.',
    date: 'February 28, 2024',
  },
];

export function BlogGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="group">
              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-brand-sage text-sm font-medium mb-3">
                {post.category}
              </div>
              <h3 className="text-xl font-medium text-brand-teal mb-3">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{post.date}</span>
                <button className="text-brand-teal flex items-center group/btn">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition" />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-brand-teal text-white px-8 py-4 rounded-full hover:bg-brand-teal-light transition">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
}