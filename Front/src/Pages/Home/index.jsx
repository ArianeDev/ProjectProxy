import { useEffect, useState } from "react";
import { Card } from "../../Components/Card";
import { Input } from "../../Components/Input";
import { Label } from "../../Components/Label";
import api from "../../Services/api";
import './style.sass';

export function Home() {
  const [itemsErros, setItemsErros] = useState([]);
  const [categoriaFilter, setCategoriaFilter] = useState('');
  const [proxyFilter, setProxyFilter] = useState(''); 
  const [nomeFerramentaFilter, setNomeFerramentaFilter] = useState('');

  async function getErros() {
    try {
        let response;

        if (nomeFerramentaFilter) {
          response = await api.get('erros/buscar', { params: { palavra: nomeFerramentaFilter } });
        } else {
          response = await api.get('erros/');
        }

        let data = response.data;

        if (categoriaFilter) {
          data = data.filter(item => item.categoria === categoriaFilter);
        }

        if (proxyFilter) {
          const proxyBool = proxyFilter === 'true';
          data = data.filter(item => item.proxy === proxyBool);
        }

        setItemsErros(data);
    } catch (error) {
        console.error("Erro ao buscar erros:", error);
    }
  }

  useEffect(() => {
    getErros();
  }, [categoriaFilter, proxyFilter, nomeFerramentaFilter]);

  return (
    <main>
      <h1 className="title">Erros</h1>
      <section className="container-filters">
        <div className="container-input ckeckbox-input">
          <Label text="Usa proxy?" />
          <Input
            type="checkbox"
            atributo={proxyFilter}
            setFunction={setProxyFilter}
          />
        </div>

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
      <Card listItems={itemsErros} />
    </main>
  );
}
