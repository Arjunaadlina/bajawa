import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../../context/auth';
import { QuickSand } from '@/components/Text/QuickSand';

export default function Home() {
    const { logout } = useAuth();

    return (
        <ScrollView className="flex-1 bg-primary">
            <View className="p-6">
                <View className='flex-row items-center mt-16 gap-4 border-2'>
                    <Image
                        source={require('../../assets/images/bajawa.png')}
                        className="rounded-full"
                        style={{ width: 100, height: 100 }}
                    />
                    <View className='justify-center border-2'>
                        <QuickSand weight='semibold' className='text-white text-[1.3rem]'>Hi, Michaela 👋</QuickSand>
                        <QuickSand className='text-white text-sm' >Ayo mulai belajar!</QuickSand>
                    </View>
                </View>

                <View className='flex-row justify-between mt-8 w-full ' >
                    <View className='bg-white rounded-lg' style={{width: 150, height:60}}/>
                    <View className='bg-white rounded-lg' style={{width: 150, height:60}}/>
                </View>
            </View>
        </ScrollView>
    );
}
