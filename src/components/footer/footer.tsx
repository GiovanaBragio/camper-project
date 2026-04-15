
import './footer.scss'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <img src="./logo-camper.png" alt="camper-logo" />
        </div>
        <div>
          <span className='title'>Grupo</span>
          <p>Ana Cerino</p>
          <p>Carla Chicareli</p>
          <p>Isabelle Iennaco </p>
          <p>Giovana Bragio</p>
          <p>Maria Peccini</p>
        </div>
        <div className='title'>
          <span>Contato</span>
          <a href="https://www.behance.net/anacerino" className='behance'>
            <img src="./behance-icon.png" alt="behance" />
            <p>Ana Cerino</p>
          </a>
          <a href="https://www.behance.net/carlachicareli1" className='behance'>
            <img src="./behance-icon.png" alt="behance" />
            <p>Carla Chicareli</p>
          </a>
          <a href="https://www.behance.net/isabelleiennaco/appreciated" className='behance'>
            <img src="./behance-icon.png" alt="behance" />
            <p>Isabelle Iennaco</p>
          </a>
          <a href="https://www.behance.net/giovana_bragio" className='behance'>
            <img src="./behance-icon.png" alt="behance" />
            <p>Giovana Bragio</p>
          </a>
          <a href="https://www.behance.net/maria_peccini" className='behance'>
            <img src="./behance-icon.png" alt="behance" />
            <p>Maria Peccini</p>
          </a>
        </div>
      </div>
      <span>Esse site é para um trabalho escolar e toma como referência o site original da Camper disponível em <a href="https://www.camper.com/pt_BR" target="_blank">https://www.camper.com/pt_BR</a>.</span>
    </footer>
  )
}

export default Footer;