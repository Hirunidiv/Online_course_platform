const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.createCertificate = async (data) => {
  return prisma.certificate.create({ data });
};

exports.getCertificateById = async (id) => {
  return prisma.certificate.findUnique({ where: { id } });
};

exports.getAllCertificates = async () => {
  return prisma.certificate.findMany();
};
