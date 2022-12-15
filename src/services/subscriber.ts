import { deleteRequest, getRequest, postRequest, putRequest } from '../api-client'
import {
  GetSubscriberDetailsDetails,
  ImportSubscriberDetails,
  AddSubscriberDetails,
  SubscribersImported,
  SubscriberDetails,
  SubscriberHistory,
} from '../types/subscribers.types'
import Base from './base'

interface SubscriberInterface {
  addSubscriber(listId: string, details: AddSubscriberDetails): Promise<string>
  updateSubscriber(listId: string, email: string, details: Partial<AddSubscriberDetails>): Promise<void>
  importSubscribers(listId: string, details: ImportSubscriberDetails): Promise<SubscribersImported>
  getSubscriberDetails(listId: string, email: string, details?: GetSubscriberDetailsDetails): Promise<SubscriberDetails>
  getSubscriberHistory(listId: string, email: string): Promise<SubscriberHistory>
  unsubscribeSubscriber(listId: string, email: string): Promise<string>
  deleteSubscriber(listId: string, email: string): Promise<void>
}

class SubscriberService extends Base implements SubscriberInterface {
  addSubscriber = async (listId: string, details: AddSubscriberDetails) => {
    const data = await postRequest<string>(this.authHeader, `/subscribers/${listId}.json`, { body: details })
    return data
  }
  updateSubscriber = async (listId: string, email: string, details: Partial<AddSubscriberDetails>) => {
    await putRequest<string>(this.authHeader, `/subscribers/${listId}.json`, {
      queryParams: { email },
      body: details,
    })
  }
  importSubscribers = async (listId: string, details: ImportSubscriberDetails) => {
    const data = await postRequest<SubscribersImported>(this.authHeader, `/subscribers/${listId}/import.json`, {
      body: details,
    })
    return data
  }
  getSubscriberDetails = async (listId: string, email: string, details?: GetSubscriberDetailsDetails) => {
    const data = await getRequest<SubscriberDetails>(this.authHeader, `/subscribers/${listId}.json`, {
      queryParams: { ...details, email },
    })
    return data
  }
  getSubscriberHistory = async (listId: string, email: string) => {
    const data = await getRequest<SubscriberHistory>(this.authHeader, `/subscribers/${listId}.json`, {
      queryParams: { email },
    })
    return data
  }
  unsubscribeSubscriber = async (listId: string, email: string) => {
    const data = await postRequest<string>(this.authHeader, `/subscribers/${listId}/unsubscribe.json`, {
      body: {
        EmailAddress: email,
      },
    })
    return data
  }
  deleteSubscriber = async (listId: string, email: string) => {
    await deleteRequest(this.authHeader, `/subscribers/${listId}.json`, { queryParams: { email } })
  }
}

export default SubscriberService
