import React from 'react';
import {View, Animated, Image, Dimensions} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import styled from 'styled-components/native';
import {Color} from '../../../tools/Color';
import {hp, wp} from '../../../tools/UI';

//Tinder Card
// 참고용 -> import TinderCard from 'react-tinder-card';

const TinderCard = () => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  console.log('shareValueX', x);
  console.log('shareValueY', y);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {x: number; y: number}
  >({
    onStart: (_, ctx) => {
      ctx.x = x.value;
      ctx.y = y.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.x + event.translationX;
      y.value = ctx.y + event.translationY;
    },
    onEnd: () => {
      x.value = withSpring(0);
      y.value = withSpring(0);
    },
  });

  const animStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View
        style={[animStyle, {height: 100, width: 100, backgroundColor: 'red'}]}>
        {/* <Container>
          <Image
            resizeMode="stretch"
            source={require('../../../assets/image/forTest.jpeg')}
            style={{width: wp(200), height: hp(200)}}
          />
        </Container> */}
      </Animated.View>
    </PanGestureHandler>
  );
};

const Container = styled.View`
  height: ${hp(200)};
  width: ${wp(200)};
  background-color: ${Color.green};
`;

export default TinderCard;
