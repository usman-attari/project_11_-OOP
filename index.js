import inquirer from "inquirer";
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addstudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programmStart = async (person) => {
    do {
        console.log("Welcome guest");
        const ans = await inquirer.prompt({
            type: "list",
            message: "ap kis se bat Kerna pasand Kare ge...",
            name: "selest",
            choices: ["Khuld se:Self", "student"]
        });
        if (ans.selest == "Khuld se:Self") {
            console.log("Hello me Khud se baat Ker raha hon");
            console.log("Meri tabiyat achi hai.");
        }
        if (ans.selest == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "Ap Ko Kis Student Se Bat Kerni hai",
                name: "student",
            });
            const student = person.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                person.addstudent(name);
                console.log(`Hello i am ${name.name}, or me thek hun `);
                console.log(person.students);
            }
            ;
            if (student) {
                console.log(`Hello i am ${student.name}, or me thek hun....... `);
                console.log(person.students);
            }
        }
        ;
    } while (true);
};
programmStart(persons);
