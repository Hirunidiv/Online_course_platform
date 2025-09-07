const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.createNotification = async (data) => {
  return prisma.notification.create({ data });
};

exports.getNotificationById = async (id) => {
  return prisma.notification.findUnique({ where: { id } });
};

exports.getAllNotifications = async () => {
  return prisma.notification.findMany();
};
