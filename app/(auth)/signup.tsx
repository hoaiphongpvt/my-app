import { useState } from 'react'
import { Link } from 'expo-router'
import { View, StyleSheet, Alert } from 'react-native'
import { Card, TextInput, Text, Button } from 'react-native-paper'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [fullname, setFullname] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  return (
    <View>
      <View>
        <Card>
          <Card.Cover
            source={{
              uri: 'https://c7.alamy.com/comp/2H0HDJM/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-2H0HDJM.jpg',
            }}
          />
        </Card>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.title} variant='titleLarge'>
          SIGN UP
        </Text>
        <TextInput
          mode='outlined'
          label='Full Name'
          value={fullname}
          onChangeText={(text) => setFullname(text)}
          style={styles.input}
        />

        <TextInput
          mode='outlined'
          label='Email'
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          mode='outlined'
          label='Address'
          value={address}
          onChangeText={(text) => setAddress(text)}
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

        <TextInput
          mode='outlined'
          label='Confirm Password'
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
          style={styles.input}
          right={<TextInput.Icon icon='eye' />}
        />
        <Button
          mode='contained'
          onPress={() => Alert.alert('SIGN UP SUCCESSFULLY!')}
          style={styles.btnLogin}
        >
          SIGN UP
        </Button>
      </View>
      <View>
        <Text style={{ marginTop: 8, padding: 8 }}>
          Already account?{' '}
          <Link href='./login' style={{ color: 'blue' }}>
            Log In
          </Link>
        </Text>
      </View>
    </View>
  )
}

export default Signup

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
