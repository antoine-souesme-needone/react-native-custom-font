import { AppLoading, Font } from 'expo';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Icon from './components/Icon';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoadingComplete: false
        }
    }

    componentDidMount() {
        console.log(this._getRandomColor());

    }

    render() {

        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            )
        }

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }} contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Icon icon="sunrise" style={{ fontSize: 50, ...styles.icon, ...this._getRandomColor() }} />
                    <Icon icon="sun" style={{ fontSize: 50, ...styles.icon, ...this._getRandomColor() }} />
                    <Icon icon="moon" style={{ fontSize: 50, ...styles.icon, ...this._getRandomColor() }} />
                    <Icon icon="sun1" style={{ fontSize: 50, ...styles.icon, ...this._getRandomColor() }} />
                    <Icon icon="windy" style={{ fontSize: 50, ...styles.icon, ...this._getRandomColor() }} />
                    <Icon icon="wind" style={{ fontSize: 50, ...styles.icon, ...this._getRandomColor() }} />
                    <Icon icon="weather" style={{ fontSize: 50, ...styles.icon, ...this._getRandomColor() }} />
                    <Icon icon="weather1" style={{ fontSize: 50, ...styles.icon, ...this._getRandomColor() }} />
                    <Icon icon="weather2" style={{ fontSize: 50, ...styles.icon, ...this._getRandomColor() }} />
                    <Icon icon="lightning" style={{ fontSize: 50, ...styles.icon, ...this._getRandomColor() }} />
                    <Icon icon="rainy" style={{ fontSize: 50, ...styles.icon, ...this._getRandomColor() }} />
                    <Icon icon="snowy" style={{ fontSize: 50, ...styles.icon, ...this._getRandomColor() }} />
                </ScrollView>
            </SafeAreaView>
        );
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Font.loadAsync({
                'weatherIcons': require('./assets/fonts/weatherIcons.ttf')
            }),
        ]);
    };

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };

    _getRandomColor = () => {
        const colors = ['black', 'red', 'green', 'orange'];
        const rng = Math.floor(Math.random() * colors.length);
        return { color: colors[rng] };
    }
}

const styles = StyleSheet.create({
    icon: {
        marginBottom: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
