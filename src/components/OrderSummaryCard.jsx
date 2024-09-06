import styled from 'styled-components';
import backgroundDesktop from '../assets/pattern-background-desktop.svg';
import backgroundMobile from '../assets/pattern-background-mobile.svg'
import heroImage from '../assets/illustration-hero.svg';
import musicIcon from '../assets/icon-music.svg';

const PageWrapper = styled.div`
  background: hsl(225, 100%, 94%) url(${backgroundDesktop}) no-repeat center top;
  background-size: 100% 400px; /* Ajusta la imagen para que tenga un alto máximo de 400px y un ancho completo */
  height: 100vh; /* Asegura que el contenedor use todo el alto del viewport */
  width: 100%; /* Ocupa todo el ancho del viewport */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box; /* Asegura que el padding no afecte el tamaño total */
    @media (max-width: 375px) {
    background: hsl(225, 100%, 94%) url(${backgroundMobile}) no-repeat center top;
    background-size: 100% 220px;
    padding: 1rem; /* Reduce el padding en pantallas pequeñas */
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 15px;
  max-width: 450px;
  width: 380px;
  margin: auto;
  text-align: center;
  box-shadow: 0px 30px 45px rgba(0, 0, 0, 0.3);
  padding: 0; /* Elimina el padding interno si no es necesario */
  box-sizing: border-box; /* Asegura que el padding no afecte el tamaño total */

  @media (max-width: 375px) {
    max-width: 100%;
  }
`;


const HeroImage = styled.img`
  width: 100%;
  height: 180px;  
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  color: hsl(223, 47%, 23%);
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  margin: 1rem 0;
    @media (max-width: 375px) {
    font-size: 1.25rem; /* Reduce el tamaño del texto en pantallas pequeñas */
  }
`;

const Paragraph = styled.p`
  color: hsl(224, 23%, 55%);
  font-family: 'Red Hat Display', sans-serif;
  padding: 0 2rem;
  margin-bottom: 0.5rem;
    @media (max-width: 375px) {
    padding: 0 1rem; /* Reduce el padding en pantallas pequeñas */
  }
`;

const PlanContainer = styled.div`
  background-color: hsl(225, 100%, 98%);
  padding: 0 2rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const PlanIcon = styled.img`
  width: 50px;
    @media (max-width: 375px) {
    width: 40px; /* Reduce el tamaño del icono en pantallas pequeñas */
  }
`;

const PlanDetails = styled.div`
  text-align: left;
  flex: 1;
  margin-left: 1rem;
  margin-top:0.5rem;
    @media (max-width: 375px) {
    margin-left: 0;
    margin-top: 0.5rem; /* Mantiene el margen superior */
  }
`;

const PlanTitle = styled.p`
  font-weight: 700;
  color: hsl(223, 47%, 23%);
  margin:0;
  padding:0;
    @media (max-width: 375px) {
    font-size: 1rem; /* Reduce el tamaño del texto en pantallas pequeñas */
    position:relative;
    left:20px;
  }
`;

const PlanPrice = styled.p`
  color: hsl(224, 23%, 55%);
    margin:0;
    margin-bottom:10px;
  padding:0;
    @media (max-width: 375px) {
    font-size: 0.875rem; /* Reduce el tamaño del texto en pantallas pequeñas */
        position:relative;
    left:20px;
  }
`;

const ChangeLink = styled.a`
  color: hsl(245, 75%, 52%);
  font-weight: 700;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const Button = styled.button`
  background-color: hsl(245, 75%, 52%);
  color: white;
  border: none;
  margin: 0 1rem;
  width: 90%;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  margin-bottom: 1rem;
  &:hover {
    opacity: 0.8;
  }
     @media (max-width: 375px) {
    width: 80%; /* Ajusta el botón para que ocupe el ancho completo en pantallas pequeñas */
  }
`;

const CancelLink = styled.a`
  color: hsl(224, 23%, 55%);
  font-weight: 700;
  text-decoration: none;
  margin-bottom: 2rem; /* Ajusta este valor para proporcionar más espacio debajo */
  display: block; /* Asegura que el margin-bottom se aplique correctamente */
  &:hover {
    color: hsl(223, 47%, 23%);
    text-decoration: none;
  }
`;

const OrderSummaryCard = () => {
    return (
      <PageWrapper>
        <Card>
          <HeroImage src={heroImage} alt="hero" />
          <Title>Order Summary</Title>
          <Paragraph>
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
          </Paragraph>
  
          <PlanContainer>
            <PlanIcon src={musicIcon} alt="music icon" />
            <PlanDetails>
              <PlanTitle>Annual Plan</PlanTitle>
              <PlanPrice>$59.99/year</PlanPrice>
            </PlanDetails>
            <ChangeLink href="#">Change</ChangeLink>
          </PlanContainer>
  
          <Button>Proceed to Payment</Button>
          <CancelLink href="#">Cancel Order</CancelLink>
        </Card>
      </PageWrapper>
    );
  };
  
  export default OrderSummaryCard;