const hre = require("hardhat");

async function main() {

    const contractAddress = "0xEed6064b7AaFA2515599c1057f49e4787b480f3E";

    const productRegistry = await hre.ethers.getContractAt(
        "ProductRegistry",
        contractAddress
    );

    const products = [
        {
            serial: "SN1001",
            name: "iPhone 16",
            manufacturer: "Apple",
            batch: "APPLE001"
        },
        {
            serial: "SN1002",
            name: "Galaxy S25 Ultra",
            manufacturer: "Samsung",
            batch: "SAMSUNG001"
        },
        {
            serial: "SN1003",
            name: "OnePlus 14",
            manufacturer: "OnePlus",
            batch: "ONEPLUS001"
        },
        {
            serial: "SN1004",
            name: "Pixel 10 Pro",
            manufacturer: "Google",
            batch: "GOOGLE001"
        },
        {
            serial: "SN1005",
            name: "Redmi Note 16 Pro",
            manufacturer: "Xiaomi",
            batch: "XIAOMI001"
        },
        {
            serial: "SN1006",
            name: "Vivo X300",
            manufacturer: "Vivo",
            batch: "VIVO001"
        },
        {
            serial: "SN1007",
            name: "OPPO Find X9",
            manufacturer: "OPPO",
            batch: "OPPO001"
        },
        {
            serial: "SN1008",
            name: "Nothing Phone 4",
            manufacturer: "Nothing",
            batch: "NOTHING001"
        },
        {
            serial: "SN1009",
            name: "Moto Edge 70",
            manufacturer: "Motorola",
            batch: "MOTO001"
        },
        {
            serial: "SN1010",
            name: "Realme GT 8 Pro",
            manufacturer: "Realme",
            batch: "REALME001"
        }
    ];

    for (const product of products) {

        console.log(`Registering ${product.serial}...`);

        try {

            const tx = await productRegistry.registerProduct(
                product.serial,
                product.name,
                product.manufacturer,
                product.batch
            );

            await tx.wait();

            console.log(`✅ ${product.serial} registered successfully`);

        } catch (err) {
    console.log(`❌ ${product.serial} failed`);
    console.log(err.message);
}
    }

    console.log("\n🎉 All products processed successfully!");
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});