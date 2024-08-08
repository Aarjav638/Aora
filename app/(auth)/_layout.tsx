import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const AuthLayout:React.FC = () => {
  return (
    <>
    <Stack screenOptions={{
      headerShown:false,
    }}>
      <Stack.Screen
        name='sign-in'
      />
      <Stack.Screen
        name='sign-up'
      />

    </Stack>
    <StatusBar style='light' backgroundColor='#161622' />
    </>
  )
}

export default AuthLayout;