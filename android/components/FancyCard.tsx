import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style = {styles.headingText}>Trending Places</Text>
      <View style = {[styles.card,styles.cardElevated]}>
      <Image
      source={{
        uri:'https://assets.telegraphindia.com/telegraph/2023/Jan/1674900952_shutterstock_2146495311.jpg'
      }}
      style = {styles.cardImage}
      />
      <View style = {styles.cardBody}>
        <Text style = {styles.cardTitle}>Maheshwar Fort</Text>
        <Text style = {styles.cardLabel}>Navgrah Ki Nagri, Khargone, M.P</Text>
        <Text style = {styles.cardDescription}>The Maheshwar Fort is in the District of Khargone,Madhya Pradesh.
            It is situated
            on the bank of river Narmada.
        </Text>
        <Text style = {styles.cardFooter}>45 Km from Khargone</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:15
    },
    card:{
        width:380,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:15
    },
    cardElevated:{
        backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4
    },
    cardLabel:{
        fontSize:16,
        marginBottom:4,
        fontWeight:'semibold'
    },
    cardDescription:{
        fontSize:14,
        marginBottom:12,
        marginTop:6,
        color:'#242B2E'
    },
    cardFooter:{ }
})