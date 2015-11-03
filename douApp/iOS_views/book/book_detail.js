var React = require('react-native');
var Util = require('./../util');
var ServiceURL = require('./../service');
var BookItem = require('./book_item');

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
  getInitialState: function(){
    return{
      data: null
    };
  },
  render: function(){
    return(
      <ScrollView style={styles.m10}>
        {
          this.state.data ? <BookItem row={this.state.data}/> : Util.loading
        }
      </ScrollView>
    );
  },

  componentDidMount: function(){
    var id = this.props.id;
    var that = this;
    var url = ServiceURL.book_search_id + '/' + id;
    Util.get(url, function(data){
      console.log(data);
      that.setState({
        data: data
      });
    }, function(err){
      alert(err);
    });
  }
});

var styles = StyleSheet.create({
  m10:{
    marginTop:24
  }
});


