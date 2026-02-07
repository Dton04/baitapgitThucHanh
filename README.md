# 📦 Bài tập thực hành GIT
> **Môn học:** Công cụ và môi trường phát triển phần mềm

## 👥 Danh sách thành viên (Nhóm 7)
* **Nguyễn Tấn Đạt** - *Team Lead & Backend Core*
* **Ngô Tấn Hưng** - *Developer*
* **Nguyễn Minh Quang** - *Developer*
* **Trịnh Trường An** - *Developer*
* **Lê Tấn Cường** - *Developer*
* **Trần Lâm Chí Khanh** - *Developer*
* **Nguyễn Hoài Nam** - *Developer*

---

## 🚀 Phân công nhiệm vụ (Feature Branches)

Dự án áp dụng mô hình **Git Flow**. Mỗi thành viên chịu trách nhiệm một nhánh tính năng riêng:

### 🔹 Nhóm Backend (BE)
* **Trịnh Trường An** (`feature/be1/products`): 
    - Thực hiện CRUD Sản phẩm (Thêm, sửa, xóa, tìm kiếm, phân loại).
* **Ngô Tấn Hưng** (`feature/be2/orders`): 
    - Quản lý Đơn hàng & Giỏ hàng (Logic tính tiền, lưu đơn).
* **Nguyễn Minh Quang** (`feature/be3/users-roles`): 
    - Quản lý User, phân quyền (Admin/Customer) và Profile cá nhân.

### 🔸 Nhóm Frontend (FE)
* **Lê Tấn Cường** (`feature/fe1/home-catalog`): 
    - Trang chủ, danh sách sản phẩm và bộ lọc tìm kiếm.
* **Trần Lâm Chí Khanh** (`feature/fe2/auth-ui`): 
    - Giao diện Đăng ký, Đăng nhập và Quản lý tài khoản.
* **Nguyễn Hoài Nam** (`feature/fe3/cart-checkout`): 
    - Giao diện Giỏ hàng, Form thanh toán và Lịch sử đơn hàng.

---

## 🛠 Quy trình Git bắt buộc
1. Không push trực tiếp lên `main` và `develop`.
2. Mọi tính năng thực hiện trên nhánh `feature/*`.
3. Tạo **Pull Request** và chờ Lead duyệt trước khi merge vào `develop`.