import { Role } from '../interfaces/role';
import { addRole, deleteRole, getRoles, updateRole } from '../api/apiService';
import { create } from 'zustand';

interface RoleState {
    roles: Role[];
    fetchRoles: (identifier: string) => Promise<void>;
    addRole: (identifier: string, role: Omit<Role, 'id'>) => Promise<void>;
    updateRole: (identifier: string, role: Role) => void;
    deleteRole: (identifier: string, id: string) => Promise<{ message: string, success: boolean }>;
    loading: boolean;
}

const useRoleStore = create<RoleState>((set) => ({
    roles: [],
    loading: false,

    fetchRoles: async (identifier: string) => {
        set({ loading: true });
        try {
            const fetchedRoles = await getRoles(identifier);
            set({ roles: fetchedRoles });

        } catch (error) {
            console.error('Error fetching roles:', error);
        } finally {
            set({ loading: false });
        }
    },

    addRole: async (identifier: string, role: Omit<Role, 'id'>) => {
        set({ loading: true });
        try {
            const newRole = await addRole(identifier, role);
            set((state) => ({ roles: [...state.roles, newRole] }));
            return newRole
        } catch (error) {
            console.error('Error adding role:', error);

        } finally {
            set({ loading: false });
        }

    },

    updateRole: async (identifier: string, role: Role) => {
        set({ loading: true });
        try {
            const updatedRole = await updateRole(identifier, role);

            set((state) => ({
                roles: state.roles.map((r) => (r.id === role.id ? updatedRole : r)),
            }));
            return updateRole
        } catch (error) {
            console.error('Error updating role:', error);

        } finally {
            set({ loading: false });
        }

    },

    deleteRole: async (identifier: string, id: string): Promise<{ message: string, success: boolean }> => {
        try {
            const res = await deleteRole(identifier, id);
            if (res.length > 0) {
                set((state) => ({ roles: state.roles.filter((r) => r.id !== id) }));
                return { message: res, success: true }
            }
            return { message: "Failed Deleting Role", success: false }
        } catch (error) {
            console.error('Error deleting role:', error);
            return { message: "Failed Deleting Role", success: false }
        }

    },
}));

export default useRoleStore;
