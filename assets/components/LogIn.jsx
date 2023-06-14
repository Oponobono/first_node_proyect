import {StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

let usuarios=[
    {
        username:'amj',
        password:1234,
        nombre:'Alejandro',
        rol:'admin'
    },
    {
        username:'abc',
        password:'zzz',
        nombre:'Pedro',
        rol:'usuario'
    }


]


function LogIn({navigation}){

    const [nombreUsuario,setNombreUsuario]=useState('');
    const [password,setPassword]=useState('');

    let  campos =[nombreUsuario,password]
    function verificar(){

        if(campos.includes('')){
            alert('Hay campos vacios');
            return
        }
        let permiso=false
        usuarios.forEach(usuario => {
            if(usuario.username==nombreUsuario  && usuario.password==password){
                alert('Usuario encontrado')
                permiso=true
                if(usuario.rol==='admin'){
                    navigation.navigate('Admin',{fullname:usuario.nombre})
                }
                else{
                    navigation.navigate('Home',{fullname:usuario.nombre})
                    return
                }
                
            }
           
        })

        if(permiso==false){
            alert('Usuario o contraseña inválidos');
            return;
        }


    }
    return(
  
      <View style={styles.container} >
  
       
        <View style={{ gap:20}} >
        <TextInput value={nombreUsuario} onChangeText={nombreUsuario=>setNombreUsuario(nombreUsuario)} style={{borderWidth:1,bordercolor:'gray',color:'gray',borderRadius:5,marginBottom:5}} placeholder='Nombre de usuario'/> 
        <TextInput secureTextEntry value={password} onChangeText={password=>setPassword(password)} style={{borderWidth:1,bordercolor:'gray',color:'gray',borderRadius:5,marginBottom:5}}  placeholder='Password' /> 
        </View>
        <TouchableOpacity onPress={verificar} style={{backgroundColor:'red',opacity:0.7,color:'white',padding:10,marginTop:2,borderRadius:10}}>Ingresar</TouchableOpacity>


      </View>
    )
  }

  export default LogIn