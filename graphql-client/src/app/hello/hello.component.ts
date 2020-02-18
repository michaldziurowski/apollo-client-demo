import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

const changeTxt = gql`
  mutation setHello {
    setHello(nh: "newTxt") {
      hello {
        id
        txt
        otherTxt {
          txt
        }
      }
    }
  }
`;

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.scss"]
})
export class HelloComponent implements OnInit {
  helloTxt: string;
  otherTxt: string;
  constructor(private apollo: Apollo) {
    this.helloTxt = "jeloł";
  }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            hello {
              id
              txt
              otherTxt {
                txt
              }
            }
          }
        `
      })
      .valueChanges.subscribe(result => {
        console.log(result.data);
        const d = result.data as {
          hello: { id: string; txt: string; otherTxt: { txt: string } };
        };
        this.helloTxt = d && d.hello.txt;
        this.otherTxt = d && d.hello.otherTxt.txt;
      });
  }

  changeText() {
    this.apollo
      .mutate({
        mutation: changeTxt
      })
      .subscribe();
  }
}
