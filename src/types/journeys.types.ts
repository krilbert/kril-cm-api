import { BouncesReason, BounceType, Country, Paginated, PaginationParams } from './shared.types'

type JourneyStatus = 'Active' | 'Paused' | 'Not started' | string
type JourneyTriggerType = 'On Subscription' | string

export interface Journey {
  ListID: string
  JourneyID: string
  Name: string
  Status: JourneyStatus
}

interface JourneyEmail {
  EmailID: string
  Name: string
  Bounced: number
  Clicked: number
  Opened: number
  Sent: number
  UniqueOpened: number
  Unsubscribed: number
}

export interface JourneySummary {
  JourneyID: string
  Name: string
  TriggerType: JourneyTriggerType
  Status: JourneyStatus
  Emails: JourneyEmail[]
}

interface EmailRecipientsResult {
  EmailAddress: string
  SentDate: string
}

export type JourneyEmailRecipients = Paginated<EmailRecipientsResult>

interface EmailOpensResult {
  EmailAddress: string
  Date: string
  IPAddress: string
  Latitude: number
  Longitude: number
  City: string
  Region: string
  CountryCode: string
  CountryName: 'Australia'
}
export type JourneyEmailOpens = Paginated<EmailOpensResult>

interface EmailClicksResult {
  EmailAddress: string
  Date: string
  URL: string
  IPAddress: string
  Latitude: number
  Longitude: number
  City: string
  Region: string
  CountryCode: string
  CountryName: Country
}
export type JourneyEmailClicks = Paginated<EmailClicksResult>

interface EmailBouncesResult {
  EmailAddress: string
  BounceType: BounceType
  Date: string
  Reason: BouncesReason
}
export type JourneyEmailBounces = Paginated<EmailBouncesResult>

interface EmailUnsubscribesResult {
  EmailAddress: string
  Date: string
  IPAddress: string
}
export type JourneyEmailUnsubscribes = Paginated<EmailUnsubscribesResult>

export interface GetEmailRecipientsDetails extends PaginationParams {
  date?: string
}

export interface GetEmailOpensDetails extends PaginationParams {
  date?: string
}

export interface GetEmailClicksDetails extends PaginationParams {
  date?: string
}

export interface GetEmailBouncesDetails extends PaginationParams {
  date?: string
}

export interface GetEmailUnsubscribesDetails extends PaginationParams {
  date?: string
}
