import { useState } from 'react';
import './style.sass';
import { Modal } from '../Modal';

export function Card({ listItems, type }) {
    const [selectedItem, setSelectedItem] = useState(null);
    
    return (
        <section className="card-section">
            {listItems.map((item, index) => (
                type === 'tutoriais' ? (
                    <button className="card-container" key={index} onClick={() => setSelectedItem(item)}>
                        <h2>{item.nome_ferramenta}</h2>
                        <p>A ferramenta é volta a {item.categoria} </p>
                    </button>
                ) : (
                    <button className="card-container" key={index} onClick={() => setSelectedItem(item)}>
                        <h2>{item.nome_ferramenta}</h2>
                        <p>Esta dando o seguinte erro: </p>
                        <p>{item.descricao_erro}</p>
                        {item.proxy ? (
                            <div className="proxyTrue">
                                <p>Utilize o proxy</p>
                            </div>
                        ) : (
                            <div className="proxyFalse">
                                <p>Não precisa de proxy</p>
                            </div>
                        )}
                    </button>
                )
            ))}

            {selectedItem && (
                <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)}>
                    <h2>{selectedItem.nome_ferramenta}</h2>
                    {type === 'tutoriais' ? (
                        <>
                            <p>Categoria: {selectedItem.categoria}</p>
                            <p>Comandos iniciais: {selectedItem.comandos}</p>
                        </>
                    ) : (
                        <>
                            <p>Erro: {selectedItem.descricao_erro}</p>
                            <p>Descrição: {selectedItem.descricao_erro}</p>
                            <p>Solução: </p>
                            <p>{selectedItem.descricao_solucao}</p>
                        </>
                    )}
                </Modal>
            )}
        </section>
    );
}
