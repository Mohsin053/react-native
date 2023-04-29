import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

const img1 = require('../../assets/imgrect.png');
export default function PostContentScreen({navigation}) {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={styles.uppertab}>
        <View style={styles.innertab}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" color={'black'} size={30} />
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
            Post
            </Text>
          </View>
          <View>
            <Ionicons name="chevron-back" color={'white'} size={30} />
          </View>
        </View>
      </View>

      <View style ={{width: '90%',
    alignSelf: 'center'}}>

    <View style={{height:150,borderRadius:10,marginTop:10}}>
    <Image source={img1} style={styles.imgs}></Image>
    </View>
    <View style={{height:100,backgroundColor:'#F5F5F5',borderRadius:10,marginTop:10}}>
    <TextInput  style ={{padding: 10,}} placeholder={'Describe your post'} placeholderTextColor="darkgray" multiline={true}
        numberOfLines={10} value={text}
        onChangeText={setText} />
    </View>

    <View style={{marginTop:10}}>
    <TouchableOpacity style={styles.button11}>
          <View style={{ width: '15%' }}>
            <Ionicons
              name="link"
              color={'black'}
              size={25}
              style={{ alignSelf: 'center' }}
            />
          </View>
          <Text style={styles.text12}>Add learn more Link</Text>
          <View style={{ width: '15%', marginLeft: 'auto' }}>
            <Ionicons
              name="add"
              color={'darkgray'}
              size={25}
              style={{ alignSelf: 'center' }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button11}>
          <View style={{ width: '15%' }}>
            <Ionicons
              name="location-outline"
              color={'black'}
              size={25}
              style={{ alignSelf: 'center' }}
            />
          </View>
          <Text style={styles.text12}>Add Location</Text>
          <View style={{ width: '15%', marginLeft: 'auto' }}>
            <Ionicons
              name="chevron-forward"
              color={'darkgray'}
              size={25}
              style={{ alignSelf: 'center' }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button11}>
          <View style={{ width: '15%' }}>
            <Ionicons
              name="lock-closed-outline"
              color={'black'}
              size={25}
              style={{ alignSelf: 'center' }}
            />
          </View>
          <Text style={styles.text12}>where to post</Text>
          <View style={{ width: '15%', marginLeft: 'auto' }}>
            <Ionicons
              name="chevron-forward"
              color={'darkgray'}
              size={25}
              style={{ alignSelf: 'center' }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button11}>
          <View style={{ width: '15%' }}>
            <Ionicons
              name="cash-outline"
              color={'black'}
              size={25}
              style={{ alignSelf: 'center' }}
            />
          </View>
          <Text style={styles.text12}>Set Price</Text>
          <View style={{ width: '15%', marginLeft: 'auto' }}>
            <Ionicons
              name="chevron-forward"
              color={'darkgray'}
              size={25}
              style={{ alignSelf: 'center' }}
            />
          </View>
        </TouchableOpacity>
    </View>
      
      </View>
      
      <View style={styles.buttonview}>
          <TouchableOpacity style={[styles.messagebutton,{backgroundColor:'darkgray'}]}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize:16
                  }}>
                  Draft
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.messagebutton,{backgroundColor:'#FF8216'}]}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize:16
                  }}>
                  Post
                </Text>
              </TouchableOpacity>
        </View>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  uppertab: {
    height: 70,
    backgroundColor: 'white',
    marginBottom: 5,
    alignItems: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  innertab: {
    width: '95%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    justifyContent: 'space-between',
  },
  buttonview: {
    flexDirection: 'row',
    height: 90,
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems:'center',
    position:'absolute',
    bottom: 0,
  },
  messagebutton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 140,
    height:50
  },
 text12: {
    color: 'black',
    fontWeight: 'medium',
    fontSize: 16,
  },
  button11: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
  },
  imgs: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
 
});
