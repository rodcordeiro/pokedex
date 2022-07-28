import React from "react";
import styled from "styled-components/native";
import { Button } from "../../components";
import pokeball from "../../../assets/icon.png";
import { Container, Title } from "./style";

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <Title>What are you looking for?</Title>
      <Button title="Choose a random Pokemon" icon={pokeball} />
    </Container>
  );
};

export default React.memo(HomeScreen);
