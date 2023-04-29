import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView

} from 'react-native';

import Ionicons from "react-native-vector-icons/Ionicons";



export default function CameraRecording({navigation,route}) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (route.params && route.params.text) {
      setDisplayText(route.params.text);
    }
  }, [route.params]);

  const clearText = () => {
    setDisplayText('');
  }
  
  const ScriptView = () => {
  return(
     <View style ={{height:'100%'}}>
     <View style={{height:'10%'}}>
     <TouchableOpacity style ={{width:'15%',marginLeft:'auto'}} onPress ={() => clearText() }>
     <Ionicons name="close-circle" color={'white'} size={30} />
     </TouchableOpacity>
     </View>
     <ScrollView style={{height:'90%'}}>
     <Text style = {{fontSize:25,color:'white',fontWeight:'bold'}}>{displayText}</Text>
     </ScrollView>
     </View>
  );
}
  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
      <View style={styles.uppertab}>
        <View style={styles.innertab}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" color={'white'} size={40} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.middletab}>
      <View style ={{width:'16%'}}> 
        </View>
        <View style ={{width:'68%',height:'100%'}}> 
        { displayText === '' ? <View></View> : <ScriptView />}
        </View>
        <View style ={{width:'16%'}}> 
          <TouchableOpacity style = {{ margin:10}}>
            <Ionicons name="sync" color={'white'} size={30} />
          </TouchableOpacity>
          <TouchableOpacity style = {{ margin:10}}>
            <Ionicons name="flash" color={'white'} size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.lasttab}>
          <TouchableOpacity style = {[styles.lasttabicon,{height:70,width:70,borderWidth:5,backgroundColor:'green'}]} onPress={() => navigation.navigate('Teleprompter')}>
            <Ionicons name="receipt" color={'white'} size={40}/>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.lasttabicon,{height:90,width:90,borderWidth:8,backgroundColor:'red'}]}>
            <Ionicons name="videocam" color={'white'} size={40} style={{}} />
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.lasttabicon,{height:70,width:70,borderWidth:5,backgroundColor:'#e6b800'}]}onPress={() => navigation.navigate('EditingVideoScreen')}>
            <Ionicons name="albums" color={'white'} size={40} />
          </TouchableOpacity>
      </View>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  uppertab: {
    height: '10%',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  innertab: {
    width: '92%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
  },
  middletab:{
    height: '60%',
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent:'space-between',
    flexDirection:'row',
  },
  lasttab:{
    height: '30%',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  lasttabicon:{margin:10,alignItems:'center',borderColor:'white',
    justifyContent:'center',borderRadius:50}

});
