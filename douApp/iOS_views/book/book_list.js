var React = require('react-native');
var Search = require('./../common/search');
var Util = require('./../common/util');
var ServiceURL = require('./../common/service');
var BookItem = require('./book_item');
var BookDetail = require('./book_detail');

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
      keywords: 'c语言',
      show: false
    };
  },
  render: function(){
    return(
      <ScrollView style={styles.flex_1}>

        <View style={[styles.search, styles.row]}>
          <View style={styles.flex_1}>
            <Search placeholder="请输入图书的名称" onChangeText={this._changeText}/>
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
    this.getData();
  },
  //渲染图书列表项
  _renderRow: function(row){
    return (
      <BookItem row={row} onPress={this._loadPage.bind(this, row.id)}/>
    );
  },
  _changeText: function(val){
    this.setState({
      keywords: val
    });
  },
  _search: function(){
    this.getData();
  },
  //根据关键字查询
  getData: function(){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var that = this;
    var baseURL = ServiceURL.book_search + '?count=10&q=' + this.state.keywords;
    //开启loading
    this.setState({
      show: false
    });
    Util.get(baseURL, function(data){
      if(!data.books || !data.books.length){
        return alert('图书服务出错');
      }
      var books = data.books;
      that.setState({
        dataSource: ds.cloneWithRows(books),
        show: true
      });
    }, function(err){
      alert(err);
    });
  },
  _loadPage: function(id){
    this.props.navigator.push({
      component: BookDetail,
      passProps:{
        id: id
      }
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
