import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
      <Text style={styles.font}>Lista de Tarefas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#7A4A9E',
    flex: 1,
    
  },
 container: {
    width: 345,
    height: 48,
    top: 54,
    left: 24,},

  font: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#f0f0f0',
    
  },
});
 
