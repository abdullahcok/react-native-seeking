import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.wassup}>Wassup?</Text>
      <Text>Fine. What about you?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wassup:{
    color: '#fff',
    backgroundColor: '#2d2d2d',
    padding: 10,
    borderRadius: 50
  },
});
