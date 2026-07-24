import React from 'react';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
// Reuse the same LucideDynamic component the screens render with, so every
// tab icon renders as the intended Lucide glyph — no parallel Ionicons map,
// no silent fallback to a blank circle when a Lucide name isn't in the table.
import LucideDynamic from '../../components/LucideDynamic';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: Platform.select({ ios: '#007AFF', default: '#2196F3' }),
      }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Page 1',
            tabBarIcon: ({ color }) => <LucideDynamic size={20} name="layout-grid" color={color} />,
          }}
        />
        <Tabs.Screen
          name="page2"
          options={{
            title: 'Page 2',
            tabBarIcon: ({ color }) => <LucideDynamic size={20} name="layout-grid" color={color} />,
          }}
        />
        <Tabs.Screen
          name="page3"
          options={{
            title: 'Page 3',
            tabBarIcon: ({ color }) => <LucideDynamic size={20} name="layout-grid" color={color} />,
          }}
        />
        <Tabs.Screen
          name="page4"
          options={{
            title: 'Page 4',
            tabBarIcon: ({ color }) => <LucideDynamic size={20} name="layout-grid" color={color} />,
          }}
        />
    </Tabs>
  );
}
