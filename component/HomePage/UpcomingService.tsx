import React from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'

export default function UpcomingService() {

  const service = [
    {
      id: '1',
      image: require('../../assets/images/upcoming service 1.png'),
      time: '9:00 AM',
      date: 'SUN 04 JAN 2026',
    },
    {
      id: '2',
      image: require('../../assets/images/upcoming service 1.png'),
      time: '8:00 PM',
      date: 'WED 31 DEC 2025',
    },
  ]

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.img} />

      <View style={styles.textWrapper}>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Upcoming Service</Text>

      <FlatList
        data={service}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  headerText: {
    fontFamily: 'PoppinsSemiBold',
    paddingHorizontal: 16,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color:'#000000'
  },
  card: {
    width: 300,
    marginRight: 16,
    backgroundColor:'#F5F5F5',
    borderRadius:20,
    overflow:'hidden'
  },
  img: {
    width: '100%',
    height: 270,
    resizeMode: 'cover',
   
  },
  textWrapper: {
    padding:10,
    borderRadius:20,
   
  },
  time: {
    fontSize: 12,
    fontFamily: 'PoppinsSemiBold',
    fontWeight: '600',
  },
  date: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 14,
    color: '#8C4616',
    marginTop: 4,
    
  },
})
