import React from "react";
import { View, Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import { QuickSand } from "../Text/QuickSand";

interface LearningCardProps {
    title: string;
    progressText: string;
    description: string;
    bgColor?: string;
    colorProggress?: string;
    imageSrc: ImageSourcePropType;
}

const LearningCard: React.FC<LearningCardProps> = ({
    title,
    progressText,
    description,
    bgColor = "bg-yellow-300",
    colorProggress = "bg-green-200",
    imageSrc,
    }) => {
    return (
        <TouchableOpacity className="bg-white h-[9%] rounded-[2rem] items-center px-4 flex-row gap-4 mb-4">
            <View className={`${bgColor} h-24 w-24 rounded-xl justify-center items-center`}>
                <Image source={imageSrc} />
            </View>
            <View>
                <QuickSand weight="bold" className="text-xl">{title}</QuickSand>
                <View className={`${colorProggress} p-[0.2rem] rounded-lg self-start`}>
                    <QuickSand className="text-xs">{progressText}</QuickSand>
                </View>
                <QuickSand className="text-gray-500 mt-4 font-semibold">{description}</QuickSand>
            </View>
        </TouchableOpacity>
    );
};

export default LearningCard;
