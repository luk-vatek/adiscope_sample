import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/home';
import WatchAdsScreen from '../screen/watchAds';
const AppNavigator = createNativeStackNavigator();
const Routes = () => {
  return (
    <AppNavigator.Navigator initialRouteName="Home">
      <AppNavigator.Screen name="Home" component={HomeScreen} />
      <AppNavigator.Screen name="Watch" component={WatchAdsScreen} />
    </AppNavigator.Navigator>
  );
};
export default Routes;
