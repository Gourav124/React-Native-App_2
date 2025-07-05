import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid:1,
            name:'Virat Kohli',
            status:'Right Hand Batsman',
            imageUrl:'https://mahatmaschools.com/wp-content/uploads/2024/11/Picture1-1-1024x1024.jpg'
        },
        {
            uid:2,
            name:'Rohit Sharma',
            status:'Right Hand Batsman',
            imageUrl:'https://www.livemint.com/lm-img/img/2024/07/08/original/ANI-20240701074-0_1720450579604.jpg'
        },
        {
            uid:3,
            name:'Jasprit Bumrah',
            status:'Right Arm Fast Bowler',
            imageUrl:'https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1718033189052_Jasprit%20Bumrah%20Career.jpg'
        },
        {
            uid:4,
            name:'KL Rahul',
            status:'Right Hand Batsman',
            imageUrl:'https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2024/06/2T8A0NC-scaled.jpg'
        },
    ];
  return (
    <View>
      <Text style = {styles.headingText}>Contact List</Text>
      <ScrollView
          style = {styles.container}
           scrollEnabled = {false}
        >
            {contacts.map(({uid,name,status,imageUrl}) => (
                <View key={uid} style = {styles.userCard}>
                    <Image
                    source={{
                        uri:imageUrl
                    }}
                    style = {styles.userImage}
                    />
                    <View>
                    <Text style = {styles.userName}>{name}</Text>
                    <Text style = {styles.userStatus}>{status}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:15,
        paddingBottom:15
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#5DA3FA',
        padding:8,
        borderRadius:14
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:30,
        marginRight:14
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
    },
    userStatus:{
        fontSize:12,
    }
})
