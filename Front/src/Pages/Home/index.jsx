import { useEffect, useState } from "react";
import { Card } from "../../Components/Card";
import api from "../../Services/api";

export function Home (){
    const [itemsErros, setItemsErros] = useState([]);

    async function getErros() {
        try {
            const response = await api.get('erros/');
            console.log(response.data); 

            setItemsErros(response.data);
        } catch (error) {
            console.error("Erro ao buscar erros:", error);
        }

    }

    useEffect(() => {
        getErros();
    }, []);

    return (
        <main>
            <Card listItems={itemsErros}/>
        </main>
    );
}