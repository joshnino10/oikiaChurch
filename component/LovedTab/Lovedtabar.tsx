import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { activelovedtab } from './Loved'

export default function Lovedtabar() {
  return (
    <View>
      {activelovedtab.map((item) => (
        <Pressable key={item.id} style={styles.card}>
          <View style={styles.row}>
            <Image source={item.image} style={styles.img} />

            <View style={styles.content}>
              <View style={{ flex: 1 }}>
                <Text style={styles.title} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.pastorName} numberOfLines={1}>
                  {item.pastorName}
                </Text>
              </View>

              <MaterialIcons
                name="arrow-forward-ios"
                size={18}
                color="#8C4616"
              />
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    marginBottom: 25,
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  img: {
    width: 80,
    height: 93,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'poppinsSemiBold',
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  pastorName: {
    fontFamily: 'poppinsregular',
    fontSize: 12,
    marginTop: 4,
  
  },
})
