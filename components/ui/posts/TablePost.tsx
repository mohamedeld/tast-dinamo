"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link";

export interface IPost{
  userId:number;
  id:number;
  title:string;
  body:string;
}

interface IProps {
  data: IPost[]
}
const TablePost = ({ data }: IProps) => {
  return (
    <div className="my-[5rem] px-[2rem] max-w-4xl mx-auto">
      <Table>
        <TableCaption>A list of posts.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>UserId</TableHead>
            <TableHead>title</TableHead>
            <TableHead>Body</TableHead>
            <TableHead className="text-right">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            data?.length > 0 ? data?.map(item => {
              return (
                <TableRow key={item?.id}>
                  <TableCell className="font-medium">{item?.id}</TableCell>
                  <TableCell>{item?.userId}</TableCell>
                  <TableCell>{item?.title}</TableCell>
                  <TableCell>{item?.body}</TableCell>
                  <TableCell className="text-right">
                    <Link href={`/posts/${item?.id}`}>
                      Details
                    </Link>
                  </TableCell>
                </TableRow>
              )
            })
              : (
                <TableRow>
                  <TableCell className="font-medium">No items found</TableCell></TableRow>
              )
          }

        </TableBody>
      </Table>

    </div>
  )
}

export default TablePost