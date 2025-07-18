import { useState, useEffect } from "react";
import { Forms } from "../../Components/Forms";
import './style.sass';

export function Register() {
    const [selectedType, setSelectedType] = useState(''); 
    const [formData, setFormData] = useState({
        categoria: '',
        nome_ferramenta: '',
        descricao_erro: '',
        descricao_solucao: '',
        comandos: '',
        palavras_chaves: '',
        proxy: false
    });

    const updateField = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const baseForm = [
      {
        nameLabel: 'O que deseja cadastrar?',
        type: 'select',
        atributo: selectedType,
        setFunction: setSelectedType,
        options: [
          { value: '', label: 'Selecione' },
          { value: 'erros', label: 'Erros' },
          { value: 'tutoriais', label: 'Tutoriais' }
        ]
      }
    ];

    const extraFields = {
        erros: [
            {
                nameLabel: 'Categoria',
                type: 'text',
                atributo: formData.categoria,
                setFunction: (val) => updateField('categoria', val),
                placeholder: 'Ex: FrontEnd'
            },
            {
                nameLabel: 'Nome da ferramenta',
                type: 'text',
                atributo: formData.nome_ferramenta,
                setFunction: (val) => updateField('nome_ferramenta', val),
            },
            {
                nameLabel: 'Descrição do erro',
                type: 'text',
                atributo: formData.descricao_erro,
                setFunction: (val) => updateField('descricao_erro', val),
            },
            {
                nameLabel: 'Solução do erro',
                type: 'textarea',
                atributo: formData.descricao_solucao,
                setFunction: (val) => updateField('descricao_solucao', val),
            },
            {
                nameLabel: 'Palavras-chave',
                type: 'text',
                atributo: formData.palavras_chaves,
                setFunction: (val) => updateField('palavras_chaves', val),
            },
            {
                nameLabel: 'Precisa de proxy?',
                type: 'checkbox',
                atributo: formData.proxy,
                setFunction: (val) => updateField('proxy', val),
            },
        ],
        tutoriais: [
            {
                nameLabel: 'Categoria',
                type: 'textarea',
                atributo: formData.categoria,
                setFunction: (val) => updateField('categoria', val),
                placeholder: 'Ex: Front-End'
            },
            {
                nameLabel: 'Nome da ferramenta',
                type: 'text',
                atributo: formData.nome_ferramenta,
                setFunction: (val) => updateField('nome_ferramenta', val),
            },
            {
                nameLabel: 'Comandos',
                type: 'text',
                atributo: formData.comandos,
                setFunction: (val) => updateField('comandos', val),
            },
            {
                nameLabel: 'Palavras-chave',
                type: 'text',
                atributo: formData.palavras_chaves,
                setFunction: (val) => updateField('palavras_chaves', val),
            },
        ]
    };

    const listForms = selectedType ? [...baseForm, ...extraFields[selectedType]] : baseForm;

    return (
        <main className="container-register">
            <Forms 
                title="Registrar" 
                listForms={listForms} 
                buttonTitle="Enviar" 
                method="POST" 
                endpoint={selectedType === 'erros' ? 'erros/' : 'tutoriais/'}
                data={formData}
            />
        </main>
    );
}
