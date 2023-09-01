/*
  Warnings:

  - You are about to drop the column `Answer` on the `SendForm` table. All the data in the column will be lost.
  - Added the required column `Age` to the `SendForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SendForm" DROP COLUMN "Answer",
ADD COLUMN     "Age" INTEGER NOT NULL;
