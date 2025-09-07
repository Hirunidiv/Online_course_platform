const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.createContent = async (data) => {
  return prisma.content.create({ data });
};

exports.getContentById = async (id) => {
  return prisma.content.findUnique({ where: { id } });
};

exports.getAllContents = async () => {
  return prisma.content.findMany();
};
