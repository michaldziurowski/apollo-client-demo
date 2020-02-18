import gql from "graphql-tag";

export interface Item {
  id: string;
  name: string;
}

export interface Items {
  list: Item[];
}

export const GET_ITEMS = gql`
  {
    list {
      id
      name
    }
  }
`;

export const UPDATE_ELEMENT = gql`
  mutation UpdateElement($id: String, $newName: String) {
    updateElement(id: $id, newName: $newName) {
      id
      name
    }
  }
`;

export const REMOVE_ELEMENT = gql`
  mutation RemoveElement($id: String!) {
    removeElement(id: $id)
  }
`;

export const ADD_ELEMENT = gql`
  mutation AddToList($name: String) {
    addToList(name: $name) {
      id
      name
    }
  }
`;
