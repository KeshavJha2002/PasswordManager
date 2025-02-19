import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <>
      <Stack>
        <Stack.Screen name="loader" options={{ headerShown: false }}/>
        <Stack.Screen name="index" options={{ headerShown: false }}/>
        <Stack.Screen name="form" options={{ headerShown: false }}/>
      </Stack>
    </>
  );
}