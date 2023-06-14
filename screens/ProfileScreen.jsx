import { StyleSheet, View, Text, TextInput } from "react-native"

export default function ProfileScreen({route}){
    return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Estamos en Perfil de Usuario</Text>
        <Text>Nombre Completo es: {route.params.fullname}</Text>
        <Text>Salario: {route.params.salary}</Text>
        <Text>Retencion en la fuente: {route.params.salary > 3000000 ? route.params.salary * 0.1: 0}</Text>
        <TextInput
        value={route.params.username}
        />
    </View>
    )
}