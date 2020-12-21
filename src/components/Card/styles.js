import {Dimensions, StyleSheet} from 'react-native';
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderWidth: 0.5,
    borderRadius: 20,
    elevation: 5,
    minHeight: height * 0.5,
    width: 300,
  },
  face: {
    minHeight: height * 0.5,
    width: 300,
  },
  hidden: {backfaceVisibility: 'hidden'},
  back: {
    backgroundColor: 'rgb(151,129,213)',
    borderRadius: 20,
    overflow: 'scroll',
    paddingHorizontal: 10,
    paddingVertical: 10,
    position: 'absolute',
    top: 0,
    minHeight: height * 0.5,
    width: 300,
  },
  image: {
    width: 300,
    minHeight: height * 0.5,
  },
});

export default styles;
