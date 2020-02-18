import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-other-hello',
  templateUrl: './other-hello.component.html',
  styleUrls: ['./other-hello.component.scss']
})
export class OtherHelloComponent implements OnInit, OnDestroy {
  txt: string;
  sub: Subscription;
  constructor(private apollo: Apollo) {
    this.txt = 'test';
  }

  ngOnInit() {
    this.sub = this.apollo
      .watchQuery({
        query: gql`
          {
            hello {
              id
              txt
            }
          }
        `
      })
      .valueChanges.subscribe(result => {
        console.log('Update from OTHER hello!');
        const d = result.data as { hello: { id: string; txt: string } };
        this.txt = d && d.hello.txt;
      });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
