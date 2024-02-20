import React from 'react';
import { StyleSheet, View, Image, ScrollView, Text, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { likeSlice } from '../store/likeSlice';
import Icon from 'react-native-vector-icons/FontAwesome';
import { image500 } from '../../api/moviedb';

const MovieDetailsScreen = ({ route }) => {
  const { selectedMovie } = route.params;
  const dispatch = useDispatch();

  const addToLike = () => {
    dispatch(
      likeSlice.actions.addLikeItem({
        id: selectedMovie.id,
        title: selectedMovie.title,
        poster_path: selectedMovie.poster_path,
      }),
    );
  };

  return (
    <>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Image source={{ uri: image500(selectedMovie.poster_path) }} style={styles.image} />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{selectedMovie.title}</Text>
          <Text style={styles.release_date}>• {selectedMovie.release_date} •</Text>
          <Text style={styles.overview}>{selectedMovie.overview}</Text>
        </View>
      </ScrollView>
      <Pressable onPress={addToLike} style={styles.button}>
        <Icon name='heart' size={24} color='red' />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 0.7,
  },
  release_date: {
    color: 'rgb(129, 132, 128)',
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
  },
  overview: {
    color: 'rgb(129, 132, 128)',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 30,
    width: 'auto',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 45,
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default MovieDetailsScreen;
