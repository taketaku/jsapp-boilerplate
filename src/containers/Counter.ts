import { connect } from "react-redux";
import { Dispatch } from "redux";

import { decrement, fetchTodos, increment, incrementAsync } from "@src/actions";
import Counter from "@src/components/Counter";
import { State } from "@src/types";

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
      update: (proxy, { data: { addTodo } }) => {
        const data: { todoItems: any } = proxy.readQuery({
          query: getTodosQuery
        });
        data.todoItems.push(addTodo);
        proxy.writeQuery({ query: getTodosQuery, data });
      }
    }
  }
);

const ContainedCounter = addTodoMutation(
  getTodos(connect(mapStateToProps, mapDispatchToProps)(Counter))
);

export default ContainedCounter;
