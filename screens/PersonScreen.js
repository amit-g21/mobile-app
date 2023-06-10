import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { styles } from '../theme';

var { width, height } = Dimensions.get('window')
const ios = Platform.OS === 'ios';

export default function PersonScreen() {
    return (
        <ScrollView className='flex-1 bg-neutral-900' contentContainerStyle={{ paddingBottom: 20 }}>
            {/* <SafeAreaView className={'absolute z-20 w-full flex-row justify-between items-center px-4' }>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className='rounded-xl p-1'>
                    <ChevronLeftIcon size='28' strokeWidth={2.5} color='white' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
                    <HeartIcon size='35' color={isFavorite ? theme.background : 'white'} />
                </TouchableOpacity>
            </SafeAreaView> */}
        </ScrollView>
    )
}