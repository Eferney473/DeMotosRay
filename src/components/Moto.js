import React from 'react'
import { Text, View, StyleSheet, Pressable} from 'react-native'
import { formatearFecha } from '../helpers'

const Moto = ({item, 
    setModalVisible, 
    setMoto,
    motoEditar, 
    motoEliminar, 
    setModalMoto
}) => {
    const { moto, fecha, id } = item


  return (
    <Pressable
        onLongPress={() => {
            setModalMoto(true)
            setMoto(item)
        }}
    >
        <View style={styles.contenedor}>
            <Text style={styles.label}>Moto: </Text>
            <Text style={styles.texto}>{moto}</Text>
            <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>

            <View style={styles.contenedorBotones}>
                <Pressable  
                    style={[styles.btn, styles.btnEditar]}
                    onLongPress={ () => {
                        setModalVisible(true)
                        motoEditar(id)
                    }}
                >
                    <Text style={styles.btnTexto} >Editar</Text>
                </Pressable>

                <Pressable 
                    style={[styles.btn, styles.btnEliminar]}
                    onLongPress={() => motoEliminar(id)}
                >
                    <Text style={styles.btnTexto}>Eliminar</Text>
                </Pressable>
            </View>
        </View>
    </Pressable>
  )
};

const styles =StyleSheet.create({
    contenedor: {
        backgroundColor: '#fff',
        padding: 20,
        borderBottomColor: '94a3b8',                /*gris*/
        borderBottomWidth: 1
    },
    label: {
        color: '#374151',                 /*gris oscuro*/
        textTransform: 'uppercase',
        fontWeight: '700',
        marginBottom: 5
    },
    texto: {
        color: '#42A033',
        fontSize: 24,
        fontWeight:'700',
        marginBottom: 5
    },
    fecha: {
        color: '#374151',   
    },
    contenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'space-between' ,        /*colocarlos a los extremos*/
        marginTop: 20
    },
    btn: {
        paddingVertical: 4,
        paddingHorizontal: 22,
        borderRadius: 15
    },
    btnEditar: {
        backgroundColor: '#f59e0b'              /*naranja*/
    },
    btnEliminar: {
        backgroundColor: '#EF4444'              /*rojo*/
    },
    btnTexto: {
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 12
    },

})

export default Moto

