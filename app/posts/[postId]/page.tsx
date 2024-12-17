import { Button } from '@/components/ui/button';
import axios from 'axios';
import React from 'react'

interface IParams{
  params:{
    postId:number;
  }
}

const PostDetailPage = async ({params}:IParams) => {
  const {postId} = await params;
  
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  
  return (
    <div className='mt-[3rem] max-w-2xl mx-auto text-center'>
      <h1 className='text-2xl font-semibold py-5'>Post Details</h1>
      <div className='py-5'>
        <div className='flex item-center justify-around'>
          <div className='flex items-center gap-3 py-2'>
            <h2 className='text-xl font-semibold text-gray-600'>ID</h2>
            <p>{response?.data?.id}</p>
          </div>
          <div className='flex items-center gap-3 py-2'>
            <h2 className='text-xl font-semibold text-gray-600'>User Id</h2>
            <p>{response?.data?.userId}</p>
          </div>
        </div>
        <div className='flex items-center gap-3 py-2'>
          <h2 className='text-xl font-semibold text-gray-600'>Title</h2>
          <p>{response?.data?.title}</p>
        </div>
        <div className='flex items-center gap-3 py-2'>
          <h2 className='text-xl font-semibold text-gray-600'>Body</h2>
          <p>{response?.data?.body}</p>
        </div>
      </div>
      <div className='py-8 flex items-center justify-end gap-4' >
      <Button variant="outline">Update</Button>
      <Button variant="outline">Delete</Button>

      </div>
    </div>
  )
}

export default PostDetailPage