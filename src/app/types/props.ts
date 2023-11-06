import { execPath } from "process"
import React, { ChangeEvent, MouseEventHandler } from "react"

export type InputPropsType = {
    type: string,
    id: string,
    value: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    style?: React.CSSProperties
}

export type ButtonPropsType = {
    label: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
    style?: React.CSSProperties,
}