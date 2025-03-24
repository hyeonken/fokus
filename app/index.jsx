import { Image, StyleSheet, Text, View, Pressable, ActionSheetIOS} from "react-native";
import { useState } from 'react';
import { FokusButton } from '../components/FokusButton';
import { ActionButton } from '../components/ActionButton';
import { Timer } from '../components/Timer';

const pomodoro = [
{
  id: 'focus',
  initialValue: 25,
  image: require('./pomodoro.png'),
  display: 'Foco'
},
{
  id: 'short',
  initialValue: 5,
  image: require('./short.png'),
  display: 'Pausa Curta'
},
{
  id: 'long',
  initialValue: 15,
  image: require('./long.png'),
  display: 'Pausa Longa'
}

]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0])

  return (
    <View style={styles.container}>
      <Image source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton 
            key={p.id}
            active={timerType.id == p.id}
            onPress={() => setTimerType(p)}
            display = {p.display}
          />
          ))}
        </View>
        <Timer totalSeconds = {timerType.initialValue}/>
        <FokusButton />
      </View>
      <View>
        <Text style={styles.footerText}>
        Projeto fictício e sem fins comerciais.
        Desenvolvido por Rony Nagai. 
        </Text>
        <Text style={styles.footerText}>
        Desenvolvido por Rony Nagai. 
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  actions: {
    paddingVertical: 24, 
    paddingHorizontal: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32
  }, 
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footer:{
    width: '80%',
  },
  footerText: {
    textAlign: 'center',
    color: '#98a0a8',
    fontSize: 12.5
  }
})