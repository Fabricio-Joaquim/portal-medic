import { describe, it, expect, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import Table from './';

describe('Table', () => {

    beforeEach(() => {
        const mockData = {
            "data": [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": ""
                }],
            total: 1,
            last_page: 1,
        }

        render(<Table headers={[{
            accessorKey: 'id',
            header: 'ID',
        }, {
            accessorKey: 'name',
            header: 'Name',
        }, {
            accessorKey: 'username',
            header: 'Username',
        }, {
            accessorKey: 'email',
            header: 'Email',
        }]} data={mockData} handlerSearch={jest.fn()} />);
    });

    it('should render the table', () => {

        expect(screen.getByRole('table')).toBeInTheDocument();

    });

    it('should render the table header', () => {
        expect(screen.getByText('ID')).toBeInTheDocument();
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Username')).toBeInTheDocument();
        expect(screen.getByText('Email')).toBeInTheDocument();
    });

    it('should render the table body', () => {
        expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
        expect(screen.getByText('Bret')).toBeInTheDocument();
    })

});