import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { View, Pressable } from 'react-native';
import { QuickSand } from '@/components/Text/QuickSand';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: '#6b7280',
        headerShown: false,
        tabBarStyle: {
          height: 85,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 16,
          borderTopRightRadius: 32,
          borderTopLeftRadius: 32,
          backgroundColor: 'white', 
          overflow: 'hidden', 
        },
        tabBarItemStyle: {
          paddingTop: 15,
        },
        tabBarButton: (props) => (
          <Pressable
            {...props}
            android_ripple={{ color: 'transparent' }}
            android_disableSound={true}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="home" title="Home" />,
        }}
      />
      <Tabs.Screen
        name="board"
        options={{
          title: 'Board',
          tabBarLabel: () => null, 
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="award" title="Board" />,
        }}
      />
      <Tabs.Screen
        name="ai"
        options={{
          title: 'AI',
          tabBarLabel: () => null, 
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="git-pull-request" title="AI" />,
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="book-open" title="Library" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="user" title="Profile" />,
        }}
      />
    </Tabs>
  );
}

function TabIcon({ focused, icon, title }: any) {
  if (focused) {
    return (
      <View className="flex flex-row w-full flex-1 min-w-[90px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden bg-primary">
        <Feather name={icon} size={24} color="#fff" />
        <QuickSand className="text-secondary text-base font-semibold ml-2 text-white">
          {title}
        </QuickSand>
      </View>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Feather name={icon} size={24} color="#A8B5DB" />
    </View>
  );
}
