/*
  Warnings:

  - Added the required column `Answer` to the `SendForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Email` to the `SendForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SendForm" ADD COLUMN     "Answer" INTEGER NOT NULL,
ADD COLUMN     "Email" TEXT NOT NULL;
