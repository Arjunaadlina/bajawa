import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#3b82f6',
      tabBarInactiveTintColor: '#6b7280',
      headerShown: false,
      tabBarStyle : {
        height: 75,
        justifyContent:'center',
        alignItems:'center'
      },
      tabBarItemStyle : {
        justifyContent:'center',
        alignItems:'center',
        paddingTop:5
      },
    }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: 'Leaderboard',
          tabBarIcon: ({ color }) => <Feather name="award" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="ai"
        options={{
          title: 'Ai',
          tabBarIcon: ({ color }) => <Feather name="git-pull-request" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          tabBarIcon: ({ color }) => <Feather name="book-open" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
        }}
      />
      
    </Tabs>
  );
}