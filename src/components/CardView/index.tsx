import React, { useEffect, useState } from 'react'
import { View, Image, Text, Button } from 'react-native'

import { styles } from './style'
import Logo from '../../../assets/logo.png'
import Divider from '../Divider'
import { CAR_ASSETS_BASE_URL } from '../../constants/car'
import BuyButton from '../BuyButton'
import { CarModel } from './props'
import { handlePreviousItem, handleNextItem, loadCarData } from './actions'

export function CardView() {
  const [carData, setCarData] = useState<CarModel | null>(null)

  useEffect(() => {
    (async () => {
      await loadCarData(1, setCarData)
    })()
  }, [])

  const renderLogoBox = () => (
  <View style={styles.logoContainer}>
    <Image source={Logo} style={styles.imageLogo} />
  </View>)

  const renderCardDetails = () => (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  )

  const renderCarImage = () => (
    <Image source={{uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`}} style={styles.image} />
  )

  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <Button title='<' color={'#01a6b3'} onPress={() => handlePreviousItem(carData, setCarData)}/>
      <Text style={styles.priceLabel}>{carData?.price}</Text>
      <Button title='>' color={'#01a6b3'} onPress={() => handleNextItem(carData, setCarData)}/>
    </View>
  )

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      <Divider />
      {renderCardDetails()}
      {renderCarImage()}
      <Divider />
      <BuyButton />
      {renderPriceControls()}
    </View>
  )
}