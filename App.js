import styled from 'styled-components/native';
import React, {useState} from 'react';


const Tela = styled.View`
  flex: 1;
  align-items: center;
`
const Titulo = styled.Text`
  margin-top: 30px;
  font-size: 25px;
`

const Input = styled.TextInput`
  width: 90%;
  background-color: #eee;
  height: 50px;
  font-size: 20px;
  padding-left: 20px;
  border-radius: 10px;
  margin-top: 10px;
`

const BtnCalcular = styled.Button`
  margin-top: 20px;
  `

const Resultado = styled.View`
  background-color: #eee;
  width: 100%;
  margin-top: 20px;
  padding-top: 20px;
  align-items: center;
  padding-botton: 20px;
`

const TituloResultado = styled.Text`
  font-size: 20px;
  margin-top: 15px;
`

const ItemResultado = styled.Text`
  font-size: 16px;
`


export default function App() {

  const [conta, alteraConta] = useState (123);
 
  return (
    <Tela>
      <Titulo>Calculadora de Gorjeta</Titulo>
      <Input keyboardType = "numeric" placeholder = "Digite o valor da conta" value ={conta} onChangeText = { (textoDigitado) => {alteraConta(textoDigitado)} }/>
      <BtnCalcular title = "Calcular 10%" onPress = {() => {}}/>
      <Resultado>

        <TituloResultado> Valor da Conta </TituloResultado>
        <ItemResultado>{conta}</ItemResultado>

        <TituloResultado> Valor da Gorjeta </TituloResultado>
        <ItemResultado> R$ {conta * 0,1} </ItemResultado>

        <TituloResultado> Valor do Total </TituloResultado>
        <ItemResultado>{(conta * 1,1).toFixed(2)}</ItemResultado>

      </Resultado>  
    </Tela>
  );
};