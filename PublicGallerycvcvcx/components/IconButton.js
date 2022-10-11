import {View, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {likedPost, UnlikedPost} from '../lib/posts';
import {useUserContext} from '../contexts/UserContext';
import events from '../lib/events';
function IconButton({postUserId: id}) {
  const user = useUserContext();
  const [heart, setHeart] = useState(false);
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
    if (!heart) {
      likedPost({id, displayName});
    } else {
      UnlikedPost({id, displayName});
    }

    setLoading(false);
    setHeart(!heart);
  };
  return (
    <View style={styles.buttonWrapper}>
      <Pressable onPress={onPress}>
        {heart ? (
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
