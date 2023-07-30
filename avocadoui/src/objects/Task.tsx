class Task {
    id: number = 0
    title: string
    dueDate: number | null = null
    completed: boolean = false

    constructor(title: string) {
        this.title = title
    }
}

export default Task;