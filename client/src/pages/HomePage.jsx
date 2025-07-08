import React, { useState, useEffect } from 'react';
import { postService } from '../services/api';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await postService.getAllPosts(); 
        setPosts(response.data);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
        setError("Could not load posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-16">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading posts...</p>
      </div>
    );
  }
  
  if (error) return <p className="text-center mt-8 text-red-500 bg-red-100 p-4 rounded-lg">{error}</p>;

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white border-b pb-4">
        Latest Posts
      </h1>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500 mt-16">No posts have been created yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div 
              key={post._id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-sm text-blue-500 dark:text-blue-400 font-semibold mb-2">
                  {post.category?.name || 'Uncategorized'}
                </p>
                <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100 flex-grow">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  by {post.author?.username || 'Unknown Author'}
                </p>
                <Link 
                  to={`/posts/${post.slug}`} 
                  className="mt-auto inline-block bg-blue-600 text-white text-center font-semibold rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors duration-200"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
