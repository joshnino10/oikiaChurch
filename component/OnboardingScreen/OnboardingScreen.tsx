import React, { useRef, useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native'

const { width } = Dimensions.get('window')

export default function OnboardingScreen() {
  const flatListRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const Slides = [
    {
      id: '1',
      title: 'Welcome Home',
      subtitle:
        'Oikia is Greek for “Home”. We are a family of believers dedicated to kingdom growth.',
      image: require('../../assets/images/onboardingScreen1.png'),
    },
    {
      id: '2',
      title: 'Access Sermons Anytime',
      subtitle:
        'Listen to powerful sermons or watch engaging video messages from our pastors whenever you need inspiration.',
      image: require('../../assets/images/onboardingScreen2.png'),
    },
    {
      id: '3',
      title: 'Take Sermon Notes',
      subtitle:
        'Capture insights and revelations during sermons with our built-in note taking. Your notes are saved and organized for easy reference.',
      image: require('../../assets/images/onboardingScreen3.png'),
    },
    {
      id: '4',
      title: 'Give & Partner with Us',
      subtitle:
        'Support God’s work through secure giving.Your tithes, offerings, and partnership help spread the gospel and impact lives.  ',
      image: require('../../assets/images/onboardingScreen4.png'),
    },
  ]

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index)
    }
  })

  const viewConfigRef = useRef({
    viewAreaCoveragePercentThreshold: 50,
  })

  const goNext = () => {
    if (currentIndex < Slides.length - 1) {
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      })
    }
  }

  const goBack = () => {
    if (currentIndex > 0) {
      flatListRef.current.scrollToIndex({
        index: currentIndex - 1,
        animated: true,
      })
    }
  }

  const skip = () => {
    flatListRef.current.scrollToIndex({
      index: Slides.length - 1,
      animated: true,
    })
  }

  const renderItem = ({ item }) => (
    <View style={styles.slideContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>

      <Text style={styles.slideTitle}>{item.title}</Text>
      <Text style={styles.slideSubtitle}>{item.subtitle}</Text>
    </View>
  )

  return (
    <View style={styles.page}>
        <StatusBar barStyle={'dark-content'} backgroundColor="white"/>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>OIKIA</Text>
        <View>
          <Text style={styles.title2}>CHRISTIAN</Text>
          <Text style={styles.title2}>CENTRE</Text>
        </View>
      </View>

      {/* SLIDES */}
      <FlatList
        ref={flatListRef}
        data={Slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />

      {/* DOTS */}
      <View style={styles.dotsContainer}>
        {Slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>

      {/* BOTTOM ACTIONS (ALWAYS BACK + NEXT) */}
      <View style={styles.bottomBar}>
        {currentIndex === 0 ? (
          <TouchableOpacity onPress={skip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={goBack}>
            <Text style={styles.skipText}>Back</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.nextBtn}
          onPress={goNext}
          disabled={currentIndex === Slides.length - 1}
        >
          <Image
            source={require('../../assets/images/nexticon.png')}
            style={[
              styles.nextIcon,
              currentIndex === Slides.length - 1 && { opacity: 0.4 },
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerContainer: {
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
  },

  title: {
    fontSize: 40,
    color: '#8C4616',
    fontWeight: 'bold',
  },

  title2: {
    fontSize: 18,
    color: '#8C4616',
    lineHeight: 17,
  },

  slideContainer: {
    width,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },

  imageContainer: {
    marginTop: 30,
    width: '80%',
    height: 400,
    borderRadius: 20,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  slideTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 30,
  },

  slideSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    fontWeight:'500',
    color: '#858484',
  },

  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },

  activeDot: {
    width: 21,
    backgroundColor: '#8C4616',
  },

  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginBottom: 30,
  },

  skipText: {
    fontSize: 16,
    color: '#999',
  },

  nextBtn: {
    width: 50,
    height: 50,
    backgroundColor: '#8C4616',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  nextIcon: {
    width: 11,
    height: 19,
  },
})
