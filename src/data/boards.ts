export interface Boards {
    board: Board[]
}

export interface Board {
    board: BoardInfo
    role: string
}

export interface BoardInfo {
    id: number
    title: string
    hash: string
}
