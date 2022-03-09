import {Todo} from "../todos/Todo"

export type CreateUserDTO = {
    name: string
    username: string
    password: string
}

type OmitedUserFields = "id" | "checkPasswordComplexity" | "todos"

export class User {
    id!: number
    name: string
    username: string
    password: string
    todos!: Todo[]

    constructor(params: Omit<User, OmitedUserFields>, id?: number) {
        if(id) this.id = id
        this.name = params.name
        this.username = params.username
        this.password = params.password
        return this
    }

    // An entity class can also do some validation
    checkPasswordComplexity(param: boolean): boolean{
        // Some dummy validation 
        return param;
    }


}