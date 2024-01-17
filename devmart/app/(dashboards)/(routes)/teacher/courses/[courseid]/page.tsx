import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";
const CourseIdPage = async ({
  params
}:{
  params: {courseId: string}
}) => {
  const {userId} = auth();

  if(!userId){
    return redirect
  }

  const course = await db.course.findUnique({
    where:{
      id: params.courseId
    }
  })

  return ( 
    <div>
      Course Id: {params.courseId}
    </div>
   );
}
 
export default CourseIdPage;