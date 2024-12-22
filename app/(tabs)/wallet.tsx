import { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, TextInput, TouchableWithoutFeedback, Keyboard  } from 'react-native';

export default function wallet() {

    const [balance, setBalance] = useState(0); //0 by default
    const [deposit, setDeposit] = useState("");
    const [withdraw, setWithdraw] = useState("");

    const handleDeposit = () =>{
        const depositAmount = parseFloat(deposit); //set the amount that is deposited to a float
        if (isNaN(depositAmount) || depositAmount <= 0){ //not allowing for letters and less than $0
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
        else if(withdrawAmount > balance){
          Alert.alert("Cannot withdraw more than balance")
        }
        else {
            setBalance(balance - withdrawAmount);
            Alert.alert("Withdrew", `$${withdrawAmount}`);
            setWithdraw('');
        }
    }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <View style={styles.body}>
        <Text style={styles.title}>Your Wallet</Text>

        <Text style={styles.normal_text}>Balance: {balance}</Text>

        <TextInput 
          style={styles.input}
          placeholder='Deposit Amount'
          placeholderTextColor="#b0b0b0"
          value={deposit} 
          keyboardType='numeric' //only number keyboard
          onChangeText={setDeposit}
          returnKeyType="done" //allows for a done button
        />
        
        <View style={styles.buttonContainer}>
          <Button 
            title='Deposit'
            onPress={handleDeposit}     
          />
        </View>
        

        <TextInput 
          style={styles.input}
          placeholder='Withdraw Amount'
          placeholderTextColor="#b0b0b0"
          value={withdraw}
          keyboardType='numeric'
          onChangeText={setWithdraw}
          returnKeyType="done" //allows for a done button
        />  

        <View style={styles.buttonContainer}>
          <Button
            title="Withdraw"
            onPress={handleWithdraw}
          />
       </View> 

    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#2c2c2e',
    padding: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  normal_text: {
    color: '#f0f0f0',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  input: {
    width: '80%',
    backgroundColor: '#2c2c34',
    color: '#ffffff',
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#3a3a44',
  },
  buttonContainer: {
    width: '50%',
    marginVertical: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#888888', 
    backgroundColor: '#3a3a3a',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
