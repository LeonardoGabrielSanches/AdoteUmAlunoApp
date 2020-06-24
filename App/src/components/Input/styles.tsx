import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {colors} from '../../theme/colors';

const styles = StyleSheet.create({
  genericContainer: {
    backgroundColor: 'white',
    borderColor: colors.darkRed,
    borderWidth: 1,
    color: colors.black,
    paddingHorizontal: wp('1%'),
  },
  genericContainerFocused: {
    borderColor: colors.red,
  },
  disabledInput: {
    backgroundColor: 'white',
  },
});

export default styles;
