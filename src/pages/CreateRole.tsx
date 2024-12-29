import { useParams } from "react-router-dom";
import SharedLayout from "../components/Layout/SharedLayout";
import RoleForm from "../components/RoleForm";
import useRoleForm from "../hooks/useRoleForm";

const CreateRole = () => {
    const { id } = useParams()
    const {
        handlePermissionChange,
        handleTextFieldChange,
        handleSelectIcon,
        handleAddRole,
        name,
        error,
        selectedIcon,
        permissions
    } = useRoleForm(id)
    return (
        <SharedLayout title="Create Custome Role" back>
            <RoleForm
                name={name}
                handleTextFieldChange={handleTextFieldChange}
                error={error}
                selectedIcon={selectedIcon}
                handleSelectIcon={handleSelectIcon}
                permissions={permissions}
                handlePermissionChange={handlePermissionChange}
                handleSubmit={handleAddRole}
            />
        </SharedLayout>
    );
}

export default CreateRole;
