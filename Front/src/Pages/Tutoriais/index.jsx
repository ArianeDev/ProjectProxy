import { useEffect, useState } from "react";
import { Card } from "../../Components/Card";
import api from "../../Services/api";

export function Tutoriais (){
    const [itemsTutoriais, setItemsETutoriais] = useState([]);

    async function getTutoriais() {
        try {
            const response = await api.get('tutoriais/');
            console.log(response.data); 

            setItemsETutoriais(response.data);
        } catch (error) {
            console.error("Erro ao buscar erros:", error);
        }

    }

    useEffect(() => {
        getTutoriais();
    }, []);

    return (
        <main>
            <Card listItems={itemsTutoriais} type="tutoriais" />
        </main>
    );
}