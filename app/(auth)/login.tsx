import { useState } from 'react';
import { 
    View, TextInput, TouchableOpacity, Image, 
    KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard 
} from 'react-native';
import {  router } from 'expo-router';
import { useAuth } from '../../context/auth';
import { QuickSand } from '@/components/Text/QuickSand';
import { Feather } from '@expo/vector-icons';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleLogin = async () => {
        try {
            await login(email, password);
            router.replace('/(tabs)/home');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const navigateToRegister = () => {
        router.replace('/(auth)/register');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 bg-white"
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView 
                    contentContainerStyle={{ flexGrow: 1 }} 
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View className="flex-1 items-center justify-end">
                        <View className="w-full xl:w-1/3 md:w-1/3 p-6 bg-white">
                            <View className='items-center justify-center  mb-16'>
                                <Image 
                                source={require('../../assets/images/bajawa.png')} 
                                style={{ width: 255, height: 150 }} 
                                resizeMode='cover' 
                                />
                            </View>

                            <View className="">
                                <View className="mb-4">
                                    <View className='flex-row items-center gap-2 relative top-5 left-7 bg-white z-10 w-28 justify-center xl:items-start'>
                                        <Feather name='mail' size={18} color={'#344CB7'}/>
                                        <QuickSand className="mb-2 text-primary">Email</QuickSand>
                                    </View>
                                    <TextInput
                                        className="border-primary p-4 rounded-lg border-2"
                                        placeholder="Masukkan email"
                                        placeholderTextColor={"#B0BBEC"}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        value={email}
                                        style={{ fontFamily: 'Quicksand-Regular' }}
                                        onChangeText={setEmail}
                                    />
                                </View>

                                <View className="mb-6">
                                    <View className='flex-row items-center gap-2 relative top-5 left-7 bg-white z-10 w-36 justify-center xl:items-start'>
                                        <Feather name='lock' size={18} color={'#344CB7'}/>
                                        <QuickSand className="mb-2 text-primary">Password</QuickSand>
                                    </View>
                                    <TextInput
                                        className="border-primary border-2 p-4 rounded-lg"
                                        placeholder="Masukkan password"
                                        placeholderTextColor={'#B0BBEC'}
                                        secureTextEntry
                                        value={password}
                                        style={{ fontFamily: 'Quicksand-Regular' }}
                                        onChangeText={setPassword}
                                    />
                                </View>

                                <QuickSand 
                                    className='text-center mb-6 text-primary text-sm' 
                                    style={{ textDecorationLine: 'underline' }}
                                >
                                    Lupa sandi?
                                </QuickSand>

                                <View className='mt-12'>
                                    <TouchableOpacity
                                        className="bg-primary p-4 mb-8 items-center justify-center rounded-full"
                                        onPress={handleLogin}
                                    >
                                        <QuickSand weight='bold' className="text-white text-center">Login</QuickSand>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View className="flex-row justify-center mb-4">
                                <QuickSand className="text-primary">Belum punya akun? </QuickSand>
                                <TouchableOpacity onPress={navigateToRegister}>
                                    <QuickSand className="text-black underline">daftar</QuickSand>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
