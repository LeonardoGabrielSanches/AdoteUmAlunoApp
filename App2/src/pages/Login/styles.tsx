import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {flex: 1},
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  newUserView: {flexDirection: 'row'},
  newUserText: {paddingLeft: wp('0.5%'), color: colors.blue},
  text: {fontSize: 20, paddingBottom: hp('1%')},
});

export default styles;
