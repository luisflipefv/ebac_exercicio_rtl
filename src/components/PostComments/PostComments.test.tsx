import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários' , () => {
        render(<PostComment/>);
        //adicionando o primeiro comentario
        fireEvent.change(screen.getByTestId('comentario-textarea'),
            {target:{
                value: 'Primeiro comentario do teste'
            }
        });
        fireEvent.click(screen.getByTestId('botao-comentario'));
        //adiocionando segundo comentario
        fireEvent.change(screen.getByTestId('comentario-textarea'),
            {target:{
                value: 'Adicionando segundo comentario do teste'
            }
            });
        //clicando noo botao para submeter o comentario
        fireEvent.click(screen.getByTestId('botao-comentario'));
        //verificando se os coomentarios foram adicionados corretamente
        expect(screen.getAllByTestId('comentarios')).toHaveLength(2);
    })
});