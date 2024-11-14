import { Button } from '@/components/atoms/button';
import { Card } from '@/components/atoms/card';
import { Container } from '@/components/atoms/container';
import { Toaster } from '@/components/molecules/toaster';
import { TodoDialog } from '@/components/molecules/todo-dialog';
import { PokodexList } from '@/components/organisms/pokodex-list';
import { useDialogWithData } from '@/hooks/use-dialog-with-data';
import { useToasterWithData } from '@/hooks/use-toaster';
import { useTodo } from '@/hooks/use-todo';
import { FieldValues } from 'react-hook-form';

function App() {
  const { createTodo, todoList, deleteTodo, updateTodo } = useTodo();

  const addDialog = useDialogWithData();
  const updateDialog = useDialogWithData();
  const toaster = useToasterWithData();

  const onTodoSubmit = (formVal: FieldValues) => {
    createTodo(formVal, (dates: string) => {
      toaster.open({
        title: 'Todo: was submitted',
        description: dates,
      });

      addDialog.close();
    });
  };

  const onTodoUpdate = (formVal: FieldValues) => {
    updateTodo({
        ...updateDialog.data,
        todo: formVal.todo,
      }, (dates: string) => {
        toaster.open({
          title: 'Todo: was updated',
          description: dates,
        });

        updateDialog.close();
      },
    );
  };

  const onTodoDelete = (id: string) => {
    deleteTodo(id, (dates) => {
      toaster.open({
        title: 'Todo: was deleted',
        description: dates,
      });
    });
  };

  return (
    <Container>
      <PokodexList />

      <TodoDialog 
        dialog={addDialog} 
        onTodoSubmit={onTodoSubmit} 
      />
      
      <TodoDialog 
        dialog={updateDialog} 
        onTodoSubmit={onTodoUpdate} 
      />

      <Toaster {...toaster} />
    </Container>
  );
}

export default App;
