import { fetchPosts } from './api/api.js'
import './App.css'
import { useQuery } from '@tanstack/react-query'
import PostList from './components/Post-list.jsx';

function App() {
  const {data , isLoading} =useQuery({
    queryKey: ['posts'],
    queryFn : fetchPosts
  });

  console.log(data , isLoading);

  return (
    <>
      <div>Hello world</div>
      <PostList/>
    </>
  )
}

export default App
