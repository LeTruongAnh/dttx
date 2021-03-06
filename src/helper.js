import { Platform, Dimensions } from 'react-native'

export const X_WIDTH = 375
export const X_HEIGHT = 812
export const isIphoneX = () => {
  const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window')

  return Platform.OS === 'ios'
    && ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH)
      || (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT))
}
