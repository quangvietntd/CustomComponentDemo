import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class CustomText extends Component {
    //Xác thực loại dữ liệu của prop
    static propTypes = {
        content: PropTypes.string.isRequired, //Khai báo prop là bắt buộc
        textStyle: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({}),
        ]),
        buttonStyle: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({}),
        ]),
       // textStyle: Text.propTypes.style, // cách khác để xác thực loại dữ liệu của prop
    }

    //Khởi tạo giá trị props mặc định cho component
    static defaultProps ={
        textStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            color: 'yellow'
        },
        buttonStyle: {
            backgroundColor: 'darkviolet',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            borderRadius: 8,
            margin: 10
        },

    }

    render() {
        const { content, textStyle, buttonStyle } = this.props;
        return (
            <TouchableOpacity style={buttonStyle}>
                <Text style={textStyle}>{content}</Text>
            </TouchableOpacity>
        );
    }
}

export default CustomText;

