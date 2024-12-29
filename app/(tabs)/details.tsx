import { Text, View, StyleSheet } from "react-native";

export default function details() {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>
        About This App
      </Text>
      
      {/* disclaimer */}
      <View style={styles.block}>
        <Text style={styles.disclaimer}>
          Disclaimer
        </Text>
        <Text style={styles.normalText}>
          This app is not a real gambling app (obviously). I don't know if anyone will 
          see this app and want to actually gamble, but I am not responsible. Please be
          responsible. Skibidi 
        </Text>
      </View>

      {/* goals */}
      <View style={styles.block}>
        <Text style={styles.goals_text}>
          Goals for This App
        </Text>
        <Text style={styles.normalText}>
        → Include 3 or more games
          {"\n"}✔️ Add a money system where you can deposit/withdraw (fake) money
          {"\n"}→ Track wins and losses
          {"\n"}→ Implement a search feature for games and/or how to play guides
          {"\n"}→ Database to save money
          {"\n"}→ Eventually require user accounts
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: '#f5f5f5',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  block: {
    backgroundColor: '#2c2c2e',
    padding: 20,
    borderRadius: 12,
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    width: '100%',
  },
  disclaimer: {
    color: 'red',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  goals_text: {
    color: 'green',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  normalText: {
    color: '#d1d1d6',
    fontSize: 16,
    lineHeight: 24,
  },
});
