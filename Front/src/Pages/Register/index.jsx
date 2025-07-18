import { useState } from "react";
import { Forms } from "../../Components/Forms";
import './style.sass';
import api from "../../Services/api";

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

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

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
                type: 'select',
                atributo: formData.categoria,
                setFunction: (val) => updateField('categoria', val),
                options: [
                    { value: '', label: 'Selecione uma categoria' },
                    { value: 'Front-End', label: 'Front-End' },
                    { value: 'Back-End', label: 'Back-End' }
                ]
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
                type: 'select',
                atributo: formData.categoria,
                setFunction: (val) => updateField('categoria', val),
                options: [
                    { value: '', label: 'Selecione uma categoria' },
                    { value: 'Front-End', label: 'Front-End' },
                    { value: 'Back-End', label: 'Back-End' }
                ]
            },
            {
                nameLabel: 'Nome da ferramenta',
                type: 'text',
                atributo: formData.nome_ferramenta,
                setFunction: (val) => updateField('nome_ferramenta', val),
            },
            {
                nameLabel: 'Comandos',
                type: 'textarea',
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedType) {
            setMessage('Selecione um tipo para cadastrar.');
            return;
        }

        setIsLoading(true);
        setMessage('');

        try {
            const endpoint = selectedType === 'erros' ? 'erros/' : 'tutoriais/';
 
            const payload = selectedType === 'erros'
                ? {
                    categoria: formData.categoria,
                    nome_ferramenta: formData.nome_ferramenta,
                    descricao_erro: formData.descricao_erro,
                    descricao_solucao: formData.descricao_solucao,
                    palavras_chaves: formData.palavras_chaves,
                    proxy: formData.proxy
                }
                : {
                    categoria: formData.categoria,
                    nome_ferramenta: formData.nome_ferramenta,
                    comandos: formData.comandos,
                    palavras_chaves: formData.palavras_chaves
                };

            await api.post(endpoint, payload);
            setMessage('Cadastro realizado com sucesso!');

            setFormData({
                categoria: '',
                nome_ferramenta: '',
                descricao_erro: '',
                descricao_solucao: '',
                comandos: '',
                palavras_chaves: '',
                proxy: false
            });
            setSelectedType('');
        } catch (error) {
            if (error.response && error.response.data) {
                console.error('Erro de API:', error.response.data);
                setMessage('Erro: ' + JSON.stringify(error.response.data));
            } else {
                console.error(error);
                setMessage('Erro ao cadastrar. Verifique o servidor.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="container-register">
            <Forms 
                title="Cadastrar" 
                listForms={listForms} 
                buttonTitle={isLoading ? "Enviando..." : "Cadastrar"} 
                methodFunction={handleSubmit}
                error={message}
            />
        </main>
    );
}