import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
  textInput: {
    borderRadius: hp('1%'),
    borderColor: 'black',
    borderWidth: wp('0.25%'),
    width: wp('60%'),
    height: hp('4%'),
    textAlign: 'center'
  }
})
