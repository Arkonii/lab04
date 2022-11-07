/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{Component} from 'react';
import {useOrientation} from './useOrientation';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity, Dimensions,
} from 'react-native';
let mexp = require('math-expression-evaluator');

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function evil(fn) {
  return mexp.eval(fn);
}


export default class App extends Component{


  constructor() {
    super();
    this.state={
      resultText:"",
      calculationText:"0"
    }
    const isPortrait = () => {
      const dim = Dimensions.get('screen');
      return dim.height >= dim.width;
    };

    this.state = {
      orientation: isPortrait() ? 'portrait' : 'landscape'
    };

    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: isPortrait() ? 'portrait' : 'landscape'
      });
    });

  };



  calculateResult(){
    const text=this.state.resultText
    let wynik = evil(this.state.resultText).toString();
    this.setState({calculationText: wynik});
    this.setState({resultText: wynik});
  }

  buttonPressed(text){
    console.log(text)
    if(text=="="){
      return this.calculateResult()

    }
    this.setState({
      resultText: this.state.resultText+text
    })
  }
  operate(operation){
    console.log(operation)
    switch(operation) {
      case "AC":
        this.setState({
          resultText: "",
          calculationText: "0"

        })
        break;
      case "x!":
        this.setState({
          resultText: this.state.resultText+'!'
        })
        break;
      case "%":
        this.setState({
          resultText: this.state.resultText+'Mod '
        })
        break;
      case "e^x":
        this.setState({
          resultText: 'pow(e, ' + this.state.resultText + ')'
        })
        break;
      case "10^x":
        this.setState({
          resultText: 'pow(10, ' + this.state.resultText + ')'
        })
        break;
      case "ln":
        this.setState({
          resultText: 'ln(' + this.state.resultText + ')'
        })
        break;
      case "log10":
        this.setState({
          resultText: 'log(' + this.state.resultText + ')'
        })
        break;
      case "e":
        this.setState({
          resultText: this.state.resultText+'e'
        })
        break;
      case "x^2":
        this.setState({
          resultText: 'pow(' + this.state.resultText + ', 2)'
        })
        break;
      case "π":
        this.setState({
          resultText: this.state.resultText+'pi'
        })
        break;
      case "x^3":
        this.setState({
          resultText: 'pow(' + this.state.resultText + ', 3)'
        })
        break;

    }

  };


render() {
  if (this.state.orientation === 'portrait') {
    return (
        <View style={styles.conainer}>
          <View style={styles.result}>
            <Text style={styles.resultText}>{this.state.resultText}</Text>
          </View>
          <View style={styles.calculation}>
            <Text style={styles.calculationText}>{this.state.calculationText}</Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.numbers}>
              <View style={styles.row}>
                <TouchableOpacity onPress={()=>this.buttonPressed(7)} style={styles.btn}>
                  <Text>7</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(8)} style={styles.btn}>
                  <Text>8</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(9)} style={styles.btn}>
                  <Text>9</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity onPress={()=>this.buttonPressed(4)} style={styles.btn}>
                  <Text>4</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(5)}  style={styles.btn}>
                  <Text>5</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(6)}  style={styles.btn}>
                  <Text>6</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity onPress={()=>this.buttonPressed(1)}  style={styles.btn}>
                  <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(2)}  style={styles.btn}>
                  <Text>2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(3)}  style={styles.btn}>
                  <Text>3</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity onPress={()=>this.buttonPressed(0)}  style={styles.btn}>
                  <Text>0</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(".")}  style={styles.btn}>
                  <Text>.</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed("=")}  style={styles.btn}>
                  <Text>=</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.operations}>
              <TouchableOpacity onPress={()=>this.buttonPressed("+")}  style={styles.btn}>
                <Text style={[styles.btntext,styles.white]}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonPressed("-")}  style={styles.btn}>
                <Text style={[styles.btntext,styles.white]}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonPressed("*")}  style={styles.btn}>
                <Text style={[styles.btntext,styles.white]}>*</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonPressed("/")}  style={styles.btn}>
                <Text style={[styles.btntext,styles.white]}>/</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.operate("AC")}  style={styles.btn}>
                <Text style={[styles.btntext,styles.white]}>AC</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

    );
  }
  else {
    return (
        <View style={styles.conainer}>
          <View style={styles.result}>
            <Text style={styles.resultText}>{this.state.resultText}</Text>
          </View>
          <View style={styles.calculation}>
            <Text style={styles.calculationText}>{this.state.calculationText}</Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.numbers}>
              <View style={styles.row}>
                <TouchableOpacity onPress={()=>this.operate("√")} style={styles.btn}>
                  <Text>√</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.operate("x!")} style={styles.btn}>
                  <Text>x!</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.operate(" ")} style={styles.btn}>
                  <Text> </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.operate("+/-")} style={styles.btn}>
                  <Text>+/-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.operate("%")} style={styles.btn}>
                  <Text>%</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity onPress={()=>this.operate("e^x")} style={styles.btn}>
                  <Text>e^x</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.operate("10^x")} style={styles.btn}>
                  <Text>10^x</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(7)} style={styles.btn}>
                  <Text>7</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(8)} style={styles.btn}>
                  <Text>8</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(9)} style={styles.btn}>
                  <Text>9</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity onPress={()=>this.operate("ln")} style={styles.btn}>
                  <Text>ln</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.operate("log10")} style={styles.btn}>
                  <Text>log10</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(4)} style={styles.btn}>
                  <Text>4</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(5)}  style={styles.btn}>
                  <Text>5</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(6)}  style={styles.btn}>
                  <Text>6</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity onPress={()=>this.operate("e")} style={styles.btn}>
                  <Text>e</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.operate("x^2")} style={styles.btn}>
                  <Text>x^2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(1)}  style={styles.btn}>
                  <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(2)}  style={styles.btn}>
                  <Text>2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(3)}  style={styles.btn}>
                  <Text>3</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity onPress={()=>this.operate("π")} style={styles.btn}>
                  <Text>π</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.operate("x^3")} style={styles.btn}>
                  <Text>x^3</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(0)}  style={styles.btn}>
                  <Text>0</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed(".")}  style={styles.btn}>
                  <Text>.</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.buttonPressed("=")}  style={styles.btn}>
                  <Text>=</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.operations}>
              <TouchableOpacity onPress={()=>this.buttonPressed("+")}  style={styles.btn}>
                <Text style={[styles.btntext,styles.white]}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonPressed("-")}  style={styles.btn}>
                <Text style={[styles.btntext,styles.white]}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonPressed("*")}  style={styles.btn}>
                <Text style={[styles.btntext,styles.white]}>*</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonPressed("/")}  style={styles.btn}>
                <Text style={[styles.btntext,styles.white]}>/</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.operate("AC")}  style={styles.btn}>
                <Text style={[styles.btntext,styles.white]}>AC</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    );
  }

}

}
const styles = StyleSheet.create({
  conainer:{
    flex: 1
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btn: {
    fontSize:30,
    flex:1,
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent:'center'
  },
  white: {
    color:'white'
  },
  btntext: {
    fontSize:30
  },
  resultText:{
    fontSize:40,
    color: 'white'
  },
  calculationText:{
    fontSize:40,
    color: 'white'
  },
  result:{
    fontSize:40,
    flex: 2,
    backgroundColor: 'grey',
    justifyContent:'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor:'orange',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttons: {
    fontSize:22,
    flex: 5,
    flexDirection: 'row'
  },
  numbers: {

    flex: 3,
    backgroundColor:'white'
  },
  operations: {

    flex:1,
    justifyContent: 'space-around',
    backgroundColor: 'black'
  }
})

//export default App;
