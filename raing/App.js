/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, useEffect} from 'react';
import HeadlessWorkManager from 'react-native-headless-work-manager'
import {Text} from 'react-native'

const App = () => {
  useEffect(() => {
    HeadlessWorkManager.enqueue({
      workRequestType: HeadlessWorkManager.PERIODIC_WORK_REQUEST,
				taskKey: 'YourHeadlessTask',
				isUnique: true,
				existingWorkPolicy: HeadlessWorkManager.REPLACE,
				timeout: 1000,
				interval: 100,
				timeUnit: HeadlessWorkManager.MILLISECONDS,
				data: {
					foo: 'bar',
				}
    });
  }, [])

  return (
    <Text> HI </Text>
  );
}

export default App;