import React from 'react'
import { View, Text, Slider } from 'react-native'

export default function UdaciSlider({ value, onChange, max, unit, step }) {

  return (
    <View>
      <Slider
        step={step}
        maximumValue={max}
        mininumValue={0}
        onValueChange={onChange}
        value={value} 
      />
      <View>
        <Text>{value}</Text>
      </View>
    </View>
  )
}