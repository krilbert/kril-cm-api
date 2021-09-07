import { ListSegment } from './clients.types'
import { BouncesReason, BounceType, Country, Paginated, PaginationParams } from './shared.types'

export interface CampaignSummary {
  Recipients: number
  TotalOpened: number
  Clicks: number
  Unsubscribed: number
  Bounced: number
  UniqueOpened: number
  SpamComplaints: number
  WebVersionURL: string
  WebVersionTextURL: string
  WorldviewURL: string
  Forwards: number
  Likes: number
  Mentions: number
}

export interface EmailClientUsage {
  Client: string
  Version: string
  Percentage: number
  Subscribers: number
}

export interface List {
  ListID: string
  Name: string
}

export interface ListsAndSegments {
  Lists: List[]
  Segments: ListSegment[]
}

interface CampaignRecipientsResult {
  ListID: string
  EmailAddress: string
}

export type CampaignRecipients = Paginated<CampaignRecipientsResult>

interface CampaignBouncesResult {
  EmailAddress: string
  ListID: string
  BounceType: BounceType
  Date: string
  Reason: BouncesReason
}

export type CampaignBounces = Paginated<CampaignBouncesResult>

// TODO: City, Region, Country Code
interface CampaignOpensResult {
  EmailAddress: string
  ListID: string
  Date: string
  IPAddress: string
  Latitude: number
  Longitude: number
  City: string
  Region: string
  CountryCode: string
  CountryName: Country
}

export type CampaignOpens = Paginated<CampaignOpensResult>

// TODO: City, Region, Country Code
interface CampaignClicksResult {
  EmailAddress: string
  URL: string
  ListID: string
  Date: string
  IPAddress: string
  Latitude: number
  Longitude: number
  City: string
  Region: string
  CountryCode: string
  CountryName: Country
}

export type CampaignClicks = Paginated<CampaignClicksResult>

interface CampaignUnsubscribesResult {
  EmailAddress: string
  ListID: string
  Date: string
  IPAddress: string
}

export type CampaignUnsubscribes = Paginated<CampaignUnsubscribesResult>

interface CampaignSpamComplaintsResult {
  EmailAddress: string
  ListID: string
  Date: string
}

export type CampaignSpamComplaints = Paginated<CampaignSpamComplaintsResult>

export type AddDraftCampaignDetails = {
  Name: string
  Subject: string
  FromName: string
  FromEmail: string
  ReplyTo: string
  HtmlUrl: string
  TextUrl?: string
} & ({ SegmentIDs: string[]; ListIDs?: never } | { SegmentIDs?: never; ListIDs: string[] })

interface TemplateSingleLine {
  Content: string
  Href?: string
}

interface TemplateMultiline {
  Content: string
}

interface TemplateImage {
  Content: string
  Href?: string
  Alt?: string
}

interface TemplateRepeaterItem {
  Layout?: string
  Singlelines?: TemplateSingleLine[]
  Multilines?: TemplateMultiline[]
  Images?: TemplateImage[]
}

interface TemplateRepeater {
  Items: TemplateRepeaterItem[]
}

interface TemplateContent {
  Singlelines?: TemplateSingleLine[]
  Multilines?: TemplateMultiline[]
  Images?: TemplateImage[]
  Repeaters?: TemplateRepeater[]
}

export interface AddDraftCampaignFromTemplateDetails {
  TemplateID: string
  Name: string
  Subject: string
  FromName: string
  FromEmail: string
  ReplyTo: string
  ListIDs?: string[]
  SegmentIDs?: string[]
  TemplateContent: TemplateContent
}

export interface SendDraftCampaignDetails {
  ConfirmationEmail: string
  SendDate: string
}

export interface SendCAmpaignPreviewDetails {
  PreviewRecipients: string[]
}

export interface GetCampaignRecipientsDetails extends PaginationParams {
  orderfield?: 'email' | 'list'
}

export interface GetCampaignBouncesDetails extends PaginationParams {
  orderfield?: 'email' | 'list' | 'date'
  date?: string
}

export interface GetCampaignOpensDetails extends PaginationParams {
  orderfield?: 'email' | 'list' | 'date'
  date?: string
}

export interface GetCampaignClicksDetails extends PaginationParams {
  orderfield?: 'email' | 'list' | 'date'
  date?: string
}

export interface GetCampaignUnsubscribesDetails extends PaginationParams {
  orderfield?: 'email' | 'list' | 'date'
  date?: string
}

export interface GetCampaignSpamComplaintsDetails extends PaginationParams {
  orderfield?: 'email' | 'list' | 'date'
  date?: string
}
