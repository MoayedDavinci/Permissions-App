import { endpoints } from '../api/endpoints';
import api from './apiConfig';

export interface PostRoleDataPayload {
    name: string;
    description?: string;
}

export interface UpdateRoleDataPayload {
    id: string;
    name: string;
    description?: string;
}

const withIdentifier = (url: string, identifier: string) => `${url}?identifier=${identifier}`;

export const getRoles = async (identifier: string) => {
    try {
        const response = await api.get(withIdentifier(endpoints.getRoles, identifier));
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addRole = async (identifier: string, roleData: PostRoleDataPayload) => {
    try {
        const response = await api.post(withIdentifier(endpoints.addRole, identifier), roleData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateRole = async (identifier: string, roleData: UpdateRoleDataPayload) => {
    try {
        const response = await api.put(withIdentifier(endpoints.updateRole, identifier), roleData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteRole = async (identifier: string, id: string) => {
    try {
        const response = await api.delete(withIdentifier(endpoints.deleteRole(id), identifier));
        return response.data;
    } catch (error) {
        throw error;
    }
};
