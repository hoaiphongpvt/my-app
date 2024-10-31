import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/user/userSlice'
import { RootState } from '../store'

const User = () => {
  const email = useSelector((store: RootState) => store.user.email)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <View style={styles.container}>
      {email ? (
        <View>
          <Text variant='displayLarge'>Hello, ${email}</Text>
          <Button mode='contained' onPress={handleLogout} style={styles.btn}>
            LOG OUT
          </Button>
        </View>
      ) : (
        <Button
          mode='contained'
          onPress={() => router.push('/login')}
          style={styles.btn}
        >
          LOGIN
        </Button>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  btn: {
    padding: 4,
  },
})

export default User
