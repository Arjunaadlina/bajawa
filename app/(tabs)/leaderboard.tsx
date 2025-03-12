import { View, Text, FlatList, Image } from 'react-native';
import { useState, useEffect } from 'react';

type LeaderboardUser = {
  id: string;
  name: string;
  score: number;
  rank: number;
  avatar: string;
};

export default function Leaderboard() {
  const [users, setUsers] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate fetching leaderboard data
    const mockData: LeaderboardUser[] = [
      { id: '1', name: 'Alex Johnson', score: 9842, rank: 1, avatar: 'https://via.placeholder.com/150' },
      { id: '2', name: 'Sarah Williams', score: 8721, rank: 2, avatar: 'https://via.placeholder.com/150' },
      { id: '3', name: 'Michael Brown', score: 7633, rank: 3, avatar: 'https://via.placeholder.com/150' },
      { id: '4', name: 'Emma Davis', score: 6549, rank: 4, avatar: 'https://via.placeholder.com/150' },
      { id: '5', name: 'James Wilson', score: 5482, rank: 5, avatar: 'https://via.placeholder.com/150' },
      { id: '6', name: 'Jessica Taylor', score: 4395, rank: 6, avatar: 'https://via.placeholder.com/150' },
      { id: '7', name: 'Daniel Martinez', score: 3267, rank: 7, avatar: 'https://via.placeholder.com/150' },
      { id: '8', name: 'Olivia Anderson', score: 2189, rank: 8, avatar: 'https://via.placeholder.com/150' },
      { id: '9', name: 'Matthew Thomas', score: 1073, rank: 9, avatar: 'https://via.placeholder.com/150' },
      { id: '10', name: 'Sophia Rodriguez', score: 968, rank: 10, avatar: 'https://via.placeholder.com/150' },
    ];
    
    setTimeout(() => {
      setUsers(mockData);
      setLoading(false);
    }, 1000);
  }, []);
  
  const renderItem = ({ item }: { item: LeaderboardUser }) => (
    <View className={`flex-row items-center p-4 ${item.rank <= 3 ? 'bg-blue-50' : 'bg-white'} border-b border-gray-200`}>
      <Text className={`font-bold text-lg w-10 ${item.rank === 1 ? 'text-yellow-500' : item.rank === 2 ? 'text-gray-400' : item.rank === 3 ? 'text-amber-700' : 'text-gray-800'}`}>
        #{item.rank}
      </Text>
      <Image
        source={{ uri: item.avatar }}
        className="w-12 h-12 rounded-full"
      />
      <View className="ml-3 flex-1">
        <Text className="font-bold text-gray-800">{item.name}</Text>
      </View>
      <Text className="font-bold text-blue-600">{item.score.toLocaleString()}</Text>
    </View>
  );
  
  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-blue-500 p-6 pt-12">
        <Text className="text-2xl font-bold text-white mb-2">Leaderboard</Text>
        <Text className="text-white opacity-80">Top performers this month</Text>
      </View>
      
      {loading ? (
        <View className="flex-1 justify-center items-center">
          <Text className="text-gray-500">Loading leaderboard...</Text>
        </View>
      ) : (
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          className="flex-1"
          ListHeaderComponent={() => (
            <View className="flex-row bg-gray-100 p-4 border-b border-gray-300">
              <Text className="font-bold text-gray-500 w-10">Rank</Text>
              <Text className="font-bold text-gray-500 ml-12 flex-1">User</Text>
              <Text className="font-bold text-gray-500">Score</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}