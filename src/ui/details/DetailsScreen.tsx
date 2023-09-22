import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ContainerRootStackParams} from '../navigations/ContainerStackNavigation';

const WindowWidth = Dimensions.get('window').width;

interface Props
  extends StackScreenProps<ContainerRootStackParams, 'DetailsScreen'> {}

export const DetailsScreen = ({navigation, route}: Props) => {
  const {character} = route.params;

  return (
    <View style={{flex: 1, backgroundColor: '#2d2f36'}}>
      <View
        style={{
          backgroundColor: 'white',
          width: WindowWidth,
          height: 200,
          position: 'absolute',
        }}
      />
      <Image
        source={require('../../assets/images/logoRickAndMorty.png')}
        style={styles.imageBG}
      />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.9}
          style={styles.backButtonContainer}>
          <Image
            source={require('../../assets/images/leftArrow.png')}
            style={styles.backButton}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{character.name}</Text>
        <View style={styles.container}>
          <Image source={{uri: character.image}} style={styles.image} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.detailsText}>Status: {character.status}</Text>
            <View
              style={{
                alignSelf: 'flex-end',
                bottom: 8,
                left: -30,
                height: 12,
                width: 12,
                borderRadius: 10,
                backgroundColor:
                  character.status === 'Alive'
                    ? 'green'
                    : character.status === 'Dead'
                    ? 'red'
                    : 'gray',
              }}
            />
          </View>
          <Text style={styles.detailsText}>Species: {character.species}</Text>
          <Text style={styles.detailsText}>Gender: {character.gender}</Text>
          <Text style={styles.detailsText}>
            Origin: {character.origin.name}
          </Text>
          <View style={{height: 40}} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  imageBG: {
    tintColor: 'rgba(32,36,41,0.6)',
    position: 'absolute',
    width: 300,
    height: 300,
    bottom: -70,
    right: -70,
  },
  image: {
    marginBottom: 40,
    // borderRadius: 20,
    height: WindowWidth,
    width: WindowWidth,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 40,
    left: 25,
  },
  backButton: {
    tintColor: '#2d2f36',
    width: 30,
    height: 30,
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center',
    width: WindowWidth - 130,
    marginHorizontal: 20,
    marginTop: 30,
    color: '#2d2f36',
    fontSize: 35,
    fontWeight: 'bold',
  },
  detailsText: {
    marginHorizontal: 40,
    marginTop: 10,
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
