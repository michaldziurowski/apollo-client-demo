import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { UPDATE_ELEMENT } from '../gql_consts';

@Component({
  selector: 'app-update-item-component',
  templateUrl: './update-item-component.component.html',
  styleUrls: ['./update-item-component.component.scss']
})
export class UpdateItemComponentComponent implements OnInit {
  itemIdx: string;
  newName: string;
  constructor(private apollo: Apollo) {}

  ngOnInit() {}

  onIdxChange(value) {
    this.itemIdx = value;
  }

  onNameChange(value) {
    this.newName = value;
  }

  onUpdateClick() {
    this.apollo
      .mutate({
        mutation: UPDATE_ELEMENT,
        variables: {
          id: this.itemIdx,
          newName: this.newName
        }
        // optimisticResponse: {
        //   updateElement: {
        //     id: this.itemIdx,
        //     name: this.newName,
        //     __typename: "ListElement"
        //   }
        // }
      })
      .subscribe();
  }
}
