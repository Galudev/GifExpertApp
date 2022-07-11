import { fireEvent, render, screen } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {
    test('no debe de añadir una categoría ya existente', async () => {
        const inputValue = 'One Punch 2';
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        const items = await screen.findAllByText(inputValue);
        expect(items).toHaveLength(1);
    });

    test('debe de añadir una categoría si no está repetida', async () => {
        const inputValue = 'One Punch 2';
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(screen.findByText(inputValue)).toBeTruthy();
    });

});