import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) { // Added navigation prop here
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log(account, password); // For demonstration purposes
    navigation.navigate('Home'); // Navigate to the Home screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAccount}
        value={account}
        placeholder="username"
        placeholderTextColor="#999" // Optional: for better visibility
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="password"
        placeholderTextColor="#999" // Optional: for better visibility
        secureTextEntry={true} // This hides the password
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    marginBottom: 20, // Add some space between the title and input fields
  },
  input: {
    height: 38,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300, // Set width
    backgroundColor: '#fff', // Set background color to white for visibility
    color: '#000', // Text color in input
    borderRadius: 5, // Optional: styling for rounded corners
  },
  button: {
    backgroundColor: '#F6C37F', // Changed from blue to a pleasant shade for consistency
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});
