import connectDB from "@/src/database/connection"
import Category from "@/src/database/models/category.schema"

export async function createCategory(req: Request) {
    await connectDB()

    try {
        const { name, description } = await req.json()
        const existingCategory = await Category.findOne({ name: name })
        if (existingCategory) {
            return Response.json({
                message: "Category already exists"
            },
                {
                    status: 400
                })
        }

        const category = await Category.create({
            name: name,
            description: description
        })

        return Response.json({
            message: "Category created successfully",
            category: category
        },
            {
                status: 201
            })

    } catch (error) {
        console.error("Error creating category:", error)
        return Response.json({
            message: "Something went wrong"
        },
            {
                status: 500
            })

    }

}
