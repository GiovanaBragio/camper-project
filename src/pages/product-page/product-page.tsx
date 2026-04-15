import "./product-page.scss";
const ProductPage = () => {
  return (
    <div className="product-page">
      <div className="pin">
        <img src="/pin.png" alt="pin" />
      </div>
      <div className="product">
        <div className="title-product">
          <h1>Unidas Pelo</h1>
          <h1 className="passo">Mesmo Passo</h1>
        </div>
        <span className="description-product">
          Este pin celebra a força coletiva das mulheres que caminham lado a lado por mudança, expressão e liberdade. Um símbolo de união, coragem e criação, para lembrar que nenhum passo é dado sozinha.
        </span>
        <a
          href="https://www.camper.com/pt_BR"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Comprar Agora
        </a>
      </div>
    </div>
  )
}

export default ProductPage;