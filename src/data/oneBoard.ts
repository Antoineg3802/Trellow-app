export interface OneBoard {
    id: number
    title: string
    board_columns: BoardColumn[]
    hash: string
    users: User[]
  }
  
  export interface BoardColumn {
    id: number
    title: string
    tickets: Ticket[]
  }
  
  export interface Ticket {
    id: number
    position: number
    title: string
    text: string
    expiration_date: string
  }
  
  export interface User {
    user: UserInfo
    role: string
  }
  
  export interface UserInfo {
    id: number
    email: string
  }