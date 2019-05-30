import React from 'react'
import { Root } from 'native-base'
import RootNavigator from './navigation/RootNavigator'
import navigator from './navigation/CustomNavigator'

export default class Entry extends React.Component {
  render() {
    return (
      <Root>
        <RootNavigator
          ref={(ref) => {
            navigator.setContainer(ref)
          }}
        />
      </Root>
    )
  }
}
