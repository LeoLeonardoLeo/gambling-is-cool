import { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, TextInput } from 'react-native';

export default function wallet() {

    const [balance, setBalance] = useState(0); //0 by default
    const [deposit, setDeposit] = useState("");
    const [withdraw, setWithdraw] = useState("");

    const handleDeposit = () =>{
        const depositAmount = parseFloat(deposit); //set the amount that is deposited to a float
        if (isNaN(depositAmount) || depositAmount <= 0){
            Alert.alert("You cannot deposit 0 or less dollars");
        }
        else{
            setBalance(balance + depositAmount); //setting the new balance
            Alert.alert("Deposit complete of ", `$${depositAmount}`);
            setDeposit(''); //set to empty again
        }
    }


    const handleWithdraw = () =>{
        const withdrawAmount = parseFloat(withdraw);
        if (isNaN(withdrawAmount) || balance <= 0){
            Alert.alert("Cannot withdraw, you don't have enough money")
        }
        else {
            setBalance(balance - withdrawAmount);
            Alert.alert("Withdrew", `$${withdrawAmount}`);
            setWithdraw('');
        }
    }
  return (
    <View style={styles.body}>
        <Text style={styles.title}>Your Wallet</Text>

        <Text style={styles.normal_text}>Balance: {balance}</Text>

        <TextInput 
        placeholder='Deposit Amount'
        value={deposit}
        keyboardType='numeric'
        onChangeText={setDeposit}
        />
        
        <Button 
        title="Deposit"
        onPress={handleDeposit}     
        />


        <TextInput 
        placeholder='Withdraw Amount'
        value={withdraw}
        keyboardType='numeric'
        onChangeText={setWithdraw}
        />

        <Button
        title="Withdraw"
        onPress={handleWithdraw}
        />
        

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
    fontSize: 25,
    fontWeight: 'bold'
  },
  normal_text:{
    color: 'white',
    fontSize: 12
  }
});