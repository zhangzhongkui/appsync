/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEntity = /* GraphQL */ `
  mutation CreateEntity(
    $input: CreateEntityInput!
    $condition: ModelEntityConditionInput
  ) {
    createEntity(input: $input, condition: $condition) {
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
export const updateEntity = /* GraphQL */ `
  mutation UpdateEntity(
    $input: UpdateEntityInput!
    $condition: ModelEntityConditionInput
  ) {
    updateEntity(input: $input, condition: $condition) {
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
export const deleteEntity = /* GraphQL */ `
  mutation DeleteEntity(
    $input: DeleteEntityInput!
    $condition: ModelEntityConditionInput
  ) {
    deleteEntity(input: $input, condition: $condition) {
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
