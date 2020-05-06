const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type SimpleTxt {
    txt: String
  }

  type HelloTxt {
    id: String
    txt: String
    otherTxt: SimpleTxt
  }

  type ListElement {
    id: String
    name: String
  }

  type Car {
    id: String
    make: String
    model: String
    year: String
    color: String
    hasAirbags: String
    is4x4: String
    price: String
    seller: String
    sellerAddr: String
  }

  type Query {
    hello: HelloTxt
    list: [ListElement]!
    car: Car
  }

  type Mutation {
    setHello(nh: String): Query
    addToList(name: String): ListElement!
    updateElement(id: String, newName: String): ListElement
    removeElement(id: String): String
    changeCarColor(color: String): Car!
  }
`;
//TODO: optimistic update! (what if error)
let hello = "test";

let listElements = [{ id: 1, name: "first" }];
let car = {
  id: "31312312",
  make: "VW",
  model: "Tiguan",
  year: "2015",
  color: "black",
  hasAirbags: "true",
  is4x4: "true",
  price: "milionyMonet",
  seller: "VM Auto moto",
  sellerAddr: "Wloclawek obok castoramy",
};

const resolvers = {
  Query: {
    hello: () => ({ id: "123", txt: hello, otherTxt: { txt: hello } }),
    list: () => listElements,
    car: () => car,
  },
  Mutation: {
    setHello: () => {
      hello = Math.random().toString();
      console.log("New value ", hello);
      return { hello: { id: "123", txt: hello, otherTxt: { txt: hello } } };
    },
    addToList: (parent, { name }) => {
      console.log("Adding to list : ", name);
      const newElem = {
        id: listElements.length + 1,
        name,
      };

      listElements.push(newElem);
      return newElem;
    },
    updateElement: async (parent, { id, newName }) => {
      console.log(`updating ${id} to ${newName}`);
      await sleep(2000);
      let elem = listElements.find((e) => e.id == id);
      elem.name = newName;
      console.log(`updated ${id} to ${newName}`);
      return elem;
    },
    removeElement: (parent, { id }) => {
      console.log("Removing item ", id);
      listElements = listElements.filter((e) => e.id != id);
      return id;
    },
    changeCarColor: (parent, { color }) => {
      car.color = color;
      return car;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
