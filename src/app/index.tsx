import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import DayListItem from '@/components/core/DayListItem';

import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { AmaticSC_400Regular, AmaticSC_700Bold} from '@expo-google-fonts/amatic-sc';
import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';


const days = [...Array(31)].map((val, index) => index + 1)


export default function HomeScreen() {

const [fontsLoaded, fontError] = useFonts({
  Inter: Inter_900Black,
  AmaticRegular: AmaticSC_400Regular,
  AmaticBold: AmaticSC_700Bold,
})

useEffect(() => {
  if(fontsLoaded || fontError){
    return SplashScreen.hideAsync()
  }
}, [fontsLoaded, fontError])


if(!fontsLoaded && !fontError){
  return null
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
    gap: 10,
    margin: 10
  },

  column: {
    gap: 10,
  },

  
});
