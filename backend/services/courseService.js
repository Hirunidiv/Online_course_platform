const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.createCourse = async (data) => {
  return prisma.course.create({ data });
};

exports.getCourseById = async (id) => {
  return prisma.course.findUnique({ where: { id: Number(id) } });
};

exports.getAllCourses = async () => {
  return prisma.course.findMany();
};

// ...other course service methods
