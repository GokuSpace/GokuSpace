/*
  Warnings:

  - You are about to alter the column `longitude` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Real`.
  - You are about to alter the column `latitude` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Real`.
  - You are about to alter the column `latitude` on the `User` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Real`.
  - You are about to alter the column `longitude` on the `User` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Real`.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "locationString" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "picture" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "longitude" SET DATA TYPE REAL,
ALTER COLUMN "latitude" SET DATA TYPE REAL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "latitude" SET DATA TYPE REAL,
ALTER COLUMN "longitude" SET DATA TYPE REAL;
