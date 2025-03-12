import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function Profile() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="items-center pt-12 pb-6 bg-blue-500">
        <View className="w-24 h-24 rounded-full bg-gray-300 mb-4 overflow-hidden">
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            className="w-full h-full"
          />
        </View>
        <Text className="text-2xl font-bold text-white">User Name</Text>
        <Text className="text-white opacity-80">user@example.com</Text>
      </View>
      
      <View className="p-6">
        <View className="bg-white p-4 rounded-lg shadow mb-4">
          <Text className="font-bold text-lg mb-2">Personal Information</Text>
          <View className="border-t border-gray-200 pt-2">
            <View className="flex-row py-2">
              <Text className="text-gray-500 w-24">Username:</Text>
              <Text className="text-gray-800">username123</Text>
            </View>
            <View className="flex-row py-2">
              <Text className="text-gray-500 w-24">Email:</Text>
              <Text className="text-gray-800">user@example.com</Text>
            </View>
            <View className="flex-row py-2">
              <Text className="text-gray-500 w-24">Joined:</Text>
              <Text className="text-gray-800">January 2023</Text>
            </View>
          </View>
        </View>
        
        <View className="bg-white p-4 rounded-lg shadow mb-4">
          <Text className="font-bold text-lg mb-2">Statistics</Text>
          <View className="border-t border-gray-200 pt-2">
            <View className="flex-row py-2">
              <Text className="text-gray-500 w-24">Score:</Text>
              <Text className="text-gray-800">3,542</Text>
            </View>
            <View className="flex-row py-2">
              <Text className="text-gray-500 w-24">Rank:</Text>
              <Text className="text-gray-800">#42</Text>
            </View>
          </View>
        </View>
        
        <TouchableOpacity
          className="bg-blue-500 p-4 rounded-lg mt-2"
        >
          <Text className="text-white text-center font-bold">Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}