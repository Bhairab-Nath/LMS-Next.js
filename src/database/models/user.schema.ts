import mongoose, { Document } from "mongoose"

const Schema = mongoose.Schema

enum Role{
    Student = "student",
    Admin = "admin"
}

interface IUser extends Document{
    username: string,
    email: string,
    profileImage: string,
    role: Role
}

const userSchema = new Schema<IUser>({
    
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    profileImage:{
        type: String
    },
    role: {
        type: String,
        enum: [Role.Student, Role.Admin],
        default: Role.Student
    }

})

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User