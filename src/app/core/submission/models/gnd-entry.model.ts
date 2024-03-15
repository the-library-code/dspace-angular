
  export class GndEntry {
    page: GndPageInfo;
  }

  export class GndPageInfo {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  }

  export class ExternalGndSourceData {
    id: string;
    display: string;
    value: string;
    externalSource: string;
    metadata: {
      [key: string]: {
        value: string;
        language: any;
        authority: any;
        confidence: number;
        place: number;
      }[];
    };
    type: string;
    _links: {
      self: {
        href: string;
      };
    };
  }
  
  export class Page {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  }
  
  export class GndExternalSourceResponse {
    _embedded: {
      externalSourceEntries: ExternalGndSourceData[];
    };
    _links: {
      first?: {
        href: string;
      };
      prev?: {
        href: string;
      };
      self?: {
        href: string;
      };
      last?: {
        href: string;
      };
    };
    page: Page;
  }
  
  
