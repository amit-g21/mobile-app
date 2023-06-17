import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { fallbackPersonImage, image185 } from '../api/moviedb';

export default function Cast({cast , navigation}) {

  let characterName = 'John Wick';
  let personName = 'kiano rives';



  return (
    <View className='my-4'>
      <Text className='text-white text-lg mx-4 mb-5'>Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 15 }}>
        {
          cast && cast.map((person, index) => {
            return (
              <TouchableOpacity
                key={index}
                className='mb-4 items-center'
                onPress={()=> navigation.navigate('Person' , person)}
              >
                <View
                  className='overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500 ml-5'>
                  <Image
                    className='rounded-2xl h-24 w-20'
                    source={{uri:image185(person?.profile_path) || fallbackPersonImage}}
                  />
                </View>
                <Text className='text-white text-xs mt-1'>
                  {
                    person?.character.length > 10 ? person?.character.slice(0, 10) + '...' : person?.character
                  }
                </Text>
                <Text className='text-white text-xs mt-1'>
                  {
                    person?.original_name.length > 10 ? person?.original_name.slice(0, 10) + '...' : person?.original_name
                  }
                </Text>
              </TouchableOpacity>
            )
          })
        }

      </ScrollView>
    </View>
  )
}