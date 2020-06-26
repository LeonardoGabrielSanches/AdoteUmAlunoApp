import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../../theme/colors';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.darkBlue,
    height: hp('5%'),
    width: wp('100%'),
    justifyContent: 'center',
  },
  textHeader: {color: colors.white, alignSelf: 'center', fontSize: 20},
});

export default styles;
