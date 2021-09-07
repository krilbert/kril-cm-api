import { deleteRequest, getRequest, postRequest, putRequest } from '../api-client'
import { ActiveSubscribers, ActiveSubscribersDetails } from '../types/list.types'
import {
  AddSegmentRulegroupDetails,
  CreateSegmentDetails,
  SegmentDetails,
  UpdateSegmentDetails,
} from '../types/segments.types'
import Base from './base'

interface SegmentInterface {
  createSegment(listId: string, details: CreateSegmentDetails): Promise<string>
  updateSegment(segmentId: string, details: Partial<UpdateSegmentDetails>): Promise<void>
  addSegmentRulegroup(segmentId: string, details: AddSegmentRulegroupDetails): Promise<void>
  getSegmentDetails(segmentId: string): Promise<SegmentDetails>
  getActiveSubscribers(segmentId: string, details?: ActiveSubscribersDetails): Promise<ActiveSubscribers>
  deleteSegment(segmentId: string): Promise<void>
  deleteSegmentRules(segmentId: string): Promise<void>
}

class SegmentService extends Base implements SegmentInterface {
  createSegment = async (listId: string, details: CreateSegmentDetails) => {
    const data = await postRequest<string>(this.authHeader, `/segments/${listId}.json`, { body: details })
    return data
  }
  updateSegment = async (segmentId: string, details: Partial<UpdateSegmentDetails>) => {
    await putRequest(this.authHeader, `/segments/${segmentId}.json`, { body: details })
  }
  addSegmentRulegroup = async (segmentId: string, details: AddSegmentRulegroupDetails) => {
    await postRequest(this.authHeader, `/segments/${segmentId}/rules.json`, { body: details })
  }
  getSegmentDetails = async (segmentId: string) => {
    const data = await getRequest<SegmentDetails>(this.authHeader, `/segments/${segmentId}.json`)
    return data
  }
  getActiveSubscribers = async (segmentId: string, details?: ActiveSubscribersDetails) => {
    const data = await getRequest<ActiveSubscribers>(this.authHeader, `/segments/${segmentId}.active.json`, {
      queryParams: details,
    })
    return data
  }
  deleteSegment = async (segmentId: string) => {
    await deleteRequest(this.authHeader, `/segments/${segmentId}.json`)
  }
  deleteSegmentRules = async (segmentId: string) => {
    await deleteRequest(this.authHeader, `/segments/${segmentId}/rules.json`)
  }
}

export default SegmentService
