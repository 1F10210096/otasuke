/*
  Warnings:

  - Changed the type of `sent_at` on the `SendForm` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "SendForm" DROP COLUMN "sent_at",
ADD COLUMN     "sent_at" INTEGER NOT NULL;
