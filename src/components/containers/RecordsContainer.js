import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Container } from 'native-base';
import RecordsList from '../lists/RecordsList';

const RecordsContainer = ({ navigation, records, mediaType }) => {
  const [passingData, setPassingData] = useState([]);
  let currentPage = 1;

  useEffect(() => {
    if (records) {
      const initialData = records.slice(0, 10);
      setPassingData(initialData);
    }
  }, [records]);

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    const start = (nextPage - 1) * 10;
    const end = nextPage * 10;
    const nextPageData = records.slice(start, end);
    setPassingData(nextPageData);
    currentPage = nextPage;
  };

  return (
    <SafeAreaView>
      <Container maxWidth='100%'>
        <RecordsList
          navigation={navigation}
          records={passingData.length > 0 ? passingData : records}
          mediaType={mediaType}
        />
        <Button
          marginX='auto'
          marginY='4'
          paddingX='12'
          onPress={handleNextPage}
        >
          Next
        </Button>
      </Container>
    </SafeAreaView>
  );
};

export default RecordsContainer;
