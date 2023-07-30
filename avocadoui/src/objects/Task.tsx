class Task {
    id: number | null = null
    title: string
    dueDate: number | null = null
    completed: boolean = false

    constructor(title: string) {
        this.title = title
    }
}

export default Task;