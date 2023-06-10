import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles, theme } from '../theme';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';


var { width, height } = Dimensions.get('window')
const ios = Platform.OS === 'ios';
const topMargin = ios ? '' : 'mt-3'

export default function MovieScreen() {

    const { params: item } = useRoute();
    const navigation = useNavigation()

    const [isFavorite, toggleFavorite] = useState(false);
    const [cast, setCast] = useState([1, 2, 3, 4, 5]);
    const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);


    const movieName = 'The Passenger'


    useEffect(() => {/* call the movie detail api */ }
        , [item])


    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className='flex-1 bg-neutral-900'
        >

            {/*back button and movie poster*/}
            <View className='w-full'>
                <SafeAreaView className={'absolute z-20 w-full flex-row justify-between items-center px-4' + topMargin}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className='rounded-xl p-1'>
                        <ChevronLeftIcon size='28' strokeWidth={2.5} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
                        <HeartIcon size='35' color={isFavorite ? theme.background : 'white'} />
                    </TouchableOpacity>
                </SafeAreaView>
                <View>
                    <Image
                        source={require('../assets/images/moviePoster1.png')}
                        style={{ width: width, height: height * 0.55 }}

                    />
                    <LinearGradient
                        colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
                        style={{ width, height: height * 0.4 }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        className='absolute bottom-0'
                    />
                </View>
            </View>

            <View style={{ marginTop: -(height * 0.09) }} className='space-y-3'>
                {/*title*/}
                <Text className='text-white text-center text-3xl font-bold tracking-wider'>
                    {
                        movieName
                    }
                </Text>
                {/*status, release , runtime*/}
                <Text className='text-neutral-400 font-semibold text-base text-center'>
                    Release &#8226; 2018 &#8226; 156 min
                </Text>

                {/*genres*/}
                <View className='flex-row justify-center mx-4 space-x-2'>
                    <Text className='text-neutral-400 font-semibold text-base text-center'>
                        Action &#8226;
                    </Text>
                    <Text className='text-neutral-400 font-semibold text-base text-center'>
                        Thrill &#8226;
                    </Text>
                    <Text className='text-neutral-400 font-semibold text-base text-center'>
                        Comedy 
                    </Text>
                </View>

                {/*description*/}
                <Text className='text-neutral-400 mx-4 -tracking-wide text-center'>
                    In the provocative new drama from the director of The Visitor, sexual and moral boundaries are put to the test when a handsome stranger begins to infiltrate the lives of two artists. While searching for a condo in Berlin for his father, Nick meets Philipp, a young talented photographer and a gorgeous actress named Lilli. There is instant chemistry and both are easily seduced by Nick's charms. Lilli and Philipp begin to explore their relationship with the sexy visitor, succumbing to their passionate affections for him which intensifies their volatile emotional and physical bonds. But what Philipp and Lilli don't realize is that they are being lured into Nick's manipulative... and deadly, love game.
                </Text>
            </View>

            {/*movie cast*/}
            <Cast cast={cast} navigation={navigation} />

            {/*similar movies*/}
            <MovieList title='similar movies' hideSeeAll={true} data={similarMovies} />

        </ScrollView>
    )
}