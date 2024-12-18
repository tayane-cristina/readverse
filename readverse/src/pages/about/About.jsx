import React from 'react';
import './About.css'

const About = () => {

return(
<div className='about-page'>
    <h2 className='about-title'>Sobre este projeto</h2>
    <p className='about-text'>

Bem-vindo ao Readverse, minha página de livros! Este projeto foi desenvolvido com carinho como parte do meu portfólio de programadora iniciante. Aqui, você pode explorar um mundo de histórias e conhecimentos: pesquise por seus livros favoritos, descubra novas obras, leia sinopses e conheça autores incríveis.

A página foi construída utilizando React com o Vite, garantindo uma experiência rápida e interativa. As requisições para exibição dos dados dos livros são feitas com Axios por meio da API Google Books Api, conectando você diretamente às informações mais relevantes. A estilização é feita com CSS, trazendo um design leve e funcional para melhorar sua navegação.

Este projeto reflete minha paixão por programação e literatura, além de ser um passo importante na minha jornada como desenvolvedora. Espero que você aproveite tanto quanto eu gostei de criá-lo!</p>
</div>

)
}
export default About;