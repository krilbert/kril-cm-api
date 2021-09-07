import { deleteRequest, getRequest, postRequest, putRequest } from '../api-client'
import {
  AddAdminDetails,
  Administrator,
  Client,
  GetEmbeddedSessionDetails,
  SessionUrl,
  SystemDate,
  UpdateAdminDetails,
} from '../types/account.types'
import { BillingDetails } from '../types/clients.types'
import { Country, EmailAddress, Timezone } from '../types/shared.types'
import Base from './base'

interface AccountInterface {
  getClients(): Promise<Client[]>
  getBillingDetails(): Promise<BillingDetails>
  getValidCountries(): Promise<Country[]>
  getValidTimezones(): Promise<Timezone[]>
  getCurrentDate(): Promise<SystemDate>
  addAdministrator(details: AddAdminDetails): Promise<EmailAddress>
  updateAdministrator(email: string, details: Partial<UpdateAdminDetails>): Promise<EmailAddress>
  getAdministrators(): Promise<Administrator[]>
  getAdministratorDetails(email: string): Promise<Administrator>
  deleteAdministrator(email: string): Promise<void>
  setPrimaryContact(email: string): Promise<EmailAddress>
  getPrimaryContact(): Promise<EmailAddress>
  getEmbeddedSession(details: Partial<GetEmbeddedSessionDetails>): Promise<SessionUrl>
}

class AccountService extends Base implements AccountInterface {
  getClients = async () => {
    const data = await getRequest<Client[]>(this.authHeader, '/clients.json')
    return data
  }
  getBillingDetails = async () => {
    const data = await getRequest<BillingDetails>(this.authHeader, '/billingdetails.json')
    return data
  }
  getValidCountries = async () => {
    const data = await getRequest<Country[]>(this.authHeader, '/countries.json')
    return data
  }
  getValidTimezones = async () => {
    const data = await getRequest<Timezone[]>(this.authHeader, '/timezones.json')
    return data
  }
  getCurrentDate = async () => {
    const data = await getRequest<SystemDate>(this.authHeader, '/systemdate.json')
    return data
  }
  addAdministrator = async (details: AddAdminDetails) => {
    const data = await postRequest<EmailAddress>(this.authHeader, '/admins.json', { body: details })
    return data
  }
  updateAdministrator = async (email: string, details: Partial<UpdateAdminDetails>) => {
    const data = await putRequest<EmailAddress>(this.authHeader, '/admins.json', {
      queryParams: { email },
      body: details,
    })
    return data
  }
  getAdministrators = async () => {
    const data = await getRequest<Administrator[]>(this.authHeader, '/admins.json')
    return data
  }
  getAdministratorDetails = async (email: string) => {
    const data = await getRequest<Administrator>(this.authHeader, '/admins.json', {
      queryParams: { email },
    })
    return data
  }
  deleteAdministrator = async (email: string) => {
    await deleteRequest(this.authHeader, '/admins.json', {
      queryParams: { email },
    })
  }
  setPrimaryContact = async (email: string) => {
    const data = await putRequest<EmailAddress>(this.authHeader, '/primarycontact.json', {
      queryParams: { email },
    })
    return data
  }
  getPrimaryContact = async () => {
    const data = await getRequest<EmailAddress>(this.authHeader, '/primarycontact.json')
    return data
  }
  getEmbeddedSession = async (details: Partial<GetEmbeddedSessionDetails>) => {
    const data = await putRequest<SessionUrl>(this.authHeader, '/externalsession.json', {
      body: details,
    })
    return data
  }
}

export default AccountService
