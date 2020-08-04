import React from 'react';
import {useSelector} from 'react-redux';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {useAppDispatch} from './store';
import {counterSelector, increment, decrement} from './counterSlice';

declare const global: {HermesInternal: null | {}};

export const AppComponent = () => {
  const counter = useSelector(counterSelector);
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row'}}>
        <Button onPress={() => dispatch(decrement())} title="-" />
        <Text>{counter}</Text>
        <Button onPress={() => dispatch(increment())} title="+" />
      </View>
    </SafeAreaView>
  );
};
