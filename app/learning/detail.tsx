import { useLocalSearchParams, useRouter } from 'expo-router';
import { QuickSand } from '@/components/Text/QuickSand';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Detail = () => {
    const { title } = useLocalSearchParams();
    const router = useRouter(); 

    return (
        <SafeAreaView className="flex-1 bg-[#EBF2FF]">
            <StatusBar style="auto" backgroundColor="#EBF2FF" />
            
            <View className="mt-8 flex-row justify-between items-center p-4">
                <TouchableOpacity 
                    className="bg-white rounded-xl p-3"
                    onPress={() => router.back()} 
                >
                    <Feather name="arrow-left" size={28} color="black" />
                </TouchableOpacity>
                
                <QuickSand weight="bold" className="text-2xl text-center flex-1">
                    {title}
                </QuickSand>

                <TouchableOpacity className="bg-primary rounded-xl p-3">
                    <Feather name="bookmark" size={28} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Detail;
