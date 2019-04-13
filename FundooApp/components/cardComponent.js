import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { Card } from 'react-native-elements'




export default class CardComponent extends Component {
    static navigationOptions = { header: null };
    /* data = () => {
         //console.warn("iiiii " + this.props.Display)
         console.warn("Editing a note.")
         // this.props.navigation.navigate('Edit', { Display: this.props.Display, notekey: this.props.notekey })
         //this.props.navigation.navigate('Edit',{ Display : this.props.Display,notekey : this.props.notekey})
     }*/


    render() {


        return (


            <View>
                <TouchableOpacity>
                    <Card containerStyle={{ backgroundColor:'#E6E6E6',borderRadius: 10, borderWidth: 1 }}>
                        <View>
                            <View style={{ padding: 5 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>{'hello'}</Text>
                            </View>
                            <View style={{ padding: 5 }}>
                                <Text style={{ color: 'black' }}>{'aishu'}</Text>
                            </View>
                        </View>
                    </Card>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    view1: { width: 160, },
    view2: { width: 320, },


})