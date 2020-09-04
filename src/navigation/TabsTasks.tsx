import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Tasks from '../screens/Tasks'
import RegisterTask from '../screens/RegisterTask'

import { Ionicons } from '@expo/vector-icons'

const TabsTasks: React.FC = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator 
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 100
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 30,
          height: 30
        },
        labelStyle: {
          fontFamily: 'Ubuntu',
          fontSize: 13
        },
        activeBackgroundColor: '#52ff74',
        inactiveBackgroundColor: '#ffffff',
        activeTintColor: '#000e24',
        inactiveTintColor: '#52ff74'
      }}
    >
        <Tab.Screen 
          name='Tasks' 
          component={Tasks}
          options={{
            title: 'Tarefas',
            tabBarIcon: ({ color, focused, size }) => <Ionicons name='ios-list-box' color={color} size={size} />
          }} 
        />
        <Tab.Screen 
          name='RegisterTask' 
          component={RegisterTask}
          options={{
            title: 'Adicionar',
            tabBarIcon: ({ color, focused, size }) => <Ionicons name="ios-add-circle" color={color} size={size} />
          }}
        />
    </Tab.Navigator>
  )
}

export default TabsTasks
