import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, SafeAreaView, Text, Pressable, Linking, } from 'react-native';
const colorGithub = '#010409';
const imageProfilesGithub='https://avatars.githubusercontent.com/u/92590892?v=4';
const colorFontGithub = '#c9d1d9';
const colorDarkFontGithub = '#919191';
const urlGithub ="https://github.com/MarinaLCRibeiro";

export default function App() {
  const handlePressGoToGithub= async ()=>{
    console.log('Verificando link');
const res = await Linking.canOpenURL(urlGithub);

if(res){
  console.log(' link aceito');
  console.log('abrindo link...');
 await Linking.openURL(urlGithub)
}
  }
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
      
    <View style={styles.content}>
      <Image accessibilityLabel='Marina fundo branco vestinda com uma  camiseta branca ' style={ styles.avatar} source={{uri: imageProfilesGithub}}/>
      
      <Text accessibilityLabel='Marina para me encontrar no GITHUB MarinaLCRibeiro ' style={[styles.defaultText, styles.name]}>MarinaLCRibeiro</Text>
      
      <Text accessibilityLabel='Meu nome real Marina Ribeiro'  style={[styles.defaultText, styles.nickname]}>Marina Ribeiro</Text>
      <Text accessibilityLabel='Descrição das atividades encontradas no Git Hub: HTML|CSS|JAVASCRIPT| Graduanda em Análise e Desenvolvimento de Sistemas  ' style={[styles.defaultText, styles.description]}>HTML|CSS|JAVASCRIPT| Graduanda em Análise e Desenvolvimento de Sistemas  </Text>

<Pressable onPress={handlePressGoToGithub}>
    <View style={styles.button}>
      <Text style={[styles.defaultText, styles.textButton]}> Open in GitHub</Text>

    </View>
    </Pressable>
    </View >
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorGithub,
    justifyContent:'center',
    alignItems:'center',

  
  },
  content: {
    alignItems:'center',
    padding: 20,  

  },

  avatar:{
    height:200 ,
    width:200 ,
    borderRadius: 100, 
    borderColor: 'white',
    borderWidth:2,
  },
  defaultText:{
    color:'white',
  },
  name:{
    marginTop:20,
    fontWeight:'bold',
    fontSize:24,
    color:colorFontGithub,

  },
  nickname:{
fontSize:18, 
color:colorDarkFontGithub,
  },
  description:{
    fontWeight:'bold',
    fontSize:14,
  },
  button:{
    backgroundColor:colorDarkFontGithub,
    borderRadius:10,
    padding: 20,
    marginTop:20,
  },
  textButton:{
    fontWeight:'bold',
    fontSize:16,
  },
});
