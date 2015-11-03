var React = require('react-native');
var Icon = require('./right_icon');
var {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ScrollView,
  TouchableOpacity
  } = React;


module.exports = React.createClass({
  render: function(){
    var obj = this.props.initObj;
    return (
      <View style={[styles.header, styles.row]}>
        <View style={styles.row}>
          <Icon/>
          <Text style={styles.fontFFF}>{obj.backName}</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.fontFFF}>{obj.title}</Text>
        </View>
        <View></View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  row:{
    flexDirection:'row'
  },
  header:{
    height:50,
    backgroundColor:'#3497FF'
  },
  fontFFF:{
    color:'#fff',
    fontSize:16
  },
  title:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    fontWeight:'bold'
  }
});

