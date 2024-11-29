import React from 'react';

const ReasonsToRead = () => {

    const reasons = [
        {
            title: "Expande o Conhecimento",
            arg: "A leitura oferece novos aprendizados e amplia a visão de mundo, ajudando no crescimento pessoal.",
        },

        {
            title: "Melhora a Concentração e Saúde Mental",
            arg: "Ler estimula o cérebro, melhora a memória e reduz o risco de doenças cognitivas.",
        },

        {
            title: "Desenvolve a Empatia",
            arg: "Ler ficção e histórias diversas ajuda a entender as emoções e perspectivas dos outros.",
        }
    ]

return(
    <div className='tips-div'>
        {reasons.map((reason, index) => (
            <div className='tips'>
                <p className='tip-title'><strong>{reason.title}</strong></p>
                <p className='tip-arg'>{reason.arg}</p>
            </div>
        ))}
    </div>
    
)
}
export default ReasonsToRead;