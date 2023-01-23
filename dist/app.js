"use strict";
let school = [
    {
        id: 1,
        name: 'Yasser',
        level: '2',
        isSenior: false,
    },
    {
        id: 2,
        name: 'Ali',
        level: '10',
        isSenior: true,
    },
    {
        id: 3,
        name: 'Mohammed',
        level: '8',
        isSenior: false,
    },
    {
        id: 4,
        name: 'Khalid',
        specialty: 'Math',
        courseNum: 227,
    },
    {
        id: 5,
        name: 'Saud',
        specialty: 'Physics',
        courseNum: 180,
    },
];
let schoolPrint = (students) => {
    for (let student of students)
        console.log(student);
};
let isSeniorSetter = (student, change) => {
    student.isSenior = change;
};
let courseNumSetter = (teacher, change) => {
    teacher.courseNum = change;
};
