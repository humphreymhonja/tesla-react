import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
        
      },
    
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
      },
    
      title: {
        fontSize: 50,
        fontWeight: '700'
      },
    
      subtitle: {
        fontSize: 16,
        color: '#5c5e62',
        fontWeight: '700'
        
      },
    
      image: {
        width: '100%',
        height: '100%',
        //this component resize the image on screen
        resizeMode: 'contain',
        position: 'absolute'
      },

      buttonContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 60
      },

      subtitleCTA: {
        textDecorationLine: 'underline'
      }
})

export default styles;