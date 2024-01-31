import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Modal, FlatList , Alert} from 'react-native';
import Formulario from './src/components/Formulario';
import Moto from './src/components/Moto';
import InformacionMoto from './src/components/InformacionMoto';


const App = ()=> {

  const [modalVisible, setModalVisible] = useState(false)
  const [motos, setMotos] = useState([])      /*inicia vacio y se va llenando segun ingresen motos*/
  const [moto, setMoto] = useState({}) 
  const [ modalMoto, setModalMoto] = useState(false)


//creamos una funcion xa pasar inf desde otro componente
const motoEditar = id => {
  const motoEditar = motos.filter(moto => moto.id === id )
    setMoto(motoEditar[0])
}

const motoEliminar = id => {
  Alert.alert(
    '¿Quieres eliminar una moto? ',
    'Una moto eliminada no se puede recuperar',
    [
      {text:'Cancelar'},
      {text: 'Claro, Eliminar', onPress: () => {
        const motosActualizadas = motos.filter(
          motosState => motosState.id !== id )
          setMotos(motosActualizadas)
      }}
    ]
  )
}

//xa desmontar formulario
const cerrarModal = () => {
  setModalVisible(false)
}

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>DeMotos{''}
        <Text style={styles.tituloBold}>Ray</Text>
      </Text>

      <Pressable
      onPress={() => setModalVisible(!modalVisible)}        /*espera a q suceda el evento xa mandar llamar la funcion'setMod..'*/  /*coloca el vlr contrario a lo q tenga modalVisible*/
      style={styles.btnNuevaCita}
     >                                
      <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
     </Pressable>

    {motos.length === 0 ? <Text style={styles.noMotos}>Sin Motos</Text> : 
      <FlatList 
        style={styles.listado}
        data={motos}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return(
            <Moto 
              item={item}
              setModalVisible={setModalVisible}
              setMoto={setMoto}
              motoEditar={motoEditar}
              motoEliminar= {motoEliminar}
              setModalMoto={setModalMoto}     
            />
          )
        }}
      />
      
      }

      {modalVisible && (
        <Formulario 
          cerrarModal={cerrarModal}     //lo manda llamar pero desde el componente p/pal
            motos={motos}
            setMotos={setMotos}
            moto={moto}
            setMoto={setMoto}
        />
      )}
      

      <Modal
        visible={modalMoto}
        animationType='slide'
      >
        <InformacionMoto 
          moto={moto}
          setMoto={setMoto}
          setModalMoto={setModalMoto}
        />
      </Modal>
     </View>

  )
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#DCDBD8',
      flex: 1
    },
    titulo: {
      textAlign: 'center',
      fontSize: 30,
      color: '#42A033',       /*verde*/
      fontWeight: '600'
    },
    tituloBold: {
      fontWeight: '900',
      color: '#1955B4'        /*azul*/
    },
    btnNuevaCita: {
      backgroundColor: '#42A033',
      padding: 10,
      marginTop: 30,
      marginHorizontal: 20,
      borderRadius: 15

    },
    btnTextoNuevaCita: {
      textAlign: 'center',
      fontSize: 20,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      color: '#fff'
    },
    noMotos: {
      marginTop: 40,
      textAlign: 'center',
      fontWeight: '600',
      fontSize: 24
    },
    listado: {
      marginTop: 50,
      marginHorizontal: 30
    }
  })

export default App;
