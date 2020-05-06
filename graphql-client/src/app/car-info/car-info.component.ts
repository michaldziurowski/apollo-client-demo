import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { defaultDataIdFromObject } from "apollo-cache-inmemory";
import {
  Car,
  GET_CAR,
  GET_CAR_TYPE,
  GET_CAR_SELLER_INFO,
  GET_CAR_EQUIPMENT,
  GET_CAR_COLOR,
  CHANGE_CAR_COLOR,
  CAR_COLOR_FRAGMENT,
} from "../gql_consts";

@Component({
  selector: "app-car-info",
  templateUrl: "./car-info.component.html",
  styleUrls: ["./car-info.component.scss"],
})
export class CarInfoComponent implements OnInit {
  carData = "";
  color = "";
  constructor(private apollo: Apollo) {}

  ngOnInit() {}

  getCar() {
    this.apollo
      .watchQuery({ query: GET_CAR })
      .valueChanges.subscribe((result) => {
        this.carData = JSON.stringify(result.data, null, "\t");
      });
  }

  getCarType() {
    this.apollo
      .watchQuery({ query: GET_CAR_TYPE })
      .valueChanges.subscribe((result) => {
        this.carData = JSON.stringify(result.data, null, "\t");
      });
  }

  getCarSeller() {
    this.apollo
      .watchQuery({ query: GET_CAR_SELLER_INFO })
      .valueChanges.subscribe((result) => {
        this.carData = JSON.stringify(result.data, null, "\t");
      });
  }

  getCarEquipment() {
    this.apollo
      .watchQuery({ query: GET_CAR_EQUIPMENT })
      .valueChanges.subscribe((result) => {
        this.carData = JSON.stringify(result.data, null, "\t");
      });
  }

  getCarColor() {
    this.apollo
      .watchQuery({ query: GET_CAR_COLOR })
      .valueChanges.subscribe((result) => {
        this.carData = JSON.stringify(result.data, null, "\t");
      });
  }

  onColorChange(value) {
    this.color = value;
  }

  changeColor() {
    this.apollo
      .mutate({
        mutation: CHANGE_CAR_COLOR,
        variables: {
          color: this.color,
        },
        update: (store, { data }) => {
          // this is only test for fragments, change for proper example
          store.writeFragment({
            id: defaultDataIdFromObject({
              id: data["changeCarColor"].id,
              __typename: "Car",
            }),
            fragment: CAR_COLOR_FRAGMENT,
            data: {
              __typename: "Car",
              color: "pink",
            },
          });
        },
      })
      .subscribe();
  }
}
