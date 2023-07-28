export type ILead_Owner = {
    firstName: string;
    lastName: string;
  };
  
  export enum ILead_Status {
    WORKING = "Working",
    NEW = "New",
    NURTURING = "Nurturing",
    UNQUALIFIED = "Unqualified",
  }
  
  export type ILead = {
    id: number;
    name: string;
    title: string;
    company: string;
    phone: string;
    mobile: string;
    email: string;
    status: ILead_Status;
    owner: ILead_Owner;
  };
  