import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import { styles } from './style'
import { AntDesign } from '@expo/vector-icons'

export default function BuyButton() {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Buy This
          <AntDesign name='shoppingcart' size={24} color='white' style={styles.icon}/>
        </Text>
      </TouchableOpacity>
    </View>
  )
}