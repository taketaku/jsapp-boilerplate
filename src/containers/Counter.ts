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

const ContainedCounter = graphql(gql`
  query {
    todoItems {
      id
    }
  }
`)(connect(mapStateToProps, mapDispatchToProps)(Counter));

export default ContainedCounter;
