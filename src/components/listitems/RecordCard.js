import {
  Box,
  Heading,
  Image,
  Text,
  Button,
  HStack,
} from 'native-base';

const RecordCard = (props) => {
  const {
    posterPath,
    title,
    popularity,
    releaseDate,
    id,
    navigation,
    mediaType,
  } = props;
  return (
    <Box
      maxWidth='100%'
      justifyContent='true'
      borderColor='#d3d3d3'
      borderBottomWidth='1'
      p='2'
    >
      <HStack space={4}>
        <Box py='1'>
          <Image
            alt={title}
            source={{ uri: `https://image.tmdb.org/t/p/w500${posterPath}` }}
            size='xl'
          />
        </Box>
        <Box
          py='1'
          maxWidth='60%'
          style={{ flexDirection: 'column'}}
        >
          <Heading size='sm'>{title}</Heading>
          <Text fontSize='sm'>Popularity: {popularity}</Text>
          <Text fontSize='sm'>Released Date: {releaseDate}</Text>
          <Box style={{ marginTop: 'auto' }}>
            <Button
              minWidth='100%'
              alignSelf='flex-end'
              onPress={() => {
                navigation.navigate('Detail', {
                  id: id,
                  mediaType: mediaType,
                  title: title,
                });
              }}
            >
              More Details
            </Button>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default RecordCard;
