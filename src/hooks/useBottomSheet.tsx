import React, { Children, useState } from "react";
import { createContext } from "react"
import { THEME } from "../theme/ThemeDetail";

type BottomSheetContextProps = {
    buttomSheetStatus:boolean,
    setButtomSheetStatus:(buttomSheetStatus:boolean)=>void;
};


const buttomSheetContext = createContext<BottomSheetContextProps|null>(null);

type BottomSheetProps = {
    children: React.ReactNode;
};

  

export const ButtomSheetProvider: React.FC<BottomSheetProps> = ({children}) =>{
    const [buttomSheetStatus,setButtomSheetStatus] = useState<boolean>(true)


    return (
        <buttomSheetContext.Provider value={{
            buttomSheetStatus,
            setButtomSheetStatus
        }}>
            {children}
        </buttomSheetContext.Provider>
    )

}


const useButtonSheet= ()=>{
    const {buttomSheetStatus, setButtomSheetStatus} = React.useContext(buttomSheetContext) as BottomSheetContextProps

    return {
        buttomSheetStatus,
        setButtomSheetStatus
    }

}

export default useButtonSheet;