import { useEffect, useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import * as Location from 'expo-location'

interface User {
  id: string
  name: string
  location: {
    lat: number
    long: number
  }
}

export default function Home() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null)
  const [users, setUsers] = useState<User[]>([])

  const initialRegion = {
    latitude: location?.coords.latitude || 1,
    longitude: location?.coords.longitude || 1,
    latitudeDelta: 2,
    longitudeDelta: 2,
  }

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        Alert.alert('error')
        return
      }
      // Lấy vị trí hiện tại
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://192.168.0.177:3000/users')
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [])

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        showsUserLocation
        followsUserLocation={true}
        showsMyLocationButton
      >
        {users?.map((user) => (
          <Marker
            key={user.id}
            coordinate={{
              latitude: user.location.lat,
              longitude: user.location.long,
            }}
            title={user.name}
          />
        ))}
      </MapView>
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
