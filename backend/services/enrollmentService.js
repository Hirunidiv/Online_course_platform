const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// Enroll a user in a course
async function enroll({ studentId, courseId }) {
  return await prisma.enrollment.create({
    data: {
      studentId,
      courseId,
    },
  });
}

// Get enrollment by ID
async function getEnrollmentById(id) {
  return await prisma.enrollment.findUnique({
    where: { id: Number(id) },
    include: {
      student: true,
      course: true,
    },
  });
}

// Get all enrollments for a user
async function getUserEnrollments(studentId) {
  return await prisma.enrollment.findMany({
    where: { studentId: Number(studentId) },
    include: {
      course: true,
    },
  });
}

module.exports = {
  enroll,
  getEnrollmentById,
  getUserEnrollments,
  // ...other enrollment service methods
};
