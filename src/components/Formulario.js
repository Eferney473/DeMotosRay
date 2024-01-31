import React, {useState, useEffect } from 'react'
import {Text, View, StyleSheet, Modal, TextInput, ScrollView, Pressable, Alert } from 'react-native';
import DatePicker from 'react-native-date-picker'


const Formulario = ({
    modalVisible,
    cerrarModal,
    motos, 
    setMotos,
    moto: motoObj, 
    setMoto: setMotoApp 
    }) => {

    const [id, setId] = useState('') 
    const [moto, setMoto] = useState('')                     
    const [propietario, setPropietario] = useState('')            
    const [email, setEmail] = useState('')            
    const [telefono, setTelefono] = useState('')            
    const [fecha, setFecha] = useState(new Date())            
    const [servicio, setServicio] = useState('')     


    useEffect(() => {
        if(Object.keys(motoObj).length > 0 ) {
           setId(motoObj.id)
           setMoto(motoObj.moto)
           setPropietario(motoObj.propietario)
           setEmail(motoObj.email)
           setTelefono(motoObj.telefono)
           setFecha(motoObj.fecha)
           setServicio(motoObj.servicio)
        }
    }, [motoObj])

    
    
    const handleCita = () => {
        //VALIDAR
        if([moto, propietario, email, fecha, servicio].includes('')) { /*si esta vacio alguno no pasa la validacion*/
           Alert.alert(
                'Error',                /*titulo del alert*/
                'Todos los campos son obligatorios',        /*descripcion del alert*/
                /*[{text: 'Recordarme despúes'}, {text: 'Cancelar'}, {text: ' OK'},]*/
            )

            return
        }

        //registro nuevo o edicion
        const nuevaMoto = {
            //id: Date.now(),           lo quitamos porque estamos editando
            moto,
            propietario,
            email,
            telefono,
            fecha,
            servicio
        }

        if(id) {
            //editando
            nuevaMoto.id = id

            const motosActualizadas = motos.map( motoState => 
                motoState.id === nuevaMoto.id ? nuevaMoto :
                motoState )
                setMotos(motosActualizadas)
                setMotoApp({})
        }else {
            //nuevo
            nuevaMoto.id = Date.now()
            setMotos([...motos, nuevaMoto])
        }
        cerrarModal()
        setId('')
        setMoto('')                              //todos estos xa reiniciar el formulario
        setPropietario('')
        setEmail('')
        setTelefono('')
        setFecha(new Date())
        setServicio('')
    }



  return (
    <Modal
        animationType='slide'
        visible= {modalVisible}                  /*muestra como aparece el modal*/
    >
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.titulo}>{motoObj.id ? 'Editar' : 'Nueva'} {''}
                    <Text style={styles.tituloBold}>Cita</Text>
                </Text>

                <Pressable 
                    style={styles.btnCerrar}
                    onLongPress={() => {
                        cerrarModal()
                        setMotoApp({})
                        setId('')
                        setMoto('')                              //todos estos xa reiniciar el formulario
                        setPropietario('')
                        setEmail('')
                        setTelefono('')
                        setFecha(new Date())
                        setServicio('')
                    }}
                   
                >
                    <Text style={styles.btnCerrarTexto}>Cerrar</Text>
                </Pressable>

                <View style={styles.campo}>
                    <Text style={styles.label}>Marca Moto</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Marca Moto'
                        placeholderTextColor={ '#666'}
                        value={moto}
                        onChangeText={setMoto}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Propietario</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Nombre Propietario'
                        placeholderTextColor={ '#666'}
                        value={propietario}
                        onChangeText={setPropietario}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Email Propietario</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Email Propietario'
                        placeholderTextColor={ '#666'}
                        keyboardType='email-address'
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Teléfono Propietario</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Teléfono Propietario'
                        placeholderTextColor={ '#666'}
                        keyboardType='number-pad'
                        value={telefono}
                        onChangeText={setTelefono}
                        maxLength={10}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Fecha Ingreso</Text>
                    <View style={styles.fechaContenedor}>
                        <DatePicker 
                            date={fecha}
                            onDateChange={(date) => setFecha(date)}
                        />
                    </View>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Servicio</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Servicio'
                        placeholderTextColor={ '#666'}
                        value={servicio}
                        onChangeText={setServicio}
                        multiline={true}
                        numberOfLines={4}
                    />
                </View>

                <Pressable 
                    style={styles.btnNuevaCita}
                    onPress={handleCita}
                   
                >
                    <Text style={styles.btnNuevaCitaTexto}>{motoObj.id ? 'Editar' : 'Agregar'} Moto</Text>
                </Pressable>
            </ScrollView>
        </View>
    </Modal>
)
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#42A033',
        flex: 1
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#fff'
    },
    tituloBold: {
        fontWeight: '900'
    },
    campo: {
        marginTop: 10,
        marginHorizontal: 30,
    },
    btnCerrar: {
        marginVertical: 30,                  /*xa q sea arriba y abajo*/
        backgroundColor: '#398B12',          /*verde oscuro*/
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 15,
        /*borderWidth: 2,
        borderColor: '#fff'*/
    },
    btnCerrarTexto: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '900',
        textTransform: 'uppercase'
    },
    label: {
        color: '#fff',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 18,
        fontWeight: '600'
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 15,
    },
    fechaContenedor: {
        backgroundColor: '#fff',
        borderRadius: 15,
        overflow: 'hidden',
    },
    btnNuevaCita: {
        marginTop: 50,
        backgroundColor: '#1955B4',
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 15,
        marginBottom: 30
    },
    btnNuevaCitaTexto: {
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
})

export default Formulario