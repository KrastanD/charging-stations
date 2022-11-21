export interface Result {
  DataProvider: DataProvider;
  OperatorInfo: OperatorInfo;
  UsageType: UsageType;
  StatusType: StatusType;
  SubmissionStatus: SubmissionStatus;
  UserComments: UserComment[] | null;
  PercentageSimilarity?: null;
  MediaItems: MediaItem[] | null;
  IsRecentlyVerified: boolean;
  DateLastVerified: Date;
  ID: number;
  UUID: string;
  ParentChargePointID: number | null;
  DataProviderID: number;
  DataProvidersReference: null | string;
  OperatorID: number;
  OperatorsReference: null | string;
  UsageTypeID: number;
  UsageCost: null | string;
  AddressInfo: ResultAddressInfo;
  Connections: Connection[];
  NumberOfPoints: number;
  GeneralComments: null | string;
  DatePlanned: Date | null;
  DateLastConfirmed: Date | null;
  StatusTypeID: number;
  DateLastStatusUpdate: Date;
  MetadataValues: null[] | null;
  DataQualityLevel: number;
  DateCreated: Date;
  SubmissionStatusTypeID: number;
}

export interface ResultAddressInfo {
  ID: number;
  description?: string;
  AddressLine1: string;
  AddressLine2: null | string;
  Town: string;
  StateOrProvince: string;
  Postcode: string;
  CountryID: number;
  Country: Country;
  Latitude: number;
  Longitude: number;
  ContactTelephone1: null | string;
  ContactTelephone2: null | string;
  ContactEmail: null | string;
  AccessComments: null | string;
  RelatedURL: null | string;
  Distance: null;
  DistanceUnit: number;
  Title?: string;
}

export interface Country {
  ISOCode: string;
  ContinentCode: string;
  ID: number;
  description?: string;
  Title?: string;
}

export interface Connection {
  ID: number;
  ConnectionTypeID: number;
  ConnectionType: ConnectionType;
  Reference: null;
  StatusTypeID: number;
  StatusType: StatusType;
  LevelID: number;
  Level: Level;
  Amps: number | null;
  Voltage: number | null;
  PowerKW: number;
  CurrentTypeID: number;
  CurrentType: SubmissionStatus;
  Quantity: number;
  Comments: null | string;
}

export interface ConnectionType {
  FormalName: string;
  IsDiscontinued: boolean;
  IsObsolete: boolean;
  ID: number;
  description?: string;
  Title?: string;
}

export interface SubmissionStatus {
  Description?: string;
  ID: number;
  description?: string;
  Title?: string;
  IsLive?: boolean;
}

export interface Level {
  Comments: string;
  IsFastChargeCapable: boolean;
  ID: number;
  description?: string;
  Title?: string;
}

export interface StatusType {
  IsOperational: boolean;
  IsUserSelectable: boolean;
  ID: number;
  description?: string;
  Title?: string;
}

export interface DataProvider {
  WebsiteURL: string;
  Comments: null | string;
  DataProviderStatusType: DataProviderStatusType;
  IsRestrictedEdit: boolean;
  IsOpenDataLicensed: boolean | string;
  IsApprovedImport: boolean | string;
  License: string;
  DateLastImported: null | Date;
  ID: number;
  description?: string;
  Title?: string;
}

export interface DataProviderStatusType {
  IsProviderEnabled: boolean;
  ID: number[] | number;
  description?: string[] | string;
}

export interface MediaItem {
  ID: string;
  ChargePointID: string;
  ItemURL: string;
  ItemThumbnailURL: string;
  Comment: string;
  IsEnabled: boolean;
  IsVideo: boolean;
  IsFeaturedItem: boolean;
  IsExternalResource: boolean;
  User: User;
  DateCreated: string;
}

export interface User {
  ID: number;
  Username: string;
  ReputationPoints: number;
  ProfileImageURL: string;
}

export interface OperatorInfo {
  WebsiteURL: string;
  Comments: null;
  PhonePrimaryContact: string;
  PhoneSecondaryContact: string;
  IsPrivateIndividual: boolean;
  AddressInfo: OperatorInfoAddressInfo | null;
  BookingURL: null | string;
  ContactEmail: null | string;
  FaultReportEmail: null | string;
  IsRestrictedEdit: boolean;
  ID: number;
  description?: string;
  Title?: string;
}

export interface OperatorInfoAddressInfo {
  ID: number;
  AddressLine1: string;
  AddressLine2: null;
  Town: string;
  StateOrProvince: string;
  Postcode: string;
  CountryID: number;
  Country: Country;
  Latitude: number;
  Longitude: number;
  ContactTelephone1: null;
  ContactTelephone2: null;
  ContactEmail: string;
  AccessComments: string;
  RelatedURL: null;
  Distance: null;
  DistanceUnit: number;
  Title: string;
}

export interface UsageType {
  IsPayAtLocation: boolean;
  IsMembershipRequired: boolean;
  IsAccessKeyRequired: boolean;
  ID: number;
  description?: string;
  Title?: string;
}

export interface UserComment {
  ID: string;
  ChargePointID: number;
  CommentTypeID: number;
  CommentType: CommentType;
  UserName: string;
  Comment: string;
  RelatedURL: string;
  DateCreated: Date;
  User: User;
  CheckinStatusTypeID: number;
  CheckinStatusType: CheckinStatusType;
}

export interface CheckinStatusType {
  ID: number;
  Title: string;
  IsAutomatedCheckin: boolean;
  IsPositive: boolean;
}

export interface CommentType {
  ID: number;
  Title: string;
}
