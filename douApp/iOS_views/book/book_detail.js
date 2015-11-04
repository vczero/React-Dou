var React = require('react-native');
var Util = require('./../common/util');
var ServiceURL = require('./../common/service');
var BookItem = require('./book_item');
var Header = require('./../common/header');

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
          this.state.data ?
            <View>
              <Header
                navigator={this.props.navigator}
                initObj={{
                    backName: '图书',
                    title: this.state.data.title
                }}/>
              <BookItem row={this.state.data}/>
              <View>
                <Text style={[styles.title]}>图书简介</Text>
                <Text style={styles.text}>{this.state.data.summary}</Text>
              </View>

              <View>
                <Text style={[styles.title]}>作者简介</Text>
                <Text style={styles.text}>{this.state.data.author_intro}</Text>
              </View>
              <View style={{height:50}}></View>
            </View>
            : Util.loading
        }
      </ScrollView>
    );
  },

  componentDidMount: function(){
    var id = this.props.id;
    var that = this;
    var url = ServiceURL.book_search_id + '/' + id;
    Util.get(url, function(data){
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
    flex:1
  },
  title:{
    fontSize:16,
    marginLeft:10,
    marginTop:10,
    marginBottom:10
  },
  text:{
    marginLeft:10,
    marginRight:10,
    color:'#000D22'
  }
});


