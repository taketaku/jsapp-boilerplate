# Adding Apollo 2.0/GraphQL

## Add dependencies

```
yarn add apollo-client apollo-client-preset graphql-tag react-apollo
yarn add --dev @types/graphql @types/lodash @types/zen-observable graphql-typings
```

## Resolve TypeScript issues

* Add the missing type files as indicated by the TS compiler
* `AsyncIterator`: https://github.com/apollographql/graphql-subscriptions/issues/83#issuecomment-321240460
* [`/typings/lodash-flowright`](/typings/lodash-flowright) Add own TS definition for lodash.flowright https://github.com/DefinitelyTyped/DefinitelyTyped/issues/21085
* `zen-observable` https://github.com/apollographql/apollo-link/issues/163
* http://dev.apollodata.com/react/using-with-types.html

## Integrate with Redux

*Note: The guide was still for Apollo 1.0 when checked last. The imports are different, and there is no longer a need to call `apolloClient.reducer()` when combining Redux reducers. See [https://github.com/apollographql/apollo-client](https://github.com/apollographql/apollo-client)*
[http://dev.apollodata.com/react/redux.html](http://dev.apollodata.com/react/redux.html)
