import { CheckboxItem } from "./chekboxItem"

interface IProps {
    manufactureOptions: { label: string, value: string }[],
    control: any,
    name: string,
    error: string
}

export const CheckboxList = ({ manufactureOptions, control, name, error }: IProps) => {

    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-4">
                {
                    manufactureOptions?.map((item) => (
                        <CheckboxItem
                            key={item.label}
                            name={`${name}.${item.value}`}
                            label={item.label}
                            control={control}
                        />
                    ))
                }
            </div>
            {
                error && <span className="text-red-500">{error}</span>
            }
        </div>
    )
}

export default CheckboxList