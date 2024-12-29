import React, { createContext, useState, ReactNode } from "react";
import Alert from "../components/Alert";

type AlertVariant = "success" | "info" | "danger";

interface AlertState {
    message: string;
    variant: AlertVariant;
    visible: boolean;
}

export interface AlertContextProps {
    showAlert: (message: string, variant: AlertVariant, duration?: number) => void;
}

export const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [alert, setAlert] = useState<AlertState>({
        message: "",
        variant: "info",
        visible: false,
    });

    const showAlert = (message: string, variant: AlertVariant, duration: number = 2000) => {
        setAlert({ message, variant, visible: true });
        setTimeout(() => setAlert({ ...alert, visible: false }), duration);
    };

    const handleClose = () => {
        setAlert({ ...alert, visible: false })
    }


    return (
        <AlertContext.Provider value={{ showAlert }}>
            {children}
            {alert.visible && <Alert close={handleClose} variant={alert.variant}>{alert.message}</Alert>}
        </AlertContext.Provider>
    );
};
