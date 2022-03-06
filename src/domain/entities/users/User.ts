import {Todo} from "../todos/Todo"

export type CreateUserDTO = {
    name: string
    username: string
    password: string
    todos: Todo[]
}

type OmitedUserFields = "id" | "checkPasswordComplexity"

export class User {
    id!: number
    name: string
    username: string
    password: string
    todos: Todo[]

    constructor(params: Omit<User, OmitedUserFields>, id?: number) {
        if(id) this.id = id
        this.name = params.name
        this.username = params.username
        this.password = params.password
        this.todos = params.todos
        return this
    }

    // An entity class can also do some validation
    checkPasswordComplexity(): boolean{
        // Some dummy validation 
        if (typeof this.password === "string") return true
        return false
    }


}