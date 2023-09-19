import { render, screen, fireEvent } from "@testing-library/react";
import { expect, describe, it } from "@jest/globals";
import { useForm } from 'react-hook-form';
import { InputText } from "./";

describe('TextInput Component', () => {
    
        beforeEach(() => {
            const TestComponent = () => {
                return (
                    <div>
                        <InputText placeholder="textinput" name="textinput" label="textinput" control={useForm().control} />
                    </div>
                );
            }
            render(<TestComponent />);
        })
    
        it('should render the component', () => {
            expect(screen.getByText('textinput')).toBeInTheDocument();
        });
    
        it('should render the component with the correct class', () => {
            expect(screen.getByText('textinput')).toHaveClass('block mb-2 text-sm font-medium text-black dark:text-white');
        });
    
        it("input value should be 'text'", () => {
            const input = screen.getByLabelText('textinput');
            fireEvent.change(input, { target: { value: 'text' } });
            expect(input).toHaveValue('text');
        });
    });