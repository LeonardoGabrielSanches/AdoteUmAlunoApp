import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    registerContainer: {
      flexDirection: 'column'
    },
    styledInput: { height: hp('6%') },
    noAccountView: { flexDirection: 'row', alignItems: 'center' }
  }
)
