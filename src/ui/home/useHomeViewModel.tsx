import {useEffect, useRef, useState} from 'react';
import {Client} from '../../model/api/Client';
import {
  Character,
  CharactersResponse,
} from '../../model/entities/CharactersResponse';

export const useHomeViewModel = () => {
  const [charactersList, setCharactersList] = useState<Character[]>([]);

  const [lastCharactersList, setLastCharactersList] = useState<boolean>(false);
  const nextPage = useRef('1');

  const getCharactersList = async () => {
    Client.get<CharactersResponse>('', {params: {page: nextPage.current}})
      .then(response => {
        const newCharactersList: Character[] = response.data.results;
        setCharactersList([...charactersList, ...newCharactersList]);

        if (response.data.info.next !== null) {
          const nextPageResponse = response.data.info.next.split('=');
          nextPage.current = nextPageResponse[nextPageResponse.length - 1];
        } else {
          setLastCharactersList(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCharactersList();
  }, []);

  return {
    getCharactersList,
    charactersList,
    lastCharactersList,
  };
};
