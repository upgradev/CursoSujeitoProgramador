import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Pin({marker}) {
  return (
    <View style={[styles.viewMarker, {backgroundColor: marker.pinColor}]}>
      <Text style={styles.textoMarker}>{marker.aviso}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    viewMarker: {
        height: 40,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
      },
      textoMarker: {
        color: '#fff',
      },
});
