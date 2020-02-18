const { ApolloServer, gql } = require('apollo-server')

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

  type Query {
    hello: HelloTxt
    list: [ListElement]!
  }

  type Mutation {
    setHello(nh: String): Query
    addToList(name: String): ListElement!
    updateElement(id: String, newName: String): ListElement
    removeElement(id: String): String
  }
`
//TODO: optimistic update! (what if error)
let hello = 'test'

let listElements = [{ id: 1, name: 'first' }]

const resolvers = {
  Query: {
    hello: () => ({ id: '123', txt: hello, otherTxt: { txt: hello } }),
    list: () => listElements
  },
  Mutation: {
    setHello: () => {
      hello = Math.random().toString()
      console.log('New value ', hello)
      return { hello: { id: '123', txt: hello, otherTxt: { txt: hello } } }
    },
    addToList: (parent, { name }) => {
      console.log('Adding to list : ', name)
      const newElem = {
        id: listElements.length + 1,
        name
      }

      listElements.push(newElem)
      return newElem
    },
    updateElement: async (parent, { id, newName }) => {
      console.log(`updating ${id} to ${newName}`)
      await sleep(2000)
      let elem = listElements.find(e => e.id == id)
      elem.name = newName
      console.log(`updated ${id} to ${newName}`)
      return elem
    },
    removeElement: (parent, { id }) => {
      console.log('Removing item ', id)
      listElements = listElements.filter(e => e.id != id)
      return id
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
