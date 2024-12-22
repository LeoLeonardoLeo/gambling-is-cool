import { Text, View, StyleSheet } from "react-native";

export default function details() {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>
        Details about this app
      </Text>
      
      <Text> </Text>
      
      <Text style={styles.normal_text}>
        This app is not a real gambling app (obviously), I don't know if anyone will
        see this app and want to actually gamble but I am not responsible.
      </Text>

      <Text> </Text>

      <Text style={styles.normal_text}>
        Don't be stupid
      </Text>

      <Text> </Text>

      <Text style={styles.normal_text}>
        GOALS FOR THIS APP
      </Text>
      <Text style={styles.normal_text}>
        - 3 or more games
        {"\n"}- Money system where you deposit/withdraw (fake) money, where u can win or lose money
        {"\n"}- A search for maybe games (possibly hard) or how to play games
        {"\n"}- In the future be able to save the money for future uses 
        {"\n"}- In the future future make it so you need an account to play
      </Text>
    </View>
  )
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
  },
  normal_text:{
    color: 'white',
    fontSize: 12
  }
});