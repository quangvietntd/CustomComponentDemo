import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from './components/CustomText/CustomText.component';

export default class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <CustomText
                    buttonStyle={styles.buttonStyles}
                    textStyle={styles.textStyles}
                    content={'This is some custom text'}
                />
                <CustomText
                    content={'This is default Customtext component'}
                />
                {/* sẽ xuất hiện warning khi không truyền giá trị cho content.  */}
                <CustomText />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyles: {
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyles: {
        fontSize: 20,
        color: 'white'
    }
});
