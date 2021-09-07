import { ConsentToTrack, KeyValuePair, Paginated, PaginationParams } from './shared.types'

type UnsubscribeSetting = 'AllClientLists' | 'OnlyThisList'

export interface CreateListDetails {
  Title: string
  UnsubscribePage: string
  UnsubscribeSetting: UnsubscribeSetting
  ConfirmedOptIn: boolean
  ConfirmationSuccessPage: string
}

export interface ListDetails {
  ConfirmedOptIn: boolean
  Title: string
  UnsubscribePage: string
  UnsubscribeSetting: UnsubscribeSetting
  ListID: string
  ConfirmationSuccessPage: string
}

export interface ListStats {
  TotalActiveSubscribers: number
  NewActiveSubscribersToday: number
  NewActiveSubscribersYesterday: number
  NewActiveSubscribersThisWeek: number
  NewActiveSubscribersThisMonth: number
  NewActiveSubscribersThisYear: number
  TotalUnsubscribes: number
  UnsubscribesToday: number
  UnsubscribesYesterday: number
  UnsubscribesThisWeek: number
  UnsubscribesThisMonth: number
  UnsubscribesThisYear: number
  TotalDeleted: number
  DeletedToday: number
  DeletedYesterday: number
  DeletedThisWeek: number
  DeletedThisMonth: number
  DeletedThisYear: number
  TotalBounces: number
  BouncesToday: number
  BouncesYesterday: number
  BouncesThisWeek: number
  BouncesThisMonth: number
  BouncesThisYear: number
}

export interface CustomField {
  FieldName: string
  Key: string
  DataType: DataType
  FieldOptions: string[]
  VisibleInPreferenceCenter: boolean
}

export interface ActiveSubscribersDetails extends PaginationParams {
  orderfield?: 'email' | 'name' | 'date'
  date?: string
  includetrackingpreference?: 'true' | 'false'
}

export interface UnconfirmedSubscribersDetails extends PaginationParams {
  orderfield?: 'email' | 'name' | 'date'
  date?: string
  includetrackingpreference?: 'true' | 'false'
}

export interface UnsubscribedSubscribersDetails extends PaginationParams {
  orderfield?: 'email' | 'name' | 'date'
  date?: string
  includetrackingpreference?: 'true' | 'false'
}

export interface BouncedSubscribersDetails extends PaginationParams {
  orderfield?: 'email' | 'name' | 'date'
  date?: string
  includetrackingpreference?: 'true' | 'false'
}

export interface DeletedSubscribersDetails extends PaginationParams {
  orderfield?: 'email' | 'name' | 'date'
  date?: string
  includetrackingpreference?: 'true' | 'false'
}

interface ActiveSubscribersResult<T> {
  EmailAddress: string
  Name: string
  Date: string
  State: T
  CustomFields: KeyValuePair[]
  ReadsEmailWith: 'string'
  ConsentToTrack: ConsentToTrack
}

export type ActiveSubscribers = Paginated<ActiveSubscribersResult<'Active'>>
export type UnconfirmedSubscribers = Paginated<ActiveSubscribersResult<'Unconfirmed'>>
export type UnsubscribedSubscribers = Paginated<ActiveSubscribersResult<'Unsubscribed'>>
export type BouncedSubscribers = Paginated<ActiveSubscribersResult<'Bounced'>>
export type DeletedSubscribers = Paginated<ActiveSubscribersResult<'Deleted'>>

export interface UpdateListDetails {
  Title: string
  UnsubscribePage: string
  UnsubscribeSetting: UnsubscribeSetting
  ConfirmedOptIn: boolean
  ConfirmationSuccessPage: string
  AddUnsubscribesToSuppList: boolean
  ScrubActiveWithSuppList: boolean
}

type DataType = 'Text' | 'Number' | 'MultiSelectOne' | 'MultiSelectMany' | 'Date' | 'Country' | 'USState'

export interface CreateCustomFieldDetails {
  FieldName: string
  DataType: DataType
  Options: string[]
  VisibleInPreferenceCenter: boolean
}

export interface UpdateCustomFieldDetails {
  FieldName: string
  VisibleInPreferenceCenter: boolean
}

export interface UpdateCustomFieldOptionsDetails {
  KeepExistingOptions: boolean
  Options: string[]
}

type WebhookEvent = 'Subscribe' | 'Deactivate' | 'Update'
type WebhookPayloadFormat = 'Json'
type WebhookStatus = 'Active' | string // TODO:

export interface Webhook {
  WebhookID: string
  Events: WebhookEvent[]
  Url: string
  Status: WebhookStatus
  PayloadFormat: WebhookPayloadFormat
}

export interface CreateWebhookDetails {
  Events: WebhookEvent[]
  Url: string
  PayloadFormat: WebhookPayloadFormat
}
