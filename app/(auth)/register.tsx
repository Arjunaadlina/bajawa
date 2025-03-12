import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '../../context/auth';
import { QuickSand } from '@/components/Text/QuickSand';
import { Feather } from '@expo/vector-icons';
import AuthInput from '@/components/Input/AuthInput';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useAuth();

    const handleRegister = async () => {

        try {
            await register(email, password, username);
            console.log("Registration successful");
            router.replace('/(auth)/login'); // Pastikan halaman ini benar
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };
    

    const navigateToLogin = () => {
        router.replace('/(auth)/login');
    };

    return (
        <View className="flex-1 justify-center p-6 bg-white items-center">
            <View className="w-full xl:w-1/3 md:w-1/3  bg-white">
                <View className='items-center justify-center  mb-16 '>
                    <Image 
                    source={require('../../assets/images/bajawa.png')} 
                    style={{ width: 255, height: 150 }} 
                    resizeMode='cover' 
                    />
                </View>
                <AuthInput 
                    label="Username" 
                    placeholder="Masukkan username" 
                    value={username} 
                    onChangeText={setUsername} 
                    icon='user' 
                />
                <AuthInput 
                    label="Email" 
                    placeholder="Masukkan email" 
                    value={email} 
                    onChangeText={setEmail} 
                    icon='mail' 
                    keyboardType='email-address'
                />
                <AuthInput 
                    label="Password" 
                    placeholder="Masukkan password" 
                    value={password} 
                    onChangeText={setPassword} 
                    icon='lock' 
                    secureTextEntry
                />
                <View className="flex-row justify-center">
                    <QuickSand className="text-gray-600">Sudah punya akun? </QuickSand>
                    <TouchableOpacity onPress={navigateToLogin}>
                        <QuickSand className="text-primary underline mb-12 ">login</QuickSand>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    className="bg-primary p-4 rounded-full mb-4"
                    onPress={handleRegister}
                >
                    <Text className="text-white text-center font-bold">Register</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
}