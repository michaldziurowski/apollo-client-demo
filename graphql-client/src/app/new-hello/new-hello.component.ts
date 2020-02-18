import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-new-hello',
  templateUrl: './new-hello.component.html',
  styleUrls: ['./new-hello.component.scss']
})
export class NewHelloComponent implements OnInit {
  txt: string;
  constructor(private apollo: Apollo) {
    this.txt = 'test';
  }

  ngOnInit() {
    this.apollo
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
        console.log('Update from NEW hello!');
        const d = result.data as { hello: { id: string; txt: string } };
        this.txt = d && d.hello.txt;
      });
  }
}
