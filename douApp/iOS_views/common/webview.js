var React = require('react-native');
var Util = require('./util');
var Header = require('./header');

var {
  WebView,
  View
  } = React;

module.exports = React.createClass({
  render: function(){
    console.log(this.props.url);
    return (
      <View>
        <Header
          navigator={this.props.navigator}
          initObj={{
            backName: this.props.backName,
            title: this.props.title
          }}/>
        <WebView
          startInLoadingState={true}
          style={{width: Util.size.width, height:Util.size.height - 50 -44}}
          url={this.props.url}></WebView>
      </View>
    );
  }
});

