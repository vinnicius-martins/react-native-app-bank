import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View  } from 'react-native';

export default function App() {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState('Masculino')
  const [limite, setLimite] = useState(0)
  const [isEstudante, setIsEstudante] = useState(false)

  const [borderNome, setBorderNome] = useState('#cacaca')
  const [borderIdade, setBorderIdade] = useState('#cacaca')

  const showInfo = () => {
    if ([nome, idade].some((value) => value === '')) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    alert(
      '\nNome: ' + nome + '\n\n' +
      'Idade: ' + idade + ' anos\n\n' +
      'Sexo: ' + sexo + '\n\n' +
      'Limite: R$ ' + limite.toFixed(2).replace('.', ',') + '\n\n' +
      'Estudante: ' + (isEstudante ? 'Sim' : 'Não')
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🏦  REACT NATIVE BANK</Text>

      <View style={styles.dataContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome: </Text>
          <TextInput
            style={[styles.input, {borderColor: borderNome}]}
            value={nome}
            onChangeText={currentValue => setNome(currentValue)}
            placeholder="Digite o seu nome"
            onFocus={() => setBorderNome('#00bbff')}
            onBlur={() => setBorderNome('#cacaca')}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Idade: </Text>
          <TextInput
            style={[styles.input, {borderColor: borderIdade}]}
            value={idade}
            onChangeText={currentValue => setIdade(currentValue)}
            placeholder="Digite a sua idade"
            keyboardType='numeric'
            onFocus={() => setBorderIdade('#00bbff')}
            onBlur={() => setBorderIdade('#cacaca')}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Sexo: </Text>
          <Picker style={styles.input} selectedValue={sexo} onValueChange={currentValue => setSexo(currentValue)}>
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Feminino" value="Feminino" />
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Limite: </Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={10000}
            value={limite}
            onValueChange={currentValue => setLimite(currentValue)}
            minimumTrackTintColor='#00bbff'
            thumbTintColor='#00bbff'
          />
          <Text>{"R$ " + limite.toFixed(2).replace('.', ',')}</Text>
        </View>

        <View style={[styles.inputContainer, {justifyContent: 'flex-start'}]}>
          <Text style={[styles.label, {width: '25%'}]}>Estudante: </Text>
          <Switch
            value={isEstudante}
            thumbColor='#00bbff'
            trackColor={{true: '#95e3ff', false: '#cacaca'}}
            onValueChange={currentValue => setIsEstudante(currentValue)}
          />
        </View>

        <View style={[styles.inputContainer, {width: '100%',justifyContent: 'center'}]}>
          <Button
            color='#00bbff'
            onPress={showInfo}
            style={[styles.input]}
            title='Registrar'
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 120,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 35,
    color: '#333',
  },
  dataContainer: {
    borderWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 8,
    borderColor: '#cacaca',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  label: {
    fontSize: 17,
    width: '15%'
  },
  input: {
    alignSelf: 'stretch',
    height: 40,
    marginLeft: 12,
    width: '80%',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
  },
  slider: {
    height: 40,
    width: '60%',
  },
});
