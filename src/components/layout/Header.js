import { Box, HStack, StatusBar, Text } from 'native-base';
import { Colors } from '../../constants/styles';

const Header = () => {
  return (
    <>
      <StatusBar
        backgroundColor={Colors.primary100}
        barStyle='light-content'
      />
      <Box
        safeAreaTop
        backgroundColor={Colors.primary100}
      >
        <HStack
          bg={Colors.primary100}
          px={1}
          py={3}
          alignItems='center'
          justifyContent='center'
        >
          <Text
            color='#fff'
            fontSize={20}
            textAlign='center'
          >
            Movies App
          </Text>
        </HStack>
      </Box>
    </>
  );
};

export default Header;
