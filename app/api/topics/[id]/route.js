import connectDB from "@/libs/db";
import Topic from "@/modals/topicSchema";
import { NextResponse } from "next/server";
 connectDB();
export async function PUT(request , {params}){
    const {id} = params;
    const {newTitle:title , newDescription: description} = await request.json();
    await Topic.findByIdAndUpdate(id, {title , description});
    return NextResponse.json({message:"Topic Updated"} , {status:201});

}

export async function GET(request , {params}){
    const {id} = params;
   const topic = await Topic.findOne({_id:id});
    return NextResponse.json({topic} , {status:200});
}