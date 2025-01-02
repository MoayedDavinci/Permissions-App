import { useState, useEffect } from 'react';
import useRoleStore from '../store/roles';
import { Role } from '../interfaces/role';
import { API_IDENTIFIER } from '../api/apiConfig';
import { useAlert } from './useAlert';
import { useNavigate } from 'react-router-dom';

export const useUserRoles = () => {
    const { roles, fetchRoles, addRole, updateRole, deleteRole, loading } = useRoleStore();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState<Role | null>(null);
    const { showAlert } = useAlert();
    const navigate = useNavigate()

    useEffect(() => {
        if (!roles.length) {
            fetchRoles(API_IDENTIFIER);
        }
    }, [fetchRoles, API_IDENTIFIER]);

    const handleDeleteRole = async () => {
        if (selectedRole) {
            const res = await deleteRole(API_IDENTIFIER, selectedRole.id);
            showAlert(res.message!, res.success ? 'success' : 'danger')
            handleCloseDialog();
        }
    };
    const handleRoleAdd = async (role: Role) => {
        const result = await addRole(API_IDENTIFIER, role);
        //@ts-ignore
        if (result) {
            showAlert("Successfuylly Added Role", "success")
            navigate(-1)

        } else {
            showAlert("Failed to add role", "danger")
        }
        handleCloseDialog();

    };
    const handleRoleEdit = async (role: Role) => {
        const result = await updateRole(API_IDENTIFIER, role);
        //@ts-ignore
        if (result) {
            showAlert("Successfuylly Updated Role", "success")
            navigate(-1)

        } else {
            showAlert("Failed to update role", "danger")
        }
        handleCloseDialog();

    };

    const handleOpenDialog = (role: Role) => {
        setDialogOpen(true);
        setSelectedRole(role);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setSelectedRole(null);
    };

    return {
        roles,
        loading,
        dialogOpen,
        selectedRole,
        handleDeleteRole,
        handleRoleAdd,
        handleRoleEdit,
        handleOpenDialog,
        handleCloseDialog,
    };
};
