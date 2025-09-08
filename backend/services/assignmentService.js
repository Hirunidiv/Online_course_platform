const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.createAssignment = async (data) => {
  return prisma.assignment.create({ data });
};

exports.getAssignmentById = async (id) => {
  return prisma.assignment.findUnique({ where: { id: Number(id) } });
};

exports.getAllAssignments = async () => {
  return prisma.assignment.findMany();
};
