import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const days = [1,2,3,4,5,6]

export default function App() {
  return (
    
    <View style={styles.container}>
      <FlatList 
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.box}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
      />

      {/* {days.map((day) => (
        <View style={styles.box} key={day}>
          <Text style={styles.text}>{day}</Text>
        </View>
      ))} */}

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    top: 45,
    gap: 10,
    margin: 10
  },

  column: {
    gap: 10,
  },

  box:{
    backgroundColor: '#f9ede3',
    // width: 100,
    // height: 100,
    flex: 1,
    aspectRatio: 1/1.3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#9b4521',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    color: '#9b4521',
    fontSize: 50,
  }
});
