import { FieldValues, UseControllerProps, useController } from "react-hook-form";

type Props = {
    name: string;
    label: string;
    control: UseControllerProps<FieldValues>['control'];
};

export const InputText = ({ name: nameInput, label, control }: Props) => {
    const {
        field: { ref, name, onBlur, onChange, value },
        fieldState: { invalid, error },
    } = useController({
        name: nameInput,
        control,
        defaultValue: "",
    });

/* 
.input {
 border: none;
 padding: 1rem;
 border-radius: 1rem;
 background: #e8e8e8;
 box-shadow: 20px 20px 60px #c5c5c5,
		-20px -20px 60px #ffffff;
 transition: 0.3s;
}

.input:focus {
 outline-color: #e8e8e8;
 background: #e8e8e8;
 box-shadow: inset 20px 20px 60px #c5c5c5,
		inset -20px -20px 60px #ffffff;
 transition: 0.3s;
}
*/

    return (
        <div>
            <label htmlFor={name} >{label}</label>
            <input className="border-none p-2 rounded-lg bg-gray-200 border-x-2 focus:outline-amber-300 duration-300 shadow-md" 
            id={name} onChange={onChange} onBlur={onBlur} value={value} ref={ref} />
            {invalid && <span>{error?.message}</span>}
        </div>
    );
}


