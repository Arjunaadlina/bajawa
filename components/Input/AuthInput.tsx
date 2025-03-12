import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { QuickSand } from '../Text/QuickSand';

type AuthInputProps = {
    icon: string;
    label: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
} & TextInputProps;

const AuthInput: React.FC<AuthInputProps> = ({ icon, label, placeholder, value, onChangeText, ...props }) => {
    return (
        <View className="mb-4">
            <View className='flex-row items-center gap-2 relative top-5 left-7 bg-white z-20 w-36 justify-center xl:items-start'>
                <Feather name={icon} size={18} color={'#344CB7'} />
                <QuickSand className="mb-2 text-primary">{label}</QuickSand>
            </View>
            <TextInput
                className="border-primary p-4 rounded-lg border-2"
                placeholder={placeholder}
                placeholderTextColor={"#B0BBEC"}
                autoCapitalize="none"
                value={value}
                style={{ fontFamily: 'Quicksand-Regular' }}
                onChangeText={onChangeText}
                {...props}
            />
        </View>
    );
};

export default AuthInput;
