import React from 'react'

interface Props{
    className?: string;
    fontSize?: string | number;
    color?: string;
    children: React.ReactNode;
}
export const PageText:React.FC <Props> = ({className, children}) => (
       <span className={className}>{children}</span>
    )
