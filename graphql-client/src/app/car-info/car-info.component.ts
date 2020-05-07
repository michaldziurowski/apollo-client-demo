import { Component, OnInit, OnDestroy } from "@angular/core";
import { Apollo } from "apollo-angular";
import { defaultDataIdFromObject } from "apollo-cache-inmemory";
import {
  GET_CAR,
  GET_CAR_TYPE,
  GET_CAR_SELLER_INFO,
  GET_CAR_EQUIPMENT,
  GET_CAR_COLOR,
  CHANGE_CAR_COLOR,
  CAR_COLOR_FRAGMENT,
  GET_USER_BASIC,
  GET_USER_WITH_EQUIPMENT,
} from "../gql_consts";
import { Subscription } from "rxjs";

@Component({
  selector: "app-car-info",
  templateUrl: "./car-info.component.html",
  styleUrls: ["./car-info.component.scss"],
})
export class CarInfoComponent implements OnInit, OnDestroy {
  carData = "";
  userData = "";
  color = "";
  subscriptions: Subscription[] = [];
  constructor(private apollo: Apollo) {}

  ngOnDestroy() {
    if (this.subscriptions.length > 0) {
      this.subscriptions.forEach((s) => {
        s.unsubscribe();
      });
    }
  }

  ngOnInit() {}

  getCar() {
    this.subscriptions.push(
      this.apollo
        .watchQuery({ query: GET_CAR })
        .valueChanges.subscribe((result) => {
          this.carData = JSON.stringify(result.data, null, "\t");
        })
    );
  }

  getCarType() {
    this.subscriptions.push(
      this.apollo
        .watchQuery({ query: GET_CAR_TYPE })
        .valueChanges.subscribe((result) => {
          this.carData = JSON.stringify(result.data, null, "\t");
        })
    );
  }

  getCarSeller() {
    this.subscriptions.push(
      this.apollo
        .watchQuery({ query: GET_CAR_SELLER_INFO })
        .valueChanges.subscribe((result) => {
          this.carData = JSON.stringify(result.data, null, "\t");
        })
    );
  }

  getCarEquipment() {
    this.subscriptions.push(
      this.apollo
        .watchQuery({ query: GET_CAR_EQUIPMENT })
        .valueChanges.subscribe((result) => {
          this.carData = JSON.stringify(result.data, null, "\t");
        })
    );
  }

  getCarColor() {
    this.subscriptions.push(
      this.apollo
        .watchQuery({ query: GET_CAR_COLOR })
        .valueChanges.subscribe((result) => {
          this.carData = JSON.stringify(result.data, null, "\t");
        })
    );
  }

  getUserBasic() {
    this.subscriptions.push(
      this.apollo
        .watchQuery({ query: GET_USER_BASIC })
        .valueChanges.subscribe((result) => {
          this.userData = JSON.stringify(result.data, null, "\t");
        })
    );
  }

  getUserWithEquipment() {
    this.subscriptions.push(
      this.apollo
        .watchQuery({ query: GET_USER_WITH_EQUIPMENT })
        .valueChanges.subscribe((result) => {
          this.userData = JSON.stringify(result.data, null, "\t");
        })
    );
  }

  onColorChange(value) {
    this.color = value;
  }

  writeFragment() {
    this.apollo.getClient().writeFragment({
      id: defaultDataIdFromObject({
        id: "31312312",
        __typename: "Car",
      }),
      fragment: CAR_COLOR_FRAGMENT,
      data: {
        __typename: "Car",
        color: "pink",
      },
    });
  }

  changeColor() {
    this.apollo
      .mutate({
        mutation: CHANGE_CAR_COLOR,
        variables: {
          color: this.color,
        },
      })
      .subscribe();
  }
}
