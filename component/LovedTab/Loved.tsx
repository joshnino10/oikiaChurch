import React from 'react'
import { StyleSheet, View, Text, Pressable, Image } from 'react-native'
import { activelovedtab } from './Loved'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function Loved() {
  const handlePress = (item) => {
    console.log('Pressed loved item:', item.title)
  }

  return (
    <View>
      {activelovedtab.map((item) => (
        <Pressable
          key={item.id}
          onPress={() => handlePress(item)}
          style={({ pressed }) => [
            styles.card,
            pressed && styles.cardPressed,
          ]}
        >
          <View style={styles.row}>
          
            <Image style={styles.img} source={item.image} />

         
            <View style={styles.content}>
              <View>
                <Text style={styles.title} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.pastorName} numberOfLines={1}>
                  {item.pastorName}
                </Text>
              </View>

              <MaterialIcons
                name="arrow-forward-ios"
                size={19}
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
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
  },
  cardPressed: {
    opacity: 0.7,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  img: {
    width: 88,
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
    fontSize: 14,
    fontWeight: '600',
  },
  pastorName: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
})
