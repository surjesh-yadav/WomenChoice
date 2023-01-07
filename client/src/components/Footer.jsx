import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div({
  display: "flex",
});

const Left = styled.div({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
});

const Logo = styled.h1({});

const Desc = styled.p({
  margin: "20px 0px",
});

const SocialContainer = styled.div({
  display: "flex",
});

const SocialIcon = styled.div({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  color: "white",
  display: "flex",
  alignIteams: "center",
  justifyContent: "center",
  marginRight: "20px",
});

const Center = styled.div({
  flex: "1",
  padding: "20px",
});

const Title = styled.h3({
  marginBottom: "30px",
});

const List = styled.ul({
  margin: "0",
  padding: 0,
  listStyle: "none",
  display: "flex",
  flexWrap: "wrap",
});

const ListItem = styled.li({
  width: "50%",
  marginBottom: "10px",
});

const Right = styled.div({
  flex: "1",
  padding: "20px",
});

const ContactItem = styled.div({
  marginBottom: "20px",
  display: "flex",
  alignItems: "center",
});

const Payment = styled.img({
  width: "50%",
});

const Footer = () => {
  return (
    <div className="foter">
      <Container>
        <Left>
          <Logo>WomenChoice</Logo>
          <Desc>
      Women Choice is the Most approachable online marketplace for women No matter when and where you need help, WomenChoice's support team is there for you. When it comes to cataloguing support, photo shoots of your products or packaging, our third-party E-commerce Service Providers are at your service.

          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>SHOP</Title>
          <List>
            <ListItem>Women Tops</ListItem>
            <ListItem>Women Jeans</ListItem>
            <ListItem>Women Kurti</ListItem>
            <ListItem>Women Kurta</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <h3 style={{  marginBottom : "10px" }}>Surjesh Yadav</h3>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} />
           Bareilly, Uttar Pradesh, India-243001
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> +918445618704
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} />{" "}
            surjeshom@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    </div>
  );
};

export default Footer;
