import axios from "axios"
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
  try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return NextResponse.json(response.data)
  }catch(error){
    console.log("GET POSTS",error);
    return new NextResponse(error instanceof Error ? error?.message : 'Something went wrong')
  }
}