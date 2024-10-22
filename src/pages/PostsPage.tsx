import React, {FC} from 'react';
import { useEffect, useState } from 'react';
import { IPosts } from '../models/IPosts';
import { getAllPosts } from '../services/api.service';
import PostForm from '../components/PostForm';


const PostsPage:FC = () => {
    const [posts, setPosts] = useState<IPosts[]>([]);
  
    const withPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    };
  
    useEffect(() => {withPosts();}, []);
  
    
    const handleNewPost = (newPost: IPosts) => {
      setPosts([newPost, ...posts]); 
    };
  
    return (
      <div>
        <h1>Create Post</h1>
        <PostForm postSubmit={handleNewPost} />
        <div>
          <h1>All Posts</h1>
          {posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PostsPage;