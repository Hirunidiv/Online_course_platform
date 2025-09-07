const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.createMessage = async (data) => {
  return prisma.message.create({ data });
};

exports.getMessageById = async (id) => {
  return prisma.message.findUnique({ where: { id } });
};

exports.getAllMessages = async () => {
  return prisma.message.findMany();
};
