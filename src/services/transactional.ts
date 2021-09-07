import { getRequest, postRequest } from '../api-client'
import {
  ClassicEmailGroup,
  GetMessageDetailsDetails,
  GetMessageTimelineDetails,
  GetSmartEmailListingDetails,
  GetStatisticsDetails,
  MessageDetails,
  MessageTimeline,
  Recipient,
  SendClassicEmailDetails,
  SendSmartEmailDetails,
  SmartEmail,
  SmartEmailListingItem,
  Statistics,
} from '../types/transactional.types'
import Base from './base'

interface TransactionalInterface {
  getSmartEmailListing(details?: GetSmartEmailListingDetails): Promise<SmartEmailListingItem[]>
  getSmartEmailDetails(smartEmailId: string): Promise<SmartEmail>
  sendSmartEmail(smartEmailId: string, details: SendSmartEmailDetails): Promise<Recipient[]>
  sendClassicEmail(details: SendClassicEmailDetails): Promise<Recipient[]>
  getClassicEmailGroupListing(clientId?: string): Promise<ClassicEmailGroup[]>
  getStatistics(details?: GetStatisticsDetails): Promise<Statistics>
  getMessageTimeline(details?: GetMessageTimelineDetails): Promise<MessageTimeline[]>
  getMessageDetails(messageId: string, details?: GetMessageDetailsDetails): Promise<MessageDetails>
  resendMessage(messageId: string): Promise<Recipient>
}

class TransactionalService extends Base implements TransactionalInterface {
  getSmartEmailListing = async (details?: GetSmartEmailListingDetails) => {
    const data = await getRequest<SmartEmailListingItem[]>(this.authHeader, `/transactional/smartEmail`, {
      queryParams: details,
    })
    return data
  }
  getSmartEmailDetails = async (smartEmailId: string) => {
    const data = await getRequest<SmartEmail>(this.authHeader, `/transactional/smartEmail/${smartEmailId}`)
    return data
  }
  sendSmartEmail = async (smartEmailId: string, details: SendSmartEmailDetails) => {
    const data = await postRequest<Recipient[]>(this.authHeader, `/transactional/smartEmail/${smartEmailId}/send`, {
      body: details,
    })
    return data
  }
  sendClassicEmail = async (details: SendClassicEmailDetails) => {
    const { ClientID, ...body } = details
    const data = await postRequest<Recipient[]>(this.authHeader, `/transactional/classicEmail/send`, {
      queryParams: { clientID: ClientID },
      body,
    })
    return data
  }
  getClassicEmailGroupListing = async (clientId?: string) => {
    const data = await getRequest<ClassicEmailGroup[]>(this.authHeader, `/transactional/classicEmail/groups`, {
      queryParams: { clientID: clientId },
    })
    return data
  }
  getStatistics = async (details?: GetStatisticsDetails) => {
    const data = await getRequest<Statistics>(this.authHeader, '/transactional/statistics', { queryParams: details })
    return data
  }
  getMessageTimeline = async (details?: GetMessageTimelineDetails) => {
    const data = await getRequest<MessageTimeline[]>(this.authHeader, '/transactional/messages', {
      queryParams: details,
    })
    return data
  }
  getMessageDetails = async (messageId: string, details?: GetMessageDetailsDetails) => {
    const data = await getRequest<MessageDetails>(this.authHeader, `/transactional/messages/${messageId}`, {
      queryParams: details,
    })
    return data
  }
  resendMessage = async (messageId: string) => {
    const data = await postRequest<Recipient>(this.authHeader, `/transactional/messages/${messageId}/resend`)
    return data
  }
}

export default TransactionalService
