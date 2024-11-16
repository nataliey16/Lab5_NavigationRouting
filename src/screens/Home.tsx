import React, {useState} from 'react';
import {View, Button, Text, Alert, StyleSheet} from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';

function Home({navigation}: {navigation: any}): React.JSX.Element {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (taskText: string) => {
    if (tasks.includes(taskText)) {
      Alert.alert('This task already exists. Please add another task.');
    } else {
      setTasks([...tasks, taskText]);
      console.log(taskText);
    }
  };
  return (
    <MainLayout>
      <View>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
        <View style={style.button}>
          <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
          />
        </View>
      </View>
    </MainLayout>
  );
}

const style = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 10,
  },
});

export default Home;
