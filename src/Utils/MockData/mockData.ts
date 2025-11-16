import type { UserType } from "../../Types/User/UserType.ts";
import type { CourseType } from "../../Types/Catalog/CourseType.ts";
import type { SectionType } from "../../Types/Catalog/SectionType.ts";
import type { UnitType } from "../../Types/Catalog/UnitType.ts";
import type { LessonType } from "../../Types/Catalog/LessonType.ts";
import type { Exercise, ExerciseOption } from "../../Types/Catalog/ExerciseType.ts";
import type { QuestType } from "../../Types/Quest/QuestType.ts";
import type { CourseProgressType } from "../../Types/User/CourseProgressType.ts";
import type { FlatSectionTree } from "../../Types/Catalog/FlatSectionTree.ts";

// Mock User Data
export const MOCK_USER: UserType = {
  id: 1,
  username: "demo_user",
  firstName: "Demo",
  lastName: "User",
  pfpSrc: "/pfp/avatOne.png",
  points: 1250,
  currentCourseId: 1, // C++ course
  streakLength: 5,
  createdAt: new Date().toISOString(),
};

// Mock Courses
export const MOCK_COURSES: CourseType[] = [
  {
    id: 1,
    title: "C++",
    imgSrc: "/flags/c-.png",
  },
  {
    id: 2,
    title: "Python Django",
    imgSrc: "/flags/django.png",
  },
];

// Mock Sections
export const MOCK_SECTIONS: SectionType[] = [
  { id: 1, courseId: 1, orderIndex: 1, title: "C++ Basics" },
  { id: 2, courseId: 1, orderIndex: 2, title: "C++ Advanced" },
  { id: 3, courseId: 2, orderIndex: 1, title: "Python Django Basics" },
  { id: 4, courseId: 2, orderIndex: 2, title: "Django Advanced" },
];

// Mock Units
export const MOCK_UNITS: UnitType[] = [
  // C++ Course Units
  {
    id: 1,
    sectionId: 1,
    title: "Unit 1: C++ Fundamentals",
    description: "Learn C++ basics and syntax",
    orderIndex: 1,
    animationPath: "",
  },
  {
    id: 2,
    sectionId: 1,
    title: "Unit 2: Variables and Data Types",
    description: "Learn about variables and data types in C++",
    orderIndex: 2,
    animationPath: "",
  },
  {
    id: 3,
    sectionId: 1,
    title: "Unit 3: Control Structures",
    description: "Learn if/else, loops, and control flow",
    orderIndex: 3,
    animationPath: "",
  },
  {
    id: 4,
    sectionId: 2,
    title: "Unit 1: Functions",
    description: "Learn about functions in C++",
    orderIndex: 1,
    animationPath: "",
  },
  {
    id: 5,
    sectionId: 2,
    title: "Unit 2: Object-Oriented Programming",
    description: "Learn classes and objects",
    orderIndex: 2,
    animationPath: "",
  },
  // Python Django Course Units
  {
    id: 6,
    sectionId: 3,
    title: "Unit 1: ASP.NET MVC",
    description: "Learn ASP.NET MVC framework",
    orderIndex: 1,
    animationPath: "",
  },
  {
    id: 7,
    sectionId: 3,
    title: "Unit 2: Entity Framework",
    description: "Learn Entity Framework ORM",
    orderIndex: 2,
    animationPath: "",
  },
  {
    id: 8,
    sectionId: 4,
    title: "Unit 1: Django Models",
    description: "Learn Django models and database",
    orderIndex: 1,
    animationPath: "",
  },
  {
    id: 9,
    sectionId: 4,
    title: "Unit 2: Django Views and Templates",
    description: "Learn Django views and template system",
    orderIndex: 2,
    animationPath: "/lottie-animations/DUO_WAVE_ALT.json",
  },
];

