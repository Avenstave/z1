export class Student {
    constructor(
        private id: String,
        private name: String,
        public sex: number,
        public web: Course,
        public RFID: Course,
    ) {

    }
}
export class Course {
    constructor(private count: number, private type: number) {
        this.count = count;
        this.type = type;
    }
}

export const ALL_STUDENTS: Student[] = [
    new Student('01', 'ALN', 1, new Course(80, 0), new Course(95, 1)),
    new Student('02', 'BFF', 0, new Course(40, 0), new Course(90, 1)),
    new Student('03', 'SDD', 1, new Course(50, 0), new Course(80, 1)),
    new Student('04', 'CGG', 1, new Course(65, 0), new Course(70, 1)),
    new Student('05', 'JJC', 0, new Course(80, 0), new Course(70, 1))
];

