import React from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native'

export default function Playlist() {

  const collections = [
    {
      id: "1",
      image: require('../../assets/images/prayer collection.png'),
      title: 'Prayers',
      subtitle: 'Collections',
    },
    {
      id: "2",
      image: require('../../assets/images/holy spirit collection.png'),
      title: 'The Holy Spirit',
      subtitle: 'Collections',
    },
    {
      id: "3",
      image: require('../../assets/images/festival collection.png'),
      title: 'Resurge Festival',
      subtitle: 'Collections',
    },
  ]

  return (
    <View>
      {collections.map((item) => (
        <Pressable
          key={item.id}
          style={({ pressed }) => [
            styles.card,
            pressed && styles.cardPressed,
          ]}
        >
          <ImageBackground
            source={item.image}
            style={styles.image}
            imageStyle={styles.imageRadius}
          >
            <Text style={styles.partsText}>2 Parts</Text>
          </ImageBackground>

          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
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

  cardPressed: {
    opacity: 0.7,
  },

  image: {
    width: '100%',
    height: 120,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  imageRadius: {
    borderRadius: 10,
  },

  partsText: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: '#fff',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    margin: 8,
  },

  textContainer: {
    marginTop: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },

  subtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
})
