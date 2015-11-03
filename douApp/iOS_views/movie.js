var React = require('react-native');
var Search = require('./search');
var Util = require('./util');
var ServiceURL = require('./service');

var {
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView
  } = React;

module.exports = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows([1,2])
    };
  },
  render: function(){
    return(
      <ScrollView style={styles.flex_1}>

        <View style={[styles.search, styles.row]}>
          <View style={styles.flex_1}>
            <Search placeholder="请输入电影的名称"/>
          </View>
          <View style={styles.btn}>
            <Text style={styles.fontFFF}>搜索</Text>
          </View>
        </View>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          />

      </ScrollView>
    );
  },

  componentDidMount: function(){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var that = this;
    var baseURL = ServiceURL.movie_search + '?count=10&q=刘德华';
    console.log(baseURL);
    Util.get(baseURL, function(data){

      if(!data.subjects || !data.subjects.length){
        return alert('电影服务出错');
      }
      var subjects = data.subjects;
      that.setState({
        dataSource: ds.cloneWithRows(subjects)
      });
    }, function(err){
      alert(err);
    });
  },
  renderRow: function(row){
    return (
      <View>
        <Text>{row.title}</Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  flex_1:{
    flex:1
  },
  search:{
    marginLeft:5,
    marginRight:5,
    height:45
  },
  btn:{
    width:50,
    backgroundColor:'#0091FF',
    justifyContent:'center',
    alignItems:'center'
  },
  fontFFF:{
    color:'#fff'
  },
  row:{
    flexDirection:'row'
  }

});
