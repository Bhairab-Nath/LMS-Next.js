import connectDB from "@/src/database/connection";
import Course from "@/src/database/models/course.schema";
import User from "@/src/database/models/user.schema";


export async function GET() {

    await connectDB();
    await User.create(
        {
            username: "John Doe",
            email: "john@gmail.com",
            googleId: "google123",
            profileImage: "https://example.com/profile.jpg"
        }
    )

    await Course.create(
        {
            courseName: "Introduction to Programming",
            courseDescription: "Learn the basics of programming with this introductory course.",
            coursePrice: 49.99,
            courseDuration: "4 weeks"

   })

    return Response.json({
        message: "Api hit successfully"
    });

}

