interface Rule {
  RuleType: string
  Clause: string
}

interface RuleGroup {
  Rules: Rule[]
}

export interface CreateSegmentDetails {
  Title: string
  RuleGroups: RuleGroup[]
}

export interface UpdateSegmentDetails {
  Title: string
  RuleGroups?: RuleGroup[]
}

export interface AddSegmentRulegroupDetails {
  Rules: Rule[]
}

export interface SegmentDetails {
  ActiveSubscribers: number
  RuleGroups: RuleGroup[]
  ListID: string
  SegmentID: string
  Title: string
}
