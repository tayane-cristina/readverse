import React, { useEffect } from 'react';
import { Biography } from '../../../data/Biography';
import Modal from 'react-modal';
import { useState } from 'react';
import './Authors.css'

Modal.setAppElement('#root');

const Authors = () => {

  const [selectedAuthor, setSelectedAuthor] = useState(0);

    const handleSelected = (author) => {

      setSelectedAuthor(author)
    }

  const author = Biography[selectedAuthor];

return(
  <div className='authors'>
    <aside>
      <h2>Conheça a biografia dos nossos autores selecionados</h2>
      <ul className='authors-list'>        
        {Biography.map((author, index) => (
          <li 
            key={index} 
            className='authors-li'
            onClick={() => handleSelected(index)} 
          >
            <p>{author.nomeCompleto}</p>
          </li>
        ))}
      </ul>
    </aside>

    <div className='biography-display'>
      <section className='biography-cover-section'>
        <img className='biography-autor-image' src={author.image} alt={` image-${author.nomeCompleto}`}></img>
      </section>
      
      <section className='biography-infor-section'> 
        <p><strong>{author.nomeCompleto}</strong></p>
        <p>
          <strong>{author.nomeCompleto}</strong> nasceu em {author.dataDeNascimento}, filho de {author.filiacao.pai} e {author.filiacao.mae}, {author.descendencia}.
        </p>
        <p>{author.biografia.infancia}</p>
        <p>{author.biografia.entradaNoMundoLiterario}</p>
        <p>{author.contextoDaEpoca}</p>

        <p><strong>Suas principais obras são:</strong></p>
        <ul>
          {author.livrosMaisFamosos.map((livro, i) => (
            <li className='biography-autor-book' key={`${author.nomeCompleto}-livro-${i}`}>{livro}</li>
          ))}
        </ul>

        <p><strong>Algumas citações que marcaram seu estilo e obra:</strong></p>
        <ul>
          {author.frases.map((frase, i) => (
            <li className='biography-autor-phrase' key={`${author.nomeCompleto}-frase-${i}`}>{frase}</li>
          ))}
        </ul>

        <p>{author.contextoDasFrases}</p>
      </section>
    </div>
</div>

)
}
export default Authors;