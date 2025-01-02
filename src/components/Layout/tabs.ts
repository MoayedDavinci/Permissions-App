import LockIcon from "../../assets/Icons/LockIcon";
import UsersIcon from "../../assets/Icons/UsersIcon";
import CompanyIcon from "../../assets/Icons/CompanyIcon";
import SassyIcon from "../../assets/Icons/SassyIcon";
import PaperIcon from "../../assets/Icons/PaperIcon";
import CogIcon from "../../assets/Icons/CogIcon";
import BatteryIcon from "../../assets/Icons/BatteryIcon";
import DashboardIcon from "../../assets/Icons/Dashboard";

export interface ITab {
    path: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>
}
export const tabs: ITab[] = [
    {
        path: "/",
        icon: DashboardIcon
    },
    {
        path: "/create",
        icon: LockIcon
    },
    {
        path: "/edit",
        icon: UsersIcon
    },

    {
        path: "/page4",
        icon: CompanyIcon
    },
    {
        path: "/page5",
        icon: SassyIcon
    },
    {
        path: "/page6",
        icon: PaperIcon
    },
    {
        path: "/page7",
        icon: BatteryIcon
    },
    {
        path: "/page8",
        icon: CogIcon
    },


]
