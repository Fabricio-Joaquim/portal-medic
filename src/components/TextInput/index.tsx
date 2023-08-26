/* eslint-disable */
import { FieldValues, UseControllerProps, useController } from "react-hook-form";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    placeholder: string;
    //@ts-ignore
    control: UseControllerProps<FieldValues>[unknown];
    Icon?: string;
};

export const InputText = ({ name: nameInput, label, control, placeholder, Icon, ...rest }: Props) => {
    const {
        field: inputProps,
        fieldState: { invalid, error },
    } = useController({
        name: nameInput,
        control,
        defaultValue: "",
    });

    return (
        <div  className="mb-4">
            <label htmlFor={inputProps.name} className="block mb-2 text-sm font-medium text-black dark:text-white">{label}</label>
            <div className="relative">
                <div className={`absolute inset-y-0 left-0 flex items-center ${Icon && "pl-3.5"} pointer-events-none`}>
                    {Icon && <Icon/>}
                </div>
                <input id={inputProps.name} className={`"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ${Icon && "pl-10"} p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"`} placeholder={placeholder} {...inputProps} {...rest} />
            </div>
            {invalid && <span className="text-red-600 font-normal text-xs">{error?.message}</span>}
        </div>
    );
}

