import Icon from './left_icon' ;
import Util from './util' ;

import React,{
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
} from 'react-native';

module.exports = React.createClass({
  render(){
    var obj = this.props.initObj;
    return (
      <View style={[styles.header, styles.row, styles.center]}>
        <TouchableOpacity style={[styles.row,styles.center]} onPress={this._pop}>
          <Icon/>
          <Text style={styles.fontFFF}>{obj.backName}</Text>
        </TouchableOpacity>
        <View style={[styles.title, styles.center]}>
          <Text style={[styles.fontFFF, styles.titlePos]} numberOfLines={1}>{obj.title}</Text>
        </View>
      </View>
    );
  },

  _pop: function(){
    this.props.navigator.pop();
  }
});

var styles = StyleSheet.create({
  row:{
    flexDirection:'row'
  },
  header:{
    height:Util.navigationHeight ,
    backgroundColor:Util.navigationBarBGColor,
  },
  fontFFF:{
    color:'#fff',
    fontSize:17,
    fontWeight:'bold'
  },
  title:{
    flex:1
  },
  titlePos:{
    marginLeft:-20,
    width:200,
  },
  center:{
    justifyContent:'center',
    alignItems:'center'
  }
});

