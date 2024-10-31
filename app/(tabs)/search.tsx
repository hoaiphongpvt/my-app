import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Searchbar } from 'react-native-paper'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <View>
      <Searchbar
        placeholder='Search'
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.search_bar}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search_bar: {
    marginLeft: 8,
    marginRight: 8,
    marginTop: 40,
  },
})

export default Search
