import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../../theme/colors';

const styles = StyleSheet.create({
  button: {
    height: hp('6%'),
    width: wp('30%'),
    marginVertical: hp('1%'),
    marginHorizontal: wp('0.75%'),
    paddingVertical: hp('0.25%'),
    paddingHorizontal: wp('2.5%'),
    borderRadius: wp('2%'),
  },
  primary: {
    backgroundColor: colors.blue,
    borderWidth: 0,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.blue,
  },
  title: {
    fontSize: wp('4%'),
    lineHeight: 19,
  },
  titlePrimary: {
    color: colors.white,
  },
  titleSecondary: {
    color: colors.blue,
  },
});

export default styles;
