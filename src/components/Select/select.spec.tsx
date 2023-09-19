import { describe, it, expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import { Select } from "./";
import { useForm } from 'react-hook-form';

describe('Select Component', () => {

    beforeEach(() => {
        const options = [
            { label: 'label1', value: 'value1' },
            { label: 'label2', value: 'value2' },
            { label: 'label3', value: 'value3' },
        ]

        const TestComponent = () => {
            return (
                <div>
                    <Select name="select" label="select" options={options} control={useForm().control} />
                </div>
            );
        }
        render(<TestComponent />);
    })

    it('should render the component', () => {
        expect(screen.getByText('select')).toBeInTheDocument();
    });

    it('should render the component with the correct class', () => {
        expect(screen.getByText('select')).toHaveClass('block mb-2 text-sm font-medium text-black dark:text-white');
    });
    
    it("selected value should be 'value1'", () => {
        const select = screen.getByLabelText('select');
        fireEvent.change(select, { target: { value: 'value1' } });
        expect(select).toHaveValue('value1');
    });
});


