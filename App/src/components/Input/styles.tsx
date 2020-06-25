import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors} from '../../theme/colors';

const styles = StyleSheet.create({
  genericContainer: {
    borderWidth: 1,
    paddingHorizontal: wp('1%'),
    width: wp('65%'),
    height: hp('6.5%'),
  },
  genericContainerFocused: {
    borderColor: colors.lightGray,
  },
});

export default styles;
