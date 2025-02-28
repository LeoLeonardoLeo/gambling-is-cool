import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons"; //import icons

export default function Index() {
  const navigation = useNavigation();

  return (
    <View style={styles.body}>
        {/* Title */}
        <Text style={styles.title}>BetLeo</Text>

        <View style={styles.grid}>
        <TouchableOpacity onPress={() => router.push("/games/coinFlip")} style={styles.square}>
          <FontAwesome5 name="coins" size={40} color="gold" />
          <Text style={styles.squareText}>Coin Flip</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/games/randNumGame")} style={styles.square}>
          <Ionicons name="dice" size={40} color="cyan" />
          <Text style={styles.squareText}>Random Number Game</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/games/guessNumber")} style={styles.square}>
          <Ionicons name="help-circle" size={40} color="orange" />
          <Text style={styles.squareText}>Guess The Number</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/games/rockPaperScissors")} style={styles.square}>
          <FontAwesome5 name="hand-rock" size={40} color="red" />
          <Text style={styles.squareText}>Rock Paper Scissors</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#1E1E1E", // Darker background
    padding: 20,
    alignItems: "center",
  },
  title: {
    color: "#FFD700", // Gold title
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row", 
    flexWrap: "wrap",
    justifyContent: "center", 
    width: "100%", 
    gap: 20, // Add space between buttons
  },
  square: {
    width: 160, 
    height: 160,
    backgroundColor: "#444",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: "#FFD700", // Gold border
    shadowColor: "#FFD700",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10, // Android shadow
  },
  squareText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});