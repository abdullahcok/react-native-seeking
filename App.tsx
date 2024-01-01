import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import DayListItem from './src/components/core/DayListItem';

import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


const days = [...Array(31)].map((val, index) => index + 1)


export default function App() {

const [fontsLoaded, fontError] = useFonts({
  Inter: Inter_900Black,
})

if(!fontsLoaded && !fontError){
  return <ActivityIndicator/>
}

  return (

    <View style={styles.container}>


      <FlatList 
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({item}) => <DayListItem day={item}/>}
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

  
});
