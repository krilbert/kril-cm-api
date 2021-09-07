import { getRequest } from '../api-client'
import {
  GetEmailBouncesDetails,
  GetEmailClicksDetails,
  GetEmailOpensDetails,
  GetEmailRecipientsDetails,
  GetEmailUnsubscribesDetails,
  Journey,
  JourneyEmailBounces,
  JourneyEmailClicks,
  JourneyEmailOpens,
  JourneyEmailRecipients,
  JourneyEmailUnsubscribes,
  JourneySummary,
} from '../types/journeys.types'
import Base from './base'

interface JourneyInterface {
  getAll(clientID: string): Promise<Journey[]>
  getSummary(journeyID: string): Promise<JourneySummary>
  getEmailRecipients(emailID: string, details: GetEmailRecipientsDetails): Promise<JourneyEmailRecipients>
  getEmailOpens(emailID: string, details: GetEmailOpensDetails): Promise<JourneyEmailOpens>
  getEmailClicks(emailID: string, details: GetEmailClicksDetails): Promise<JourneyEmailClicks>
  getEmailBounces(emailID: string, details: GetEmailBouncesDetails): Promise<JourneyEmailBounces>
  getEmailUnsubscribes(emailID: string, details: GetEmailUnsubscribesDetails): Promise<JourneyEmailUnsubscribes>
}

class JourneyService extends Base implements JourneyInterface {
  getAll = async (clientID: string) => {
    const data = await getRequest<Journey[]>(this.authHeader, `/clients/${clientID}/journeys.json`)
    return data
  }
  getSummary = async (journeyID: string) => {
    const data = await getRequest<JourneySummary>(this.authHeader, `/journeys/${journeyID}.json`)
    return data
  }
  getEmailRecipients = async (emailID: string, details: GetEmailRecipientsDetails) => {
    const data = await getRequest<JourneyEmailRecipients>(
      this.authHeader,
      `/journeys/email/${emailID}/recipients.json`,
      {
        queryParams: details,
      },
    )
    return data
  }
  getEmailOpens = async (emailID: string, details: GetEmailOpensDetails) => {
    const data = await getRequest<JourneyEmailOpens>(this.authHeader, `/journeys/email/${emailID}/opens.json`, {
      queryParams: details,
    })
    return data
  }
  getEmailClicks = async (emailID: string, details: GetEmailClicksDetails) => {
    const data = await getRequest<JourneyEmailClicks>(this.authHeader, `/journeys/email/${emailID}/clicks.json`, {
      queryParams: details,
    })
    return data
  }
  getEmailBounces = async (emailID: string, details: GetEmailBouncesDetails) => {
    const data = await getRequest<JourneyEmailBounces>(this.authHeader, `/journeys/email/${emailID}/bounces.json`, {
      queryParams: details,
    })
    return data
  }
  getEmailUnsubscribes = async (emailID: string, details: GetEmailUnsubscribesDetails) => {
    const data = await getRequest<JourneyEmailUnsubscribes>(
      this.authHeader,
      `/journeys/email/${emailID}/unsubscribes.json`,
      {
        queryParams: details,
      },
    )
    return data
  }
}

export default JourneyService
