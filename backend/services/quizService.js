const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.createQuiz = async (data) => {
  return prisma.quiz.create({ data });
};

exports.getQuizById = async (id) => {
  return prisma.quiz.findUnique({ where: { id } });
};

exports.getAllQuizzes = async () => {
  return prisma.quiz.findMany();
};
