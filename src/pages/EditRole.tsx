import { useParams } from "react-router-dom";
import SharedLayout from "../components/Layout/SharedLayout";
import RoleForm from "../components/RoleForm";
import useRoleForm from "../hooks/useRoleForm";

const EditRole = () => {
    const { id } = useParams()
    const {
        handlePermissionChange,
        handleTextFieldChange,
        handleSelectIcon,
        handleEditRole,
        name,
        error,
        selectedIcon,
        permissions
    } = useRoleForm(id)

    return (
        <SharedLayout title="Edit Custome Role" back>
            <RoleForm
                name={name}
                handleTextFieldChange={handleTextFieldChange}
                error={error}
                selectedIcon={selectedIcon}
                handleSelectIcon={handleSelectIcon}
                permissions={permissions}
                handlePermissionChange={handlePermissionChange}
                handleSubmit={handleEditRole}
            />
        </SharedLayout>
    );
}

export default EditRole;
