class ListItem {
    id: number | null = null
    title: string
    dueDate: number | null = null

    constructor(title: string) {
        this.title = title
    }
}

export default ListItem;