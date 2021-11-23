import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import auth from '@react-native-firebase/auth';

export default function ChatMessage({data}) {
  const user = auth().currentUser.toJSON();

  const isMyMessage = useMemo(() => {
    return data?.user?._id === user.uid;
  }, [data]);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          {
            backgroundColor: isMyMessage ? '#dcf8c5' : '#fff',
            marginLeft: isMyMessage ? 50 : 0,
            marginRight: isMyMessage ? 0 : 50,
          },
        ]}>
        {!isMyMessage && (
          <Text style={styles.name}>{data?.user?.displayName}</Text>
        )}
        <Text style={styles.message}>{data.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  messageBox: {
    borderRadius: 5,
    padding: 10,
  },
  name: {
    color: '#f53745',
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
