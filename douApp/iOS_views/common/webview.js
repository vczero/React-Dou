import Util from './util' ;
import Header from './header' ;

import React,{
  WebView,
  View
  } from 'react-native';

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
          style={{width: Util.size.width, height:Util.size.height - Util.navigationHeight - 44}}
          source={{uri:this.props.url}}></WebView>
      </View>
    );
  }
});

