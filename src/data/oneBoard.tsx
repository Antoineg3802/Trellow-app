export interface ONEBOARD {
    id: number
    title: string
    board_columns: BOARDCOLUMN[]
    hash: string
    users: USER[]
  }
  
  export interface BOARDCOLUMN {
    id: number
    title: string
    tickets: TICKET[]
  }
  
  export interface TICKET {
    id: number
    text: string
    expiration_date: string
  }
  
  export interface USER {
    user: USERINFO
    role: string
  }
  
  export interface USERINFO {
    id: number
    email: string
  }