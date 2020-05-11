import React from "react";

const AddStudent = React.lazy(() => import("./views/Students/Add"));
const StudentList = React.lazy(() => import("./views/Students/List"));
const BulkAdd = React.lazy(() => import("./views/Students/BulkAdd"));
const Promotion = React.lazy(() => import("./views/Students/Promotion"));
const StaffList = React.lazy(() => import("./views/Staff/StaffList"));
const StaffForm = React.lazy(() => import("./views/Staff/StaffForm"));
const Parents = React.lazy(() => import("./views/Parents"));
const Classes = React.lazy(() => import("./views/Class/Classes"));
const Section = React.lazy(() => import("./views/Class/Section"));
const Syllabus = React.lazy(() => import("./views/Class/Syllabus"));
const Subject = React.lazy(() => import("./views/Subject"));
const StudentAttendance = React.lazy(() =>
  import("./views/Attendance/Student")
);
const StaffAttendance = React.lazy(() => import("./views/Attendance/Staff"));

const Dashboard = React.lazy(() => import("./views/Dashboard"));
const ExamList = React.lazy(() => import("./views/Exam/ExamList"));
const ManageMarks = React.lazy(() => import("./views/Exam/ManageMarks"));
const SendMarks = React.lazy(() => import("./views/Exam/SendMarks"));
const Grades = React.lazy(() => import("./views/Exam/Grades"));
const StudyMaterial = React.lazy(() => import("./views/StudyMaterial"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  // { path: "/", exact: true, name: "Home" },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    role: ["admin", "student"],
  },

  {
    path: "/student/form/:id?",
    name: "Student",
    component: AddStudent,
    role: ["student"],
  },
  {
    path: "/student/list",
    name: "All Student",
    component: StudentList,
    role: ["student"],
  },
  {
    path: "/student/bulk-add",
    name: "Bulk Add",
    component: BulkAdd,
    role: ["student"],
  },
  {
    path: "/student/promotion",
    name: "Promotion",
    component: Promotion,
    role: ["student"],
  },
  {
    path: "/staff/list",
    name: "Staff",
    component: StaffList,
    role: ["admin"],
  },
  {
    path: "/staff/form",
    name: "Add Staff",
    component: StaffForm,
    role: ["admin"],
  },
  {
    path: "/parents",
    name: "Parents",
    component: Parents,
    role: ["admin"],
  },
  {
    path: "/class/classes",
    name: "Classes",
    component: Classes,
    role: ["admin"],
  },
  {
    path: "/class/section",
    name: "Section",
    component: Section,
    role: ["admin"],
  },
  {
    path: "/class/syllabus",
    name: "Syllabus",
    component: Syllabus,
    role: ["admin"],
  },
  {
    path: "/subject",
    name: "Subject",
    component: Subject,
    role: ["admin"],
  },
  {
    path: "/subject",
    name: "Subject",
    component: Subject,
    role: ["admin"],
  },
  {
    path: "/attendance/student",
    name: "Student Attendance",
    component: StudentAttendance,
  },
  {
    path: "/attendance/staff",
    name: "Staff Attendance",
    component: StaffAttendance,
  },
  {
    path: "/exam/list",
    name: "Exam List",
    component: ExamList,
  },
  {
    path: "/exam/manage-marks",
    name: "Manage Marks",
    component: ManageMarks,
  },
  {
    path: "/exam/send-marks",
    name: "Send Marks",
    component: SendMarks,
  },
  {
    path: "/exam/grades",
    name: "Grades",
    component: Grades,
  },
  {
    path: "/study-material",
    name: "Study Material",
    component: StudyMaterial,
  },
];

export default routes;
