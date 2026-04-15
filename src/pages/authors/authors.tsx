import { Carousel } from "@mantine/carousel";
import './authors.scss'
import { useState } from "react";

const Authors = () => {
  const [active, setActive] = useState(0);

  const conteudo = [
    {
      name: "VERONIQUE BRANQUINHO",
      texto: "A coleção cápsula criada pela designer que captura a ideia do design Belga tendo linhas simples e minimalistas mas sem deixar de ser impressionante e de “tirar o fôlego” (palavras da própria marca).",
      imagem: "/veronique.png", 
      trabalhos: [
        "/trabalhos-veronique1.png",
        "/trabalhos-veronique2.png",
        "/trabalhos-veronique2.png",
      ]
    },
    {
      name: "BENEDETTA TAGLIABUE",
      texto: "A arquiteta italiana trabalhou com a marca na criação da loja localizada em Barcelona, Espanha, idealizada a partir dos valores e relação da marca com Maiorca. O ambiente composto com couro e representações acerca dos terrenos irregulares, referenciando diretamente os produtos e a ilha em que a marca surgiu.",
      imagem: "/benedetta.png",
      trabalhos: [
        "/t-bebedetta1.png",
        "/t-bebedetta2.png",
        "/t-bebedetta3.png",
      ]
    },
    {
      name: "Maria Blaise",
      texto: "A Maria que é conhecida pelas suas produções voltadas ao movimento e as possibilidades que diferentes materiais tem a oferecer, se ligando a simplicidade, beleza e sustentabilidade (ideais que são compartilhados com a marca). Na sua colaboração com a Camper foram criadas botas que que possuem dobras à volta da perna do calçado. ",
      imagem: "/maria-blaise.png",
      trabalhos: [
        "/trabalhos-maria.png",
      ]
    },
    {
      name: "Tove Jansson",
      texto: "Tove Jansson foi uma artista finlandesa multitalentosa, escritora, ilustradora e criadora dos Moomins, conhecida por sua sensibilidade, imaginação e força narrativa. Em sua colaboração especial com Camper, seu universo visual ganha novas interpretações: formas suaves, traços poéticos e referências ao mundo lúdico que marcaram sua carreira aparecem transformados em design, moda e objetos.",
      imagem: "/moomin.png",
      trabalhos: [
        "/trabalhos-tove1.png",
        "/trabalhos-tove2.png",
        "/trabalhos-tove3.png",
      ]
    },
    {
      name: "RRACHEL COMEY",
      texto: "A ideia inicial da campanha buscava juntar algo feito de forma manual com produção em massa, resultando em uma coleção que junta o conceito da marca e sua relação com o mediterraneo com a estética vintage da Comey",
      imagem: "/rachel.png",
      trabalhos: [
        "/t-rachel1.png",
        "/t-rachel2.png",
        "/t-rachel1.png",
      ]
    },
  ];
  
  return (
    <div className="authors">
      <div
        style={{
          resize: 'horizontal',
          overflow: 'hidden',
          maxWidth: '100%',
          minWidth: 250,
          padding: 10,
        }}
      >
        <Carousel
          withIndicators
          height={400}
          type="container"
          slideSize={{ base: '100%', '300px': '50%', '500px': '33.333333%' }}
          slideGap={{ base: 0, '300px': 'md', '500px': 'lg' }}
          emblaOptions={{ loop: true, align: 'center' }}
          onSlideChange={setActive}
        >
          <Carousel.Slide>
            <img src="/veronique.png" alt="veronique" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="/benedetta.png" alt="veronique" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="/maria-blaise.png" alt="veronique" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="/moomin.png" alt="veronique" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="/rachel.png" alt="veronique" />
          </Carousel.Slide>
        </Carousel>
     </div>

     <div className="about-author">
        <div className="title-author">
          <span className="line"></span>
          <h3>{conteudo[active].name}</h3>
        </div>
        <div className="content-author">
          <img
            src={conteudo[active].imagem}
            alt="imagem-dinamica"
          />
          <p>{conteudo[active].texto}</p>
        </div>

        <div className="works-author">
          <span>Seus trabalhos</span>
          <div className="works">
            {conteudo[active].trabalhos?.map((item, index) => (
              <img
                key={index}
                src={item}
                alt="imagem-dinamica"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authors;