class Teacher {
    constructor(name, cls) {
        this.name = name;
        this.cls = cls
    }

    describe() {
        return `${this.name} is a teacher, and they teach ${this.cls}.`;
    }
}

class Subject {
    constructor(name) {
        this.name = name;
        this.teachers = [];
    }

    addTeacher(teacher) {
        if (teacher instanceof Teacher) {
            this.teachers.push(teacher);
        } else {
            throw new Error(`You can only add an instance of Teacher. Argument is not a Teacher: ${teacher}`);
        }
    }

    describe() {
    return `${this.name} has ${this.teachers.length} Teacher(s).`;
    }
}

class Menu {
    constructor() {
        this.subjects = [];
        this.selectedSubject = null;
    }

    start() {
        let selection = this.ShowMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createSubject();
                    break;
                case '2':
                    this.viewSubject();
                    break;
                case '3':
                    this.deleteSubject();
                    break;
                case '4':
                    this.displaySubject();
                    break;
                default:
                    selection = 0;
            }
            selection = this.ShowMainMenuOptions();
        }

        alert('Goodbye!');
    }

    ShowMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create new Subject.
        2) View Subject.
        3) Delete Subjects.
        4) Display all Subjects.
        `);
    }

    ShowSubjectMenuOptions(subjectInfo) {
        return prompt(`
        0) back
        1) create Teacher
        2) delete Teacher
        --------------------
        ${subjectInfo}
        `)
    }

    displaySubject() {
        let subjectString = '';
        for (let i = 0; i < this.subjects.length; i++) {
            subjectString += i + ') ' + this.subjects[i].name + '\n';
        }
        alert(subjectString);
    }

    createSubject() {
        let name = prompt('Enter name for new Subject:');
        this.subjects.push(new Subject(name));
    }

    viewSubject() {
        let index = prompt('Enter the index of the Subject you wish to view:');
        if (index > -1 && index < this.subjects.length) {
            this.selectedSubject = this.subjects[index];
            let description = 'Subject Name: ' + this.selectedSubject.name + '\n';
            
            for (let i = 0; i < this.selectedSubject.teachers.length; i++) {
                description += i + ') ' + this.selectedSubject.teachers[i].name 
                + ' - ' + this.selectedSubject.teachers[i].cls + '\n';
            }

            let selection = this.ShowSubjectMenuOptions(description);
            switch(selection) {
                case '1':
                    this.createTeacher();
                    break;
                case '2':
                    this.deleteTeacher();
            }
        }
    }

    deleteSubject() {
        let index = prompt('Enter the index of the team you wish to delete:');
        if (index > -1 && index < this.subjects.length) {
            this.subjects.splice(index,1);
        }
    }

    createTeacher() {
        let name =prompt('Enter name for new Teacher:');
        let cls =prompt('Enter the name of the class the Teacher facilitates:')
        this.selectedSubject.teachers.push(new Teacher(name,cls));
    }

    deleteTeacher() {
        let index = prompt('Enter the index of the Teacher you wish to delete:');
        if (index > -1 && index < this.selectedSubject.teachers.length) {
            this.selectedSubject.teachers.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();