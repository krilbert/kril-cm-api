import { deleteRequest, getRequest, postRequest } from '../api-client'
import {
  AddDraftCampaignDetails,
  AddDraftCampaignFromTemplateDetails,
  CampaignBounces,
  CampaignClicks,
  CampaignOpens,
  CampaignRecipients,
  CampaignSpamComplaints,
  CampaignSummary,
  CampaignUnsubscribes,
  EmailClientUsage,
  GetCampaignBouncesDetails,
  GetCampaignClicksDetails,
  GetCampaignOpensDetails,
  GetCampaignRecipientsDetails,
  GetCampaignSpamComplaintsDetails,
  GetCampaignUnsubscribesDetails,
  ListsAndSegments,
  SendCAmpaignPreviewDetails,
  SendDraftCampaignDetails,
} from '../types/campaigns.types'
import Base from './base'

interface CampaignInterface {
  addDraftCampaign(clientID: string, details: AddDraftCampaignDetails): Promise<string>
  addDraftCampaignFromTemplate(clientID: string, details: AddDraftCampaignFromTemplateDetails): Promise<string>
  sendDraftCampaign(campaignID: string, details: SendDraftCampaignDetails): Promise<void>
  sendCampaignPreview(campaignID: string, details: SendCAmpaignPreviewDetails): Promise<void>
  getSummary(campaignID: string): Promise<CampaignSummary>
  getCampaignEmailClientUsage(campaignID: string): Promise<EmailClientUsage[]>
  getCampaignListsAndSegments(campaignID: string): Promise<ListsAndSegments>
  getCampaignRecipients(campaignID: string, details: GetCampaignRecipientsDetails): Promise<CampaignRecipients>
  getCampaignBounces(campaignID: string, details: GetCampaignBouncesDetails): Promise<CampaignBounces>
  getCampaignOpens(campaignID: string, details: GetCampaignOpensDetails): Promise<CampaignOpens>
  getCampaignClicks(campaignID: string, details: GetCampaignClicksDetails): Promise<CampaignClicks>
  getCampaignUnsubscribes(campaignID: string, details: GetCampaignUnsubscribesDetails): Promise<CampaignUnsubscribes>
  getCampaignSpamComplaints(
    campaignID: string,
    details: GetCampaignSpamComplaintsDetails,
  ): Promise<CampaignSpamComplaints>
  deleteCampaign(campaignID: string): Promise<void>
  unscheduleCampaign(campaignID: string): Promise<void>
}

class CampaignService extends Base implements CampaignInterface {
  addDraftCampaign = async (clientID: string, details: AddDraftCampaignDetails) => {
    const data = await postRequest<string>(this.authHeader, `/campaigns/${clientID}.json`, {
      body: details,
    })
    return data
  }
  addDraftCampaignFromTemplate = async (clientID: string, details: AddDraftCampaignFromTemplateDetails) => {
    const data = await postRequest<string>(this.authHeader, `/campaigns/${clientID}/fromtemplate.json`, {
      body: details,
    })
    return data
  }
  sendDraftCampaign = async (campaignID: string, details: SendDraftCampaignDetails) => {
    const emails = details.ConfirmationEmail.split(',')
    if (emails.length > 5) throw new Error('maximum of five comma-separated email addresses')

    await postRequest(this.authHeader, `/campaigns/${campaignID}/send.json`, {
      body: details,
    })
  }
  sendCampaignPreview = async (campaignID: string, details: SendCAmpaignPreviewDetails) => {
    await postRequest(this.authHeader, `/campaigns/${campaignID}/sendpreview.json`, {
      body: details,
    })
  }
  getSummary = async (campaignID: string) => {
    const data = await getRequest<CampaignSummary>(this.authHeader, `/campaigns/${campaignID}/summary.json`)
    return data
  }
  getCampaignEmailClientUsage = async (campaignID: string) => {
    const data = await getRequest<EmailClientUsage[]>(this.authHeader, `/campaigns/${campaignID}/emailclientusage.json`)
    return data
  }
  getCampaignListsAndSegments = async (campaignID: string) => {
    const data = await getRequest<ListsAndSegments>(this.authHeader, `/campaigns/${campaignID}/listsandsegments.json`)
    return data
  }
  getCampaignRecipients = async (campaignID: string, details: GetCampaignRecipientsDetails) => {
    const data = await getRequest<CampaignRecipients>(this.authHeader, `/campaigns/${campaignID}/recipients.json`, {
      queryParams: details,
    })
    return data
  }
  getCampaignBounces = async (campaignID: string, details: GetCampaignBouncesDetails) => {
    const data = await getRequest<CampaignBounces>(this.authHeader, `/campaigns/${campaignID}/bounces.json`, {
      queryParams: details,
    })
    return data
  }
  getCampaignOpens = async (campaignID: string, details: GetCampaignOpensDetails) => {
    const data = await getRequest<CampaignOpens>(this.authHeader, `/campaigns/${campaignID}/opens.json`, {
      queryParams: details,
    })
    return data
  }
  getCampaignClicks = async (campaignID: string, details: GetCampaignClicksDetails) => {
    const data = await getRequest<CampaignClicks>(this.authHeader, `/campaigns/${campaignID}/clicks.json`, {
      queryParams: details,
    })
    return data
  }
  getCampaignUnsubscribes = async (campaignID: string, details: GetCampaignUnsubscribesDetails) => {
    const data = await getRequest<CampaignUnsubscribes>(this.authHeader, `/campaigns/${campaignID}/unsubscribes.json`, {
      queryParams: details,
    })
    return data
  }
  getCampaignSpamComplaints = async (campaignID: string, details: GetCampaignSpamComplaintsDetails) => {
    const data = await getRequest<CampaignSpamComplaints>(this.authHeader, `/campaigns/${campaignID}/spam.json`, {
      queryParams: details,
    })
    return data
  }
  deleteCampaign = async (campaignID: string) => {
    await deleteRequest(this.authHeader, `/campaigns/${campaignID}.json`)
  }
  unscheduleCampaign = async (campaignID: string) => {
    await postRequest(this.authHeader, `/campaigns/${campaignID}/unschedule.json`)
  }
}

export default CampaignService
