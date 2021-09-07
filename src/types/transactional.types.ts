import { ConsentToTrack, Country, Timezone } from './shared.types'

export interface GetSmartEmailListingDetails {
  status?: 'all' | 'draft' | 'active'
  clientID?: string
}

export interface SmartEmailListingItem {
  ID: string
  Name: string
  CreatedAt: string
  Status: 'All' | 'Draft' | 'Active'
}

export interface SmartEmail {
  SmartEmailID: string
  CreatedAt: string
  Status: 'Active' | string // TODO
  Name: string
  Properties: {
    From: string
    ReplyTo: string
    Subject: string
    Content: {
      Html: string
      Text: string
      EmailVariables: string[]
      InlineCss: boolean
    }
    TextPreviewUrl: string
    HtmlPreviewUrl: string
  }
  AddRecipientsToList: string
}

interface Attachment {
  Content?: string
  Name: string
  Type: string
}

export interface SendSmartEmailDetails {
  To: string[]
  CC: Nullable<string[]>
  BCC: Nullable<string[]>
  Attachments?: Attachment[]
  Data?: Record<string, unknown>
  AddRecipientsToList?: boolean
  ConsentToTrack: ConsentToTrack
}

export interface Recipient {
  Status: 'Accepted' | string // TODO
  MessageID: string
  Recipient: string
}

export interface SendClassicEmailDetails {
  ClientID?: string
  Subject: string
  From: string
  ReplyTo: string
  To: string[]
  CC: Nullable<string[]>
  BCC: Nullable<string[]>
  Html: string
  Text?: string
  Attachments?: Attachment[]
  TrackOpens: boolean
  TrackClicks: boolean
  InlineCSS: boolean
  Group?: string
  AddRecipientsToListID?: string
  ConsentToTrack: ConsentToTrack
}

export interface ClassicEmailGroup {
  Group: string
  CreatedAt: string
}

export interface GetStatisticsDetails {
  ClientID?: string
  SmartEmailID?: string
  Group?: string
  From?: string
  To?: string
  Timezone?: 'UTC' | Timezone
}

export interface Statistics {
  Query: {
    Group?: string
    SmartEmailID?: string
    From: string
    To: string
    TimeZone: 'UTC' | Timezone
  }
  Sent: number
  Bounces: number
  Delivered: number
  Opened: number
  Clicked: number
}

export interface GetMessageTimelineDetails {
  Status?: 'delivered' | 'bounced' | 'spam' | 'all'
  Count?: number
  SentBeforeID?: string
  SentAfterID?: string
  SmartEmailID?: string
  Group?: string
  ClientID?: string
}

export interface MessageTimelineSent {
  MessageID: string
  Status: 'Sent'
  SentAt: string
  Recipient: string
  From: string
  Subject: string
  TotalOpens: number
  TotalClicks: number
  CanBeResent: boolean
  Group?: string
  SmartEmailID?: string
}

export interface MessageTimelineBounced {
  MessageID: string
  Status: 'Bounced'
  BounceType: 'SBMF' | string // TODO:
  BounceCategory: 'Soft' | string // TODO:
  SentAt: string
  Recipient: string
  From: string
  Subject: string
  TotalOpens: number
  TotalClicks: number
  CanBeResent: boolean
  Group?: string
  SmartEmailID?: string
}

export type MessageTimeline = MessageTimelineSent | MessageTimelineBounced

export interface GetMessageDetailsDetails {
  Statistics?: boolean
  ExcludeMessageBody?: boolean
}

interface MessageOpensDetail {
  EmailAddress: string
  Date: string
  IPAddress: string
  Geolocation: {
    Latitude: number
    Longitude: number
    City?: string
    Region: string
    CountryCode: string
    CountryName: Country
  }
  MailClient: {
    Name: string
    Version: string
  }
}

interface MessageClicksDetail {
  EmailAddress: string
  Date: string
  IPAddress: string
  URL: string
  Geolocation: {
    Latitude: number
    Longitude: number
    City?: string
    Region: string
    CountryCode: string
    CountryName: Country
  }
}

export interface MessageDetails {
  MessageID: string
  Status: 'Delivered' | 'Bounced' | 'Spam' | 'Sent'
  BounceType: 'SBMF' | string // TODO:
  BounceCategory: 'Soft' | string // TODO:
  SentAt: string
  SmartEmailID?: string
  CanBeResent: boolean
  Recipient: string
  Message: {
    From: string
    Subject: string
    To: string[]
    CC: Nullable<string[]>
    BCC: Nullable<string | string[]>
    ReplyTo: string
    Attachments: Attachment[]
    Body: {
      Html: string
      Text: string
    }
    Data: Record<string, unknown>
  }
  TotalOpens: number
  TotalClicks: number
  Opens: MessageOpensDetail[]
  Clicks: MessageClicksDetail[]
}
