import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { postService } from '../services/api'; // Correct import
import { AuthContext } from '../context/AuthContext';

const PostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Use the new service method
        const response = await postService.getPost(slug); 
        setPost(response.data);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      }
    };
    fetchPost();
  }, [slug]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!comment) return;
    try {
      // Use the new service method
      const response = await postService.addComment(post._id, { content: comment });
      setPost(prev => ({ ...prev, comments: response.data }));
      setComment('');
    } catch (error) {
      console.error("Failed to post comment", error);
    }
  };

  if (!post) return <p>Loading post...</p>;

  return (
    <article>
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-gray-600">By {post.author.username} on {new Date(post.createdAt).toLocaleDateString()}</p>
      <div className="prose mt-4" dangerouslySetInnerHTML={{ __html: post.content }} />

      <hr className="my-8" />

      <section>
        <h3 className="text-2xl font-bold mb-4">Comments</h3>
        {isAuthenticated ? (
          <form onSubmit={handleCommentSubmit}>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border p-2 rounded"
              rows="3"
              placeholder="Write a comment..."
            ></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Post Comment</button>
          </form>
        ) : <p>Please log in to comment.</p>}

        <div className="mt-6">
          {post.comments.map(c => (
            <div key={c._id} className="border-b py-2">
              <strong>{c.user?.username || 'User'}</strong>
              <p>{c.content}</p>
              <small>{new Date(c.createdAt).toLocaleString()}</small>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default PostPage;