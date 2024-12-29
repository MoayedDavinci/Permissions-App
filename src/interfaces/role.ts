import { RoleIconFourSm } from "../assets/Icons/RoleIconFourSm";
import { RoleIconOneSm } from "../assets/Icons/RoleIconOneSm";
import { RoleIconThreeSm } from "../assets/Icons/RoleIconThreeSm";
import { RoleIconTwoSm } from "../assets/Icons/RoleIconTwoSm";
import { RoleIconZeroSm } from "../assets/Icons/RoleIconZeroSm";

export interface Permission {
    id: number;
    accessLevel: number;
}

export interface Role {
    identifier?: string;
    id: string;
    name: string;
    isCustom: boolean;
    roleIcon: number;
    permissions: Permission[];
    usersAssigned?: number;
}


export enum Permissions {
    'Locks' = 1,
    'Activate Locks',
    'Inventory',
    'Tenant Locks',
    'Facilities',
    'Transfer Facility',
    'Users',
    'Edit Admins',
    'Subdomains',
    'API Settings',
}

const tabsOptionOne = ['None', 'View', 'Edit'];
const tabsOptionTwo = ['No', 'Yes'];

export const tabsOptionMap = {
    1: tabsOptionOne,
    2: tabsOptionTwo,
    3: tabsOptionOne,
    4: tabsOptionOne,
    5: tabsOptionOne,
    6: tabsOptionTwo,
    7: tabsOptionOne,
    8: tabsOptionTwo,
    9: tabsOptionOne,
    10: tabsOptionOne,
}

export const initialPermissionsState: Permission[] = [
    { id: 1, accessLevel: 0 },
    { id: 2, accessLevel: 0 },
    { id: 3, accessLevel: 0 },
    { id: 4, accessLevel: 0 },
    { id: 5, accessLevel: 0 },
    { id: 6, accessLevel: 0 },
    { id: 7, accessLevel: 0 },
    { id: 8, accessLevel: 0 },
    { id: 9, accessLevel: 0 },
    { id: 10, accessLevel: 0 },
]

export const roleIcons = [
    RoleIconZeroSm,
    RoleIconOneSm,
    RoleIconTwoSm,
    RoleIconThreeSm,
    RoleIconFourSm,
]
