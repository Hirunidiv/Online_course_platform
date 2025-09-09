const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.createProfile = async (data) => {
  // Check if a profile with the same userId already exists
  const existingProfile = await prisma.profile.findUnique({
    where: { userId: data.userId }
  });
  if (existingProfile) {
    // You can throw an error, return null, or return the existing profile
    // Here, we throw an error
    throw new Error('Profile for this user already exists.');
  }
  return prisma.profile.create({ data });
};

exports.getProfileById = async (id) => {
  return prisma.profile.findUnique({ where: { id: Number(id) } });
};

exports.getAllProfiles = async () => {
  return prisma.profile.findMany();
};
