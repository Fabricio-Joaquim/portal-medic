import { BrowserRouter as Router } from "react-router-dom";
import { expect, describe, it } from "@jest/globals";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/jest-globals';
import { Provider } from "react-redux";
import { LayerPrivate } from "./";
import { store } from "../../store"


describe('LayerPrivateScreen', () => {
    let container: any;
    beforeEach(() => {
        const fakeChildren = <div data-testid="fake-children">Fake Children</div>;

        container = render(
            <Provider store={store}>
            <Router>
                <LayerPrivate>
                    {fakeChildren}
                </LayerPrivate>
            </Router>
            </Provider>

        );
    });

    it('renders a LayerPrivateScreen', () => {
        expect(container.container.firstChild).toHaveClass('lg:grid flex lg:grid-cols-dashboard lg:grid-rows-dashboard h-screen');
    });

    it('renders a Sidebar', () => {
        expect(container.container.firstChild.firstChild).toHaveClass('flex-col hidden');
    });

    it("render children", () => {
        expect(container.getByTestId("fake-children")).toBeInTheDocument();
    });

});
