import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    color?: "primary" | "secondary" | "danger" | "success" | "warning";
    className?: string;
}

const colorMap = {
    primary: "bg-blue-500 hover:bg-blue-600 hover:border-blue-700 hover:border-1",
    secondary: "bg-gray-500 hover:bg-gray-600 hover:border-gray-700 hover:border-1",
    danger: "bg-red-500 hover:bg-red-600 hover:border-red-700 hover:border-1",
    success: "bg-green-500 hover:bg-green-600 hover:border-green-700 hover:border-1",
    warning: "bg-yellow-500 hover:bg-yellow-600 hover:border-yellow-700 hover:border-1",
}

export const Button = ({ children, className, ...rest }: Props) => {
    return (
        <button
            className={`relative inline-block m-4 px-8 py-4 text-base font-bold text-white ease-out duration-200 shadow-sm rounded-xl bg-slate-600
            hover:text-zinc-600 hover:bg-slate-100 ${colorMap[rest.color ?? "primary"]} hover:shadow-2xl ${className}}`}
            {...rest}>
            {children}
        </button>
    )
}