// Mock Lessons
export const MOCK_LESSONS: LessonType[] = [
  // C++ Course - Section 1
  { id: 1, unitId: 1, lessonType: "Lesson", orderIndex: 1, title: "Hello World in C++", isPassed: false },
  { id: 2, unitId: 1, lessonType: "Lesson", orderIndex: 2, title: "C++ Syntax Basics", isPassed: false },
  { id: 3, unitId: 2, lessonType: "Lesson", orderIndex: 1, title: "Variables in C++", isPassed: false },
  { id: 4, unitId: 2, lessonType: "Lesson", orderIndex: 2, title: "Data Types", isPassed: false },
  { id: 5, unitId: 3, lessonType: "Lesson", orderIndex: 1, title: "If/Else Statements", isPassed: false },
  { id: 6, unitId: 3, lessonType: "Lesson", orderIndex: 2, title: "Loops (for, while)", isPassed: false },
  // C++ Course - Section 2
  { id: 7, unitId: 4, lessonType: "Lesson", orderIndex: 1, title: "Functions Basics", isPassed: false },
  { id: 8, unitId: 4, lessonType: "Lesson", orderIndex: 2, title: "Function Parameters", isPassed: false },
  { id: 9, unitId: 5, lessonType: "Lesson", orderIndex: 1, title: "Classes and Objects", isPassed: false },
  { id: 10, unitId: 5, lessonType: "Lesson", orderIndex: 2, title: "Inheritance", isPassed: false },
  // Python Django Course - Section 3
  { id: 11, unitId: 6, lessonType: "Lesson", orderIndex: 1, title: "ASP.NET MVC Basics", isPassed: false },
  { id: 12, unitId: 6, lessonType: "Lesson", orderIndex: 2, title: "MVC Pattern", isPassed: false },
  { id: 13, unitId: 7, lessonType: "Lesson", orderIndex: 1, title: "Entity Framework Basics", isPassed: false },
  { id: 14, unitId: 7, lessonType: "Lesson", orderIndex: 2, title: "Database Migrations", isPassed: false },
  // Python Django Course - Section 4
  { id: 15, unitId: 8, lessonType: "Lesson", orderIndex: 1, title: "Django Models", isPassed: false },
  { id: 16, unitId: 8, lessonType: "Lesson", orderIndex: 2, title: "Model Relationships", isPassed: false },
  { id: 17, unitId: 9, lessonType: "Lesson", orderIndex: 1, title: "Django Views", isPassed: false },
  { id: 18, unitId: 9, lessonType: "Lesson", orderIndex: 2, title: "Django Templates", isPassed: false },
];

