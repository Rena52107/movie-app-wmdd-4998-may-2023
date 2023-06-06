import { FlatList, Text, Divider } from 'native-base';
import RecordCard from '../listitems/RecordCard';

const RecordsList = (props) => {
  const { navigation, records, mediaType } = props;
  return (
    <FlatList
      data={records}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <RecordCard
          posterPath={item.poster_path}
          title={item.title || item.name}
          popularity={item.popularity}
          releaseDate={item.release_date || item.first_air_date}
          uri={item.uri}
          navigation={navigation}
          id={item.id}
          mediaType={mediaType || item.media_type}
        />
      )}
    />
  );
};

export default RecordsList;
