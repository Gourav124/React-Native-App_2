import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style = {styles.headingText}>Blog Card</Text>
      <View style = {[styles.card, styles.elevtedCard]}>
        <View style = {styles.headingContainer}>
            <Text style = {styles.headerText}>
                What's new in Javascript ?
            </Text>
        </View>
        <Image
        source={{
            uri:'https://www.geekboots.com/_next/image?url=https%3A%2F%2Fcdn.geekboots.com%2Fgeek%2Fjavascript-meta-1652702081069.jpg&w=3840&q=75'
        }}
        style = {styles.cardImage}
        />
        <View style = {styles.bodyContainer}>
            <Text numberOfLines={3}>
            JavaScript is a multi-paradigm, 
            dynamic language with types and operators, 
            standard built-in objects, and methods. 
            Its syntax is based on the Java and C languages — 
            many structures from those languages apply to JavaScript as well. 
            </Text>
        </View>
        <View style = {styles.footerContainer}>
            <TouchableOpacity onPress = {() => openWebsite('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview')}>
                <Text style = {styles.socialLinks}> Read More </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => openWebsite('https://www.linkedin.com/in/gourav-amolekar/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in')}>
                <Text style = {styles.socialLinks}> Connect With Me </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText :{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:15
    },
    card:{
        width:380,
        height:360,
        borderRadius:8,
        marginVertical:12,
        marginHorizontal:16
    },
    elevtedCard:{
        backgroundColor:'#5DA3FA',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        color:'#000000',
        fontSize:16,
        fontWeight:'600'
    },
    cardImage:{
        height:190
    },
    bodyContainer:{
        padding:10
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLinks:{
        fontSize:14,
        color:'#000000',
        backgroundColor:'#FFFFFF',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6
    }
})