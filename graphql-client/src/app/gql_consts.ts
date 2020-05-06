import gql from "graphql-tag";

export interface Item {
  id: string;
  name: string;
}

export interface Items {
  list: Item[];
}

export interface Car {
  id: string;
  make: string;
  model: string;
  year: string;
  color: string;
  hasAirbags: string;
  is4x4: string;
  price: string;
  seller: string;
  sellerAddr: string;
}

export interface CarTypeFragment {
  id: string;
  make: string;
  model: string;
  year: string;
}

export interface CarSellerFragment {
  id: string;
  seller: string;
  sellerAddr: string;
}

export interface CarEquipmentFragment {
  id: string;
  color: string;
  hasAirbags: string;
  is4x4: string;
}

export const GET_ITEMS = gql`
  {
    list {
      id
      name
    }
  }
`;

export const GET_CAR_TYPE = gql`
  fragment CarTypeFragment on Car {
    make
    model
    year
  }
  query GetCarType {
    car {
      id
      ...CarTypeFragment
    }
  }
`;

export const GET_CAR_SELLER_INFO = gql`
  fragment CarSellerInfoFragment on Car {
    seller
    sellerAddr
  }
  query GetCarSellerInfo {
    car {
      id
      ...CarSellerInfoFragment
    }
  }
`;

export const GET_CAR_EQUIPMENT = gql`
  fragment CarEquipmentFragment on Car {
    color
    hasAirbags
    is4x4
  }
  query GetCarEquipment {
    car {
      id
      ...CarEquipmentFragment
    }
  }
`;

export const CAR_COLOR_FRAGMENT = gql`
  fragment CarColorFragment on Car {
    color
  }
`;

export const GET_CAR_COLOR = gql`
  fragment CarColorFragment on Car {
    color
  }
  query GetCarEquipment {
    car {
      id
      ...CarColorFragment
    }
  }
`;

export const GET_CAR = gql`
  {
    car {
      id
      make
      model
      year
      seller
      sellerAddr
      color
      hasAirbags
      is4x4
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

export const CHANGE_CAR_COLOR = gql`
  mutation ChangeCarColor($color: String) {
    changeCarColor(color: $color) {
      id
      color
    }
  }
`;
