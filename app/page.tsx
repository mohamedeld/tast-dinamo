import Image from 'next/image'
import axios from "axios";
import TablePost from '@/components/ui/posts/TablePost';

export default async function Home() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

  return (
   <div>
    <TablePost data={response?.data}/>
   </div>
  )
}
