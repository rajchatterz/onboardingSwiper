// AuthScreen.js
import React from 'react';
import {View, TextInput} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import OnboardingScreen from './component/OnboardingScreen';
import CustomPagination from './component/CustomSwiper';

const AuthScreen = () => {
  const data = [
    {
      image: require('./assets/images/w1.jpg'),
      title: 'Welcome',
      description: 'Swipe to learn more',
    },
    {
      image: require('./assets/images/w2.jpeg'),
      title: 'Feature 1',
      description: 'Awesome feature 1',
    },
    {
      image: require('./assets/images/w3.jpeg'),
      title: 'Feature 2',
      description: 'Amazing feature 2',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <Carousel
        data={data}
        renderItem={({item}) => (
          <OnboardingScreen
            image={item.image}
            title={item.title}
            description={item.description}
          />
        )}
        sliderWidth={300}
        itemWidth={300}
        renderPagination={({index, total, current}) => (
          <CustomPagination activeIndex={current} total={total} />
        )}
        autoplay
        autoplayInterval={3000} // Adjust the interval as needed (in milliseconds)
        loop // Enable the loop
      />
      <TextInput placeholder="Phone Number" />
      {/* Other authentication components */}
    </View>
  );
};

export default AuthScreen;
