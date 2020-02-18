import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_ITEMS, Items } from '../gql_consts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit, OnDestroy {
  items: Array<{ id: string; name: string }>;
  getItemsSubscription: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.getItemsSubscription = this.apollo
      .watchQuery({
        query: GET_ITEMS
      })
      .valueChanges.subscribe(result => {
        const d = result.data as Items;
        this.items = d.list;
      });
  }

  ngOnDestroy() {
    if (this.getItemsSubscription) {
      this.getItemsSubscription.unsubscribe();
    }
  }
}
