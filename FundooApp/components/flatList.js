import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, ScrollView, ActivityIndicator, RefreshControl } from "react-native";



class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datasource: [],
        }

    };

    componentDidMount() {
        const url = 'http://192.168.0.204:3000/getAllNotes'
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    datasource: responseJson.result,
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }


    renderItem = ({ item }) => {
        return (
            <ScrollView style={{ backgroundColor: '#E6E6E6', borderRadius: 10, marginLeft: 5, marginTop: 5, marginRight: 5 }}>
                <TouchableOpacity >
                    <View style={{ padding: 5 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>{item.title}</Text>
                    </View>
                    <View style={{ padding: 5 }}>
                        <Text style={{ color: 'black' }}>{item.note}</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
    

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.datasource}
                    renderItem={this.renderItem}
                    /*numColumns={numColumns}*/ />
            </View>
        );
    }

}

export default Cards;