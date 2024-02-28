import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import FlatListItem from './components/FlatListItem';

export default function App() {
  const [input, setInput] = useState("")
  const [items, setItems] = useState([])

  const handleBtnOnPress = () => {
    if (input.length !== 0) {
      setItems(prev => [input, ...prev])
      setInput("")
    }
  }

  return (
    <View style={styles.container}>
      <View style={{
        width: '100%',
        flexDirection: 'row',
      }}>
        <TextInput
          placeholder='Enter an item'
          style={{
            borderWidth: 1,
            padding: 8,
            borderColor: '#ADADAD',
            borderRadius: 16,
            flex: 1
          }}
          value={input}
          onChangeText={e => {
            setInput(e)
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            padding: 8,
            margin: 8,
            borderRadius: 16
          }}
          onPress={handleBtnOnPress}
        >
          <Text style={{ fontSize: 32 }} t>add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={items}
        renderItem={({ item }) => <FlatListItem item={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 32,
    paddingHorizontal: 16
  },
  counterText: {
    color: 'black',
    fontSize: 40
  }
});
