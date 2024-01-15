// CustomPagination.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const CustomSwiper = ({ activeIndex, total }) => {
  return (
    <View style={styles.container}>
      {[...Array(total).keys()].map((index) => (
        <View
          key={index}
          style={[
            styles.dot,
            { backgroundColor: index === activeIndex ? 'blue' : 'gray' },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10, // Adjust the margin as needed
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    margin: 5,
  },
});

export default CustomSwiper;
