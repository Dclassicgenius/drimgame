-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "onboarded" BOOLEAN NOT NULL DEFAULT false,
    "bio" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "List" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "List_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" INTEGER NOT NULL,
    "category" INTEGER NOT NULL,
    "cover" INTEGER NOT NULL,
    "created_at" INTEGER NOT NULL,
    "external_games" INTEGER[],
    "first_release_date" INTEGER NOT NULL,
    "game_modes" INTEGER[],
    "genres" INTEGER[],
    "involved_companies" INTEGER[],
    "keywords" INTEGER[],
    "name" TEXT NOT NULL,
    "platforms" INTEGER[],
    "player_perspectives" INTEGER[],
    "release_dates" INTEGER[],
    "screenshots" INTEGER[],
    "similar_games" INTEGER[],
    "slug" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "tags" INTEGER[],
    "themes" INTEGER[],
    "updated_at" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "websites" INTEGER[],
    "checksum" TEXT NOT NULL,
    "language_supports" INTEGER[],

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ListGame" (
    "listId" TEXT NOT NULL,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "ListGame_pkey" PRIMARY KEY ("listId","gameId")
);

-- CreateTable
CREATE TABLE "ApiToken" (
    "tokenId" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "expiresIn" TIMESTAMP(3) NOT NULL,
    "addedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ApiToken_pkey" PRIMARY KEY ("tokenId")
);

-- AddForeignKey
ALTER TABLE "List" ADD CONSTRAINT "List_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListGame" ADD CONSTRAINT "ListGame_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListGame" ADD CONSTRAINT "ListGame_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
