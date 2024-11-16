import React, {useState} from 'react';
import {View, Button, Text, Alert} from 'react-native';
import ToDoForm from '../components/ToDoForm';

function Home({navigation}: {navigation: any}): React.JSX.Element {
  //   const [tasks, setTasks] = useState<string[]>([]);

  //   const addTask = (taskText: string) => {
  //     if (tasks.includes(taskText)) {
  //       Alert.alert('This task already exists. Please add another task.');
  //     } else {
  //       setTasks([...tasks, taskText]);
  //       console.log(taskText);
  //     }
  //   };
  return (
    <View>
      {/* <ToDoForm addTask={addTask} /> */}
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

export default Home;
