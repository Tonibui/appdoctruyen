import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
var Firebase = require('firebase');
class HomeScreen extends Component { 
  constructor(props) {
    super(props);
    //var root = new Firebase ("https://appdoctruyen-47057.firebaseio.com/");
    //this.itemRef = root.child()
    this.state = {
        mang: [
            {key: 'item1',
            anh: 'https://i.pinimg.com/474x/db/4a/a5/db4aa575960c4f90bec96f1e97d9b2c7.jpg', 
            tentruyen:'Doreamon'},
            
            {key: 'item2',
            anh: 'https://i.pinimg.com/originals/3f/57/68/3f5768ba4cbea0ad153c539c6da3ba22.jpg', 
            tentruyen:'Đảo Hải Tặc'},
            
            {key: 'item3',
            anh: 'https://znews-photo.zadn.vn/w660/Uploaded/oplukaa/2020_06_14/100384771_10157509824368869_9057397775934685184_o.jpg', 
            tentruyen:'Bảy Viên Ngọc Rồng'},
            
            {key: 'item4',
            anh: 'https://media-int.vnecdn.net/3877677/data/images/2019/02/04/1_1549285299_VnEx.gif', 
            tentruyen:'Thám Tử Conan'},
            
            {key: 'item5',
            anh: 'https://2.bp.blogspot.com/-KSucJZ2L4Wc/VGJO_DG0YxI/AAAAAAAACOk/CkQqxzuEIW0/s288/Vol-66.jpg', 
            tentruyen:'Naruto'},
            
            {key: 'item6',
            anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSl_qb35RuSrKIjSQWImNwJOS09qSkPhkp9ng&usqp=CAU', 
            tentruyen:'Jindo'},
            
            {key: 'item7',
            anh: 'https://upload.wikimedia.org/wikipedia/vi/4/48/Sailormoonvol1.PNG', 
            tentruyen:'Phù Thủy Mặt Trăng'},
            
            {key: 'item8',
            anh: 'https://nxbkimdong.com.vn/sites/default/files/1_148.jpg', 
            tentruyen:'Pokemon'},
            
            {key: 'item9',
            anh: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/8_91.jpg?itok=-gUw8PiY', 
            tentruyen:'Tsubasa'},

            {key: 'item10',
            anh: 'https://truyenvn.com/tin/wp-content/uploads/2020/01/slam-dunk-2.jpg', 
            tentruyen:'Slam Dunk'},
            
            {key: 'item11',
            anh: 'https://toplist.vn/images/800px/than-dong-dat-viet-201697.jpg', 
            tentruyen:'Đất Việt'},
            
            {key: 'item12',
            anh: 'https://grahamcrackers.com/catalog/jun170457.jpg', 
            tentruyen:'Optimus'},
    ]
    };
  }
  render() {
    return (
      <View style={styles.contain}>
        <View>
          <Text style={styles.tieude}></Text>
        </View>
        <FlatList numColumns={3}
          data={this.state.mang}
          renderItem={({item}) =>
                                <TouchableOpacity onPress={()=>{alert(item.tentruyen)}}>
                                    <View style={styles.item}>
                                     <Image 
                                     source={{uri: item.anh}}
                                     style={{width: 110, height: 100, borderRadius:10}}
                                     />
                                    <Text style={styles.tenmon}>{item.tentruyen}</Text>    
                                    </View>
                                </TouchableOpacity>
                                
                                

                            }
        />
        
        
      </View>
      
    );
  }
}
var styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#993399'
        
    },
    item: {
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,      
        marginTop: 5,
        marginLeft:10,
        marginRight:10,
        width:110,
        flex:1
        
    },
    tenmon: {
        fontFamily: 'Arial',
        fontSize: 12,
        padding: 5,
        marginLeft: 10,
        textAlign:'center'
    },
    tieude: {
      backgroundColor: '#FF3300',
      fontSize: 30,
      textAlign: 'center'
    }
})
export default HomeScreen;