import React from 'react'
import { Pressable, Text, View, StyleSheet} from 'react-native'
import { formatearFecha } from '../helpers'

const InformacionMoto = ({moto, setMoto, setModalMoto}) => {
    
  return (
    <View style={styles.contenedor}>

        <Text style={styles.titulo}>Informacion {''}
            <Text style={styles.tituloBold}>Moto</Text>
        </Text>

        <View>
            <Pressable
                style={styles.btnCerrar}
                onLongPress={() => {
                    setModalMoto(false)
                    setMoto({})
                }}
            >
                <Text style={styles.btnCerrarTexto}>Cerrar</Text>
            </Pressable>
        </View>

        <View style={styles.contenido}>

            <View style={styles.campo}>
                <Text style={styles.label}>Marca: </Text>
                <Text style={styles.valor}>{moto.moto}</Text>
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Propietario: </Text>
                <Text style={styles.valor}>{moto.propietario}</Text>
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Email: </Text>
                <Text style={styles.valor}>{moto.email}</Text>
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Teléfono: </Text>
                <Text style={styles.valor}>{moto.telefono}</Text>
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Fecha Ingreso: </Text>
                <Text style={styles.valor}>{formatearFecha(moto.fecha)}</Text>
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Servicio: </Text>
                <Text style={styles.valor}>{moto.servicio}</Text>
            </View>

        </View>
        
    </View>
  )
};

const styles = StyleSheet.create({
    contenedor:{
        backgroundColor: '#1955B4',     
        flex: 1,
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
    contenido: {
        backgroundColor: '#fff',
        marginHorizontal: 30,
        borderRadius: 15,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,

        elevation: 10,
    },
    campo: {
        marginBottom: 10,
    },
    label: {
        textTransform: 'uppercase',
        color: '#374151',
        fontWeight: '600',
        fontSize: 13
    },
    valor: {
        fontWeight: '700',
        fontSize: 18,
        color: '#494A4B'
    }
})

export default InformacionMoto
