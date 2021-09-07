import { People } from './clients.types'

export interface Client {
  ClientID: string
  Name: string
}

export interface SystemDate {
  SystemDate: string
}

export type Administrator = Omit<People, 'AccessLevel'>

export interface SessionUrl {
  SessionUrl: string
}

export interface AddAdminDetails {
  Name: string
  EmailAddress: string
}

export interface UpdateAdminDetails {
  Name: string
  EmailAddress: string
}

export interface GetEmbeddedSessionDetails {
  Email: string
  Chrome: 'All' | 'Tabs' | 'None'
  Url: string
  IntegratorID: string
  ClientID: string
}
