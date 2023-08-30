import { useController } from "react-hook-form";

interface Checkbox extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    control: any;
}

export const CheckboxItem = ({ name, label, control, ...rest }: Checkbox) => {
    const { field } = useController({
        name,
        control,
        defaultValue: false,
      });
    return (
        <div className="flex items-center">
            <input
                {...field}
                {...rest}
                id={name}
                type="checkbox"
                className="w-4 h-4 mr-2 text-blue-500 border-gray-300 rounded focus:ring-blue-500 hidden"
            />
            <label htmlFor={name} 
            className={`text-gray-700 p-3 bg-orange-500 duration-200 rounded-md w-52 justify-center flex ${field.value ? 'font-bold bg-green-600 text-white' : 'font-normal'}`}>
                {label}
            </label>
        </div>
    );
}

