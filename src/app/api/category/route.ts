
import { createCategory } from "./category.controller";


export async function POST(req: Request) {

    return createCategory(req)

}
