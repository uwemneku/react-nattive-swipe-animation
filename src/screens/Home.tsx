import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "../components";
import styled from "styled-components/native";

const Home = () => {
  return (
    <Container>
      <Card />
    </Container>
  );
};

export default Home;

const Container = styled.View`
  margin: 20px;
`;
