import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const styles = StyleSheet.create(
  {
    container: { flex: 1 },
    registerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    styledInput: { height: hp('6%') },
    noAccountView: { flexDirection: 'row', alignItems: 'center' }
  }
)
