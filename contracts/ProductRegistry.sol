// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ProductRegistry {

    struct Product {
        string serialNumber;
        string productName;
        string manufacturer;
        string batchNumber;
        bool exists;
    }

    mapping(string => Product) private products;

    function registerProduct(
        string memory _serial,
        string memory _name,
        string memory _manufacturer,
        string memory _batch
    ) public {

        require(!products[_serial].exists, "Product already exists");

        products[_serial] = Product({
            serialNumber: _serial,
            productName: _name,
            manufacturer: _manufacturer,
            batchNumber: _batch,
            exists: true
        });
    }

    function verifyProduct(string memory _serial)
        public
        view
        returns (bool)
    {
        return products[_serial].exists;
    }

    function getProduct(string memory _serial)
        public
        view
        returns(
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        require(products[_serial].exists, "Product not found");

        Product memory p = products[_serial];

        return (
            p.serialNumber,
            p.productName,
            p.manufacturer,
            p.batchNumber
        );
    }
}