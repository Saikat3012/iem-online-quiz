import React,{useState} from 'react';
import { WebView } from 'react-native-webview';
import { View,Text,ActivityIndicator } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const App = () => {
  const [loading,setLoading]=useState(true)
  const RenderLoadingView=()=> {
    return (
    
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{ color: '#FFF' }}
      />
  );
}
    const url = 'https://www.iemcrp.com/iemEn/ct104.jsp'
  return (<View style={{ flex: 1 ,backgroundColor:'#758'}}>
      <RenderLoadingView/>
      <WebView
        source={{ uri: url }}
        onLoad={()=>setLoading(false)}
        style={{ marginTop: 5 }}
      />
      </View>
    );
}
export default App;