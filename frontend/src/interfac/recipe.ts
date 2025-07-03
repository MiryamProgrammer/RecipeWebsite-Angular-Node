import { User } from "./user";

export interface Recipe {
    _id: string,
    name: string,
    description: string,
    pic: String,
    level: string,
    duration: string,
    type: string,
    idUser: User["_id"],
    ingredients: Array<{name: string, amount: number}>
}


