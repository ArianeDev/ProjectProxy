import { Forms } from "../../Components/Forms";
import './style.sass';

export function Register() {
    const listForms = [
        {
            nameLabel: 'Categoria',
            type: 'select',
            atributo: '',
            setFunction: () => {},
        },
        {
            nameLabel: 'Descrição:',
            type: 'text',
            atributo: '',
            placeholder: 'Digite sua descrição',
            setFunction: () => {},
            disabled: false
        },
    ];

    return (
      <main className="container-register">
        <Forms title="Adicionar" listForms={listForms} buttonTitle="Registrar" method="POST"  />
      </main>
    );
}