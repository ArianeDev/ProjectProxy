import { useEffect, useState } from "react";
import { Card } from "../../Components/Card";
import { Input } from "../../Components/Input";
import { Label } from "../../Components/Label";
import api from "../../Services/api";

export function Tutoriais (){
    const [itemsTutoriais, setItemsETutoriais] = useState([]);
    const [categoriaFilter, setCategoriaFilter] = useState('');
    const [nomeFerramentaFilter, setNomeFerramentaFilter] = useState('');

    async function getTutoriais() {
        try {
            let response;

            if (nomeFerramentaFilter) {
                response = await api.get('tutoriais/buscar', { params: { palavra: nomeFerramentaFilter } });
            } else {
                response = await api.get('tutoriais/');
            }

            let data = response.data;

            if (categoriaFilter) {
                data = data.filter(item => item.categoria === categoriaFilter);
            }


            setItemsETutoriais(data);
        } catch (error) {
            console.error("Erro ao buscar erros:", error);
        }

    }

    useEffect(() => {
        getTutoriais();
    }, [categoriaFilter, nomeFerramentaFilter]);

    return (
        <main>
            <h1 className="title">Tutoriais</h1>
            <section className="container-filters">    
                <div className="container-input">
                    <Label text="Categoria" />
                    <Input
                    type="select"
                    atributo={categoriaFilter}
                    setFunction={setCategoriaFilter}
                    options={[
                        { value: '', label: 'Todas' },
                        { value: 'Front-End', label: 'Front-End' },
                        { value: 'Back-End', label: 'Back-End' }
                    ]}
                    />
                </div>
        
                <div className="container-input">
                    <Label text="Nome da ferramenta" />
                    <Input
                    type="text"
                    atributo={nomeFerramentaFilter}
                    setFunction={setNomeFerramentaFilter}
                    placeholder="Pesquisar nome"
                    />
                </div>
            </section>
            <Card listItems={itemsTutoriais} type="tutoriais" />
        </main>
    );
}