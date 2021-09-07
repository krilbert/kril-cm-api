import { deleteRequest, getRequest, postRequest, putRequest } from '../api-client'
import { Template } from '../types/clients.types'
import { TemplateDetails } from '../types/templates.types'
import Base from './base'

interface TemplateInterface {
  getTemplate(templateId: string): Promise<Template>
  createTemplate(clientId: string, details: TemplateDetails): Promise<string>
  updateTemplate(templateId: string, details: Partial<TemplateDetails>): Promise<void>
  deleteTemplate(templateId: string): Promise<void>
}

class TemplateService extends Base implements TemplateInterface {
  getTemplate = async (templateId: string) => {
    const data = await getRequest<Template>(this.authHeader, `/templates/${templateId}.json`)
    return data
  }
  createTemplate = async (clientId: string, details: TemplateDetails) => {
    const data = await postRequest<string>(this.authHeader, `/templates/${clientId}.json`, { body: details })
    return data
  }
  updateTemplate = async (templateId: string, details: Partial<TemplateDetails>) => {
    await putRequest(this.authHeader, `/templates/${templateId}.json`, { body: details })
  }
  deleteTemplate = async (templateId: string) => {
    await deleteRequest(this.authHeader, `/templates/${templateId}.json`)
  }
}

export default TemplateService
