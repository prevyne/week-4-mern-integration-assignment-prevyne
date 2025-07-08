// src/pages/PostPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { postService } from '../services/api';

const PostPage = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // CORRECTED: The service now returns the data directly
        const fetchedPost = await postService.getPostBySlug(slug);
        setPost(fetchedPost);
      } catch (err) {
        console.error('Failed to fetch post', err);
        setError('Post not found.');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="text-center mt-16">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading post...</p>
      </div>
    );
  }

  if (error || !post) return <p className="text-center mt-8 text-red-500 bg-red-100 p-4 rounded-lg">{error || 'Post not found.'}</p>;

  return (
    <article className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-8">
          <span>By {post.author?.username || 'Unknown Author'}</span>
          <span className="mx-2">•</span>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            {post.category?.name || 'Uncategorized'}
          </span>
        </div>
        
        <div 
          className="prose dark:prose-invert lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </div>
    </article>
  );
};

export default PostPage;