abstract class Department {
    constructor(public name: string) { }
    printName(): void {
        console.log('Department name:'+ this.name);
    }
    abstract printMeeting(): void;//必须在派生类中实现
}

class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing');//在派生类的构造函数中必须调用super()
    }
    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }//实现父类中的抽象方法，子类必须实现父类中的抽象方法
    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department;//允许创建一个对抽象类型的引用
// let department1 = new Department(); 错误 不能创建一个抽象类的实例、
let department1 = new AccountingDepartment();//允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports();错误 方法在声明的抽象类中不存在