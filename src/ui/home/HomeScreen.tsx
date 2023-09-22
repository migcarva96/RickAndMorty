import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import {CharacterCard} from './components/CharacterCard';
import {useHomeViewModel} from './useHomeViewModel';

const WindowWidth = Dimensions.get('window').width;

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation}: Props) => {
  const {charactersList, lastCharactersList, getCharactersList} =
    useHomeViewModel();

  return (
    <View>
      <Image
        source={require('../../assets/images/logoRickAndMorty.png')}
        style={styles.imageBg}
      />
      <FlatList
        data={charactersList}
        keyExtractor={character => character.id.toString()}
        ListHeaderComponent={
          <Image
            source={require('../../assets/images/titleRickAndMorty.png')}
            style={styles.titleImage}
            resizeMode={'contain'}
          />
        }
        showsVerticalScrollIndicator={false}
        initialNumToRender={8}
        maxToRenderPerBatch={10}
        removeClippedSubviews={true}
        renderItem={({item}) => (
          <CharacterCard
            onPress={() =>
              navigation.navigate('DetailsScreen', {character: item})
            }
            character={item}
            windowWidth={WindowWidth}
          />
        )}
        onEndReached={!lastCharactersList ? getCharactersList : () => {}}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          !lastCharactersList ? (
            <ActivityIndicator style={{height: 100}} size={20} color="grey" />
          ) : (
            <></>
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleImage: {
    width: WindowWidth - 80,
    height: 100,
    marginTop: 30,
    marginVertical: 20,
    alignSelf: 'center',
  },
  imageBg: {
    tintColor: 'rgba(100, 100, 100, 0.2)',
    position: 'absolute',
    width: 300,
    height: 300,
    top: -70,
    right: -70,
  },
});
