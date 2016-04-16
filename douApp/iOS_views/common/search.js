import Util from './util' ;
import React,{
    StyleSheet,
    TextInput,
    View
} from 'react-native';

module.exports = React.createClass({
  render: function(){
    return (
      <View style={styles.flex_1}>
        <TextInput style={[styles.flex_1, styles.input]} autoCapitalize='none' clearButtonMode='while-editing' {...this.props}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  flex_1:{
    flex:1
  },
  input:{
    borderWidth:Util.pixel,
    height:40,
    borderColor:'#DDDDDD',
    paddingLeft:5
  }
});