import { ActionTypes, IncrementAction, ReceiveAction } from "@src/types";
import { Dispatch } from "redux";

import { client } from "@src/graphql";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

export const increment = (value: number = 1) => ({
  type: ActionTypes.INCREMENT,
  value
});

export const decrement = (value: number = 1) => ({
  type: ActionTypes.DECREMENT,
  value
});

export const incrementAsync = (value: number = 1, delay: number = 1000) => (
  dispatch: Dispatch<IncrementAction>
) => setTimeout(() => dispatch(increment(value)), delay);

export const receiveTodos = (data: any) => ({
  data,
  type: ActionTypes.RECEIVE
});

export const fetchTodos = (dispatch: Dispatch<ReceiveAction>) => () =>
  client
    .query({
      query: gql`
        query {
          todos {
            id
          }
        }
      `
    })
    .then((ok: any) => dispatch(receiveTodos(ok.data)))
    .catch((e: any) => console.log("error", e)); // tslint:disable-line
