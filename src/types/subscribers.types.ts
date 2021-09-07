import { ConsentToTrack, KeyValuePair } from './shared.types'

export interface AddSubscriberDetails {
  EmailAddress: string
  Name: string
  ConsentToTrack: ConsentToTrack
  CustomFields?: KeyValuePair
  Resubscribe?: boolean
  RestartSubscriptionBasedAutoresponders?: boolean
}

export interface ImportSubscriberDetails {
  Subscribers: SubscriberDetails[]
  Resubscribe: boolean
  QueueSubscriptionBasedAutoResponders: boolean
  RestartSubscriptionBasedAutoresponders: boolean
}

interface FailureDetail {
  EmailAddress: string
  Code: number
  Message: string
}

export interface SubscribersImported {
  FailureDetails: FailureDetail[]
  TotalUniqueEmailsSubmitted: number
  TotalExistingSubscribers: number
  TotalNewSubscribers: number
  DuplicateEmailsInSubmission: FailureDetail[]
}

export interface GetSubscriberDetailsDetails {
  includeTrackingPreference?: 'true' | 'false'
}

export interface SubscriberDetails {
  EmailAddress: string
  Name: string
  Date: string
  State: 'Active' | string
  CustomFields?: KeyValuePair
  ReadsEmailWith: string
  ConsentToTrack: ConsentToTrack
}

interface Action {
  Event: 'Open' | 'Click' | string
  Date: string
  IPAddress: string
  Detail: string
}

export interface SubscriberHistory {
  ID: string
  Type: string
  Name: string
  Actions: Action[]
}
