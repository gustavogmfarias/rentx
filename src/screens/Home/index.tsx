import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import Logo from "../../assets/logo.svg";

import { api } from "../../services/api";

import { Car } from "../../components/Car";
import { CarDTO } from "../../dtos/CarDTO";

import { Load } from "../../components/Load";

export default function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

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

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

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

      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
    </Container>
  );
}
