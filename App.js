import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
const [age, setAge] = useState('')
const [lowerlimit, setLowerLimit] = useState(0)
const [upperlimit, setUpperLimit] = useState(0)



const calculatebothlimits =() =>{
  const resultlower = (220 - age) * 0.65

setLowerLimit (resultlower)
const resultupper = (220 - age) * 0.85
setUpperLimit (resultupper)
}

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      
      <TextInput style={styles.field} 
      placeholder ='set your age here'
      value ={age}
      onChangeText={text => setAge(text)}
      keyboardType='decimal-pad'
      />


      <Text style= {styles.field}>Limits</Text>
      <Text style= {styles.field}>{lowerlimit.toFixed(0) }-{upperlimit.toFixed(0) } </Text>
     <Button title = 'Calculate' onPress={calculatebothlimits}></Button>
    

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems : 'flex-start',
   paddingTop: 60,
   margin: 20,
  },
  field:{
  marginTop: 8,
  marginBottom: 8,
}
});