// Mock Exercises
export const MOCK_EXERCISES: Record<number, Exercise[]> = {
  // C++ Course - Lesson 1: Hello World in C++
  1: [
    {
      id: 1,
      lessonId: 1,
      prompt: "C++ програмд 'Hello World' хэвлэхэд ямар команд ашиглах вэ?",
      type: "translate",
      orderIndex: 1,
      options: [
        { id: 1, exerciseId: 1, content: "cout << \"Hello World\";", isCorrect: true, imageUrl: null },
        { id: 2, exerciseId: 1, content: "print(\"Hello World\");", isCorrect: false, imageUrl: null },
        { id: 3, exerciseId: 1, content: "console.log(\"Hello World\");", isCorrect: false, imageUrl: null },
        { id: 4, exerciseId: 1, content: "System.out.println(\"Hello World\");", isCorrect: false, imageUrl: null },
      ],
    },
    {
      id: 2,
      lessonId: 1,
      prompt: "C++ програмд заавал байх ёстой функц?",
      type: "translate",
      orderIndex: 2,
      options: [
        { id: 5, exerciseId: 2, content: "main()", isCorrect: true, imageUrl: null },
        { id: 6, exerciseId: 2, content: "start()", isCorrect: false, imageUrl: null },
        { id: 7, exerciseId: 2, content: "init()", isCorrect: false, imageUrl: null },
        { id: 8, exerciseId: 2, content: "run()", isCorrect: false, imageUrl: null },
      ],
    },
  ],
  // C++ Course - Lesson 2: C++ Syntax Basics
  2: [
    {
      id: 3,
      lessonId: 2,
      prompt: "C++ програмд мөр төгсгөхөд ямар тэмдэгт ашиглах вэ?",
      type: "translate",
      orderIndex: 1,
      options: [
        { id: 9, exerciseId: 3, content: "; (semicolon)", isCorrect: true, imageUrl: null },
        { id: 10, exerciseId: 3, content: ". (period)", isCorrect: false, imageUrl: null },
        { id: 11, exerciseId: 3, content: ": (colon)", isCorrect: false, imageUrl: null },
        { id: 12, exerciseId: 3, content: ", (comma)", isCorrect: false, imageUrl: null },
      ],
    },
    {
      id: 4,
      lessonId: 2,
      prompt: "C++ header file-д ямар extension ашиглах вэ?",
      type: "translate",
      orderIndex: 2,
      options: [
        { id: 13, exerciseId: 4, content: ".h", isCorrect: true, imageUrl: null },
        { id: 14, exerciseId: 4, content: ".cpp", isCorrect: false, imageUrl: null },
        { id: 15, exerciseId: 4, content: ".c", isCorrect: false, imageUrl: null },
        { id: 16, exerciseId: 4, content: ".hpp", isCorrect: true, imageUrl: null },
      ],
    },
  ],
  // C++ Course - Lesson 3: Variables in C++
  3: [
    {
      id: 5,
      lessonId: 3,
      prompt: "C++-д хувьсагч зарлах жишээ?",
      type: "translate",
      orderIndex: 1,
      options: [
        { id: 17, exerciseId: 5, content: "int x = 10;", isCorrect: true, imageUrl: null },
        { id: 18, exerciseId: 5, content: "var x = 10;", isCorrect: false, imageUrl: null },
        { id: 19, exerciseId: 5, content: "x = 10", isCorrect: false, imageUrl: null },
        { id: 20, exerciseId: 5, content: "let x = 10;", isCorrect: false, imageUrl: null },
      ],
    },
    {
      id: 6,
      lessonId: 3,
      prompt: "C++-д тогтмол (constant) зарлах команд?",
      type: "translate",
      orderIndex: 2,
      options: [
        { id: 21, exerciseId: 6, content: "const int x = 10;", isCorrect: true, imageUrl: null },
        { id: 22, exerciseId: 6, content: "final int x = 10;", isCorrect: false, imageUrl: null },
        { id: 23, exerciseId: 6, content: "let x = 10;", isCorrect: false, imageUrl: null },
        { id: 24, exerciseId: 6, content: "var x = 10;", isCorrect: false, imageUrl: null },
      ],
    },
  ],
  // C++ Course - Lesson 4: Data Types
  4: [
    {
      id: 7,
      lessonId: 4,
      prompt: "C++-д бүхэл тоо хадгалах data type?",
      type: "translate",
      orderIndex: 1,
      options: [
        { id: 25, exerciseId: 7, content: "int", isCorrect: true, imageUrl: null },
        { id: 26, exerciseId: 7, content: "string", isCorrect: false, imageUrl: null },
        { id: 27, exerciseId: 7, content: "float", isCorrect: false, imageUrl: null },
        { id: 28, exerciseId: 7, content: "char", isCorrect: false, imageUrl: null },
      ],
    },
    {
      id: 8,
      lessonId: 4,
      prompt: "C++-д бутархай тоо хадгалах data type?",
      type: "translate",
      orderIndex: 2,
      options: [
        { id: 29, exerciseId: 8, content: "float", isCorrect: true, imageUrl: null },
        { id: 30, exerciseId: 8, content: "int", isCorrect: false, imageUrl: null },
        { id: 31, exerciseId: 8, content: "string", isCorrect: false, imageUrl: null },
        { id: 32, exerciseId: 8, content: "bool", isCorrect: false, imageUrl: null },
      ],
    },
    {
      id: 9,
      lessonId: 4,
      prompt: "C++-д тэмдэгт мөр (string) хадгалах data type?",
      type: "translate",
      orderIndex: 3,
      options: [
        { id: 33, exerciseId: 9, content: "string", isCorrect: true, imageUrl: null },
        { id: 34, exerciseId: 9, content: "int", isCorrect: false, imageUrl: null },
        { id: 35, exerciseId: 9, content: "char", isCorrect: false, imageUrl: null },
        { id: 36, exerciseId: 9, content: "float", isCorrect: false, imageUrl: null },
      ],
    },
  ],
  // C++ Course - Lesson 5: If/Else Statements
  5: [
    {
      id: 10,
      lessonId: 5,
      prompt: "C++-д if statement бичих жишээ?",
      type: "translate",
      orderIndex: 1,
      options: [
        { id: 37, exerciseId: 10, content: "if (x > 10) { }", isCorrect: true, imageUrl: null },
        { id: 38, exerciseId: 10, content: "if x > 10:", isCorrect: false, imageUrl: null },
        { id: 39, exerciseId: 10, content: "if x > 10 { }", isCorrect: false, imageUrl: null },
        { id: 40, exerciseId: 10, content: "if (x > 10):", isCorrect: false, imageUrl: null },
      ],
    },
    {
      id: 11,
      lessonId: 5,
      prompt: "C++-д else if statement бичих жишээ?",
      type: "translate",
      orderIndex: 2,
      options: [
        { id: 41, exerciseId: 11, content: "else if (x < 10) { }", isCorrect: true, imageUrl: null },
        { id: 42, exerciseId: 11, content: "elif x < 10:", isCorrect: false, imageUrl: null },
        { id: 43, exerciseId: 11, content: "else if x < 10:", isCorrect: false, imageUrl: null },
        { id: 44, exerciseId: 11, content: "elseif (x < 10) { }", isCorrect: false, imageUrl: null },
      ],
    },
  ],
  // C++ Course - Lesson 6: Loops
  6: [
    {
      id: 12,
      lessonId: 6,
      prompt: "C++-д for loop бичих жишээ?",
      type: "translate",
      orderIndex: 1,
      options: [
        { id: 45, exerciseId: 12, content: "for (int i = 0; i < 10; i++) { }", isCorrect: true, imageUrl: null },
        { id: 46, exerciseId: 12, content: "for i in range(10):", isCorrect: false, imageUrl: null },
        { id: 47, exerciseId: 12, content: "for (i = 0; i < 10; i++)", isCorrect: false, imageUrl: null },
        { id: 48, exerciseId: 12, content: "for i = 0 to 10:", isCorrect: false, imageUrl: null },
      ],
    },
    {
      id: 13,
      lessonId: 6,
      prompt: "C++-д while loop бичих жишээ?",
      type: "translate",
      orderIndex: 2,
      options: [
        { id: 49, exerciseId: 13, content: "while (x > 0) { }", isCorrect: true, imageUrl: null },
        { id: 50, exerciseId: 13, content: "while x > 0:", isCorrect: false, imageUrl: null },
        { id: 51, exerciseId: 13, content: "while x > 0 { }", isCorrect: false, imageUrl: null },
        { id: 52, exerciseId: 13, content: "while (x > 0):", isCorrect: false, imageUrl: null },
      ],
    },
  ],
  // C++ Course - Lesson 7: Functions Basics
  7: [
    {
      id: 14,
      lessonId: 7,
      prompt: "C++-д функц зарлах жишээ?",
      type: "translate",
      orderIndex: 1,
      options: [
        { id: 53, exerciseId: 14, content: "int add(int a, int b) { return a + b; }", isCorrect: true, imageUrl: null },
        { id: 54, exerciseId: 14, content: "function add(a, b) { return a + b; }", isCorrect: false, imageUrl: null },
        { id: 55, exerciseId: 14, content: "def add(a, b): return a + b", isCorrect: false, imageUrl: null },
        { id: 56, exerciseId: 14, content: "add(a, b) { return a + b; }", isCorrect: false, imageUrl: null },
      ],
    },
    {
      id: 15,
      lessonId: 7,
      prompt: "C++-д void функц зарлах жишээ?",
      type: "translate",
      orderIndex: 2,
      options: [
        { id: 57, exerciseId: 15, content: "void print() { }", isCorrect: true, imageUrl: null },
        { id: 58, exerciseId: 15, content: "void print():", isCorrect: false, imageUrl: null },
        { id: 59, exerciseId: 15, content: "function print() { }", isCorrect: false, imageUrl: null },
        { id: 60, exerciseId: 15, content: "def print():", isCorrect: false, imageUrl: null },
      ],
    },
  ],
  // C++ Course - Lesson 8: Function Parameters
  8: [
    {
      id: 16,
      lessonId: 8,
      prompt: "C++-д функц дуудах жишээ?",
      type: "translate",
      orderIndex: 1,
      options: [
        { id: 61, exerciseId: 16, content: "add(5, 3);", isCorrect: true, imageUrl: null },
        { id: 62, exerciseId: 16, content: "add(5, 3)", isCorrect: false, imageUrl: null },
        { id: 63, exerciseId: 16, content: "call add(5, 3)", isCorrect: false, imageUrl: null },
        { id: 64, exerciseId: 16, content: "add 5, 3", isCorrect: false, imageUrl: null },
      ],
    },
  ],
  // C++ Course - Lesson 9: Classes and Objects
  9: [
    {
      id: 17,
      lessonId: 9,
      prompt: "C++-д class зарлах жишээ?",
      type: "translate",
      orderIndex: 1,
      options: [
        { id: 65, exerciseId: 17, content: "class MyClass { };", isCorrect: true, imageUrl: null },
        { id: 66, exerciseId: 17, content: "class MyClass:", isCorrect: false, imageUrl: null },
        { id: 67, exerciseId: 17, content: "MyClass class { }", isCorrect: false, imageUrl: null },
        { id: 68, exerciseId: 17, content: "def class MyClass:", isCorrect: false, imageUrl: null },
      ],
    },
    {
      id: 18,
      lessonId: 9,
      prompt: "C++-д object үүсгэх жишээ?",
      type: "translate",
      orderIndex: 2,
      options: [
        { id: 69, exerciseId: 18, content: "MyClass obj;", isCorrect: true, imageUrl: null },
        { id: 70, exerciseId: 18, content: "MyClass obj = new MyClass();", isCorrect: false, imageUrl: null },
        { id: 71, exerciseId: 18, content: "obj = MyClass()", isCorrect: false, imageUrl: null },
        { id: 72, exerciseId: 18, content: "var obj = new MyClass();", isCorrect: false, imageUrl: null },
      ],
    },
  ],
  // C++ Course - Lesson 10: Inheritance
  10: [
    {
      id: 19,
      lessonId: 10,
      prompt: "C++-д inheritance ашиглах жишээ?",
      type: "translate",
      orderIndex: 1,
      options: [
        { id: 73, exerciseId: 19, content: "class Child : public Parent { };", isCorrect: true, imageUrl: null },
        { id: 74, exerciseId: 19, content: "class Child(Parent):", isCorrect: false, imageUrl: null },
        { id: 75, exerciseId: 19, content: "class Child extends Parent { }", isCorrect: false, imageUrl: null },
        { id: 76, exerciseId: 19, content: "Child class Parent { }", isCorrect: false, imageUrl: null },
      ],
    },
  ],
  // Python Django Course - Lesson 11: ASP.NET MVC Basics
  11: [
    {
      id: 20,
      lessonId: 11,
      prompt: "App_Data folder?",
      type: "translate",
      orderIndex: 1,
      options: [
        { id: 77, exerciseId: 20, content: "App-д шаардлагтай өгөгдөл буюу ӨС", isCorrect: true, imageUrl: null },
        { id: 78, exerciseId: 20, content: "App эхлэх үед ажиллах тохиргооны файлууд", isCorrect: false, imageUrl: null },
        { id: 79, exerciseId: 20, content: "Модел класс байрлана", isCorrect: false, imageUrl: null },
        { id: 80, exerciseId: 20, content: "Харагдац буюу views байрлана", isCorrect: false, imageUrl: null },
      ],
    },
    {
      id: 21,
      lessonId: 11,
      prompt: "Models folder?",
      type: "translate",
      orderIndex: 2,
      options: [
        { id: 81, exerciseId: 21, content: "App-д шаардлагтай өгөгдөл буюу ӨС", isCorrect: false, imageUrl: null },
        { id: 82, exerciseId: 21, content: "App эхлэх үед ажиллах тохиргооны файлууд", isCorrect: false, imageUrl: null },
        { id: 83, exerciseId: 21, content: "Модел класс байрлана", isCorrect: true, imageUrl: null },
        { id: 84, exerciseId: 21, content: "Харагдац буюу views байрлана", isCorrect: false, imageUrl: null },
      ],
    },
    {
      id: 22,
      lessonId: 11,
      prompt: "Views folder?",
      type: "translate",
      orderIndex: 3,
      options: [
        { id: 85, exerciseId: 22, content: "App-д шаардлагтай өгөгдөл буюу ӨС", isCorrect: false, imageUrl: null },
        { id: 86, exerciseId: 22, content: "App эхлэх үед ажиллах тохиргооны файлууд", isCorrect: false, imageUrl: null },
        { id: 87, exerciseId: 22, content: "Модел класс байрлана", isCorrect: false, imageUrl: null },
        { id: 88, exerciseId: 22, content: "Харагдац буюу views байрлана", isCorrect: true, imageUrl: null },
      ],
    },
    {
      id: 23,
      lessonId: 11,
      prompt: "ASP.NET MVC-5 front-end талд ямар library (framework) ашигладаг вэ?",
      type: "translate",
      orderIndex: 4,
      options: [
        { id: 89, exerciseId: 23, content: "React js", isCorrect: false, imageUrl: null },
        { id: 90, exerciseId: 23, content: "Vue js", isCorrect: false, imageUrl: null },
        { id: 91, exerciseId: 23, content: "Bootstrap", isCorrect: true, imageUrl: null },
      ],
    },
  ],
  // Python Django Course - Lesson 12: MVC Pattern
  12: [
    {
      id: 24,
      lessonId: 12,
      prompt: "MVC pattern-ийн M гэж юу вэ?",
      type: "translate",
      orderIndex: 1,
      options: [
        { id: 92, exerciseId: 24, content: "Model", isCorrect: true, imageUrl: null },
        { id: 93, exerciseId: 24, content: "Module", isCorrect: false, imageUrl: null },
        { id: 94, exerciseId: 24, content: "Method", isCorrect: false, imageUrl: null },
        { id: 95, exerciseId: 24, content: "Manager", isCorrect: false, imageUrl: null },
      ],
    },
    {
      id: 25,
      lessonId: 12,
      prompt: "MVC pattern-ийн V гэж юу вэ?",
      type: "translate",
      orderIndex: 2,
      options: [
        { id: 96, exerciseId: 25, content: "View", isCorrect: true, imageUrl: null },
        { id: 97, exerciseId: 25, content: "Variable", isCorrect: false, imageUrl: null },
        { id: 98, exerciseId: 25, content: "Validator", isCorrect: false, imageUrl: null },
        { id: 99, exerciseId: 25, content: "Vector", isCorrect: false, imageUrl: null },
      ],
    },
  ],
  // Python Django Course - Lesson 13: Entity Framework Basics
  13: [
    {
      id: 26,
      lessonId: 13,
      prompt: "ORM?",
      type: "translate",
      orderIndex: 1,
      options: [
        { id: 100, exerciseId: 26, content: "Object relational mapping", isCorrect: true, imageUrl: null },
        { id: 101, exerciseId: 26, content: "Object response map", isCorrect: false, imageUrl: null },
        { id: 102, exerciseId: 26, content: "Object request map", isCorrect: false, imageUrl: null },
      ],
    },
    {
      id: 27,
      lessonId: 13,
      prompt: "Entity Framework nugget package manager console-с суулгах команд?",
      type: "translate",
      orderIndex: 2,
      options: [
        { id: 103, exerciseId: 27, content: "Install entityframework", isCorrect: false, imageUrl: null },
        { id: 104, exerciseId: 27, content: "Pip install entityframework", isCorrect: false, imageUrl: null },
        { id: 105, exerciseId: 27, content: "Install-package entityframework", isCorrect: true, imageUrl: null },
      ],
    },
    {
      id: 28,
      lessonId: 13,
      prompt: "Entity Framework хэдэн хөгжүүлэх аргтай гэж үздэг вэ? (Development approaches)",
      type: "translate",
      orderIndex: 3,
      options: [
        { id: 106, exerciseId: 28, content: "3", isCorrect: true, imageUrl: null },
        { id: 107, exerciseId: 28, content: "1", isCorrect: false, imageUrl: null },
        { id: 108, exerciseId: 28, content: "2", isCorrect: false, imageUrl: null },
        { id: 109, exerciseId: 28, content: "4", isCorrect: false, imageUrl: null },
      ],
    },
  ],
  // Python Django Course - Lesson 14: Database Migrations
  14: [
    {
      id: 29,
      lessonId: 14,
      prompt: "Entity Framework. Үүсгэсэн бэлэн өгөгдлийн сан байгаа үед аль аргыг ашиглах нь тохиромжтой вэ?",
      type: "translate",
      orderIndex: 1,
      options: [
        { id: 110, exerciseId: 29, content: "Code First", isCorrect: false, imageUrl: null },
        { id: 111, exerciseId: 29, content: "Model First", isCorrect: false, imageUrl: null },
        { id: 112, exerciseId: 29, content: "Database first", isCorrect: true, imageUrl: null },
      ],
    },
    {
      id: 30,
      lessonId: 14,
      prompt: "Entity Framework. Домайн классын тусламжтай өгөгдлийн санг үүсгэх үед аль аргыг ашиглах нь тохиромжтой вэ?",
      type: "translate",
      orderIndex: 2,
      options: [
        { id: 113, exerciseId: 30, content: "Code First", isCorrect: true, imageUrl: null },
        { id: 114, exerciseId: 30, content: "Model First", isCorrect: false, imageUrl: null },
        { id: 115, exerciseId: 30, content: "Database first", isCorrect: false, imageUrl: null },
      ],
    },
  ],
  // Python Django Course - Lesson 15: Django Models
  15: [
    {
      id: 31,
      lessonId: 15,
      prompt: "Django-д model үүсгэх жишээ?",
      type: "translate",
      orderIndex: 1,
      options: [
        { id: 116, exerciseId: 31, content: "class MyModel(models.Model):", isCorrect: true, imageUrl: null },
        { id: 117, exerciseId: 31, content: "class MyModel:", isCorrect: false, imageUrl: null },
        { id: 118, exerciseId: 31, content: "model MyModel { }", isCorrect: false, imageUrl: null },
        { id: 119, exerciseId: 31, content: "def MyModel():", isCorrect: false, imageUrl: null },
      ],
    },
    {
      id: 32,
      lessonId: 15,
      prompt: "Django-д migration үүсгэх команд?",
      type: "translate",
      orderIndex: 2,
      options: [
        { id: 120, exerciseId: 32, content: "python manage.py makemigrations", isCorrect: true, imageUrl: null },
        { id: 121, exerciseId: 32, content: "django makemigrations", isCorrect: false, imageUrl: null },
        { id: 122, exerciseId: 32, content: "python manage.py migrate", isCorrect: false, imageUrl: null },
        { id: 123, exerciseId: 32, content: "migrate create", isCorrect: false, imageUrl: null },
      ],
    },
  ],
  // Python Django Course - Lesson 16: Model Relationships
  16: [
    {
      id: 33,
      lessonId: 16,
      prompt: "Django-д ForeignKey ашиглах жишээ?",
      type: "translate",
      orderIndex: 1,
      options: [
        { id: 124, exerciseId: 33, content: "author = models.ForeignKey(User, on_delete=models.CASCADE)", isCorrect: true, imageUrl: null },
        { id: 125, exerciseId: 33, content: "author = ForeignKey(User)", isCorrect: false, imageUrl: null },
        { id: 126, exerciseId: 33, content: "author: ForeignKey[User]", isCorrect: false, imageUrl: null },
        { id: 127, exerciseId: 33, content: "author = User.foreignKey()", isCorrect: false, imageUrl: null },
      ],
    },
    {
      id: 34,
      lessonId: 16,
      prompt: "Django-д ManyToManyField ашиглах жишээ?",
      type: "translate",
      orderIndex: 2,
      options: [
        { id: 128, exerciseId: 34, content: "tags = models.ManyToManyField(Tag)", isCorrect: true, imageUrl: null },
        { id: 129, exerciseId: 34, content: "tags = ManyToManyField(Tag)", isCorrect: false, imageUrl: null },
        { id: 130, exerciseId: 34, content: "tags: ManyToMany[Tag]", isCorrect: false, imageUrl: null },
        { id: 131, exerciseId: 34, content: "tags = Tag.manyToMany()", isCorrect: false, imageUrl: null },
      ],
    },
  ],
  // Python Django Course - Lesson 17: Django Views
  17: [
    {
      id: 35,
      lessonId: 17,
      prompt: "Django-д function-based view бичих жишээ?",
      type: "translate",
      orderIndex: 1,
      options: [
        { id: 132, exerciseId: 35, content: "def my_view(request): return HttpResponse('Hello')", isCorrect: true, imageUrl: null },
        { id: 133, exerciseId: 35, content: "function my_view(request) { }", isCorrect: false, imageUrl: null },
        { id: 134, exerciseId: 35, content: "view my_view(request):", isCorrect: false, imageUrl: null },
        { id: 135, exerciseId: 35, content: "def my_view():", isCorrect: false, imageUrl: null },
      ],
    },
    {
      id: 36,
      lessonId: 17,
      prompt: "Django-д class-based view бичих жишээ?",
      type: "translate",
      orderIndex: 2,
      options: [
        { id: 136, exerciseId: 36, content: "class MyView(View):", isCorrect: true, imageUrl: null },
        { id: 137, exerciseId: 36, content: "class MyView extends View:", isCorrect: false, imageUrl: null },
        { id: 138, exerciseId: 36, content: "class MyView(View) { }", isCorrect: false, imageUrl: null },
        { id: 139, exerciseId: 36, content: "def class MyView:", isCorrect: false, imageUrl: null },
      ],
    },
  ],
  // Python Django Course - Lesson 18: Django Templates
  18: [
    {
      id: 37,
      lessonId: 18,
      prompt: "Django template-д variable хэвлэх жишээ?",
      type: "translate",
      orderIndex: 1,
      options: [
        { id: 140, exerciseId: 37, content: "{{ variable }}", isCorrect: true, imageUrl: null },
        { id: 141, exerciseId: 37, content: "{{variable}}", isCorrect: true, imageUrl: null },
        { id: 142, exerciseId: 37, content: "${variable}", isCorrect: false, imageUrl: null },
        { id: 143, exerciseId: 37, content: "#{variable}", isCorrect: false, imageUrl: null },
      ],
    },
    {
      id: 38,
      lessonId: 18,
      prompt: "Django template-д for loop бичих жишээ?",
      type: "translate",
      orderIndex: 2,
      options: [
        { id: 144, exerciseId: 38, content: "{% for item in items %}{% endfor %}", isCorrect: true, imageUrl: null },
        { id: 145, exerciseId: 38, content: "{% for item in items %}", isCorrect: false, imageUrl: null },
        { id: 146, exerciseId: 38, content: "{{ for item in items }}", isCorrect: false, imageUrl: null },
        { id: 147, exerciseId: 38, content: "{% loop item in items %}", isCorrect: false, imageUrl: null },
      ],
    },
  ],
};

