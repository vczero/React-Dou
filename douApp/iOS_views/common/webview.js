var React = require('react-native');
var Util = require('./util');
var Header = require('./header');

var {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ScrollView,
  WebView,
  TouchableOpacity
  } = React;

module.exports = React.createClass({
  render: function(){
    return (
      <View>
        <Header
          navigator={this.props.navigator}
          initObj={{
            backName: this.props.backName,
            title: this.props.title
          }}/>
        <WebView
          contentInset={{top:-50}}
          style={{width: Util.size.width, height:Util.size.height -50}}
          url={this.props.url}></WebView>
      </View>
    );
  }
});

var styles = StyleSheet.create({

});
