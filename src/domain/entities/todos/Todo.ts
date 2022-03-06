
export class Todo {
    id!: number
    description: string
    deadline: Date
    completed: boolean

    constructor(id: number, params: Omit<Todo, "id">){
        if(id) this.id = id
        this.description = params.description
        this.completed = params.completed
        this.deadline = params.deadline
        return this
    }
}