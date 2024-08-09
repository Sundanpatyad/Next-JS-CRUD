import connectDB from "@/libs/db";
import Topic from "@/modals/topicSchema";
import { NextRequest, NextResponse } from "next/server";
connectDB();
export async function POST(request) {
    const {title , description } = await request.json();
    
    await Topic.create({title , description});
    return NextResponse.json({message:"Topic Created"} ,{ status:201})
}

export async function GET(){

    const topics = await Topic.find();
    return NextResponse.json(topics);
}

export async function DELETE(request){
  const id = await request.nextUrl.searchParams.get("id");
 
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({message : "Topic Deleted" } , {status: 200});
}