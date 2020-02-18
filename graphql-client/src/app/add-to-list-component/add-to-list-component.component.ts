import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { GET_ITEMS, Items, Item, ADD_ELEMENT } from "../gql_consts";

@Component({
  selector: "app-add-to-list-component",
  templateUrl: "./add-to-list-component.component.html",
  styleUrls: ["./add-to-list-component.component.scss"]
})
export class AddToListComponentComponent implements OnInit {
  constructor(private apollo: Apollo) {}

  ngOnInit() {}

  onAddClick() {
    this.apollo
      .mutate({
        mutation: ADD_ELEMENT,
        variables: {
          name: this.generateRandomString(10)
        },
        update: (store, result) => {
          const cached = store.readQuery<Items>({ query: GET_ITEMS });
          const resultElement = (result.data as {
            addToList: Item;
          }).addToList;
          cached.list = [...cached.list, resultElement];
          store.writeQuery({ query: GET_ITEMS, data: cached });
        }
      })
      .subscribe();
  }

  generateRandomString(stringLength) {
    let randomString = "";
    let randomAscii;
    for (let i = 0; i < stringLength; i++) {
      randomAscii = Math.floor(Math.random() * 25 + 97);
      randomString += String.fromCharCode(randomAscii);
    }

    return randomString;
  }
}
