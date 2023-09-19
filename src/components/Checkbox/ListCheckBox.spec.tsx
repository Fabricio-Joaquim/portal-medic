import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "@jest/globals"
import { CheckboxList } from './'
import { useForm } from 'react-hook-form'


describe('ListCheckboxItem Component', () => {

    beforeEach(() => {

        function TestComponent() {
            const control = useForm().control;
            const LIST_CHECKBOX = [
                { label: 'label1', value: 'value1' },
                { label: 'label2', value: 'value2' },
                { label: 'label3', value: 'value3' },
            ]
            return (
                <div>
                    <CheckboxList control={control} error="" name="listCheckBox" manufactureOptions={LIST_CHECKBOX} />
                </div>
            );
        }
        render(<TestComponent />);
    })

    it('should render the label', () => {
        const label = screen.getByText('label1');
        expect(label).toBeInTheDocument();
    })

    it("list checkbox should have 3 items", () => {
        const listCheckbox = screen.getAllByRole("checkbox");
        expect(listCheckbox.length).toBe(3);
    });

    it('should render the label with the correct class', () => {
        const label = screen.getByText('label1');
        expect(label).toHaveClass('bg-orange-500 font-normal');
    })

    it('should render the label with the correct class when checked', () => {
        const checkbox = screen.getByLabelText('label1');
        fireEvent.click(checkbox);
        const label = screen.getByText('label1');
        expect(label).toHaveClass('bg-green-600 text-white');
    })

});