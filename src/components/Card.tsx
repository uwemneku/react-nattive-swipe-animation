import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
interface Props {}
const Card = () => {
  const { height, width } = useWindowDimensions();
  const halfWidth = width / 2;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onActive({ translationX: x, translationY: y }) {
      translateX.value = x;
      translateY.value = y;

      console.log("x", x);
    },
    onCancel() {},
    onEnd(event, context) {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      {
        rotateZ:
          interpolate(
            translateX.value,
            [-halfWidth, halfWidth],
            [15, -15],
            Extrapolate.CLAMP
          ) + "deg",
      },
    ],
  }));

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[animatedStyle]}>
        <Container>
          <Text>Card</Text>
        </Container>
      </Animated.View>
    </PanGestureHandler>
  );
};

const Container = styled.View`
  height: 400px;
  background-color: #0084ff;
  border-radius: 20px;
`;
export default Card;
