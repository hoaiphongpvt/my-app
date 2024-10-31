import Home from '@/app/(tabs)'
import Search from '@/app/(tabs)/search'
import Settings from '@/app/(tabs)/settings'
import User from '@/app/(tabs)/user'
import { FontAwesome } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation'

const Tab = createMaterialBottomTabNavigator()

function BottomNav() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor='red'
      inactiveColor='#5326ac'
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='home' color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='search' color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='cog' color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='User'
        component={User}
        options={{
          title: 'User',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='user' color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomNav
