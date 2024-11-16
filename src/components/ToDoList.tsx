import React from 'react';
import {Text, View} from 'react-native';

type toDoListPropTypes = {
  tasks: string[];
};

function ToDoList(props: toDoListPropTypes): React.JSX.Element {
  const tasks = props.tasks;
  return (
    <View>
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

export default ToDoList;
