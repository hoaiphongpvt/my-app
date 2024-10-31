import { Stack } from 'expo-router/stack'
import { Provider } from 'react-redux'
import store from './store'

export default function Layout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen
          name='(auth)/login'
          options={{ headerShown: true, title: 'Login' }}
        />
        <Stack.Screen
          name='(auth)/signup'
          options={{ headerShown: true, title: 'Sign Up' }}
        />
      </Stack>
    </Provider>
  )
}
