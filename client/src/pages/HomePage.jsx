import React, { useState, useEffect } from 'react';
import { postService } from '../services/api'; // Correct import
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Use the new service method
        const response = await postService.getAllPosts(); 
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Latest Posts</h1>
      <div className="grid gap-4">
        {posts.map(post => (
          <div key={post._id} className="border p-4 rounded">
            <h2 className="text-2xl font-semibold">
              <Link to={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>by {post.author.username} in {post.category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;