/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Platform,
    Linking,
} from 'react-native';

import BackgroundServer from 'react-native-background-actions';

// You can do anything in your task such as network requests, timers and so on,
// as long as it doesn't touch UI. Once your task completes (i.e. the promise is resolved),
// React Native will go into "paused" mode (unless there are other tasks running,
// or there is a foreground app).

const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time))

const veryIntensiveTask = async (taskDataArguments) => {
    // Example of an infinite loop task
    const { delay } = taskDataArguments;
    await new Promise( async (resolve) => {
        for (let i = 0; BackgroundServer.isRunning(); i++) {
            await BackgroundServer.updateNotification({ taskDesc: 'Runned -> ' + i });
            await sleep(delay);
        }
    });
};

const options = {
    taskName: 'Example',
    taskTitle: 'ExampleTask title',
    taskDesc: 'ExampleTask description',
    taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
    },
    color: '#ff00ff',
    parameters: {
        delay: 1000,
    },
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

const App = () => {

    const [isRunning, setIsRunning] = useState(BackgroundServer.isRunning());

    const startBackgroundTask = async () => {
        if (!isRunning) {   
            try {
                console.log('Trying to start background service...');
                await BackgroundServer.start(veryIntensiveTask, options);
                console.log('Success');
                setIsRunning(true);
            } catch (e) {
                console.log('Error ', e);
            }
        }
    };

    const stopBackgroundTask = async () => {
        if(isRunning) {
            try {
                console.log('Trying to terminate background service...');
                await BackgroundServer.stop();
                console.log('Success');
                setIsRunning(false);
            } catch (e) {
                console.log('Error ', e);
            }
        }
    };
    
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <Header />
                    {global.HermesInternal == null ? null : (
                        <View style={styles.engine}>
                            <Text style={styles.footer}>Engine: Hermes</Text>
                        </View>
                    )}
                    <View style={styles.body}>
                        <TouchableOpacity
                            style={{ height: 100, width: 100, backgroundColor: 'red' }}
                            onPress={startBackgroundTask}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

export default App;