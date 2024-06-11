import { render, screen } from '@testing-library/react'
import App from './App'

describe('Test <App />', () => {
    it('Renderizando correntamente', () => {
        render(
            <App />
        );
        expect(screen.getByTestId('botao-comentario')).toBeInTheDocument();
    })
})