import {Text, TouchableOpacity, View} from 'react-native';

const HomeScreen = ({navigation}: any) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={{
          paddingVertical: 12,
          paddingHorizontal: 30,
          backgroundColor: 'blue',
        }}
        onPress={() => navigation.navigate('Watch')}>
        <Text style={{color: 'white'}}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
