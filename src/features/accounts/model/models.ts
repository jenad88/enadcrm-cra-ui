export type IAccount_Owner = {
    firstName: string;
    lastName: string;
  };
  
  export enum IAccount_Type {
    PROSPECT = "Prospect",
    CUSTOMER = "Customer",
  }
  
  export type IAccount = {
    id: number;
    name: string;
    state: string;
    phone: string;
    type: IAccount_Type;
    owner: IAccount_Owner;
  };
  