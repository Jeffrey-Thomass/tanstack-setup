import React from 'react'
import { fetchPosts } from '../api/api.js';
import { useQuery } from '@tanstack/react-query';

export default function PostList() {

    const {data : postData , isLoading} = useQuery({
        queryKey: ['posts'],
        queryFn : fetchPosts
      });

  return (
    <div className='container'>
        {isLoading && <div>Loading...</div>}
        {postData && postData.map(post => <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>)}
    </div>
  )
}
