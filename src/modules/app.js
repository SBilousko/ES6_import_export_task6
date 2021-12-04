import { DonateForm } from "./donate-form";
import { DonateList } from "./donate-list";
import {
  calculateSumOfNumbers,
} from "../core/utils/index";

const mockDonates = [
  { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() },
];


export default class App {
  #formBlock;
  #donateList;
  constructor() {
    this.state = {
      donates: mockDonates,
      totalAmount: calculateSumOfNumbers(
        mockDonates.map((donate) => {
          return donate.amount;
        })
      ),
    };
    this.#formBlock = new DonateForm(
      this.state.totalAmount,
      this.createNewDonate.bind(this));
    this.#donateList = new DonateList(this.state.donates);
    
  }

  run() {
    const formBlockHTML = this.#formBlock.render();
    const donatesListHTML = this.#donateList.render();
  }

  createNewDonate(newDonate) {
    this.state.donates.push(newDonate);
    this.state.totalAmount = this.state.totalAmount + Number(newDonate.amount);
    this.#donateList.updateDonates(this.state.donates);
    this.#formBlock.updateTotalAmount(this.state.totalAmount);
  }
}