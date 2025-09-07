const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.createSubmission = async (data) => {
  return prisma.submission.create({ data });
};

exports.getSubmissionById = async (id) => {
  return prisma.submission.findUnique({ where: { id } });
};

exports.getAllSubmissions = async () => {
  return prisma.submission.findMany();
};
