import { Center, Container, Text } from 'native-base';
import RecordsList from '../lists/RecordsList';

const RecordsContainer = ({ navigation, records, mediaType }) => {
  return (
    <Container maxWidth='100%'>
        <RecordsList
          navigation={navigation}
          records={records}
          mediaType={mediaType}
        />
    </Container>
  );
};

export default RecordsContainer;
