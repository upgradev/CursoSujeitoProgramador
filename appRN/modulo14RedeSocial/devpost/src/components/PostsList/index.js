import React, { useRef } from 'react';
import {View, Text} from 'react-native';

import {
  Container,
  Header,
  Avatar,
  Name,
  ContentView,
  Content,
  Actions,
  LikeButton,
  Like,
  TimePost,
} from './styles';

import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

import {formatDistance} from 'date-fns';
import {ptBR} from 'date-fns/locale';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable'
const HeartAnimated = Animatable.createAnimatableComponent(MaterialCommunityIcons)

export default function PostsList({data, userId}) {
  const navigation = useNavigation();

  const likeRef = useRef(null)

  const formatTimePost = () => {
    //converter timestamp para data
    // console.log("data: ", data);
    const datePost = new Date(data.created.seconds * 1000);
    return formatDistance(new Date(), datePost, {
      locale: ptBR,
    });
  };

  const likePost = async (id, likes) => {
    const docId = `${userId}_${id}`;

    likeRef.current.rubberBand()

    // checar se o post ja foi curtido
    const doc = await firestore().collection('likes').doc(docId).get();

    if (doc.exists) {
      // quer dzer q ele ja curtiu esse post
      await firestore()
        .collection('posts')
        .doc(id)
        .update({
          likes: likes - 1,
        });
      await firestore().collection('likes').doc(docId).delete();
      return;
    }

    // criar o like dele no post
    await firestore().collection('likes').doc(docId).set({
      postId: id,
      userId: userId,
    });
    // somar mais um like no post
    await firestore()
      .collection('posts')
      .doc(id)
      .update({
        likes: likes + 1,
      });
  };

  return (
    <Container>
      <Header
        onPress={() =>
          navigation.navigate('PostsUser', {
            title: data?.autor,
            userId: data?.userId,
          })
        }>
        {data?.avatarUrl ? (
          <Avatar source={{uri: data?.avatarUrl}} />
        ) : (
          <Avatar source={require('../../assets/avatar.png')} />
        )}

        <Name>{data?.autor}</Name>
      </Header>
      <ContentView>
        <Content> {data?.content} </Content>
      </ContentView>

      <Actions>
        <LikeButton onPress={() => likePost(data.id, data.likes)}>
          <Like> {data?.likes === 0 ? '' : data?.likes} </Like>

          <HeartAnimated 
            ref={likeRef}
            name={data?.likes === 0 ? 'heart-plus-outline' : 'cards-heart'}
            size={20}
            color="#e52246"
          />
        </LikeButton>
        <TimePost>{formatTimePost()}</TimePost>
      </Actions>
    </Container>
  );
}
