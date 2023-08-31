-- CreateTable
CREATE TABLE "SendCustomMsg" (
    "id" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "sender_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "sent_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SendCustomMsg_pkey" PRIMARY KEY ("id")
);
