import {Text, TouchableOpacity, View} from 'react-native';
import {useRewardedVideo4Adiscope} from '@adiscope.ad/adiscope-react-native';
import {useEffect} from 'react';

const WatchAdsScreen = () => {
  const {
    loadRewardedVideo4Adiscope,
    isLoadedRewardedVideo4Adiscope,
    showRewardedVideo4Adiscope,
  } = useRewardedVideo4Adiscope();
  const unitId = 'TEST';
  const onLoadAds = async () => {
    await loadRewardedVideo4Adiscope(unitId);
  };
  const onShowAds = async () => {
    const result = await isLoadedRewardedVideo4Adiscope(unitId);
    if (result) {
      const resultShow = await showRewardedVideo4Adiscope();
      if (resultShow) {
        // Success
      } else {
        // This Show request is duplicated
      }
    } else {
      // ad is not loaded
    }
  };
  useEffect(() => {
    onLoadAds();
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={onShowAds}>
        <Text>Watch Ads</Text>
      </TouchableOpacity>
    </View>
  );
};
export default WatchAdsScreen;
