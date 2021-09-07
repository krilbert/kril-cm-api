import { BillingCurrency, Country, Currency, Paginated, PaginationParams, Timezone } from './shared.types'

interface BasicDetails {
  ClientID: string
  CompanyName: string
  Country: Country
  TimeZone: Timezone
  PrimaryContactName: string
  PrimaryContactEmail: string
}

export interface BillingDetails {
  CanPurchaseCredits: boolean
  Credits: number
  MarkupOnDesignSpamTest: number
  ClientPays: boolean
  BaseRatePerRecipient: number
  MarkupPerRecipient: number
  MarkupOnDelivery: number
  BaseDeliveryRate: number
  Currency: Currency
  BaseDesignSpamTestRate: number
}

export interface ClientDetails {
  ApiKey: string
  BasicDetails: BasicDetails
  BillingDetails: BillingDetails
}

export interface SentCampaign {
  CampaignID: string
  Name: string
  FromName: string
  FromEmail: string
  ReplyTo: string
  Subject: string
  SentDate: string
  TotalRecipients: number
  WebVersionURL: string
  WebVersionTextURL: string
}

export interface ScheduledCampaign {
  CampaignID: string
  Name: string
  FromName: string
  FromEmail: string
  ReplyTo: string
  Subject: string
  DateCreated: string
  DateScheduled: string
  ScheduledTimeZone: Timezone
  PreviewURL: string
  PreviewTextURL: string
}

export interface DraftCampaign {
  CampaignID: string
  Name: string
  FromName: string
  FromEmail: string
  ReplyTo: string
  Subject: string
  DateCreated: string
  PreviewURL: string
  PreviewTextURL: string
}

export interface SubscriberList {
  ListID: string
  Name: string
}

export type SubscriberState = 'Active' | 'Unconfirmed' | 'Unsubscribed' | 'Bounced' | 'Deleted'

export interface ListForEmail {
  ListID: string
  ListName: string
  SubscriberState: SubscriberState
  DateSubscriberAdded: string
}

export interface ListSegment {
  ListID: string
  SegmentID: string
  Title: string
}

// TODO:
export type SuppresionListResultReason = 'Bounced' | string
// TODO:
export type SuppresionListResultState = 'Suppressed' | string

export interface SuppresionListResult {
  SuppressionReason: SuppresionListResultReason
  EmailAddress: string
  Date: string
  State: SuppresionListResultState
}

export type SuppressionList = Paginated<SuppresionListResult>

export interface Template {
  TemplateID: string
  Name: string
  PreviewURL: string
  ScreenshotURL: string
}

export interface TransferCredits {
  AccountCredits: number
  ClientCredits: number
}

// TODO:
export type PeopleStatus = 'Active' | 'Waiting to Accept the Invitation' | string

export interface People {
  EmailAddress: string
  Name: string
  AccessLevel: number
  Status: PeopleStatus
}

export interface AddClientDetails {
  CompanyName: string
  Country: Country
  TimeZone: Timezone
}

export interface UpdatePersonDetails {
  EmailAddress: string
  Name: string
  AccessLevel: number
  Password: string
}

export interface AddPersonDetails {
  EmailAddress: string
  Name: string
  AccessLevel: number
  Password: string
}

export interface TransferCreditsDetails {
  Credits: number
  CanUseMyCreditsWhenTheyRunOut: boolean
}

export interface SetMonthlyBillingDetails {
  Currency: BillingCurrency
  ClientPays: boolean
  MarkupPercentage: number
  MonthlyScheme?: 'Basic' | 'Unlimited'
}

export interface SetPAYGBillingDetails {
  Currency: BillingCurrency
  CanPurchaseCredits: boolean
  ClientPays: boolean
  MarkupPercentage: number
  MarkupOnDelivery: number
  MarkupPerRecipient: number
  MarkupOnDesignSpamTest: number
}

export interface SetBasicDetailsDetails {
  CompanyName: string
  Country: Country
  TimeZone: Timezone
}

export interface SuppressEmailDetails {
  EmailAddresses: string[]
}

export interface GetSuppresionListDetails extends PaginationParams {
  orderfield?: 'email' | 'date'
}
