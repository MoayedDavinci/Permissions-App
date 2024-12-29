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
        path: "/home",
        icon: DashboardIcon
    },
    {
        path: "/create",
        icon: LockIcon
    },

    {
        path: "/page3",
        icon: CompanyIcon
    },
    {
        path: "/page4",
        icon: SassyIcon
    },
    {
        path: "/page5",
        icon: PaperIcon
    },
    {
        path: "/page6",
        icon: BatteryIcon
    },
    {
        path: "/page7",
        icon: CogIcon
    },
    {
        path: "/edit",
        icon: UsersIcon
    },

]
