import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import './BlogPostPage.css';

function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id.toString() === id);

  if (!post) {
    return <p style={{ textAlign: 'center' }}>Post not found.</p>;
  }

  return (
    <div className="blog-post-page">
      <h2>{post.title}</h2>
      <p className="blog-date">{post.date}</p>
      <p className="blog-content">{post.content}</p>
    </div>
  );
}

export default BlogPostPage;
