import { useState } from "react";
import { initialPermissionsState, Permission, Role } from "../interfaces/role";
import useRoleStore from "../store/roles";
import { useUserRoles } from "./useUserRoles";

const useRoleForm = (id?: any) => {
    const { roles } = useRoleStore()
    const { handleRoleAdd, handleRoleEdit } = useUserRoles()
    const role = roles.find((role: Role) => role.id == id!)

    const [name, setName] = useState(role?.name || '');
    const [error, setError] = useState('');
    const [selectedIcon, setSelectedIcon] = useState<number>(role?.roleIcon || 0)
    const [permissions, setPermissions] = useState<Permission[]>(
        role?.permissions || initialPermissionsState
    );

    const handlePermissionChange = (id: number, newAccessLevel: number) => {
        setPermissions((prevPermissions) =>
            prevPermissions.map((permission) =>
                permission.id === id
                    ? { ...permission, accessLevel: newAccessLevel }
                    : permission
            )
        );
    };

    const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        if (!e.target.value) {
            setError('Name is required');
        } else {
            setError('');
        }
    };

    const handleSelectIcon = (id: number) => setSelectedIcon(id)

    const handleAddRole = () => {
        handleRoleAdd({ name, permissions, roleIcon: selectedIcon, isCustom: true, id: '0' })
    }

    const handleEditRole = () => {
        handleRoleEdit({ name, permissions, roleIcon: selectedIcon, isCustom: true, id })
    }


    return {
        handlePermissionChange,
        handleTextFieldChange,
        handleSelectIcon,
        handleAddRole,
        handleEditRole,
        name,
        error,
        selectedIcon,
        permissions
    }
}

export default useRoleForm;
