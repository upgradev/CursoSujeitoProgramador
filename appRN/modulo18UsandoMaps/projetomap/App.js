import React, {useEffect, useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import Pin from './src/components/Pin';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import { getPixel } from './src/components/Utils';

// sp -23.5492243 -46.5813785
// df -15.8080374 -47.8750231

export default function App() {
  const [regiao, setRegiao] = useState({});
  const [destLoaction, setDestLoaction] = useState({});
  const [markers, setMarkers] = useState([
    // {
    //   key: 0,
    //   aviso: 'Cuidado',
    //   coords: {latitude: -20.5073821, longitude: -54.5766299},
    //   pinColor: 'red',
    // },
    // {
    //   key: 1,
    //   aviso: 'Tranquilo',
    //   coords: {latitude: -20.5090821, longitude: -54.5826299},
    //   pinColor: 'green',
    // },
    // {
    //   key: 2,
    //   aviso: 'Cuidado',
    //   coords: {latitude: -20.5080821, longitude: -54.5906299},
    //   pinColor: 'red',
    // },
  ]);

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

  return (
    <View style={styles.container}>
      <MapView
        // ref={map => {
        //   this.map = map;
        // }}
        minZoomLevel={14}
        style={styles.mapa}
        region={regiao}
        loadingEnabled
        showsUserLocation>
        {destLoaction && (
          <MapViewDirections
            origin={regiao}
            destination={destLoaction}
            apiKey=""
            strokeWidth={5}
            strokeColor="#000"
            onReady={result => {
              this.map.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: getPixel(50),
                  left: getPixel(50),
                  top: getPixel(50),
                  bottom: getPixel(50)
                }
              });
            }}
          />
        )}

        {/* {markers.map(marker => {
          return (
            <Marker
              key={marker.key}
              coordinate={marker.coords}
              pinColor={marker.pinColor}>
              <Pin marker={marker} />
              <Callout tooltip={true}>
                <View
                  style={{backgroundColor: '#ddd', width: 200, height: 150}}>
                  <Text style={{fontSize: 18, color: '#000'}}>Ola mundo</Text>
                </View>
              </Callout>
            </Marker>
          );
        })} */}
      </MapView>

      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        style={styles.box}>
        <View style={styles.localView}>
          <TouchableOpacity
            style={styles.localBtn}
            onPress={() => {
              setDestLoaction({latitude: -20.5073821, longitude: -54.5766299});
            }}>
            <Text style={styles.localTex}>Burger King</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.localView}>
          <TouchableOpacity style={styles.localBtn}>
            <Text style={styles.localTex}>Shopping</Text>
          </TouchableOpacity>
        </View>
        <View
          style={styles.localView}
          onPress={() => {
            setDestLoaction({latitude: -20.5473821, longitude: -54.6066299});
          }}>
          <TouchableOpacity style={styles.localBtn}>
            <Text style={styles.localTex}>Farmacia</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.localView}>
          <TouchableOpacity style={styles.localBtn}>
            <Text style={styles.localTex}>Farmacia</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.localView}>
          <TouchableOpacity style={styles.localBtn}>
            <Text style={styles.localTex}>Bar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.localView}>
          <TouchableOpacity style={styles.localBtn}>
            <Text style={styles.localTex}>Sushi</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.localView}>
          <TouchableOpacity style={styles.localBtn}>
            <Text style={styles.localTex}>Churrascaria</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  mapa: {
    flex: 1,
    // width: '100%',
    // height: 550,
    // marginTop: 15,
  },
  box: {
    position: 'absolute',
    top: 30,
    margin: 10,
    height: 70,
  },
  localView: {
    height: 40,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  localBtn: {
    backgroundColor: '#ff0000',
    height: 40,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  localTex: {
    color: '#fff',
  },
});
