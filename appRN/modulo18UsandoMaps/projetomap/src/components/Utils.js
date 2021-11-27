import React from 'react';
import {View, Text, Platform, PixelRatio} from 'react-native';

export function getPixel(pixel) {
  return Platform.select({
    ios: pixel,
    android: PixelRatio.getPixelSizeForLayoutSize(pixel),
  });
}
