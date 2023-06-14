import {StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

function Administrador({route}){
    return(
  
      <View style={styles.container}>
  
        <Text>Administrador</Text>
        <Text >Bienvenido {route.params.fullname}</Text>
        
    
        
    
      </View>
    )
  }

  export default Administrador
  