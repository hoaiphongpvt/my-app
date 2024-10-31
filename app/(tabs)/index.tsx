import { useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Platform,
  PermissionsAndroid,
} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Button } from 'react-native-paper'
// import Geolocation from '@react-native-community/geolocation'

export default function Home() {
  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location')
      } else {
        console.log('Location permission denied')
      }
    }
  }

  const initialRegion = {
    latitude: 10.772926,
    longitude: 106.704878,
    latitudeDelta: 2,
    longitudeDelta: 2,
  }

  const handleGetLocation = () => {
    // Geolocation.getCurrentPosition(
    //   (position) => {
    //     console.log(position)
    //   },
    //   (error) => {
    //     console.log(error.message)
    //   },
    //   { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    // )
  }

  // useEffect(() => {
  //   requestLocationPermission()
  // }, [])

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        showsUserLocation={true}
      />
      <Button style={{ marginBottom: 20 }} onPress={handleGetLocation}>
        Get My Location
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
})
