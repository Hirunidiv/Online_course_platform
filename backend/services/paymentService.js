const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.createPayment = async (data) => {
  return prisma.payment.create({ data });
};

exports.getPaymentById = async (id) => {
  return prisma.payment.findUnique({ where: { id } });
};

exports.getAllPayments = async () => {
  return prisma.payment.findMany();
};
