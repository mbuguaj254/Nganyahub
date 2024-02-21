import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleclick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}