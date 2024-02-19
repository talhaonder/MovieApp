import { Animated } from 'react-native';

export const AnimatedAppBar = (translateY: any, navigation: any) => {
  return (
    <Animated.View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor: 'rgba(52, 52, 52, 0)',
        backgroundColor: 'red',
        width: '100%',

        //for animation
        height: 64,
        transform: [{ translateY: translateY }],
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        elevation: 4,
        zIndex: 1,
      }}
    />
  );
};
