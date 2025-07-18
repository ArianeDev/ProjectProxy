import { useEffect, useState } from "react";
import { Card } from "../../Components/Card";
import api from "../../Services/api";

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
      <section style={{ marginLeft: '20%' }}>
        <label>
          Categoria:
          <select value={categoriaFilter} onChange={e => setCategoriaFilter(e.target.value)}>
            <option value="">Todas</option>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
          </select>
        </label>

        <label>
          Usa proxy?
          <select value={proxyFilter} onChange={e => setProxyFilter(e.target.value)}>
            <option value="">Todos</option>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </label>

        <label>
          Nome da ferramenta:
          <input 
            type="text" 
            value={nomeFerramentaFilter} 
            onChange={e => setNomeFerramentaFilter(e.target.value)} 
            placeholder="Pesquisar nome"
          />
        </label>
      </section>

      <Card listItems={itemsErros} />
    </main>
  );
}