// Mock Quests
export const MOCK_QUESTS: QuestType[] = [
  {
    code: "STREAK",
    progress: 3,
    total: 7,
    active: true,
  },
  {
    code: "ACCURACY",
    progress: 8,
    total: 10,
    active: true,
  },
  {
    code: "PERFECT",
    progress: 2,
    total: 5,
    active: false,
  },
];

// Mock Monthly Challenge
export const MOCK_MONTHLY_CHALLENGE: QuestType = {
  code: "STREAK",
  progress: 15,
  total: 30,
  active: true,
};

// Helper function to get course progress by course ID
export function getMockCourseProgress(courseId: number): CourseProgressType {
  // Find first section for this course
  const firstSection = MOCK_SECTIONS.find(s => s.courseId === courseId);
  if (!firstSection) {
    throw new Error(`No section found for course ${courseId}`);
  }
  
  // Find first unit in this section
  const firstUnit = MOCK_UNITS.find(u => u.sectionId === firstSection.id);
  if (!firstUnit) {
    throw new Error(`No unit found for section ${firstSection.id}`);
  }
  
  // Find first lesson in this unit
  const firstLesson = MOCK_LESSONS.find(l => l.unitId === firstUnit.id);
  if (!firstLesson) {
    throw new Error(`No lesson found for unit ${firstUnit.id}`);
  }
  
  return {
    id: courseId,
    userId: 1,
    courseId: courseId,
    sectionId: firstSection.id,
    isComplete: false,
    currentLessonId: firstLesson.id,
    completedLessons: 0,
  };
}

