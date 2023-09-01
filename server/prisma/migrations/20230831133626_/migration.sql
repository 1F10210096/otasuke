-- CreateTable
CREATE TABLE "SendForm" (
    "id" TEXT NOT NULL,
    "senderName" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "sent_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SendForm_pkey" PRIMARY KEY ("id")
);
