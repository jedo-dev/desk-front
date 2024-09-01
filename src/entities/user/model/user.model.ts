import { Domain } from './domain.model';
import { Group } from './group.model';
import { Role } from './role.model';

export interface IUser {
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
