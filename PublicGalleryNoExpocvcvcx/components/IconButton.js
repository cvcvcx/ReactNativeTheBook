import {View, Pressable, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {likedPost, UnlikedPost} from '../lib/posts';
import {useUserContext} from '../contexts/UserContext';
import {useFocusEffect} from '@react-navigation/native';
function IconButton({postUserId: id}) {
  const user = useUserContext();
  // const {like} = useLikeContext();
  // const {setUser} = useUserContext();
  // const {setLike} = useLikeContext();

  const [like, setLike] = useState(false);

  const [loading, setLoading] = useState(false);
  const onPress = () => {
    if (loading) {
      return;
    }
    if (user == null) {
      return;
    }
    setLoading(true);
    const displayName = user.user.displayName;
    console.log(displayName);
    if (!like) {
      console.log('likePost');
      likedPost({id, displayName});
    } else {
      console.log('UnlikePost');
      UnlikedPost({id, displayName});
    }
    setLike(!like);
    setLoading(false);
  };
  return (
    <View style={styles.buttonWrapper}>
      <Pressable onPress={onPress}>
        {like ? (
          <Icon name="heart" size={24} color="red" />
        ) : (
          <Icon name="hearto" size={24} color="red" />
        )}
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    marginRight: 16,
    flexDirection: 'row',
  },
});

export default IconButton;
