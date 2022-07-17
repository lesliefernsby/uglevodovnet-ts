import React from 'react'

interface Props{
    className?: string;
    display?: string;
    flexDirection?: string;
    alignItems?: string;
    maxWidth?: string;
    margin?: string;
    padding?: string;
    background?:string;
    children: React.ReactNode;
}
export const PageItemWrapper:React.FC <Props> = ({className, children}) => (
       <div className={className}>{children}</div>
    )
