//
// Iteration 3 | Classes
//

// 3.1 - Create the class BankAccount //
class BankAccount1 {
  balance: number = 0;
  accountHolder: string;

  constructor(accountHolder: string) {
    this.accountHolder = accountHolder;
  }

  getBalance(): number {
    return this.balance;
  }
}

// 3.2 - Add new methods to the class BankAccount //

class BankAccount2 {
  balance: number = 0;

  deposit(amount: number): number | string {
    if (amount <= 0) {
      return `Please provide a valid amount`;
    }

    this.balance += amount;
    return this.balance;
  }

  withdraw(amount: number): number | string {
    if (amount <= 0) {
      return `Please provide a valid amount`;
    }
    if (amount > this.balance) {
      return `Insufficient funds`;
    }

    this.balance -= amount;
    return this.balance;
  }
}
