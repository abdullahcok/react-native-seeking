import { Text, View, StyleSheet, Pressable } from "react-native"

const days = [...Array(31)].map((val, index) => index + 1)

export default function DayListItem({day}: DayListItem) {
    return(
        <Pressable style={styles.box}>
            <Text style={styles.text}>{day}</Text>
        </Pressable>
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