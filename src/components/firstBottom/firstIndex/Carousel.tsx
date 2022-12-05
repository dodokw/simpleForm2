import React from 'react';
import {View, Animated, Image, Dimensions} from 'react-native';
import styled from 'styled-components/native';

//Carousel
// 참고용 -> import Carousel, {Pagination} from 'react-native-snap-carousel';

const Carousel = () => {
  const imageData = [
    {
      id: 1,
      image: require('../../../assets/image/forTest.jpeg'),
    },
    {
      id: 2,
      image: require('../../../assets/image/forTest.jpeg'),
    },
    {
      id: 3,
      image: require('../../../assets/image/forTest.jpeg'),
    },
  ];

  const scrollX = new Animated.Value(0);
  const position = Animated.divide(scrollX, 300);
  const [index, setIndex] = React.useState(0);
  const [data, setData] = React.useState(imageData);

  const renderItem = ({item}: any) => {
    return (
      <Image
        resizeMode="contain"
        style={{width: Dimensions.get('window').width, height: 300}}
        source={item.image}
      />
    );
  };

  return (
    <Container>
      <Animated.FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        onMomentumScrollEnd={event => {
          const newIndex = Math.floor(event.nativeEvent.contentOffset.x / 300);
          setIndex(newIndex);
        }}
      />
      {/* <Pagination>
        {data.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return <Dot key={i} style={{}} />;
        })}
      </Pagination> */}
    </Container>
  );
};

const Container = styled.View`
  height: 300px;
  width: 100%;
  background-color: #fff;
`;
const ImageContainer = styled.View`
  height: 200px;
  width: 20%;
  background-color: #fff;
`;
const Pagination = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0;
  alignself: center;
`;
const Dot = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: #000;
  margin: 0 8px;
`;
export default Carousel;
