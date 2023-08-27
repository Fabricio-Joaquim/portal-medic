import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;

}

export const Button = ({ children, ...rest }: Props) => {
    return (
        <button
            className={`relative inline-block m-4 px-8 py-4 text-base text-white ease-out duration-200 shadow-sm rounded-xl bg-slate-600
            hover:text-zinc-600 hover:bg-slate-100 hover:border-slate-700 hover:border-2 hover:shadow-2xl ${rest.className}}`}
            {...rest}>
            {children}
        </button>
    )
}
