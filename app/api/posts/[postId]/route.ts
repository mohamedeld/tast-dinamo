import { NextRequest, NextResponse } from "next/server"

interface IGETProps{
  params:{
    pathId:string
  }
}
export async function GET(req:NextRequest,{params}:IGETProps){
  try{
    const {pathId} = params;
    
  }catch(error){
    console.log("GET POSTS",error);
        return new NextResponse(error instanceof Error ? error?.message : 'Something went wrong')
  }
}