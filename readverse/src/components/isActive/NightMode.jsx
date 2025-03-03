import darkLamp from '../../assets/icons/lampada-apagada.png';
import lightLamp from '../../assets/icons/lampada-acesa.png';

const NightMode = ({ toggleNightMode, isNightMode }) => {
  return (
    <div className='nightMode-container'>
      <img
        onClick={toggleNightMode} // Alterando o modo quando clicado
        style={{ width: '50px', height: '50px' }}
        src={isNightMode ? lightLamp : darkLamp} // Usando a prop isNightMode para decidir qual ícone mostrar
        alt="icon-lampada"
        className="lamp"
      />
    </div>
  );
};

export default NightMode;