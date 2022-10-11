import React, {useState} from 'react';
import {Image, Platform, Pressable, View, StyleSheet} from 'react-native';

function Avatar({source, size, style, isMyProfile}) {
  const [pressed, setPressed] = useState(false);
  const onPressIn = () => {
    setPressed(pressed => true);
  };
  const onPressOut = () => {
    setPressed(false);
  };
  const onPressed = () => {
    console.log('====================================');
    console.log('AvatarPressed!');
    console.log('====================================');
  };

  return (
    <View style={[styles.circleWrapper, {borderRadius: size / 2}]}>
      {isMyProfile ? (
        <Pressable
          onPress={onPressed}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          style={({pressed}) => [
            Platform.OS === 'ios' && pressed && {opacity: 0.5},
          ]}
          android_ripple={{
            color: '#6200ee',
          }}>
          <Image
            source={source || require('../assets/user.png')}
            resizeMode="cover"
            style={[
              style,
              {
                width: size,
                height: size,
                borderRadius: size / 2,
              },
              pressed && {opacity: 0.5},
            ]}
          />
        </Pressable>
      ) : (
        <Image
          source={source || require('../assets/user.png')}
          resizeMode="cover"
          style={[
            style,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
            },
          ]}
        />
      )}
    </View>
  );
}
Avatar.defaultProps = {
  size: 32,
};
const styles = StyleSheet.create({
  circleWrapper: {
    overflow: 'hidden',
  },
});
export default Avatar;
