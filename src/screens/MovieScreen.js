import { useEffect, useState } from 'react';
import { getRecords } from '../services/api';
import { VStack, Text } from 'native-base';
import ListTypeSelect from '../components/forms/ListTypeSelect';
import RecordsContainer from '../components/containers/RecordsContainer';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const MovieScreen = ({ navigation }) => {
  const [listType, setListType] = useState('popular');
  const [records, setRecords] = useState();
  const [isloading, setIsLoading] = useState(false);

  const options = [
    { label: 'Popular', value: 'popular' },
    { label: 'Now Playing', value: 'now_playing' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];

  useEffect(() => {
    setIsLoading(true);
    getRecords('movie', listType)
      .then((response) => {
        setRecords(response);
        setIsLoading(false);
      })
      .catch((error) => {
        alert('Error', `Something went wrong! ${error}`);
      });
  }, [listType]);

  if (isloading) {
    return <LoadingSpinner />;
  }

  function handleSelectChange(listType) {
    setListType(listType);
  }

  return (
    <VStack
      space={3}
      alignSelf='center'
    >
      <ListTypeSelect
        options={options}
        onSelectChange={handleSelectChange}
        selectedOption={listType}
      />
      <RecordsContainer
        records={records}
        navigation={navigation}
        mediaType='movie'
      />
    </VStack>
  );
};

export default MovieScreen;
