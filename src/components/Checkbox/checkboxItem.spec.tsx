import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "@jest/globals"
import { CheckboxItem } from './chekboxItem'
import { useForm } from 'react-hook-form'

describe('CheckboxItem Component', () => {

    beforeEach(() => {
        function TestComponent() {
            const control = useForm().control;
            return (
                <CheckboxItem name="name" label="label" control={control} />
            );
        }
        render(<TestComponent />);
    });

    it('should render the component', () => {
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
    });

    it('should render the label', () => {
        const label = screen.getByText('label');
        expect(label).toBeInTheDocument();
    })

    it('should render the label with the correct class', () => {
        const label = screen.getByText('label');
        expect(label).toHaveClass('bg-orange-500 font-normal');
    })

    it('should render the label with the correct class when checked', () => {
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        const label = screen.getByText('label');
        expect(label).toHaveClass('bg-green-600 text-white');
    })

});
