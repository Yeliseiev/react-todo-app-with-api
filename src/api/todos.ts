import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => client
  .get<Todo[]>(`/todos?userId=${userId}`);

export const addTodo = (data: Omit<Todo, 'id'>) => client
  .post<Todo>(`/todos?userId/=${data.userId}`, data);

export const deleteTodo = (todoId: number) => client
  .delete(`/todos/${todoId}`);

export const updateTodo = (todoId: number, data: unknown) => client
  .patch<Todo>(`/todos/${todoId}`, data);
