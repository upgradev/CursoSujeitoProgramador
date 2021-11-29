import React from 'react';
import {View, Text} from 'react-native';
import Realm from 'realm';
import BookSchema from '../Schemas/BookSchema';

export default function getRealm() {
  return Realm.open({
    schema: [BookSchema],
  });
}
