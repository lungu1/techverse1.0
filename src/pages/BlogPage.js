import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';

const posts = [
  {
    id: 1,
    title: "5 Signs Your Business Needs a Website Redesign",
    date: "May 6, 2025",
    summary: "Your website is your first impression. Here are the signs it might be time for a fresh look...",
  },
  {
    id: 2,
    title: "Why Mobile Optimization Matters in 2025",
    date: "May 1, 2025",
    summary: "Mobile users dominate the web. Here's how to make your site responsive and fast...",
  },
];

function BlogPage() {
  return (
    <div className="blog-page">
      <h2>Our Blog</h2>
      <div className="blog-list">
        {posts.map((post) => (
          <div key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p>{post.summary}</p>
           <Link to={`/blog/${post.id}`} className="read-more">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
