import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TabsTasks from '../navigation/TabsTasks'

const Stack = createStackNavigator()

const Navigation: React.FC = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Home' component={TabsTasks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation