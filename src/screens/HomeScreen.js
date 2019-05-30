import React from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native'
import { Header, Title, Body, Accordion, Content, Icon } from 'native-base'
import navigator from '../navigation/CustomNavigator'

const { width } = Dimensions.get('window')

export default class HomeScreen extends  React.Component {

  _renderHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "#A9DAD6" }}>
        <Text style={{ fontWeight: "600" }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="add-circle" />}
      </View>
    );
  }
  _renderContent(item) {
    return (
      <Text
        style={{
          backgroundColor: "#e3f1f1",
          padding: 10,
          fontStyle: "italic",
        }}
      >
        {item.content}
      </Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Body>
            <Title>Trang chủ</Title>
          </Body>
        </Header>
        <Content padder style={{ backgroundColor: "white" }}>
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        </Content>
      </View>
    )
  }
}



const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
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
  },

})
