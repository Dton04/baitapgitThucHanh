// products.js
// Danh sách sản phẩm mẫu
const products = [
    { name: "Sản phẩm 1", category: "Loại A", price: 10000 },
    { name: "Sản phẩm 2", category: "Loại B", price: 20000 },
    { name: "Sản phẩm 3", category: "Loại A", price: 15000 }
];

// Hàm lấy danh sách sản phẩm
function getProducts() {
    return products;
}

// Hàm thêm sản phẩm
function addProduct(product) {
    products.push(product);
}

// Hàm sửa sản phẩm
function updateProduct(index, product) {
    products[index] = product;
}

// Hàm xóa sản phẩm
function deleteProduct(index) {
    products.splice(index, 1);
}

// Hàm tìm kiếm sản phẩm theo tên
function searchProducts(keyword) {
    return products.filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()));
}

// Hàm lọc sản phẩm theo loại
function filterProductsByCategory(category) {
    return products.filter(p => p.category === category);
}
