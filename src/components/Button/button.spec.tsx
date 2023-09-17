import { render, screen } from '@testing-library/react';
import { expect, it, describe } from '@jest/globals';
import '@testing-library/jest-dom/jest-globals';
import { Button } from './';

describe('Button', () => {
    it('renders a button', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('renders a button with a custom class', () => {
        render(<Button className="custom-class">Click me</Button>);
        expect(screen.getByText('Click me')).toHaveClass('custom-class');
    })
});