// Mock Course Progress (default for course 1)
export const MOCK_COURSE_PROGRESS: CourseProgressType = {
  id: 1,
  userId: 1,
  courseId: 1,
  sectionId: 1,
  isComplete: false,
  currentLessonId: 3,
  completedLessons: 2,
};

// Mock Avatars
export const MOCK_AVATARS: string[] = [
  "/pfp/avatOne.png",
  "/pfp/avatTwo.png",
  "/pfp/avatThree.png",
  "/pfp/avatFour.png",
  "/pfp/avatFive.png",
  "/pfp/avatSix.png",
];

// Mock Users for Leaderboard
export const MOCK_USERS: UserType[] = [
  { ...MOCK_USER, id: 1, username: "demo_user", points: 1250, streakLength: 5 },
  { ...MOCK_USER, id: 2, username: "user2", firstName: "John", lastName: "Doe", points: 1100, streakLength: 3 },
  { ...MOCK_USER, id: 3, username: "user3", firstName: "Jane", lastName: "Smith", points: 980, streakLength: 7 },
  { ...MOCK_USER, id: 4, username: "user4", firstName: "Bob", lastName: "Wilson", points: 850, streakLength: 2 },
  { ...MOCK_USER, id: 5, username: "user5", firstName: "Alice", lastName: "Brown", points: 720, streakLength: 4 },
];

// Helper function to get exercises by lesson ID
export function getMockExercises(lessonId: number): Exercise[] {
  return MOCK_EXERCISES[lessonId] || [];
}

// Helper function to get lessons by unit ID
export function getMockLessonsByUnit(unitId: number): LessonType[] {
  return MOCK_LESSONS.filter(lesson => lesson.unitId === unitId);
}

// Helper function to get units by section ID
export function getMockUnitsBySection(sectionId: number): UnitType[] {
  return MOCK_UNITS.filter(unit => unit.sectionId === sectionId);
}

// Helper function to get section tree
export function getMockSectionTree(sectionId: number): FlatSectionTree {
  const section = MOCK_SECTIONS.find(s => s.id === sectionId);
  if (!section) {
    throw new Error(`Section ${sectionId} not found`);
  }
  
  const units = getMockUnitsBySection(sectionId);
  
  return {
    courseId: section.courseId,
    units: units.map(unit => ({
      id: unit.id,
      orderIndex: unit.orderIndex,
      lessons: getMockLessonsByUnit(unit.id).map(lesson => ({
        id: lesson.id,
        orderIndex: lesson.orderIndex,
      })),
    })),
  };
}

