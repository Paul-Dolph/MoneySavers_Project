/*Name: Budgeting.js
    Purpose: Core of budgeting page app
    Version and Date: V1, Last edit 5/30/2021
    Author(s): Ryu Morgan
    Dependencies: No dependencies
    */

class UI {
  constructor() {
    this.budgetFeedback = document.querySelector('.budget-feedback');
    this.expenseFeedback = document.querySelector('.expense-feedback');
    this.budgetForm = document.getElementById('budget-form');
    this.budgetInput = document.getElementById('budget-input');
    this.budgetAmount = document.getElementById('budget-amount');
    this.expenseAmount = document.getElementById('expense-amount');
    this.balance = document.getElementById('balance');
    this.balanceAmount = document.getElementById('balance-amount');
    this.expenseForm = document.getElementById('expense-form');
    this.expenseInput = document.getElementById('expense-input');
    this.amountInput = document.getElementById('amount-input');
    this.expenseList = document.getElementById('expense-list');
    this.itemList = [];
    this.itemID = 0;
  }
  //submit budget method
  submitBudgetForm() {
    const value = this.budgetInput.value;
    if (value === '' || value < 0) {
      this.budgetFeedback.classList.add('showItem');
      this.budgetFeedback.innerHTML = '<p>value cannot be empty or negative<p>';
      const self = this;
      //console.log(this);

      setTimeout(function () {
        self.budgetFeedback.remove('showItem');
      }, 4000);
    } else {
      this.budgetAmount.textContent = value;
      this.budgetInput.value = '';
      this.showBalance();
    }
  }
  //show balance
  showBalance() {
    const expense = this.totalExpense();
    const total = parseInt(this.budgetAmount.textContent) - expense;
    this.balanceAmount.textContent = total;
    if (total < 0) {
      this.balance.classList.remove('showGreen', 'showBlack');
      this.balance.add('showRed');
    } else if (total > 0) {
      this.balance.classList.remove('showRed', 'showBlack');
      this.balance.add('showGreen');
    } else if (total > 0) {
      this.balance.classList.remove('showRed', 'showGreen');
      this.balance.add('showBlack');
    }
  }
  /*
  //submit expense form
  submitBudgetForm() {
    const expenseValue = this.expenseInput.value;
    const amountValue = this.amountInput.value;
    if (expenseValue === '' || amountValue === '' || amountValue < 0) {
      this.expenseFeedback.classList.add('showItem');
      this.expenseFeedback.innerHTML = '<p> cannot be empty or negative<p>';
      const self = this;
      setTimeout(function () {
        self.expenseFeedback.remove('showItem');
      }, 4000);
    } else {
      let amount = parseInt(amountValue);
      this.expenseInput = '';
      this.amountInput = '';
      let expense = {
        id: this.itemID,
        title: expenseValue,
        amount: amount,
      };
      this.itemID++;
      this.itemList.push(expense);
      this.addExpense(expense);
      //show balance
    }
  }
  //add expense
  addExpense(expense) {
    const div = document.createElement('div');
    div.classList.add('expense');
    div.innerHTML = (
      <div class="expense">
        <div class="expense-item d-flex justify-content-between align-items-baseline">
          <h6 class="expense-title mb-0 text-uppercase list-item">- title</h6>
          <h5 class="expense-amount mb-0 list-item">amount</h5>
          <div class="expense-icons list-item">
            <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
              <i class="fas fa-edit"></i>
            </a>
            <a href="#" class="delete-icon" data-id="${expense.id}">
              <i class="fas fa-trash"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
  */
  //total expense
  totalExpense() {
    let total = 400;
    return total;
  }
}

function eventListenters() {
  const budgetForm = document.getElementById('budget-form');
  const expenseForm = document.getElementById('expense-form');
  const expenseList = document.getElementById('expense-list');

  //new instance of UI CLASS
  const ui = new UI();

  //budget form submit
  budgetForm.addEventListener('submit', function (event) {
    event.preventDefault(); //prevents refreshing
    ui.submitBudgetForm();
  });
  //expense form submit
  expenseForm.addEventListener('submit', function (event) {
    event.preventDefault(); //prevents refreshing
    ui.submitBudgetForm();
  });
  //expense click
  expenseList.addEventListener('click', function () {});
}

document.addEventListener('DOMContentLoaded', function () {
  eventListenters();
});
