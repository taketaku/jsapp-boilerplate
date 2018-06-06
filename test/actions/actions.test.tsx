import * as actions from "@src/actions";
import { ActionTypes } from "@src/types";
import { expect } from "chai";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  it("should create an action to increment the counter", () => {
    const action = actions.increment();
    expect(action.value).to.equal(1);
  });

  it("should create an action with a custom increment value", () => {
    const action = actions.increment(2);
    expect(action.value).to.equal(2);
  });

  it("should create an action to decrement the counter", () => {
    const action = actions.decrement();
    expect(action.value).to.equal(1);
  });

  it("should create an action with a custom decrement value", () => {
    const action = actions.decrement(2);
    expect(action.value).to.equal(2);
  });

  describe("async", () => {
    let timeout: typeof window.setTimeout;

    beforeEach(() => {
      timeout = window.setTimeout;
      window.setTimeout = (f: any) => f();
    });

    afterEach(() => {
      window.setTimeout = timeout;
    });

    it("should create an action to increment async", () => {
      const store = mockStore({});
      const action = actions.incrementAsync(2, 0);
      const expectedActions = [{ type: ActionTypes.INCREMENT, value: 2 }];

      Promise.resolve(store.dispatch(action)).then(() => {
        const dispatched = store.getActions();
        expect(dispatched).to.have.length(1);
        expect(dispatched).to.deep.equal(expectedActions);
      });
    });
  });
});