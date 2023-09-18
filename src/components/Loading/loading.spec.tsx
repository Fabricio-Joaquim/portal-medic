import { RenderResult, render } from "@testing-library/react";
import { expect, describe, it } from "@jest/globals";
import '@testing-library/jest-dom/jest-globals';
import { Loading } from "./";


describe('Loading', () => {
    let container: RenderResult["container"];
    beforeEach(() => {
        container = render(<Loading />).container;
    });
    
    it('renders a loading', () => {
        expect(container.firstChild).toHaveClass('flex justify-center items-center absolute top-0 left-0 w-full h-full bg-slate-400 bg-opacity-50 z-50');
    });

    it('container circle', () => {
        expect(container?.firstChild?.firstChild).toHaveClass('loader w-36 h-36 relative animate-spinPerson');
    });


    it('verify if a 4 circle render', () => {
        const circle = container?.firstChild?.firstChild?.childNodes;
        expect(circle?.length).toBe(4);
    });
});