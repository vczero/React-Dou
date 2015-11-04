var React = require('react-native');
var Search = require('./../common/search');
var Util = require('./../common/util');
var ServiceURL = require('./../common/service');

var {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ScrollView,
  ActivityIndicatorIOS,
  TouchableOpacity
  } = React;

module.exports = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows([]),
      keywords: '幸福',
      show: false
    };
  },
  render: function(){
    return(
      <ScrollView style={styles.flex_1}>

        <View style={[styles.search, styles.row]}>
          <View style={styles.flex_1}>
            <Search placeholder="请输入电影名称" onChangeText={this._changeText}/>
          </View>
          <TouchableOpacity style={styles.btn} onPress={this._search}>
            <Text style={styles.fontFFF}>搜索</Text>
          </TouchableOpacity>
        </View>
        {
          this.state.show ?
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
              />
            : Util.loading
        }

      </ScrollView>
    );
  },

  componentDidMount: function(){
    this._getData();
  },

  _changeText: function(val){
    this.setState({
      keywords: val
    });
  },

  _search: function(){
    this._getData();
  },

  _renderRow: function(row){
    return (
      <View>

      </View>
    );
  },

  _getData: function(){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var that = this;
    var baseURL = ServiceURL.movie_search + '?count=10&q=' + this.state.keywords;
    this.setState({
      show: false
    });
    Util.get(baseURL, function(data){
      if(!data.subjects || !data.subjects.length){
        return alert('电影服务出错');
      }
      var subjects = data.subjects;
      that.setState({
        dataSource: ds.cloneWithRows(subjects),
        show: true
      });
    }, function(err){
      alert(err);
    });
  }

});

var styles = StyleSheet.create({
  flex_1:{
    flex:1,
    marginTop:5
  },
  search:{
    paddingLeft:5,
    paddingRight:5,
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
