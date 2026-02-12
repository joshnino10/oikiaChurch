import { useRouter } from 'expo-router'
import React from 'react'
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'

export default function QuickAction() {
  const router = useRouter()

  const quickAction = [
    {
      id: '1',
      logo: require('../../assets/images/action logo 1.png'),
      title: 'Prayer Request',
      subTitle: 'We’d love to pray with you',
      backgroundColor: '#F5F5F5',
      color: '#000000',
      route: '/quick-action/prayer',
    },
    {
      id: '2',
      logo: require('../../assets/images/action logo 2.png'),
      title: 'Testimonies',
      subTitle: 'Let’s rejoice with you',
      backgroundColor: '#000000',
      color: '#FFFFFF',
      route: '/quick-action/testimonies',
    },
  ]

  const renderItem = ({ item }) => (
    <Pressable
      style={[styles.card, { backgroundColor: item.backgroundColor }]}
      onPress={() => router.push(item.route)}
    >
      <Image source={item.logo} style={styles.logo} />

      <View>
        <Text style={[styles.title, { color: item.color }]}>
          {item.title}
        </Text>
        <Text style={[styles.subTitle, { color: item.color }]}>
          {item.subTitle}
        </Text>
      </View>
    </Pressable>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>Quick Action</Text>

      <FlatList
        data={quickAction}
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
    marginBottom:80,
  },
  headertext: {
    fontFamily: 'PoppinsSemiBold',
    paddingHorizontal: 16,
    fontSize: 18,
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    height: 80,
    borderRadius: 14,
    marginRight: 16,
    width: 242,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 12,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 14,
    fontWeight: '600',
  },
  subTitle: {
    fontFamily: 'PoppinsMedium',
    fontSize: 12,
    marginTop: 4,
    opacity: 0.9,
  },
})
