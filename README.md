# Lucky Money Spin - Vòng Quay Lì Xì 2024

Ứng dụng vòng quay lì xì với các mệnh giá từ 1.000 VNĐ đến 1.000.000 VNĐ

## Tính Năng

- ✅ Vòng quay với 11 mệnh giá: 1k, 2k, 5k, 10k, 20k, 50k, 100k, 200k, 500k, **1.000k (1 triệu VNĐ)**
- ✅ Hiệu ứng âm thanh và animation đẹp mắt
- ✅ Lịch sử trúng thưởng
- ✅ **Force kết quả** - có thể cài đặt để vòng quay luôn ra một mệnh giá cụ thể
- ✅ Responsive trên mobile và desktop

## Cài Đặt

1. Clone project về máy
2. Mở file `index.html` bằng trình duyệt
3. Hoặc chạy local server:
   ```bash
   python -m http.server 8000
   # hoặc
   npx serve
   ```

## Cấu Hình Force Kết Quả

### Mở file `config.js` và tìm dòng:

```javascript
FORCE_RESULT_INDEX: 10, // Bắt buộc ra 1.000.000 VNĐ
```

### Các giá trị có thể sử dụng:

- `FORCE_RESULT_INDEX: null` - Vòng quay ngẫu nhiên theo tỷ lệ (raties)
- `FORCE_RESULT_INDEX: 0` - Luôn ra "Ô mất lượt"
- `FORCE_RESULT_INDEX: 1` - Luôn ra 1.000 VNĐ
- `FORCE_RESULT_INDEX: 2` - Luôn ra 2.000 VNĐ
- `FORCE_RESULT_INDEX: 3` - Luôn ra 5.000 VNĐ
- `FORCE_RESULT_INDEX: 4` - Luôn ra 10.000 VNĐ
- `FORCE_RESULT_INDEX: 5` - Luôn ra 20.000 VNĐ
- `FORCE_RESULT_INDEX: 6` - Luôn ra 50.000 VNĐ
- `FORCE_RESULT_INDEX: 7` - Luôn ra 100.000 VNĐ
- `FORCE_RESULT_INDEX: 8` - Luôn ra 200.000 VNĐ
- `FORCE_RESULT_INDEX: 9` - Luôn ra 500.000 VNĐ
- `FORCE_RESULT_INDEX: 10` - Luôn ra **1.000.000 VNĐ** ⭐

### Ví dụ:

```javascript
// Muốn vòng quay luôn ra 500k
FORCE_RESULT_INDEX: 9,

// Muốn vòng quay ngẫu nhiên
FORCE_RESULT_INDEX: null,
```

## Cấu Hình Tỷ Lệ Trúng (khi không force)

Trong `config.js`, chỉnh `raties`:

```javascript
raties: {
    '0': 10,  // 10% mất lượt
    '1': 0,   // 0% trúng 1k
    '2': 0,   // 0% trúng 2k
    '3': 0,   // 0% trúng 5k
    '4': 0,   // 0% trúng 10k
    '5': 0,   // 0% trúng 20k
    '6': 50,  // 50% trúng 50k
    '7': 25,  // 25% trúng 100k
    '8': 20,  // 20% trúng 200k
    '9': 5,   // 5% trúng 500k
    '10': 100, // 100% trúng 1.000k (nếu dùng random)
}
```

## Hình Ảnh Cần Thiết

⚠️ **QUAN TRỌNG**: Để mệnh giá 1.000.000 VNĐ hiển thị đúng, cần tạo file ảnh:

📄 Xem chi tiết: [HUONG_DAN_ANH_1000K.md](HUONG_DAN_ANH_1000K.md)

File cần tạo:
- `img/1000kk.jpg` - Hiển thị 2 tờ 500k (400-500px x 200px)

## Cấu Trúc Thư Mục

```
lucky-money-spin/
├── index.html          # File chính
├── config.js           # ⚙️ Cấu hình (force, tỷ lệ)
├── js/
│   ├── setting.js
│   ├── Winwheel.min.js
│   └── TweenMax.min.js
├── img/
│   ├── 1kk.jpg ... 500kk.jpg  # Ảnh các mệnh giá
│   └── 1000kk.jpg             # ⚠️ Cần tạo cho 1 triệu
├── css/
└── sound/
```

## Công Nghệ Sử dụng

- Vanilla JavaScript
- [Winwheel.js](https://github.com/zarocknz/javascript-winwheel) - Vòng quay
- [TweenMax](https://greensock.com/) - Animation
- [SweetAlert2](https://sweetalert2.github.io/) - Popup đẹp
- jQuery

## License

MIT
