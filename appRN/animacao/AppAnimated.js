import React, {useRef, useEffect} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';

export default function App() {
  const larAnimada = useRef(new Animated.Value(0)).current;
  const altAnimada = useRef(new Animated.Value(50)).current;
  // const opacidadeAnimada = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(larAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false,
      }),
      Animated.timing(altAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false,
      }),
    ]).start(({ finished }) => {
      //chamada so quando a animação é finalizada
      alert("Animação finalizada")
      // console.log(finished);
    });

    // Animated.sequence([
    //   Animated.timing(opacidadeAnimada, {
    //     toValue: 1,
    //     duration: 2000,
    //     useNativeDriver: false,
    //   }),
    //   Animated.parallel([
    //     Animated.timing(larAnimada, {
    //       toValue: 300,
    //       duration: 2000,
    //       useNativeDriver: false,
    //     }),
    //     Animated.timing(altAnimada, {
    //       toValue: 300,
    //       duration: 2000,
    //       useNativeDriver: false,
    //     }),
    //   ]),

    //   Animated.timing(opacidadeAnimada, {
    //     toValue: 0,
    //     duration: 2000,
    //     useNativeDriver: false,
    //   }),
    // ]).start();

    // //paralelo
    // Animated.parallel([
    //   Animated.timing(larAnimada, {
    //     toValue: 300,
    //     duration: 2000,
    //     useNativeDriver: false,
    //   }),
    //   Animated.timing(altAnimada, {
    //     toValue: 200,
    //     duration: 2000,
    //     useNativeDriver: false,
    //   }),

    // ]).start();

    /// sequencial
    // Animated.sequence([
    //   Animated.timing(larAnimada, {
    //     toValue: 300,
    //     duration: 2000,
    //     useNativeDriver: false,
    //   }),
    //   Animated.timing(altAnimada, {
    //     toValue: 200,
    //     duration: 2000,
    //     useNativeDriver: false,
    //   }),
    // Animated.timing(opacidadeAnimada, {
    //   toValue: 0,
    //   duration: 1000,
    //   useNativeDriver: false,
    // }),
    // ]).start();

    // Animated.timing(larAnimada, {
    //   toValue: 300,
    //   duration: 2000,
    //   useNativeDriver: false,
    // }).start();
  }, []);

  let porcentagemLargura = larAnimada.interpolate({
    inputRange: [0, 100], //entrada, quanto ate quanto
    outputRange: ['0%', '100%'], //vai sair de quanto ate quanto
  });

  let porcentagemAltura = altAnimada.interpolate({
    inputRange: [50, 100], //entrada, quanto ate quanto
    outputRange: ['5%', '100%'], //vai sair de quanto ate quanto
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          // width: larAnimada,
          // height: altAnimada,
          width: porcentagemLargura,
          height: porcentagemAltura,
          backgroundColor: '#4169e1',
          justifyContent: 'center',
          // borderRadius: 50,
          // opacity: opacidadeAnimada,
        }}>
        {/* <Text style={{textAlign: 'center', fontSize: 22, color: '#fff'}}>
          Carregando....
        </Text> */}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
