import { connect } from "react-redux";
import { Dispatch } from "redux";

import { decrement, fetchTodos, increment, incrementAsync } from "@src/actions";
import Counter from "@src/components/Counter";
import { State } from "@src/types";

import { DataProxy } from "apollo-cache";
import { FetchResult } from "apollo-link";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const mapStateToProps = (state: State) => ({
  value: state.counters.value
});

const mapDispatchToProps = (dispatch: any) => ({
  onDecrementClick: () => dispatch(decrement()),
  onIncrementClick: () => dispatch(increment()),
  onIncrementClickAsync: () => dispatch(incrementAsync())
});

const getTodosQuery = gql`
  query {
    todoItems {
      id
      title
      completed
    }
  }
`;
const getTodos = graphql(getTodosQuery);

const addTodoMutation = graphql(
  gql`
    mutation addTodo($title: String!, $completed: Boolean!) {
      addTodo(title: $title, completed: $completed) {
        id
        title
        completed
      }
    }
  `,
  {
    name: "onAddTodo",
    options: {
      // cache proxy, response from mutation
      update: (
        proxy: DataProxy,
        { data: { addTodo } }: FetchResult<{ todoItems: any }>
      ) => {
        const data: { todoItems: any } = proxy.readQuery({
          query: getTodosQuery
        });
        data.todoItems.push(addTodo);
        proxy.writeQuery({ query: getTodosQuery, data });
      }
    }
  }
);

const deleteTodoMutation = graphql(
  gql`
    mutation deleteTodo($id: Int!) {
      deleteTodo(id: $id)
    }
  `,
  {
    name: "onDeleteTodo",
    options: {
      update: (proxy: DataProxy, res: any) => {
        const deletedId = res.data && res.data.deleteTodo;

        if (deletedId != null) {
          const data: { todoItems: any } = proxy.readQuery({
            query: getTodosQuery
          });

          const newItems = data.todoItems.filter(
            (todo: { id: number }) => todo.id !== deletedId
          );

          proxy.writeQuery({
            data: { todoItems: newItems },
            query: getTodosQuery
          });
        }
      }
    }
  }
);

const ContainedCounter = deleteTodoMutation(
  addTodoMutation(
    getTodos(connect(mapStateToProps, mapDispatchToProps)(Counter))
  )
);

export default ContainedCounter;
