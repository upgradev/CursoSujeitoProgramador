import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Pin from './src/components/Pin';
import Geolocation from '@react-native-community/geolocation';

// sp -23.5492243 -46.5813785
// df -15.8080374 -47.8750231

export default function App() {
  const [regiao, setRegiao] = useState({});
  const [markers, setMarkers] = useState()

  const [mudaRegiao, setMudaRegiao] = useState(regiao.latitude);
  const [mudaRegiao2, setMudaRegiao2] = useState(regiao.longitude);

  useEffect(() => {
    const localizacao = () => {
      Geolocation.getCurrentPosition(info => {
        setRegiao({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          latitudeDelta: 0.922,
          longitudeDelta: 0.421,
        });
      });
    };
    localizacao();
  }, []);

  // const [markers, setMarkers] = useState([
  //   {
  //     key: 0,
  //     // image: require("./assets/images/carro.png"),
  //     pinColor: 'red',
  //     aviso: 'Perigoso',
  //     coords: {latitude: -23.5492243, longitude: -46.5813785},
  //   },
  //   {
  //     key: 1,
  //     // image: require("./assets/images/carro_left.png"),
  //     aviso: 'Tranquilo',
  //     pinColor: 'green',
  //     coords: {latitude: -23.5592243, longitude: -46.6013785},
  //   },
  //   {
  //     key: 2,
  //     // image: require("./assets/images/carro_down.png"),
  //     pinColor: 'red',
  //     aviso: 'Perigoso',
  //     coords: {latitude: -23.5492243, longitude: -46.6113785},
  //   },
  // ]);

  const moverCidade = (lat, long) => {
    setRegiao({
      latitude: lat,
      longitude: long,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  const mudouMapa = regiao => {
    setMudaRegiao(regiao.latitude);

    setRegiao({
      latitude: regiao.latitude,
      longitude: regiao.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  const clicou = event => {
    console.log(event.nativeEvent.coordinate.latitude);
  };

  const newMarker = event => {
    markers.push({
      key: markers.length,
      coords: {
        latitude: event.nativeEvent.coordinate.latitude,
        longitude: event.nativeEvent.coordinate.longitude,
      },
      pinColor: '#ff0000',
    });
    setMarkers([...markers]);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapa}
        region={regiao}
        showsUserLocation
        loadingEnabled
        minZoomLevel={16}
      />

      {/* <Text>
        Mapas {regiao.latitude} | {regiao.longitude}
      </Text>
      <Text>Latitude Atual: {mudaRegiao}</Text> */}
      {/* <MapView
        style={styles.mapa}
        region={regiao}
        // onPress={newMarker} //evento de click no mapa, ex marcador
        //showsTraffic={true} //mostra o trafego do transito
        //rotateEnabled={false} //rotacionar mapa
        //zoomEnabled={false} //desativar zoom: ;
        //scrollEnabled={false} //desativar arrastar no mapa
        //mapType={"standard"} //tipo de mapa ex satellite=foto
        // onMapReady={minhaAcao} //acao no mapa
        // onRegionChangeComplete={mudouMapa} //pegar localizacao atual
        //onPress={clicou}    //evento de click no mapa, ex marcador
        // initialRegion={{
        //   latitude:,
        //   longitude: ,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
      >
        {markers.map(marker => (
          <Marker
            key={marker.key}
            // image={marker.image}
            // pinColor={marker.pinColor}
            coordinate={{
              latitude: marker.coords.latitude,
              longitude: marker.coords.longitude,
            }}>
              <Pin marker={marker} />
          </Marker>
          // <Marker
          //   key={marker.key}
          //   // image={marker.image}
          //   pinColor={marker.pinColor}
          //   coordinate={{
          //     latitude: marker.coords.latitude,
          //     longitude: marker.coords.longitude,
          //   }}
          // />
        ))}

        {/* <Marker
          coordinate={{latitude: regiao.latitude, longitude: regiao.longitude}}
          title={'Meu Carro'}
          description={'Gol 1.6 novissimo'}
          pinColor={'blue'}
        />

        <Marker
          coordinate={{latitude: -23.5592243, longitude: -46.6013785}}
          title={'Meu Terreno de casa'}
          description={'Casa minha casa'}
          pinColor={'green'}
          // background-color: rgba(47, 47, 47, 0.99);
        /> */}
      {/* </MapView>  */}
      {/* <MapView
        style={styles.mapa}
        region={regiao}

        //showsTraffic={true} //mostra o trafego do transito
        //rotateEnabled={false} //rotacionar mapa
        //zoomEnabled={false} //desativar zoom: ;
        //scrollEnabled={false} //desativar arrastar no mapa
        //mapType={"standard"} //tipo de mapa ex satellite=foto
        // onMapReady={minhaAcao} //acao no mapa
        // onRegionChangeComplete={mudouMapa} //pegar localizacao atual
        //onPress={clicou}    //evento de click no mapa, ex marcador
        // initialRegion={{
        //   latitude:,
        //   longitude: ,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  mapa: {
    width: '100%',
    height: 550,
  },
});
