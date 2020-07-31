import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/Login'
import Register from '../pages/Register'
import RoutesNames from '../routes/routesNames'

const { Navigator, Screen } = createStackNavigator()

export default function Routes () {
  return (
    <Navigator
      initialRouteName="Login"
      headerMode="none"
    >
      <Screen name={RoutesNames.login} component={Login} />
      <Screen name={RoutesNames.register} component={Register}/>
    </Navigator>
  )
}
