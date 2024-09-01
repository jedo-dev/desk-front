export interface IIncomingTask {
  id: number;
  taskId: string;
  processName: string;
  taskName: string;
  startDate: number;
  dueDate: number;
  formKey: string;
  localVariables: LocalVariables;
}

export interface IPendingTask {
  processId: string;
  processName: string;
  taskName?: string;
  initiatorFio: string;
  initiatorId: string;
  assigneeFio?: string;
  startDate: number;
  dueDate: number;
  latestTaskCreatedDate?: number;
}

export interface LocalVariables {
  equipmentOwnerLogin?: any;
  agent?: any;
  addReportReasons?: AddReportReason[];
  actionFDocTemp?: any;
  isPates?: boolean;
  assignFDocTemp?: any;
  dueDate: string;
  organizationAddReport?: OrganizationAddReport;
  commentHistory: CommentHistory[];
  workerGroupLogin?: any;
  orderExecutorLogin?: string;
  instructionList: InstructionList[];
  isFromPrg?: any;
  oldNarReport?: number;
  orderOwnerLogin?: any;
  taskDefinition: TaskDefinition;
  agentList?: any[];
  isShort?: any;
  attachedLinkTemp?: any[];
  OTKLON_EXPERT_DKBiP?: any;
  attachedFileTemp?: any[];
  dataExtractorLogin?: string;
  actionResultive?: any;
  processDescr: string;
  projectRepeatedState?: any;
  oldOtklonReport?: any;
  snusToSave?: any;
  orderExecutorApproverLogin?: string;
  isShortBranch?: boolean;
  CHAIRMAN_COMMISION?: string;
  initiatorLogin: string;
  referenceTables?: ReferenceTable;
  responsibleLogin?: any;
  expertVniaesLogin?: any;
  isAdditionalInvestigation?: boolean;
  isFromAct?: any;
  startDate?: any;
}

export interface ReferenceTable {
  nar_r_subsys: Narrsubsys;
  nar_r_category: Narrsubsys;
  nar_r_cs_r: Narrsubsys;
  nar_r_sys_dvc: Narrsubsys;
  nar_r_cs_d: Narrsubsys;
  nar_r_feature: Narrsubsys;
  nar_r_impact: Narrsubsys;
  nar_r_sys: Narrsubsys;
}

export interface Narrsubsys {
  key: string;
  pnag: number;
}

export interface TaskDefinition {
  PP?: number;
  ASSIGN?: number;
}

export interface InstructionList {
  id?: string;
  isTableInstruction?: boolean;
  status?: Status;
  type?: AddReportReason;
  dueNumber?: number;
  assignee?: string;
  approver?: string;
  body?: string;
  initiator?: Initiator;
  pabpRNpp?: PabpRNpp;
  nonRemovable?: boolean;
  assign?: Assign;
}

export interface Assign {
  id: number;
  createdBy: string;
  createdDate: string;
  updatedBy: string;
  updatedDate: string;
  status: Status2;
  body: string;
  dtCreate?: any;
  planedDateComplete: string;
  factDateComplete?: any;
  documentOsnLink: string;
  documentOsnNumber: string;
  initiator: string;
  assignee: string;
  approver: string;
  completionReport?: any;
  camundaProcId?: any;
  type: AddReportReason;
  number: number;
  pabpRNpp: PabpRNpp2;
  assigneeContr?: any;
  numberString: string;
  dueNumber: number;
  renewalDate?: any;
  nameForFrontend: string;
  dueDate: string;
}

export interface PabpRNpp2 {
  id: number;
  createdBy: string;
  createdDate: string;
  updatedBy: string;
  updatedDate: string;
  shortName: string;
  fullName: string;
  code: string;
  priznak: string;
  label: string;
}

export interface Status2 {
  id: number;
}

export interface PabpRNpp {
  id: number;
  createdBy?: string;
  createdDate: string;
  updatedBy?: string;
  updatedDate?: string;
  shortName: string;
  fullName: string;
  code: string;
  priznak: string;
  label: string;
}

export interface Initiator {
  id: string;
  unsiUserId?: any;
  firstName: string;
  lastName: string;
  roles: Role[];
  subdivision: string;
  subdivisionTxt: string;
  groups: Group[];
  email: string;
  realmId: string;
  login: string;
  created: string;
  password: string;
  active: boolean;
  isUnsi: boolean;
  position: string;
  domain: Domain;
  label: string;
  updatedDate: string;
}

export interface Domain {
  id: number;
  loginPrefix: string;
  description: string;
  alias: string;
  code: string;
  federationLink: string;
}

export interface Group {
  id: string;
  name: string;
}

export interface Role {
  id: string;
  name: string;
  code: string;
  realmId: string;
}

export interface Status {
  id: number;
  code: string;
  status: string;
  docType: DocType;
  label: string;
}

export interface DocType {
  id: string;
  name: string;
  viewLink: string;
  dbTable: string;
}

export interface CommentHistory {
  lastName: string;
  firstName: string;
  data: string;
  action: Action;
  taskName: string;
}

export interface Action {
  color: string;
  title: string;
  type: string;
}

export interface OrganizationAddReport {
  id: number;
  level: string;
  name: string;
}

export interface AddReportReason {
  id: number;
  name: string;
  code: string;
}
