import { Component } from '@angular/core';
import { SellHeaderComponent } from "../sell-header/sell-header.component";
import { AddFormSellComponent } from "../../component-logic/add-form-sell/add-form-sell.component";
import { EditSellFormComponent } from "../../component-logic/edit-sell-form/edit-sell-form.component";
import { ButtonAddSellComponent } from "../button-add-sell/button-add-sell.component";
import { SellTableComponent } from "../../component-logic/sell-table/sell-table.component";
import { Sell } from '../../../domain/entities/sell';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sell-view',
  standalone: true,
  imports: [SellHeaderComponent, AddFormSellComponent, EditSellFormComponent, ButtonAddSellComponent, SellTableComponent, CommonModule],
  templateUrl: './sell-view.component.html',
  styleUrl: './sell-view.component.css'
})
export class SellViewComponent {
 info = { sellId: 0, i: 0 };
  sells: Sell[] = [];
  isOpenModal = false;
  isOpenModalEdit = false;

  openModal() {
    this.isOpenModal = true;
  }

  openModalEdit($event: { sellId: number, i: number }) {
    this.info = $event;
    this.isOpenModalEdit = true;
  }

  closeModalEdit() {
    this.isOpenModalEdit = false;
  }

  closeModal() {
    this.isOpenModal = false;
  }

  newSell($event: Sell) {
    this.sells.push($event);
  }

  loadSells($event: Sell[]) {
    this.sells = $event;
  }

  edit($event: { index: number, sell: Sell}) {
    this.sells[$event.index] = $event.sell;
    this.isOpenModalEdit = false;
  }
}
