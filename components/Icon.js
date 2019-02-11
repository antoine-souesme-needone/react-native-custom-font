import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Icon extends Component {

    /**
     * Add icons here.
     * Icomoon tells you the utf code.
     */
    static icons = {
        sunrise: '\u{e900}',
        sun: '\u{e901}',
        moon: '\u{e902}',
        sun1: '\u{e903}',
        windy: '\u{e904}',
        wind: '\u{e905}',
        weather: '\u{e909}',
        weather1: '\u{e90a}',
        weather2: '\u{e90b}',
        lightning: '\u{e90e}',
        rainy: '\u{e910}',
        snowy: '\u{e914}',
    };

    static styles = StyleSheet.create({
        icon: {
            fontFamily: 'weatherIcons'
        }
    });

    static propTypes = () => ({
        icon: PropTypes.oneOf(Object.keys(Icon.icons)).isRequired,
        style: Text.propTypes.style
    });


    render() {
        const { icons, styles } = this.constructor;
        const { icon, style } = this.props;

        return <Text style={this.safeIconStyle([styles.icon, style])}>{icons[icon]}</Text>
    }

    safeIconStyle(styles) {
        const style = StyleSheet.flatten(styles);

        delete style.fontWeight;

        return style;
    };


}
