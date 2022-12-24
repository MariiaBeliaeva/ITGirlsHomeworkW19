class Worker {
  name;
  surname;
  rate;
  days;
  constructor(WorkerName, WorkerSurname, WorkerRate, WorkerDays) {
    this.name = WorkerName;
    this.surname = WorkerSurname;
    this.rate = WorkerRate;
    this.days = WorkerDays;
  }
  getSalary() {
    return this.rate * this.days;
  }
}
//console.log(getSalary());

let worker = new Worker("Иван", "Иванов", 10, 31);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());
