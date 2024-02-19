import React, { useEffect } from 'react';
import { View, Text, FlatList, Pressable, Image, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedMovie, fetchMoviesAsync } from '../store/movieSlice';
import { image500 } from '../../api/moviedb';
import Icon from 'react-native-vector-icons/FontAwesome';


const MovieScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movie.movies);

  useEffect(() => {
    dispatch(fetchMoviesAsync());
  }, [dispatch]);

  return (
    <>
      <SafeAreaView>
        <StatusBar />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 10,
          }}
        >
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <Icon
              name="user"
              size={24}
              color="gray"
            />
          </Pressable>
          <Text
            style={{
              color: "gray",
              fontWeight: "700",
              fontSize: 24,
            }}
          >
            <Text style={{ color: "white", fontWeight: "700" }}>Talh</Text>App
          </Text>
          <Pressable onPress={() => navigation.navigate("Liked")}>
            <Icon
              name="search"
              size={24}
              color="gray"
            />
          </Pressable>
        </View>
      </SafeAreaView>
      <FlatList
        style={{ flex: 4 }}
        data={movies}
        renderItem={({ item }) => (
          <Pressable onPress={() => {
            dispatch(setSelectedMovie(item.id));
            navigation.navigate('Movie Details', { selectedMovie: item });
          }}
            style={styles.itemContainer}>
            <Image source={{ uri: image500(item.poster_path) }} style={[styles.image, { resizeMode: 'cover' }]} />
          </Pressable>
        )}
        numColumns={2}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 0.7,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2
  },
  itemContainer: {
    width: '50%',
    padding: 2,
  },
  title: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 45,
  },
});

export default MovieScreen;