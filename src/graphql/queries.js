/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEntity = /* GraphQL */ `
  query GetEntity($id: ID!) {
    getEntity(id: $id) {
      id
      serviceName
      name
      link
      tooltip
      createdAt
      updatedAt
    }
  }
`;
export const listEntitys = /* GraphQL */ `
  query ListEntitys(
    $filter: ModelEntityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        serviceName
        name
        link
        tooltip
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
