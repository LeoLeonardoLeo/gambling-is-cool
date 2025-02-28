import { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable, Alert, Modal, TextInput, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function wallet() {

    const [balance, setBalance] = useState(0) //0 by default
    const [amount, setAmount] = useState("") //what the user is going to withdraw/deposit
    
    const [isDepositOpen, setIsDepositOpen] = useState(false)
    const [isWithdrawOpen, setIsWithdrawOpen] = useState(false)

    const [transactions, setTransactions] = useState([])

    
    const handleDeposit = () =>{
        const depositAmount = parseFloat(amount); //set the amount that is deposited to a float
        if (isNaN(depositAmount) || depositAmount <= 0){ //not allowing for letters and less than $0
            Alert.alert("You cannot deposit 0 or less dollars");
        }
        else{
            setBalance(balance + depositAmount); //setting the new balance
            Alert.alert("Deposit complete of ", `$${depositAmount}`);
            setAmount(''); //set to empty again
            setIsDepositOpen(false); //close modal
        }
    }


    const handleWithdraw = () =>{
        const withdrawAmount = parseFloat(amount);
        if (isNaN(withdrawAmount) || balance <= 0){
            Alert.alert("Cannot withdraw, you don't have enough money")
        }
        else if(withdrawAmount > balance){
          Alert.alert("Cannot withdraw more than balance")
        }
        else {
            setBalance(balance - withdrawAmount);
            Alert.alert("Withdrew", `$${withdrawAmount}`);
            setAmount('');
            setIsWithdrawOpen(false)
        }
    }
  return (

    <View style={styles.body}>

      <View style={styles.balanceBox}>
        <Text style={styles.balanceText}>Balance</Text>
        <Text style={styles.amountText}>${balance.toFixed(2)}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, styles.withdrawButton]} onPress={() => setIsWithdrawOpen(true)}> 
          <FontAwesome name="minus-circle" size={18} color="#007BFF" />
          <Text style={styles.buttonText}> Withdraw</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.depositButton]} onPress={() => setIsDepositOpen(true)}> 
          <FontAwesome name="plus-circle" size={18} color="#007BFF" />
          <Text style={styles.buttonText}> Deposit</Text>
        </Pressable>
      </View>    
      
      {/*Deposit*/}
      <Modal visible={isDepositOpen} transparent animationType="slide">
      
        <View style={styles.modalContainer}>
          
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Deposit Money</Text>
            <Text style={styles.balanceText}>Current Balance: ${balance}</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter amount"
                placeholderTextColor="#b0b0b0"
                keyboardType="numeric"
                value={amount}
                onChangeText={(text) => setAmount(text.replace(/[^0-9.]/g, ''))}
                returnKeyType="done"
              />

              <View style={styles.modalButtons}>
                <Pressable style={[styles.button, styles.cancelButton]} onPress={() => setIsDepositOpen(false)}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </Pressable>
                
                <Pressable style={[styles.button, styles.confirmButton]} onPress={handleDeposit}>
                  <Text style={styles.buttonText}>Confirm</Text>
                </Pressable>
              </View>
          
          </View>
      
        </View>
      
      </Modal>

      {/*Withdraw*/}
      <Modal visible={isWithdrawOpen} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Withdraw Money</Text>
            <Text style={styles.balanceText}>Current Balance: ${balance}</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter amount"
              placeholderTextColor="#b0b0b0"
              keyboardType="numeric"
              value={amount}
              onChangeText={(text) => setAmount(text.replace(/[^0-9.]/g, ''))}
              returnKeyType="done"
            />
            <View style={styles.modalButtons}>
              <Pressable style={[styles.button, styles.cancelButton]} onPress={() => setIsWithdrawOpen(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>

              <Pressable style={[styles.button, styles.confirmButton]} onPress={handleWithdraw}>
                <Text style={styles.buttonText}>Confirm</Text>
              </Pressable>

            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.line}></View>
      <View>
        <Text style={styles.balanceText}>Transaction History</Text>
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  balanceBox: {
    backgroundColor: '#2C2C34',
    width: '80%',
    padding: 30,
    borderRadius: 20,
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  balanceText: {
    color: '#b0b0b0',
    fontSize: 18,
    marginBottom: 5, //space between "balance" and the amount
  },
  amountText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    width: '45%',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  withdrawButton: {
    backgroundColor: '#0044cc',
  },
  depositButton: {
    backgroundColor: '#009900',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: '#2C2C34',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    width: '85%',  
    minHeight: 250, 
    justifyContent: 'center'
  },
  modalTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    backgroundColor: '#3a3a44',
    color: '#ffffff',
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#555',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: '#cc0000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  confirmButton: {
    backgroundColor: '#007700',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  line: {
    borderBottomWidth: 1,     
    borderBottomColor: 'white',
    width: '100%',            
    marginVertical: 10,        
  },
});