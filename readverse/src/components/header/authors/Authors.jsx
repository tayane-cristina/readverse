import React from 'react';
import { Biography } from '../../../data/Biography';
import Modal from 'react-modal';
import { useState } from 'react';
import './Authors.css'

Modal.setAppElement('#root');

const Authors = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAuthor, setSelectedAuthor] = useState(null);

    //Funções para abrir e fechar o modal
    const openModal = (author) => {
        setSelectedAuthor(author);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedAuthor(null)
    }

return(
<div className='authors'>
    <h2>Conheça a biografia dos nossos autores selecionados</h2>
    <ul className='authors-list'>        
        {Biography.map((author, index) => (
            <li key={index} className='authors-li'>
                <img 
                className='author-image'
                src={author.image} 
                alt={`${author.nomeCompleto}-image`}
                ></img>
                <p><strong>{author.nomeCompleto}</strong></p>
                <button className='simply-btn' onClick={() => openModal(author)}>Ver mais</button>
            </li>
        ))}
    </ul>

    {selectedAuthor && (
    <Modal
    isOpen={isModalOpen}
    onRequestClose={closeModal}
    contentLabel={`Biografia de ${selectedAuthor.nomeCompleto}`}
    style={{
        content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '70vw',
        height: '70vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        },
        overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    }}
    >
        <section className='authors-modal-image'>
          <p><strong>{selectedAuthor.nomeCompleto}</strong></p>
          <img 
            src={selectedAuthor.image} 
            alt={`Imagem de ${selectedAuthor.nomeCompleto}`} 
            style={{ width: '150px', height: '150px', objectFit: 'cover', marginBottom: '10px' }}
          />
        </section>
          
        <section className='authors-modal-infor'>
          <p>Data de nascimento: {selectedAuthor.dataDeNascimento}</p>
          <p>
            Biografia: {selectedAuthor.nomeCompleto} nasceu em {selectedAuthor.dataDeNascimento}, filho de {selectedAuthor.filiacao.pai} e {selectedAuthor.filiacao.mae}, {selectedAuthor.descendencia}.
          </p>
          <p>{selectedAuthor.biografia.infancia}</p>
          <p>{selectedAuthor.biografia.entradaNoMundoLiterario}</p>
          <p>{selectedAuthor.contextoDaEpoca}</p>

          <p>Suas principais obras são:</p>
          <ul>
            {selectedAuthor.livrosMaisFamosos.map((livro, i) => (
              <li key={`${selectedAuthor.nomeCompleto}-livro-${i}`}>{livro}</li>
            ))}
          </ul>

          <p>Algumas citações que marcaram seu estilo e obra:</p>
          <ul>
            {selectedAuthor.frases.map((frase, i) => (
              <li key={`${selectedAuthor.nomeCompleto}-frase-${i}`}>{frase}</li>
            ))}
          </ul>

          <p>{selectedAuthor.contextoDasFrases}</p>
          <button onClick={closeModal}>Fechar</button>
        </section>
    </Modal>
    )}
</div>

)
}
export default Authors;