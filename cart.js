import * as React from 'react';
import { Constants } from 'expo';
import { View,TouchableOpacity,Text, StatusBar,ScrollView,ImageBackground} from 'react-native';
import Modal from 'react-native-modal';
import {Main} from './css/StyleMain';
import {Feather} from '@expo/vector-icons';
import {styles} from './css/styls';
import {EvSt} from './css/EventStyle';
import {Button,Card} from 'react-native-elements';
import {Balcon,Celebrityflowers,TopGun,Premium,Migliori,Tatoo,Royal,Provokator} from './Partners';
const backBut = {
  fontSize:22,
  paddingLeft:20,
  fontWeight:'bold',
  letterSpacing : 3,
  paddingBottom:5
}

export class All extends React.Component {
  constructor(props) {
      super(props);
      this.state = {modalVisible:false}
   }
    opencart = (visible) => {
         this.setState({modalVisible: visible})
       }

  render ()
  {
    return (
      <View>
      <Card containerStyle={styles.ProfileCard} >
    <TouchableOpacity onPress={()=>this.opencart(true)}>
      <ImageBackground
        source={{uri: 'https://www.pngarts.com/files/3/Next-Button-PNG-Free-Download.png'}}
        resizeMode={'contain'}
        imageStyle={{ borderRadius: 0 ,backgroundColor:'white'}}
        style={styles.ProfileCardImg} />
</TouchableOpacity>
            <Text style={EvSt.NameEvent} >{'Посмотреть остальные'}</Text>
      </Card>
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.modalVisible}>
        <View style={Main.container}>
        <StatusBar barStyle="dark-content"/>
        <View style={{paddingTop:Constants.statusBarHeight}}>
        <TouchableOpacity onPress={()=>this.opencart(false)}>
            <Text style = {backBut}>
                <Feather name = 'arrow-left-circle' size = {18} color='black'/>
                {'Назад'}
            </Text>
        </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
        <Balcon/>
        <Celebrityflowers/>
        <Tatoo/>
        <Premium/>
        <Royal/>
        <TopGun/>
        <Migliori/>
        <Provokator/>
      <Button buttonStyle={styles.buttonModal} title='Назад' fontSize={18}  onPress={() =>this.opencart(!this.state.modalVisible)}/>
      </ScrollView>
      </View>
      </Modal>
      </View>
    );
  }
}