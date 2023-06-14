import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Importar metodo para mejorar BottomTab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen.jsx';
import {MaterialIcons} from '@expo/vector-icons'
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';

let users=[
  {name:'Jhony Correa', username:'jh', password:'jh31', rol:1},
  {name:'Cristian Marin', username:'cm', password:'cm29', rol:2},
]

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomeTabs'
      >
        <Stack.Screen name="HomeTabs" style={{textAlign:'center'}} component={HomeTabs} options={{title:'Sistema Prueba'}}/>
        <Stack.Screen name="Contacts" component={ContactsScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{title:'Perfil del Usuario'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function LoginScreen({navigation}){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errormsg, setErrorMsg] = useState('')
  return (
    <View style={styles.container}>
      <Text style={{marginBottom:10}}>Estamos en Inicio</Text>
      <Text style={{color:'red'}}>{errormsg}</Text>
      <TextInput
        label="Usuario"
        mode="outlined"
        left={<TextInput.Icon icon="account-circle"/>}
        onChangeText={username => setUsername(username)}
        value={username}
        theme={{ roundness: 10 }}
      />
      <TextInput
        label="Password"
        mode="outlined"
        left={<TextInput.Icon icon="eye"/>}
        onChangeText={password => setPassword(password)}
        value={password}
        theme={{ roundness: 10 }}
      />

      <Button
        icon="door"
        mode="contained"
        onPress={() => {
          let uFind = users.find(user => user.username === username && user.password === password);
          if(uFind != undefined) {
            const {name, username} = uFind
            navigation.navigate('Contacts', {name:name,username:username});
          }else{
            setErrorMsg('Usuario y/o contraseña incorrectos');
          }}
        }

        style={{marginTop:10}}
        >Ingresar
      </Button>

    </View>
  )
}

function HomeTabs(){
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'blue',
        tabBarActiveBackgroundColor: 'orange',
        headerShown:false,
      }}>
      
      <Tab.Screen name="Login" component={LoginScreen} options={{tabBarStyle:{display:'none'},
       tabBarIcon: (tabInfo) => (<MaterialIcons name="person" size={25}/>)
    }}/>
      <Tab.Screen name="Contacts" component={ContactsScreen} options={{tabBarIcon: (tabInfo) => (<MaterialIcons name="zoom-out" size={25}/>)
    }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon: (tabInfo) => (<MaterialIcons name="contacts" size={25}/>)
    }}/>
    </Tab.Navigator>
  )

}

// function ProfileScreen({route, navigation}){
//   return (
//     <View style={styles.container}>
//       <Text>Estamos en Perfil de Usuario</Text>
//       <Text>Nombre Completo es: {route.params.fullname}</Text>
//       <Text>Salario: {route.params.salary}</Text>
//       <Text>Retencion en la fuente: {route.params.salary > 3000000 ? route.params.salary * 0.1: 0}</Text>
//       <TextInput
//         value={route.params.username}
//       />
//     </View>
//   )
// }

function ContactsScreen({navigation,route}){
  return (
    <View style={styles.container}>
      <Text>Estamos en Contáctenos</Text>
      <Text>{route.params.name}</Text>
      <Text>{route.params.username}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
