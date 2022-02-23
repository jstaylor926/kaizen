import React from "react"

export type ButtonProps = {
    name?: string;
    type?: 'submit' | 'reset' | 'button';
    value?: any;
    text?: string;
}

export type CardProps = {
    children?: React.ReactNode;

}

export type Characters = {
    id: string;
    name: string;
    status: string;
    type: string;
}