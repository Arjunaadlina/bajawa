import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../../context/auth';
import { QuickSand } from '@/components/Text/QuickSand';
import LearningCard from '@/components/Card/LearningCard';

export default function Home() {
    const { logout } = useAuth();

    return (
        <ScrollView className="flex-1 bg-primary">
            <View className="p-6">
                <View className='flex-row items-center mt-16 gap-4 '>
                    <Image
                        source={require('../../assets/images/profile.jpeg')}
                        className="rounded-full"
                        style={{ width: 100, height: 100 }}
                    />
                    <View className='justify-center '>
                        <QuickSand weight='semibold' className='text-white text-[1.6rem]'>Hi, Arjuna Adlina 👋</QuickSand>
                        <QuickSand className='text-white text-sm' >Ayo mulai belajar!</QuickSand>
                    </View>
                </View>

                <View className='flex-row justify-between mt-8 w-full ' >
                    <View className='bg-white rounded-lg' style={{width: 160, height:65}}/>
                    <View className='bg-white rounded-lg' style={{width: 160, height:65}}/>
                </View>
            </View>

            <View className='bg-bgPrimary h-[200%] mt-4 rounded-t-[3rem] pt-6 px-6'>
                <LearningCard
                    title='Aksara Jawa'
                    bgColor='bg-yellow-300'
                    progressText='Lanjutkan pembelajaran ke-2'
                    description='Terdapat 6 pembelajaran'
                    imageSrc={require('../../assets/images/aksara.png')}
                />
                <LearningCard
                    title='Tingkatan Bahasa'
                    bgColor='bg-[#FBA6F8]'
                    progressText='Lanjutkan pembelajaran ke-4'
                    description='Terdapat 10 pembelajaran'
                    imageSrc={require('../../assets/images/tingkatan.png')}
                />
                <LearningCard
                    title='Kata Kerja'
                    bgColor='bg-[#78EEE9]'
                    progressText='Mulai pembelajaran'
                    description='Terdapat 7 pembelajaran'
                    colorProggress='bg-[#FDFFB7]'
                    imageSrc={require('../../assets/images/katakerja.png')}
                />
            </View>
        </ScrollView>
    );
}
