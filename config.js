const CONFIG = {
    titleWeb: "Lì xì",
    // =====================================================
    // FORCE_RESULT_INDEX: Cấu hình để bắt buộc vòng quay luôn dừng ở 1 ô cụ thể
    // - Đặt giá trị từ 0-10 để force vào ô đó
    // - Đặt null hoặc comment dòng này để vòng quay ngẫu nhiên theo tỷ lệ
    // Ví dụ: 10 = luôn ra 1.000.000 VNĐ, 9 = luôn ra 500.000 VNĐ
    // =====================================================
    FORCE_RESULT_INDEX: 10, // Bắt buộc ra 1.000.000 VNĐ (đặt null để tắt)
    
    raties: {
        '0': 0, //mat luot
        '1': 0, // 1000
        '2': 0, // 2000
        '3': 0, // 5000
        '4': 0, // 10000
        '5': 0, // 20000
        '6': 50, // 50000
        '7': 25, // 100000
        '8': 20, // 200000
        '9': 5, // 500000
        '10': 100, // 1000000 (1 triệu VNĐ)
    }
}

$('#titleWeb').text(CONFIG.titleWeb)
