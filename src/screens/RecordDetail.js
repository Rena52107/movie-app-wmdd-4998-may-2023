import { useState, useEffect } from 'react';
import { Heading, VStack, Text, Image } from 'native-base';
import { getRecord } from '../services/api';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const RecordDetail = (props) => {
  const { route, navigation } = props;
  const { id, mediaType } = route.params;
  const [record, setRecord] = useState();
  // const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    getRecord(mediaType, id)
      .then((response) => {
        setRecord(response);
        // setIsLoading(false);
      })
      .catch((error) => {
        alert(`Error ${error}`, `Something went wrong! ${error}`);
      });
  }, []);

  if (!record) {
    return <LoadingSpinner />;
  }

  return (
    <VStack>
      <Heading>{record.title || record.name}</Heading>
      <Image
        alt={record.title || record.name}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${record.poster_path}`,
        }}
        size='2xl'
      />
      <Text>{record.overview}</Text>
      <Text>
        Popularity: {record.popularity} | Release Date: {record.release_date}
      </Text>
    </VStack>
  );
};

export default RecordDetail;
