import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: wp('5%'),
    paddingTop: hp('5%'),
    paddingBottom: hp('2%'),
  },
  title: {fontSize: 25, marginTop: hp('1%'), marginLeft: wp('2%')},
  label: {fontSize: 17, paddingTop: hp('2%')},
});

export default styles;
