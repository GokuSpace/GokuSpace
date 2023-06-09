/*
  Warnings:

  - You are about to drop the column `Attachment` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `favoriteSeriesId` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "RoomStatus" AS ENUM ('OPEN', 'PENDING', 'CLOSED');

-- CreateEnum
CREATE TYPE "Reaction" AS ENUM ('LIKE', 'FUNNY', 'BOO');

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "Attachment",
ADD COLUMN     "attachment" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "favoriteSeriesId",
ADD COLUMN     "favoriteAnimeId" TEXT;

-- CreateTable
CREATE TABLE "ChatSession" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "RoomStatus" NOT NULL,
    "chatStarterId" TEXT NOT NULL,

    CONSTRAINT "ChatSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "reactions" "Reaction" NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ReceivedChatInvite" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ChatSession_chatStarterId_key" ON "ChatSession"("chatStarterId");

-- CreateIndex
CREATE UNIQUE INDEX "_ReceivedChatInvite_AB_unique" ON "_ReceivedChatInvite"("A", "B");

-- CreateIndex
CREATE INDEX "_ReceivedChatInvite_B_index" ON "_ReceivedChatInvite"("B");

-- AddForeignKey
ALTER TABLE "ChatSession" ADD CONSTRAINT "ChatSession_chatStarterId_fkey" FOREIGN KEY ("chatStarterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "ChatSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReceivedChatInvite" ADD CONSTRAINT "_ReceivedChatInvite_A_fkey" FOREIGN KEY ("A") REFERENCES "ChatSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReceivedChatInvite" ADD CONSTRAINT "_ReceivedChatInvite_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
