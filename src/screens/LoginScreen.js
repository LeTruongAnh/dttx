import React from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native'
import { Button, Form, Item, Input, Label, Content  } from 'native-base'
import navigator from '../navigation/CustomNavigator'

const { width } = Dimensions.get('window')

export default class LoginScreen extends  React.Component {

  constructor(props) {
    super(props)
    this.state={
      username: '',
      password: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>DTTX</Text>
        <View style={styles.input}>
          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={'Tên đăng nhập'}
            placeholderTextColor="white"
            style={{ flex: 1 }}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Mật khẩu'}
            placeholderTextColor="white"
            secureTextEntry={true}
            style={{ flex: 1 }}
          />
        </View>

        <Button
          block
          onPress={() => navigator.reset('Home')}
        >
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </Button>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a5797',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    width: width - 32,
    height: 44,
    marginBottom: 40,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    color: 'white',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  }
})
