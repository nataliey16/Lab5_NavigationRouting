import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

type toDoListPropTypes = {
  tasks: string[];
};

function ToDoList(props: toDoListPropTypes): React.JSX.Element {
  const tasks = props.tasks;
  return (
    <View style={style.txtView}>
      <Text>Tasks:</Text>
      {tasks.map((task, index) => {
        return (
          <View key={index}>
            <Text>{task}</Text>
          </View>
        );
      })}
    </View>
  );
}

const style = StyleSheet.create({
  txtView: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
  },
});
export default ToDoList;
