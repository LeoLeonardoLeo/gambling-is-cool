import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.body}>
        <Text style={styles.title}>BetLeo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
    backgroundColor: '#2c2c2e',
    padding: 20,
    alignItems: 'center', 
  },
  title:{
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'

  }
});