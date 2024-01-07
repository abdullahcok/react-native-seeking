import { Text, View, StyleSheet, Pressable } from "react-native"
import { Link } from "expo-router";

type DayListItem = {
  day: number
}

export default function DayListItem({day}: DayListItem) {
    return(
        <Link href={`/(days)/day${day}`} asChild>
          <Pressable style={styles.box}>
            <Text style={styles.text}>{day}</Text>
          </Pressable>
        </Link>
    )
}


const styles = StyleSheet.create({
    

    box:{
      backgroundColor: '#fff',
      // width: 100,
      // height: 100,
      flex: 1,
      aspectRatio: 1/0.945,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#989898',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text:{
      color: '#2d2d2d',
      fontSize: 70,
      fontFamily: 'AmaticBold',
    }
  });