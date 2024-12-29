import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.body}>
        <Text style={styles.title}>BetLeo</Text>

        <View style={styles.row}>

          <View style={styles.square}>
            <Text style={styles.squareText}>Coin Flip</Text>
          </View>
          
          <View style={styles.square}>
            <Text style={styles.squareText}>Random Number Game</Text>
          </View>
    
        </View>

      
        <View style={styles.row}>
 
          <View style={styles.square}>
            <Text style={styles.squareText}>Game 3</Text>
          </View>
          
          <View style={styles.square}>
            <Text style={styles.squareText}>Game 4</Text>
          </View>

        </View>
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
    fontSize: 25,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 5,
  },
  square: {
    width: 150,
    height: 150,
    backgroundColor: "#444",
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  squareText: {
    color: "white",
    fontSize: 16,
  },
});