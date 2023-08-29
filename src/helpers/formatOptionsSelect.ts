export const formatOptionsSelect = (options: any[], value: string, label: string): { label: string, value: string }[] => {
   
    if (!options) {
        return [];
    }

    return options.map((option) => {
        return {
            label: option[label],
            value: option[value]
        }
    })
}
