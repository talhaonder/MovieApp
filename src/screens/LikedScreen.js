import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import LikeListItem from '../components/LikeListItem';
import { selectLikeItems } from '../store/likeSlice';

const LikedScreen = () => {
  const likedMovies = useSelector(selectLikeItems);

  return (
    <View style={styles.container}>
      <FlatList
        data={likedMovies}
        renderItem={({ item }) => <LikeListItem likeItem={item} />}
        keyExtractor={(item) => item.like.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
});

export default LikedScreen;
