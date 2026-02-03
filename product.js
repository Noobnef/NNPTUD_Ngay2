// Cau 1
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Cau 2
const products = [
    new Product(1, "Máy lọc không khí", 3500000, 20, "Gia dụng", true),
    new Product(2, "Tủ lạnh Samsung", 15000000, 5, "Điện lạnh", true),
    new Product(3, "Máy giặt", 12000000, 0, "Điện lạnh", false),
    new Product(4, "Robot hút bụi", 8500000, 12, "Gia dụng", true),
    new Product(5, "Nồi chiên không dầu", 4200000, 0, "Nhà bếp", true),
    new Product(6, "Bếp từ", 35000000, 2, "Nhà bếp", true)
];

console.log("--- Mảng sản phẩm ban đầu ---");
console.log(products);

// Cau 3
const nameAndPrice = products.map(p => ({ name: p.name, price: p.price }));
console.log("\n--- Câu 3: Tên và giá sản phẩm ---");
console.log(nameAndPrice);

// Cau 4
const productsInStock = products.filter(p => p.quantity > 0);
console.log("\n--- Câu 4: Sản phẩm còn hàng (quantity > 0) ---");
console.log(productsInStock);

// Cau 5
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log(`\n--- Câu 5: Có sản phẩm > 30tr không? ${hasExpensiveProduct}`);

// Cau 6
const allGiaDungAvailable = products
    .filter(p => p.category === "Gia dụng")
    .every(p => p.isAvailable === true);
console.log(`\n--- Câu 6: Tất cả đồ Gia dụng đang bán? ${allGiaDungAvailable}`);

// Cau 7
const totalValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
console.log(`\n--- Câu 7: Tổng giá trị kho hàng: ${totalValue.toLocaleString('vi-VN')} VND`);

// Cau 8
console.log("\n--- Câu 8: Duyệt bằng for...of ---");
for (const p of products) {
    const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${p.name} - ${p.category} - ${status}`);
}

// Cau 9
console.log("\n--- Câu 9: Duyệt thuộc tính bằng for...in (Ví dụ sản phẩm đầu tiên) ---");
const firstProduct = products[0];
for (const key in firstProduct) {
    if (typeof firstProduct[key] !== 'function') {
        console.log(`${key}: ${firstProduct[key]}`);
    }
}

// Cau 10
const availableAndInStockNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
console.log("\n--- Câu 10: Tên sản phẩm đang bán và còn hàng ---");
console.log(availableAndInStockNames);