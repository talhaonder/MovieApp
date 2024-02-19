import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { likeSlice } from "../store/likeSlice";
import Icon from 'react-native-vector-icons/FontAwesome';
import { image500 } from '../../api/moviedb';

const LikeListItem = ({ likeItem }) => {
  const dispatch = useDispatch();

  const removeLike = () => {
    dispatch(likeSlice.actions.removeLikeItem({ id: likeItem.like.id }));
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image500(likeItem.like.poster_path) }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{likeItem.like.title}</Text>
        <View style={styles.footer}>
          <Icon
            name="trash"
            onPress={removeLike}
            size={24}
            color="red"
          />
          <Text style={styles.quantity}>Delete</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: "center"
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: '40%',
    aspectRatio: 0.7,
  },
  name: {
    fontWeight: '700',
    fontSize: 24,
    color: "white"
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: 'gray',
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default LikeListItem;
