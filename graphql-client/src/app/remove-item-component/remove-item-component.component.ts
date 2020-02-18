import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_ITEMS, Items, REMOVE_ELEMENT } from '../gql_consts';

@Component({
  selector: 'app-remove-item-component',
  templateUrl: './remove-item-component.component.html',
  styleUrls: ['./remove-item-component.component.scss']
})
export class RemoveItemComponentComponent implements OnInit {
  itemIdx = '1';
  constructor(private apollo: Apollo) {}

  ngOnInit() {}

  removeItem() {
    this.apollo
      .mutate({
        mutation: REMOVE_ELEMENT,
        variables: {
          id: this.itemIdx
        },
        update: store => {
          const cached = store.readQuery<Items>({ query: GET_ITEMS });
          cached.list = cached.list.filter(i => i.id !== this.itemIdx);
          store.writeQuery({ query: GET_ITEMS, data: cached });
        }
      })
      .subscribe();
  }

  onInputChanges(value) {
    this.itemIdx = value;
  }
}
