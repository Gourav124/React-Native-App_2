import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style = {styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal = {true} style = {styles.container}>
        <View style = {[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style = {[styles.card,styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style = {[styles.card,styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style = {[styles.card,styles.cardElevated]}>
            <Text>scroll</Text>
        </View>
        <View style = {[styles.card,styles.cardElevated]}>
            <Text>more...</Text>
        </View>
        <View style = {[styles.card,styles.cardElevated]}>
            <Text>😀</Text>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:15
    },
    container:{padding:8},
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8
    },
    cardElevated:{
        backgroundColor:'#CAD5E2',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4,
        shadowRadius:2
    }
})
export default ElevatedCards