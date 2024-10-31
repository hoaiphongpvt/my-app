import { Link, router } from 'expo-router'
import { useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Card, TextInput, Text, Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { login } from '../features/user/userSlice'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Please enter  both email and password')
      return
    }
    dispatch(login({ email, password }))
    router.push('/')
  }

  return (
    <View>
      <View>
        <Card>
          <Card.Cover
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlSohIJQRdUTJehjWXPzrTEJzY_pWnvPxLw&s',
            }}
          />
        </Card>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.title} variant='titleLarge'>
          LOG IN
        </Text>
        <TextInput
          mode='outlined'
          label='Email'
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          mode='outlined'
          label='Password'
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
          right={<TextInput.Icon icon='eye' />}
        />
        <Button mode='contained' onPress={handleLogin} style={styles.btnLogin}>
          LOG IN
        </Button>
      </View>
      <View style={{ display: 'flex' }}>
        <Text style={{ marginTop: 8, padding: 8 }}>
          Dont't have account?{' '}
          <Link href='./signup' style={{ color: 'blue' }}>
            Sign Up
          </Link>
        </Text>
        <Text style={{ padding: 8 }}>
          <Link href='./forgotpassword' style={{ color: 'blue' }}>
            Forgot password?
          </Link>
        </Text>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 8,
    fontWeight: 700,
    textAlign: 'center',
  },
  btnLogin: {
    marginTop: 8,
    marginRight: 8,
    marginLeft: 8,
  },
  input: {
    marginTop: 4,
    marginRight: 8,
    marginLeft: 8,
  },
})
