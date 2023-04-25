-- CreateTable
CREATE TABLE `buyer` (
    `idbuyer` INTEGER NOT NULL AUTO_INCREMENT,
    `worker_idworker` INTEGER NOT NULL,

    INDEX `fk_buyer_worker_idx`(`worker_idworker`),
    PRIMARY KEY (`idbuyer`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `director` (
    `iddirector` INTEGER NOT NULL AUTO_INCREMENT,
    `worker_idworker` INTEGER NOT NULL,

    INDEX `fk_director_worker1_idx`(`worker_idworker`),
    PRIMARY KEY (`iddirector`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `purchase` (
    `idpurchase` INTEGER NOT NULL AUTO_INCREMENT,
    `purchase_date` DATE NOT NULL,
    `purchase_price` FLOAT NOT NULL,
    `supplier_idsupplier` INTEGER NOT NULL,
    `buyer_idbuyer` INTEGER NOT NULL,

    INDEX `fk_purchase_buyer1_idx`(`buyer_idbuyer`),
    INDEX `fk_purchase_supplier1_idx`(`supplier_idsupplier`),
    PRIMARY KEY (`idpurchase`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sale` (
    `idsale` INTEGER NOT NULL AUTO_INCREMENT,
    `sale_date` DATE NOT NULL,
    `sale_price` FLOAT NOT NULL,
    `saller_idsaller` INTEGER NOT NULL,

    INDEX `fk_sale_saller1_idx`(`saller_idsaller`),
    PRIMARY KEY (`idsale`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `saller` (
    `idsaller` INTEGER NOT NULL AUTO_INCREMENT,
    `worker_idworker` INTEGER NOT NULL,

    INDEX `fk_saller_worker1_idx`(`worker_idworker`),
    PRIMARY KEY (`idsaller`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shoes` (
    `idshoes` INTEGER NOT NULL AUTO_INCREMENT,
    `model` VARCHAR(100) NOT NULL,
    `size` INTEGER NOT NULL,
    `article` VARCHAR(15) NOT NULL,
    `season` VARCHAR(15) NOT NULL,
    `brand` VARCHAR(150) NOT NULL,
    `sex` VARCHAR(45) NOT NULL,
    `price` FLOAT NOT NULL,
    `amount` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`idshoes`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shoes_purchase` (
    `purchase_idpurchase` INTEGER NOT NULL,
    `shoes_idshoes` INTEGER NOT NULL,

    INDEX `fk_purchase_has_shoes_shoes1_idx`(`shoes_idshoes`),
    PRIMARY KEY (`purchase_idpurchase`, `shoes_idshoes`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shoes_sale` (
    `shoes_idshoes` INTEGER NOT NULL,
    `sale_idsale` INTEGER NOT NULL,

    INDEX `fk_shoes_has_sale_sale1_idx`(`sale_idsale`),
    INDEX `fk_shoes_has_sale_shoes1_idx`(`shoes_idshoes`),
    PRIMARY KEY (`shoes_idshoes`, `sale_idsale`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `supplier` (
    `idsupplier` INTEGER NOT NULL AUTO_INCREMENT,
    `supplier_name` VARCHAR(250) NOT NULL,
    `address` VARCHAR(250) NOT NULL,

    PRIMARY KEY (`idsupplier`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `worker` (
    `idworker` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(250) NOT NULL,
    `passportdata` VARCHAR(255) NOT NULL,
    `data_of_employment` DATE NOT NULL,

    PRIMARY KEY (`idworker`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `buyer` ADD CONSTRAINT `fk_buyer_worker` FOREIGN KEY (`worker_idworker`) REFERENCES `worker`(`idworker`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `director` ADD CONSTRAINT `fk_director_worker1` FOREIGN KEY (`worker_idworker`) REFERENCES `worker`(`idworker`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `purchase` ADD CONSTRAINT `fk_purchase_buyer1` FOREIGN KEY (`buyer_idbuyer`) REFERENCES `buyer`(`idbuyer`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `purchase` ADD CONSTRAINT `fk_purchase_supplier1` FOREIGN KEY (`supplier_idsupplier`) REFERENCES `supplier`(`idsupplier`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sale` ADD CONSTRAINT `fk_sale_saller1` FOREIGN KEY (`saller_idsaller`) REFERENCES `saller`(`idsaller`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `saller` ADD CONSTRAINT `fk_saller_worker1` FOREIGN KEY (`worker_idworker`) REFERENCES `worker`(`idworker`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shoes_purchase` ADD CONSTRAINT `fk_purchase_has_shoes_purchase1` FOREIGN KEY (`purchase_idpurchase`) REFERENCES `purchase`(`idpurchase`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `shoes_purchase` ADD CONSTRAINT `fk_purchase_has_shoes_shoes1` FOREIGN KEY (`shoes_idshoes`) REFERENCES `shoes`(`idshoes`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `shoes_sale` ADD CONSTRAINT `fk_shoes_has_sale_sale1` FOREIGN KEY (`sale_idsale`) REFERENCES `sale`(`idsale`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shoes_sale` ADD CONSTRAINT `fk_shoes_has_sale_shoes1` FOREIGN KEY (`shoes_idshoes`) REFERENCES `shoes`(`idshoes`) ON DELETE RESTRICT ON UPDATE CASCADE;
