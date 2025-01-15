import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { BlogHero } from '../components/blog/BlogHero';
import { BlogCategories } from '../components/blog/BlogCategories';
import { FeaturedPosts } from '../components/blog/FeaturedPosts';
import { BlogGrid } from '../components/blog/BlogGrid';
import { NewsletterSignup } from '../components/blog/NewsletterSignup';

export function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <BlogHero />
        <BlogCategories />
        <FeaturedPosts />
        <BlogGrid />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
}

export default BlogPage;