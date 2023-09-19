import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "@jest/globals"
import { BrowserRouter } from "react-router-dom"
import { MobileBar } from "./MobileBar"
import { Provider } from "react-redux"
import { store } from "@store/index"
import { Sidebar } from "./"

describe('Sidebar', () => {
    it('should render the sidebar', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Sidebar />
                </BrowserRouter>
            </Provider>
        )
        expect(screen.getByText('Menu')).toBeInTheDocument();
        expect(screen.getByText('Logout')).toBeInTheDocument();
    })

    it('should render the mobile bar', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <MobileBar />
                </BrowserRouter>
            </Provider>
        )
        expect(screen.getByText('Register Medication')).toBeInTheDocument();
        expect(screen.getByText('Logout')).toBeInTheDocument();
        expect(screen.getByText('List Medication')).toBeInTheDocument();
    })
})