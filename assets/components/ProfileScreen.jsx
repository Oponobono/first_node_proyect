import {  Text, View,TextInput } from 'react-native';


function ProfileScreen({route}){
    return(
  
      <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
  
        <Text>Perfíl del Usuario</Text>
        <Text > y el nombre completo es {route.params.fullname}</Text>
        
        <Text > el salario es  {route.params.salary}</Text>
        <Text > Retención en la fuente es  {route.params.salary>4000000 ? route.params.salary *0.1: 'No aplica'}</Text>
        
        <TextInput value={route.params.username}/> 
      </View>
    )
  }

  export default ProfileScreen
  