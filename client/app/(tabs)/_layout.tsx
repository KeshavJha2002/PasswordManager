import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native'

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }}/>
        <Stack.Screen name="explore" options={{ headerShown: false }}/>
      </Stack>
    </>
  );
}