import { useController } from "react-hook-form"; 

interface ISelectProps {
    name: string;
    label: string;
    control: any;
    options: {
        value: string;
        label: string;
    }[];
}

export function Select({ name, label, options, control }: ISelectProps) {
    const { field } = useController({
        name,
        defaultValue: "",
        control:control
    });

    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-black dark:text-white">{label}</label>
            <select
                {...field}
                id={name}
                className="border border-gray-300 rounded-md h-10 px-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="" disabled hidden>
                    Select an option
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}