import { deleteRequest, getRequest, postRequest, putRequest } from '../api-client'
import {
  AddClientDetails,
  AddPersonDetails,
  ClientDetails,
  DraftCampaign,
  GetSuppresionListDetails,
  ListForEmail,
  ListSegment,
  People,
  ScheduledCampaign,
  SentCampaign,
  SetBasicDetailsDetails,
  SetMonthlyBillingDetails,
  SetPAYGBillingDetails,
  SubscriberList,
  SuppressEmailDetails,
  SuppressionList,
  Template,
  TransferCredits,
  TransferCreditsDetails,
  UpdatePersonDetails,
} from '../types/clients.types'
import { EmailAddress } from '../types/shared.types'
import Base from './base'

interface ClientInterface {
  addClient(details: AddClientDetails): Promise<string>
  getClientDetails(clientId: string): Promise<ClientDetails>
  getSentCampaigns(clientId: string): Promise<SentCampaign[]>
  getScheduledCampaigns(clientId: string): Promise<ScheduledCampaign[]>
  getDraftCampaigns(clientId: string): Promise<DraftCampaign[]>
  getSubscriberLists(clientId: string): Promise<SubscriberList[]>
  getListsForEmail(clientId: string, email: string): Promise<ListForEmail[]>
  getSegments(clientId: string): Promise<ListSegment[]>
  getSuppressionList(clientId: string, details: GetSuppresionListDetails): Promise<SuppressionList>
  suppressEmail(clientId: string, details: SuppressEmailDetails): Promise<void>
  unsuppressEmail(clientId: string, email: string): Promise<void>
  getTemplates(clientId: string): Promise<Template[]>
  setBasicDetails(clientId: string, details: Partial<SetBasicDetailsDetails>): Promise<void>
  setPAYGBilling(clientId: string, details: Partial<SetPAYGBillingDetails>): Promise<void>
  setMonthlyBilling(clientId: string, details: Partial<SetMonthlyBillingDetails>): Promise<void>
  transferCredits(clientId: string, details: TransferCreditsDetails): Promise<TransferCredits>
  deleteClient(clientId: string): Promise<void>
  addPerson(clientId: string, details: AddPersonDetails): Promise<EmailAddress>
  updatePerson(clientId: string, email: string, details: Partial<UpdatePersonDetails>): Promise<EmailAddress>
  getPeople(clientId: string): Promise<People[]>
  getPersonDetails(clientId: string, email: string): Promise<People>
  deletePerson(clientId: string, email: string): Promise<void>
  setPrimaryContact(clientId: string, email: string): Promise<EmailAddress>
  getPrimaryContact(clientId: string): Promise<EmailAddress>
}

class ClientService extends Base implements ClientInterface {
  addClient = async (details: AddClientDetails) => {
    const data = await postRequest<string>(this.authHeader, '/clients.json', { body: details })
    return data
  }
  getClientDetails = async (clientId: string) => {
    const data = await getRequest<ClientDetails>(this.authHeader, `/clients/${clientId}`)
    return data
  }
  getSentCampaigns = async (clientId: string) => {
    const data = await getRequest<SentCampaign[]>(this.authHeader, `/clients/${clientId}/campaigns.json`)
    return data
  }
  getScheduledCampaigns = async (clientId: string) => {
    const data = await getRequest<ScheduledCampaign[]>(this.authHeader, `/clients/${clientId}/scheduled.json`)
    return data
  }
  getDraftCampaigns = async (clientId: string) => {
    const data = await getRequest<DraftCampaign[]>(this.authHeader, `/clients/${clientId}/drafts.json`)
    return data
  }
  getSubscriberLists = async (clientId: string) => {
    const data = await getRequest<SubscriberList[]>(this.authHeader, `/clients/${clientId}/lists.json`)
    return data
  }
  getListsForEmail = async (clientId: string, email: string) => {
    const data = await getRequest<ListForEmail[]>(this.authHeader, `/clients/${clientId}/listsforemail.json`, {
      queryParams: { email },
    })
    return data
  }
  getSegments = async (clientId: string) => {
    const data = await getRequest<ListSegment[]>(this.authHeader, `/clients/${clientId}/segments.json`)
    return data
  }
  getSuppressionList = async (clientId: string, details: GetSuppresionListDetails) => {
    const data = await getRequest<SuppressionList>(this.authHeader, `/clients/${clientId}/suppressionlist.json`, {
      queryParams: details,
    })
    return data
  }
  suppressEmail = async (clientId: string, details: SuppressEmailDetails) => {
    await postRequest(this.authHeader, `/clients/${clientId}/suppress.json`, { body: details })
  }
  unsuppressEmail = async (clientId: string, email: string) => {
    await putRequest(this.authHeader, `/clients/${clientId}/unsuppress.json`, { queryParams: { email } })
  }
  getTemplates = async (clientId: string) => {
    const data = await getRequest<Template[]>(this.authHeader, `/clients/${clientId}/templates.json`)
    return data
  }
  setBasicDetails = async (clientId: string, details: Partial<SetBasicDetailsDetails>) => {
    await putRequest(this.authHeader, `/clients/${clientId}/setbasics.json`, { body: details })
  }
  setPAYGBilling = async (clientId: string, details: Partial<SetPAYGBillingDetails>) => {
    await putRequest(this.authHeader, `/clients/${clientId}/setpaygbilling.json`, { body: details })
  }
  setMonthlyBilling = async (clientId: string, details: Partial<SetMonthlyBillingDetails>) => {
    await putRequest(this.authHeader, `/clients/${clientId}/setmonthlybilling.json`, { body: details })
  }
  transferCredits = async (clientId: string, details: TransferCreditsDetails) => {
    const data = await postRequest<TransferCredits>(this.authHeader, `/clients/${clientId}/credits.json`, {
      body: details,
    })
    return data
  }
  deleteClient = async (clientId: string) => {
    await deleteRequest(this.authHeader, `/clients/${clientId}`)
  }
  addPerson = async (clientId: string, details: AddPersonDetails) => {
    const data = await postRequest<EmailAddress>(this.authHeader, `/clients/${clientId}/people.json`, { body: details })
    return data
  }
  updatePerson = async (clientId: string, email: string, details: Partial<UpdatePersonDetails>) => {
    const data = await putRequest<EmailAddress>(this.authHeader, `/clients/${clientId}/people.json`, {
      queryParams: { email },
      body: details,
    })
    return data
  }
  getPeople = async (clientId: string) => {
    const data = await getRequest<People[]>(this.authHeader, `/clients/${clientId}/people.json`)
    return data
  }
  getPersonDetails = async (clientId: string, email: string) => {
    const data = await getRequest<People>(this.authHeader, `/clients/${clientId}/people.json`, {
      queryParams: { email },
    })
    return data
  }
  deletePerson = async (clientId: string, email: string) => {
    await deleteRequest(this.authHeader, `/clients/${clientId}/people.json`, { queryParams: { email } })
  }
  setPrimaryContact = async (clientId: string, email: string) => {
    const data = await putRequest<EmailAddress>(this.authHeader, `/clients/${clientId}/primarycontact.json`, {
      queryParams: { email },
    })
    return data
  }
  getPrimaryContact = async (clientId: string) => {
    const data = await getRequest<EmailAddress>(this.authHeader, `/clients/${clientId}/primarycontact.json`)
    return data
  }
}

export default ClientService
