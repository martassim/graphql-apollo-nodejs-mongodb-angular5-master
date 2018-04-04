/**
 * Server Mutation Query
 */

'use strict';

import gql from 'graphql-tag';

export const addUser = gql`
  mutation addUser($name: String!, $city: String!) {
    addUser(name: $name, city: $city) {
      id
      name
      city
    }
  }`;

export const Users = gql`
  query {
    users{
      id
      name
      city
    }
  }`;

export const removeUser = gql`
  mutation removeUser($id: String!) {
    removeUser(id: $id) {
      id
      name
      city
    }
  }`;

export const updateUser = gql`
  mutation updateUser($id: String!, $name: String!, $city: String!) {
    updateUser(id: $id, name: $name, city: $city) {
      id
      name
      city
    }
  }`;