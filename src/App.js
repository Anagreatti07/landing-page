import Menu from "./components/Menu";
import Imagem from "./components/img/pht.jpg";
import PrimeiraInfo from "./components/PrimeiraInfo";
import SegundaInfo from "./components/SegundaInfo";
import "./components/global.module.css";
import TerceiraInfo from "./components/TerceiraInfo";
import QuartaInfo from "./components/QuartaInfo";
import Rodape from "./components/Rodape";

function App() {

  return (
   <>   
    <Menu  logo={Imagem}/>
    <PrimeiraInfo inf='Participe do NASA Solve:
    Oportunidades de fornecer soluções para a NASA e ganhar prêmios em dinheiro, estágios e muito mais!'> 
    </PrimeiraInfo>

    <SegundaInfo inf='Administração Nacional da Aeronáutica e Espaço é uma agência do 
      governo federal dos Estados Unidos responsável pela pesquisa e desenvolvimento de tecnologias e 
      programas de exploração espacial. Sua missão oficial é "fomentar o futuro na 
      pesquisa, descoberta e exploração espacial.'>      
    </SegundaInfo>

    <TerceiraInfo inf='Identificado como TOI 700 e, ele está em uma "zona habitável", isto é, está em uma região de seu sistema 
    planetário que permite a presença de água líquida em sua superfície, viabilizando a existência de vida.'></TerceiraInfo>

    <QuartaInfo inf='Como é o planeta:
Localizado no sistema planetário TOI 700, o planeta está a 100 anos-luz, na constelação Dorado, e tem as seguintes características:
Tem 95% do tamanho da Terra;
Provavelmente é rochoso; e
Completa uma órbita a cada 28 dias.'></QuartaInfo>

    <Rodape/>
   </>   
  );
}

export default App;
