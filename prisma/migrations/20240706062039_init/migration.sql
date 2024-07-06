-- CreateTable
CREATE TABLE `Referral` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `yourName` VARCHAR(191) NOT NULL,
    `yourEmail` VARCHAR(191) NOT NULL,
    `yourPhone` VARCHAR(191) NOT NULL,
    `refereeName` VARCHAR(191) NOT NULL,
    `refereeEmail` VARCHAR(191) NOT NULL,
    `refereePhone` VARCHAR(191) NOT NULL,
    `courseInterested` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO `referrals` (`yourName`, `yourEmail`, `yourPhone`, `refereeName`, `refereeEmail`, `refereePhone`, `courseInterested`)
VALUES
  ('John Doe', 'john.doe@example.com', '+1234567890', 'Jane Smith', 'jane.smith@example.com', '+9876543210', 'Web Development'),
  ('Alice Johnson', 'alice.johnson@example.com', '+1122334455', 'Bob Brown', 'bob.brown@example.com', '+9988776655', 'Data Science');