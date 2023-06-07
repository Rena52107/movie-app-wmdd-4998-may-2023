import { useState, useEffect } from 'react';
import { Heading, VStack, Text, Image, Center, Box } from 'native-base';
import { getRecord } from '../services/api';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const RecordDetail = (props) => {
  const { route } = props;
  const { id, mediaType } = route.params;
  const [record, setRecord] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getRecord(mediaType, id)
      .then((response) => {
        setRecord(response);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(`Error ${error}`, `Something went wrong! ${error}`);
      });
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!record) {
    return null;
  }

  return (
    <VStack>
      <Center
        height='160'
        width='100%'
      >
        <Heading size='lg'>{record.title || record.name}</Heading>
      </Center>
      <Center>
        <Image
          alt={record.title || record.name}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${record.poster_path}`,
          }}
          size='2xl'
        />
      </Center>
      <Box margin='8'>
        <Text>{record.overview}</Text>
        <Text paddingY='1'>
          Popularity: {record.popularity} | Release Date: {record.release_date}
        </Text>
      </Box>
    </VStack>
  );
};

export default RecordDetail;
