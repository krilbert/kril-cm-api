import { deleteRequest, getRequest, postRequest, putRequest } from '../api-client'
import { ListSegment } from '../types/clients.types'
import {
  ActiveSubscribers,
  ActiveSubscribersDetails,
  BouncedSubscribers,
  BouncedSubscribersDetails,
  CreateCustomFieldDetails,
  CreateListDetails,
  CreateWebhookDetails,
  CustomField,
  DeletedSubscribers,
  DeletedSubscribersDetails,
  ListDetails,
  ListStats,
  UnconfirmedSubscribers,
  UnconfirmedSubscribersDetails,
  UnsubscribedSubscribers,
  UnsubscribedSubscribersDetails,
  UpdateCustomFieldDetails,
  UpdateCustomFieldOptionsDetails,
  UpdateListDetails,
  Webhook,
} from '../types/list.types'
import Base from './base'

interface ListInterface {
  createList(clientId: string, details: CreateListDetails): Promise<string>
  listDetails(listId: string): Promise<ListDetails>
  listStats(listId: string): Promise<ListStats>
  listCustomFields(listId: string): Promise<CustomField[]>
  listSegments(listId: string): Promise<ListSegment[]>
  activeSubscribers(listId: string, details?: ActiveSubscribersDetails): Promise<ActiveSubscribers>
  unconfirmedSubscribers(listId: string, details?: UnconfirmedSubscribersDetails): Promise<UnconfirmedSubscribers>
  unsubscribedSubscribers(listId: string, details?: UnsubscribedSubscribersDetails): Promise<UnsubscribedSubscribers>
  bouncedSubscribers(listId: string, details?: BouncedSubscribersDetails): Promise<BouncedSubscribers>
  deletedSubscribers(listId: string, details?: DeletedSubscribersDetails): Promise<DeletedSubscribers>
  updateList(listId: string, details?: Partial<UpdateListDetails>): Promise<void>
  createCustomField(listId: string, details: CreateCustomFieldDetails): Promise<string>
  updateCustomField(listId: string, customfieldKey: string, details: Partial<UpdateCustomFieldDetails>): Promise<string>
  updateCustomFieldOptions(
    listId: string,
    customfieldKey: string,
    details: Partial<UpdateCustomFieldOptionsDetails>,
  ): Promise<void>
  deleteCustomField(listId: string, customfieldKey: string): Promise<void>
  deleteList(listId: string): Promise<void>
  listWebhooks(listId: string): Promise<Webhook[]>
  createWebhook(listId: string, details: CreateWebhookDetails): Promise<string>
  testWebhook(listId: string, webhookId: string): Promise<void>
  deleteWebhook(listId: string, webhookId: string): Promise<void>
  activateWebhook(listId: string, webhookId: string): Promise<void>
  deactivateWebhook(listId: string, webhookId: string): Promise<void>
}

class ListService extends Base implements ListInterface {
  createList = async (clientId: string, details: CreateListDetails) => {
    const data = await postRequest<string>(this.authHeader, `/lists/${clientId}.json`, { body: details })
    return data
  }
  listDetails = async (listId: string) => {
    const data = await getRequest<ListDetails>(this.authHeader, `/lists/${listId}.json`)
    return data
  }
  listStats = async (listId: string) => {
    const data = await getRequest<ListStats>(this.authHeader, `/lists/${listId}/stats.json`)
    return data
  }
  listCustomFields = async (listId: string) => {
    const data = await getRequest<CustomField[]>(this.authHeader, `/lists/${listId}/customfields.json`)
    return data
  }
  listSegments = async (listId: string) => {
    const data = await getRequest<ListSegment[]>(this.authHeader, `/lists/${listId}/segments.json`)
    return data
  }
  activeSubscribers = async (listId: string, details?: ActiveSubscribersDetails) => {
    const data = await getRequest<ActiveSubscribers>(this.authHeader, `/lists/${listId}/active.json`, {
      queryParams: details,
    })
    return data
  }
  unconfirmedSubscribers = async (listId: string, details?: UnconfirmedSubscribersDetails) => {
    const data = await getRequest<UnconfirmedSubscribers>(this.authHeader, `/lists/${listId}/unconfirmed.json`, {
      queryParams: details,
    })
    return data
  }
  unsubscribedSubscribers = async (listId: string, details?: UnsubscribedSubscribersDetails) => {
    const data = await getRequest<UnsubscribedSubscribers>(this.authHeader, `/lists/${listId}/unsubscribed.json`, {
      queryParams: details,
    })
    return data
  }
  bouncedSubscribers = async (listId: string, details?: BouncedSubscribersDetails) => {
    const data = await getRequest<BouncedSubscribers>(this.authHeader, `/lists/${listId}/bounced.json`, {
      queryParams: details,
    })
    return data
  }
  deletedSubscribers = async (listId: string, details?: DeletedSubscribersDetails) => {
    const data = await getRequest<DeletedSubscribers>(this.authHeader, `/lists/${listId}/deleted.json`, {
      queryParams: details,
    })
    return data
  }
  updateList = async (listId: string, details?: Partial<UpdateListDetails>) => {
    await putRequest(this.authHeader, `/lists/${listId}.json`, { body: details })
  }
  createCustomField = async (listId: string, details: CreateCustomFieldDetails) => {
    const data = await postRequest<string>(this.authHeader, `/lists/${listId}/customfields.json`, {
      body: details,
    })
    return data
  }
  updateCustomField = async (listId: string, customfieldKey: string, details: Partial<UpdateCustomFieldDetails>) => {
    const data = await putRequest<string>(this.authHeader, `/lists/${listId}/customfields/${customfieldKey}.json`, {
      body: details,
    })
    return data
  }
  updateCustomFieldOptions = async (
    listId: string,
    customfieldKey: string,
    details: Partial<UpdateCustomFieldOptionsDetails>,
  ) => {
    await putRequest(this.authHeader, `/lists/${listId}/customfields/${customfieldKey}/options.json`, { body: details })
  }
  deleteCustomField = async (listId: string, customfieldKey: string) => {
    await deleteRequest(this.authHeader, `/lists/${listId}/customfields/${customfieldKey}.json`)
  }
  deleteList = async (listId: string) => {
    await deleteRequest(this.authHeader, `/lists/${listId}.json`)
  }
  listWebhooks = async (listId: string) => {
    const data = await getRequest<Webhook[]>(this.authHeader, `/lists/${listId}/webhooks.json`)
    return data
  }
  createWebhook = async (listId: string, details: CreateWebhookDetails) => {
    const data = await postRequest<string>(this.authHeader, `/lists/${listId}/webhooks.json`, { body: details })
    return data
  }
  testWebhook = async (listId: string, webhookId: string) => {
    await getRequest(this.authHeader, `/lists/${listId}/webhooks/${webhookId}/test.json`)
  }
  deleteWebhook = async (listId: string, webhookId: string) => {
    await deleteRequest(this.authHeader, `/lists/${listId}/webhooks/${webhookId}.json`)
  }
  activateWebhook = async (listId: string, webhookId: string) => {
    await putRequest(this.authHeader, `/lists/${listId}/webhooks/${webhookId}/activate.json`)
  }
  deactivateWebhook = async (listId: string, webhookId: string) => {
    await putRequest(this.authHeader, `/lists/${listId}/webhooks/${webhookId}/deactivate.json`)
  }
}

export default ListService
