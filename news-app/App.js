import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { gStyle } from './styles/style';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';

const fonts = () => Font.loadAsync({
  'BriemBold': require('./fonts/Briem/BriemScriptStd-Bold.otf'),
  'BriemLight': require('./fonts/Briem/BriemScriptStd-Light.otf')
})

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <View style={gStyle.main}>
        <Text style={gStyle.title}>Hello</Text>
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
      />
    )
  }
}

const styles = StyleSheet.create({

});
