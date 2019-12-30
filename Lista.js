import React from 'react';
import { TouchableHighlight, Image, FlatList, StyleSheet } from 'react-native';

class Lista extends React.Component {
  state = {
    events: []
}

componentDidMount(){
  const events = require('./db.json').postacie;
  this.setState({events});
}
  render() {
    return (
        <FlatList
          data={this.state.events}
          horizontal={1}
          renderItem={({item}) => 
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Framedata')}> 
          <Image style={styles.obrazek} source={{uri: item.source}}></Image>
          </TouchableHighlight> } 
        />
      );
    }
  }

    export default Lista;

    const styles = StyleSheet.create({
      obrazek:{
        width:200,
        height:200,
        resizeMode:'contain',
        margin:30,
        marginTop:5,
        marginBottom:5,
      }
    });