import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

import styles from './styles'
import StyleButton from '../StyleButton'

const CarItem = (props) => {
const { image, tagline, taglineCTA, name } = props.car;
    return (
      
         
    <View style = {styles.carContainer}>
    <ImageBackground source = {image} 
      style ={ styles.image}
      />
     
      <View style = {styles.titles}>
        <Text style = {styles.title}>{ name }</Text>
        <Text style = {styles.subtitle}>
          { tagline }
          { ' ' }
        <Text style ={styles.subtitleCTA}>
          { taglineCTA } 
        </Text>
        </Text>
      </View>

      <View style ={ styles.buttonContainer}>

      <StyleButton
       type = "primary"
       content ={'Custom Order'}
       onPress ={() => {
         console.warn('Order was Pressed')
       }}
      
      />

       <StyleButton
       type = "secondary"
       content ={'Exiating Inventory'}
       onPress ={() => {
         console.warn('Existing Inventory was Pressed')
       }}
      
      />
      </View>

    </View>
    )
}

export default CarItem;