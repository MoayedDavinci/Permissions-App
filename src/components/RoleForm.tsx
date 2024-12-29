import styled from "styled-components";
import Button from "./Button";
import Typography from "./Typography";
import TextField from "./TextField";
import { Permission, Permissions, roleIcons, tabsOptionMap } from "../interfaces/role";
import Tabs from "./Tabs";
import Icon from "./Icon";


const RoleForm = ({
    name,
    handleTextFieldChange,
    error,
    selectedIcon,
    handleSelectIcon,
    permissions,
    handlePermissionChange,
    handleSubmit
}: any) => {
    return (
        <Wrapper>
            <Typography variant="subtitle">
                Configure general information and permissions below. Don’t forget to save the Custom Role.
            </Typography>

            <TextField
                label="Create Custom Role"
                value={name}
                onChange={handleTextFieldChange}
                error={error}
                placeholder="Input Custom Role Name"
            />
            <RoleIconSelectionWrapper>
                <Typography variant="label">Select Role Icon</Typography>
                <RoleIconsContainer>
                    {roleIcons.map((icon: any, index: number) => (
                        <Icon
                            primary={selectedIcon == index}
                            grey
                            width={"44px"}
                            height={"44px"}
                            svg={icon}
                            onClick={() => handleSelectIcon(index)}
                        />
                    ))}
                </RoleIconsContainer>
            </RoleIconSelectionWrapper>

            <PermissionsTitleWrapper>
                <Typography variant="title">Permissions</Typography>
            </PermissionsTitleWrapper>

            <PermissionsTabsContainer>
                {permissions?.map((per: Permission) => (
                    <Tabs
                        title={Permissions[per.id]}
                        value={per.accessLevel}
                        //@ts-ignore
                        labels={tabsOptionMap[per.id]}
                        onValueChange={(newValue: number) => handlePermissionChange(per.id, newValue)}
                    />
                ))}
            </PermissionsTabsContainer>
            <ActionButtonsWrapper>
                <Button variant="secondary">Cancel</Button>
                <Button onClick={handleSubmit} variant="primary">
                    Save Changes
                </Button>
            </ActionButtonsWrapper>

        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  gap: 24px;
`;

const RoleIconSelectionWrapper = styled.div`
  min-height: 96px;
  width: 644px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const RoleIconsContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const PermissionsTitleWrapper = styled.div`
  margin-top: 7px;
`;

const PermissionsTabsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const ActionButtonsWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 40px;

  @media(max-width:950px){
    margin-top:24px;
    flex-direction:column;
  }
`;

export default RoleForm;
