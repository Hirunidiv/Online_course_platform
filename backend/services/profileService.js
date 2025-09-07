const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.createProfile = async (data) => {
  return prisma.profile.create({ data });
};

exports.getProfileById = async (id) => {
  return prisma.profile.findUnique({ where: { id } });
};

exports.getAllProfiles = async () => {
  return prisma.profile.findMany();
};
