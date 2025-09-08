const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.createForum = async (data) => {
  return prisma.forum.create({ data });
};

exports.getForumById = async (id) => {
  return prisma.forum.findUnique({ where: { id: Number(id) } });
};

exports.getAllForums = async () => {
  return prisma.forum.findMany();
};
