/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import anexpr from 'anexpr';

type Props = {};
type State = {
  width: number,
  height: number,
  value: Animated.Value,
  bigAreaWidth: Animated.Node,
  bigAreaHeight: Animated.Node,
  smallAreaWidth: Animated.Node,
  smallAreaHeight: Animated.Node,
  offset: Animated.Node,
  sideOffset: Animated.Node,
};

export default class App extends Component<Props, State> {
  constructor(props) {
    super(props);
    const width = new Animated.Value(0);
    const height = new Animated.Value(0);
    const bigAreaWidth = anexpr`${width} * (3 / 5)`;
    const bigAreaHeight = anexpr`${bigAreaWidth} * (9 / 16)`;
    const smallAreaWidth = anexpr`${bigAreaWidth} / 2`;
    const smallAreaHeight = anexpr`${smallAreaWidth} * (9 / 16)`;
    const offset = anexpr`(${height} - (${bigAreaHeight} + ${smallAreaHeight})) / 2`;
    const sideOffset = anexpr`(${width} - ${bigAreaWidth}) / 2`;
    this.state = {
      width,
      height,
      offset,
      sideOffset,
      bigAreaWidth,
      bigAreaHeight,
      smallAreaWidth,
      smallAreaHeight,
    };
  }

  _onLayout(e) {
    const {layout} = e.nativeEvent;
    this.state.width.setValue(layout.width);
    this.state.height.setValue(layout.height);
  }

  render() {
    return (
      <View onLayout={e => this._onLayout(e)} style={styles.container}>
        <Animated.View style={[
          styles.view1,
          {
            top: this.state.offset,
            left: this.state.sideOffset,
            width: this.state.bigAreaWidth,
            height: this.state.bigAreaHeight
          }
        ]}/>
        <Animated.View style={[
          styles.view2,
          {
            bottom: this.state.offset,
            left: this.state.sideOffset,
            width: this.state.smallAreaWidth,
            height: this.state.smallAreaHeight
          }
        ]}/>
        <Animated.View style={[
          styles.view3,
          {
            bottom: this.state.offset,
            right: this.state.sideOffset,
            width: this.state.smallAreaWidth,
            height: this.state.smallAreaHeight
          }
        ]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  view1: {
    position: 'absolute',
    backgroundColor: '#f00',
  },
  view2: {
    position: 'absolute',
    backgroundColor: '#0f0',
  },
  view3: {
    position: 'absolute',
    backgroundColor: '#00f',
  },
});
