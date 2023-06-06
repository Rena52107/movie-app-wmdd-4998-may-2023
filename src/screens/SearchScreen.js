import { useEffect, useState } from 'react';
import SearchBox from '../components/forms/SearchBox';
import { Center, Heading, VStack } from 'native-base';
import RecordsContainer from '../components/containers/RecordsContainer';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { getSearchResults } from '../services/api';

export default function SearchScreen({ navigation }) {
  const [mediaType, setMediaType] = useState('multi');
  const [records, setRecords] = useState();
  const [query, setQuery] = useState('');
  const [isloading, setIsLoading] = useState(false);

  const handleSelectChange = (mediaType) => {
    setMediaType(mediaType);
  };

  const handleChangeInput = (input) => {
    setQuery(input);
  };

  const handleSearch = () => {
    setIsLoading(true);
    getSearchResults(mediaType, query)
      .then((response) => {
        setRecords(response);
        setIsLoading(false);
      })
      .catch((error) => {
        alert('Error', `Something went wrong! ${error}`);
      });
  };

  if (isloading) {
    return <LoadingSpinner />;
  }

  return (
    <VStack
      space={3}
      alignSelf='center'
    >
      <SearchBox
        query={query}
        onSelectChange={handleSelectChange}
        onChangeInput={handleChangeInput}
        onSubmit={handleSearch}
        selectedOption={mediaType}
      />
      {records ? (
        <RecordsContainer
          records={records}
          navigation={navigation}
        />
      ) : (
        <Center
          px={4}
          py={40}
        >
          <Heading size='md'>Please initiate a search</Heading>
        </Center>
      )}
    </VStack>
  );
}
