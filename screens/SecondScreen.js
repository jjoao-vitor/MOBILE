import React from 'react';
import { Button, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SecondScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Bem-vindo</Text>

      <Image
        source={require('../assets/images/esnupi.jpg')}
        style={{ width: 200, height: 200, marginBottom: 20, borderRadius: 10 }}
        resizeMode="contain"
      />

      <Button title="Fechar" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

