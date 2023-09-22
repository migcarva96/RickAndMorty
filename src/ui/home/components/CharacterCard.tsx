import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageErrorEventData,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Character} from '../../../model/entities/CharactersResponse';

interface Props {
  character: Character;
  windowWidth: number;
  onPress: () => void;
}

export const CharacterCard = ({character, windowWidth, onPress}: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
  };

  const onError = (err: NativeSyntheticEvent<ImageErrorEventData>) => {
    setIsLoading(false);
  };

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} key={character.id}>
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth - 40,
        }}>
        {isLoading && (
          <ActivityIndicator
            style={styles.activityIndicator}
            color="white"
            size={30}
          />
        )}
        <View style={styles.imageBgContainer}>
          <Image
            source={require('../../../assets/images/logoRickAndMorty.png')}
            style={styles.imageBg}
          />
        </View>
        <Image
          source={{uri: character.image}}
          onError={onError}
          onLoad={finishLoading}
          style={styles.image}
          resizeMode={'contain'}
        />
        <View style={{...styles.textContainer, width: windowWidth - 180}}>
          <Text style={styles.nameText} numberOfLines={2}>
            {character.name}
          </Text>
          <Text style={styles.specieText}>Species: {character.species}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#2d2f36',
    marginHorizontal: 20,
    height: 120,
    marginBottom: 25,
    borderRadius: 10,
    flexDirection: 'row',
  },
  image: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: 120,
    width: 120,
  },
  textContainer: {
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  nameText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  specieText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  activityIndicator: {
    position: 'absolute',
    top: 45,
    left: 45,
  },
  imageBgContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageBg: {
    tintColor: 'rgba(32,36,41,0.6)',
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -20,
    right: -20,
  },
});
