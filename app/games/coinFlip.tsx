import { router } from 'expo-router';
import { View, Text, StyleSheet, Button, Alert, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity  } from 'react-native';

export default function coinFlip() {
  
  const pickedHeads = () =>{
    
  }

  const pickedTails = () =>{
    
  }

  return (
    <View style={styles.body}>
        <Text style={styles.title}>
            Coin Flip game
        </Text>

        <TouchableOpacity 
          onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
       </TouchableOpacity>

        <Text style={styles.normal_text}>Rules:</Text>

        <Text style={styles.normal_text}>Guess heads or tails and if you get it right you win</Text>


        <View style={styles.spaceOfButtons}>
          <Button 
            title="Heads"
            onPress={() => Alert.alert('this is for testing')}
            />

          <Button
            title="Tails"
            onPress={() => Alert.alert('this is for testing')}
          />

        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#2c2c2e",
    padding: 20,
    paddingTop: 80,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 40, //space below the title
  },
  normal_text: {
    color: '#f0f0f0',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  backButton: {
    position: "absolute", // Keeps the button at the top left
    top: 50,
    left: 20,
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
  },
  spaceOfButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

})