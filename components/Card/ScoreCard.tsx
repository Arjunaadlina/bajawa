import React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';
import { QuickSand } from '../Text/QuickSand';

type ScoreCardProps = {
    score?: number;
    label?: string;
    imageSource: ImageSourcePropType;
};

const ScoreCard: React.FC<ScoreCardProps> = ({ score = 0, label = 'Skor kamu', imageSource }) => {
    return (
        <View className='bg-white rounded-3xl justify-between px-5 flex-row items-center' style={{ width: 160, height: 65 }}>
            <Image source={imageSource} />
            <View>
                <QuickSand weight='bold' className='text-3xl text-black'>{score}</QuickSand>
                <QuickSand weight='bold' className='text-md text-gray-400'>{label}</QuickSand>
            </View>
        </View>
    );
};

export default ScoreCard;
