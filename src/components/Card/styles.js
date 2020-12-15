import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    marginVertical: 10,
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
  },
  face: {
    backgroundColor: 'rgb(158,207,230)',
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
  },
  image: {
    width: 300,
    minHeight: height * 0.5,
  },
});

export default styles;
