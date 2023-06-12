export interface BOARDS {
    board: BOARD[]
}

export interface BOARD {
    board: BOARDINFO
    role: string
}

export interface BOARDINFO {
    id: number
    title: string
    hash: string
}
