import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image} from 'react-native';

export default function App() {
  return (
    <ScrollView>
     <Image style={styles.container}
      source={{uri:'https://conteudo.imguol.com.br/c/entretenimento/10/2019/01/10/todos-os-herois-reunidos-de-homem-aranha-no-aranhaverso-1547139081932_v2_1x1.png'}}
     />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  }
);
