import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Linking, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/talhaonder/');
  };

  const openGitHub = () => {
    Linking.openURL('https://github.com/talhaonder');
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="arrow-left" size={24} color="black" style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>
            <Icon name="user" size={20} color="black" /> Profil
          </Text>
        </View>
        <View style={styles.profileContent}>
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.profileText}>
              <Icon name="user" size={20} color="black" /> Talha Önder
            </Text>
            <Text style={styles.profileText}>
              <Icon name="envelope" size={20} color="black" /> ltalhaonderl@gmail.com
            </Text>
            <Text style={styles.profileText}>
              <Icon name="map-marker" size={20} color="black" /> Bolu, Türkiye
            </Text>
            <TouchableOpacity onPress={openGitHub}>
              <Text style={[styles.link, styles.profileText]}>
                <Icon name="github" size={20} color="black" /> GitHub
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openLinkedIn}>
              <Text style={[styles.link, styles.profileText]}>
                <Icon name="linkedin" size={20} color="black" /> LinkedIn
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  backButton: {
    marginRight: 10
  },
  backIcon: {
    height: 25,
    width: 25
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  profileText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black',
    paddingLeft: 10
  },
  link: {
    color: 'blue'
  }
});

export default ProfileScreen;
