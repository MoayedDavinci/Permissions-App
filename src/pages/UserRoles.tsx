import { Role } from "../interfaces/role";
import Card from "../components/Card";
import SharedLayout from "../components/Layout/SharedLayout";
import AddCard from "../components/AddCard";
import styled from "styled-components";
import Dialog from "../components/Dialog";
import { useUserRoles } from "../hooks/useUserRoles";
import Loader from "../components/Loader";


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 303px);
  gap: 24px;
`;

const UserRoles = () => {
    const {
        roles,
        dialogOpen,
        handleDeleteRole,
        handleOpenDialog,
        handleCloseDialog,
        loading
    } = useUserRoles()


    return (
        <SharedLayout title="User Roles">
            {loading && <Loader />}
            <Wrapper>
                {roles.map((role: Role) => <Card key={role.id}
                    custom={role.isCustom}
                    name={role.name}
                    icon={role.roleIcon}
                    id={role.id}
                    handleDeleteRole={() => handleOpenDialog(role)}
                    assignedUsers={role.usersAssigned!} />)}
                {roles.length > 0 && <AddCard />}
            </Wrapper>
            <Dialog
                isOpen={dialogOpen}
                title="Delete Role"
                message="Are you sure you want to delete this role?"
                onClose={handleCloseDialog}
                onConfirm={handleDeleteRole}
            />
        </SharedLayout>
    );
}

export default UserRoles;
