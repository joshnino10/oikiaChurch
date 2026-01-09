import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TodayManner() {
    const todayManner = [

        {
            id:"1",
            header: 'Today’s Manna',
            bibleVerse: 'Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.',
            biblePage: '— Joshua 1:9'

            
        }
    ]
  return (



    <View style={styles.container}>
        {
            todayManner.map((item, index)=>(
                <View key={index}>
                    <Text style={styles.headertext}>{item.header}</Text>
                    <Text style={styles.bibleverse}>{item.bibleVerse}</Text>
                    <Text style={styles.biblepage}>{item.biblePage}</Text>
                </View>
            ))
        }
       
       
     
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        backgroundColor:'#F5F5F5',
        padding:15,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20

    },

    headertext:{
        fontSize:10
        

    },

    bibleverse:{
        marginTop:10,
        fontSize:17

    },
    biblepage:{
        marginTop:20,
        fontSize:10

    },
})