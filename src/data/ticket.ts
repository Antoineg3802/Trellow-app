import { UserInfo } from "./oneBoard"

export interface TicketInfo {
    id: number
    text: string
    title: string
    users: UserInfo[]
    creation_date: string
    expiration_date: string
  }