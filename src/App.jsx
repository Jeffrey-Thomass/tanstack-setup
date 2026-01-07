import { addPost, fetchPosts } from './api/api.js'
import './App.css'
import {  useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import PostList from './components/Post-list.jsx';

function App() {
  const {data , isLoading} =useQuery({
    queryKey: ['posts'],
    queryFn : fetchPosts
  });

  console.log(data , isLoading);
  const QueryClient = useQueryClient();

  const {mutate , isError , error} = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  })

  return (
    <>
      <form
  onSubmit={(e) => {
    e.preventDefault();

    const form = e.target;

    mutate({
      title: form.title.value,
      body: form.body.value,
    });
  }}
>
  <input type="text" name="title" />
  <input type="text" name="body" />
  <button type="submit">Submit</button>
</form>

      <div>Hello world</div>
      <PostList/>
    </>
  )
}

export default App
