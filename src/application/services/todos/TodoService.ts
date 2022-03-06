type CreateTodoDTO = {
    description: string,
    deadline: string,
}
type UpdateTodoDTO = {
    description: string,
    deadline: string,
}
export class TodoService {

    create(todo: CreateTodoDTO, username: string){
        // Do something here to create it
    }
    update(todo: UpdateTodoDTO, id: number){
        // Do something here to create it
    }
    toggleCompletion(id: number){
        // Do something here to create it
    }
    delete(id: number){
        // Do something here to create it
    }
    read(id: number){
        // Do something here to create it
    }
}