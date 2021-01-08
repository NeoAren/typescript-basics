import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
   const text = req.body.text as string;
   const newTodo = new Todo(Math.random().toString(), text);
   TODOS.push(newTodo);
   res.status(201).json({ message: 'Created the todo', createdTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
   res.json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
   const id = req.params.id;
   const updatedText = req.body.text as string;
   const index = TODOS.findIndex((todo => todo.id === id));
   if (index < 0) {
      throw new Error('Could not find todo!');
   }
   TODOS[index] = new Todo(TODOS[index].id, updatedText);
   res.json({ message: 'Updated todo', updatedTodo: TODOS[index] });
};

export const deleteTodo: RequestHandler<{id: string}> = (req, res, next) => {
   const id = req.params.id;
   const index = TODOS.findIndex((todo => todo.id === id));
   if (index < 0) {
      throw new Error('Could not find todo!');
   }
   TODOS.splice(index);
   res.json({ message: 'Todo deleted!' });
}
