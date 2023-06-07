import { useEffect, useState } from 'react';
import { getRecords } from '../services/api';
import { VStack, Text } from 'native-base';
import ListTypeSelect from '../components/forms/ListTypeSelect';
import RecordsContainer from '../components/containers/RecordsContainer';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const TvScreen = ({ navigation }) => {
  const [listType, setListType] = useState('airing_today');
  const [records, setRecords] = useState();
  const [isloading, setIsLoading] = useState(false);

  const options = [
    { label: 'Airing Today', value: 'airing_today' },
    { label: 'On The Air', value: 'on_the_air' },
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
  ];

  useEffect(() => {
    setIsLoading(true);
    getRecords('tv', listType)
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

  const handleSelectChange = (listType) => {
    setListType(listType);
  };

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
        mediaType='tv'
      />
    </VStack>
  );
};

export default TvScreen;
