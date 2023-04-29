import React from 'react';
import {
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

const data = [
  { id: '1', image: require('../assets/img1.png') },
  { id: '2', image: require('../assets/imgrect.png') },
  { id: '3', image: require('../assets/img1.png') },
  { id: '4', image: require('../assets/imgrect.png') },
];

const renderItem = ({ item }) => (
  <TouchableOpacity style={styles.item}>
    <Image source={item.image} style={styles.image} />
  </TouchableOpacity>
);

export default function ColumnView() {
  return (
    
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={renderItem}
      style={{ width: '95%', alignSelf: 'center' }}
    />
    
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 100,
    margin: 5,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  screen: { backgroundColor: '#d9d9d9', flex: 1 },
});
