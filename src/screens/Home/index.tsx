import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import Logo from "../../assets/logo.svg";

import { Car } from "../../components/Car";

export default function Home() {
  const carData = {
    brand: "audi",
    name: "RS coupe",
    rent: {
      period: "ao dia",
      price: 50,
    },
    thumbnail:
      "http://imagenspng.com/wp-content/uploads/imagem-de-carros-em-png-Imagem-sem-fundo-1.png",
  };

  const car2 = {
    brand: "porshe",
    name: "RS coupe",
    rent: {
      period: "ao dia",
      price: 50,
    },
    thumbnail:
      "http://imagenspng.com/wp-content/uploads/imagem-de-carros-em-png-Imagem-sem-fundo-1.png",
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={carData} />}
      />
    </Container>
  );
}
