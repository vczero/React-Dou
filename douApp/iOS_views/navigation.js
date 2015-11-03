var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Navigator
  } = React;

module.exports = React.createClass({
  render: function(){
    return(
      <Navigator
        initialRoute={{name: '', component: this.props.component, index:0}}
        configureScene={()=>{return Navigator.SceneConfigs.FloatFromBottom;}}
        renderScene={(route, navigator) => {
          const Component = route.component;
          return (
            <View style={{flex: 1}}>
              <Component navigator={navigator} route={route} {...route.passProps}/>
            </View>
          );
        }}/>
    );
  }
});