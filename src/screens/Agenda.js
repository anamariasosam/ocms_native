import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { Agenda } from 'react-native-calendars';

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
});

export default class AgendaScreen extends Component {

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = arguments.length ? new Date(time) : new Date();
    return date.toISOString().split('T')[0];
  }

  renderItem(item) {
    return (
      <View style={styles.item}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.item}><Text>No hay tareas</Text></View>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      items: {
        '2017-10-11': [{ name: 'Sistemas de Información' }],
        '2017-10-18': [{ name: 'Ingeniería de Software' }],
        '2017-10-10': [],
      },
    };

    this.renderItem = this.renderItem.bind(this);
    this.renderEmptyDate = this.renderEmptyDate.bind(this);
    this.rowHasChanged = this.rowHasChanged.bind(this);
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        selected={this.timeToString}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
      />
    );
  }
}
