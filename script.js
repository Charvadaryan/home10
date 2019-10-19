// 1


function Rectangle(width, height){
    this.width = width;
    this.height = height;
}

Rectangle.prototype.getArea = function(){
    return (this.width * this.height)
}

Rectangle.prototype.getParimeter = function(){
    return (2 *(this.width + this.height))
}

const rectangle = new Rectangle()


// 2


function Employee(id, firstName, lastName, position, salary, workingHours){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.salary = salary;
    this.workingHours = workingHours;
}
Employee.prototype.getFullName = function(){
    
}
Employee.prototype.setFullName = function(){

}
Employee.prototype.getAnnularSalary = function() {
        const yearSalary = (this.salary * 12);
        return yearSalary;
}
Employee.prototype.setAnnularSalary = function() {

}
Employee.prototype.getraiseSalary = function(percent){
        const salaryParcent =  (this.salary*percent/100);
        return salaryParcent;
}


// 3


function Account(Id, Name, balance){
    this.Id = Id;
    this.name = name;
    this.balance = balance;
}
 Account.prototype.getCredit = function(amount){
        this.balance  += amount;
        return this.balance;
 }
 Account.prototype.getDebit = function(amount){
     if(amount < this.balance){
         return 'subtract the amount from the balance'
     }else{
         return 'Amount exceeded balance'
     }
 }
 Account.prototype.getTransferTo = function(anotherAccount, amount){
     if(amount < this.balance){
         this.balance -= amount;
         anotherAccount += amount
         return this.balance;
     }else{
         return (“Amount exceeded balance.”)

     }
 }