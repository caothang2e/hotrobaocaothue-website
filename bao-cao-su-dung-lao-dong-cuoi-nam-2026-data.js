const laborProvinces = [
  'An Giang', 'Bắc Ninh', 'Cà Mau', 'Cần Thơ', 'Cao Bằng', 'Đà Nẵng',
  'Đắk Lắk', 'Điện Biên', 'Đồng Nai', 'Đồng Tháp', 'Gia Lai', 'Hà Nội',
  'Hà Tĩnh', 'Hải Phòng', 'Hồ Chí Minh', 'Huế', 'Hưng Yên', 'Khánh Hòa',
  'Lai Châu', 'Lạng Sơn', 'Lào Cai', 'Lâm Đồng', 'Nghệ An', 'Ninh Bình',
  'Phú Thọ', 'Quảng Ngãi', 'Quảng Ninh', 'Quảng Trị', 'Sơn La', 'Tây Ninh',
  'Thái Nguyên', 'Thanh Hóa', 'Tuyên Quang', 'Vĩnh Long'
];

// Địa chỉ liên hệ của Sở Nội vụ. Kênh nhận báo cáo theo kỳ nằm trong laborEntries.
const laborContacts = {
  'An Giang': [['09 Mạc Đĩnh Chi, phường Rạch Giá', '0297.386.6398']],
  'Bắc Ninh': [['Tầng 2–5, nhà A, Khu liên cơ quan tỉnh, Quảng trường 3/2, phường Bắc Giang', '0204.385.4350']],
  'Cà Mau': [['91–93 Lý Thường Kiệt, phường Tân Thành', '0290.383.1603']],
  'Cần Thơ': [['288 đường 30/4, phường Ninh Kiều', '0292.382.0715']],
  'Cao Bằng': [['Tầng 7–9, tòa B, trụ sở làm việc các sở, ban, ngành, khu đô thị mới, phường Thục Phán', '0206.385.2422']],
  'Đà Nẵng': [['Tầng 9, 10 và 19, Trung tâm Hành chính thành phố, 24 Trần Phú', '0236.382.1253']],
  'Đắk Lắk': [['23 Trường Chinh, phường Buôn Ma Thuột', '0262.855.5553']],
  'Điện Biên': [['Thôn Thanh Xuân, xã Thanh Nưa', '0215.383.0783']],
  'Đồng Nai': [['108 Hà Huy Giáp, phường Trấn Biên', '0251.384.6993']],
  'Đồng Tháp': [['375–379 Hùng Vương, phường Đạo Thạnh', '0273.387.3110']],
  'Gia Lai': [['180 Tăng Bạt Hổ, phường Quy Nhơn', '0256.382.2603']],
  'Hà Nội': [['18B Lê Thánh Tông, phường Cửa Nam', '024.3933.5176']],
  'Hà Tĩnh': [['187 Nguyễn Huy Tự, phường Thành Sen', '0239.385.6628']],
  'Hải Phòng': [['Tòa J-5 và tòa I-6, Trung tâm Chính trị – Hành chính, Khu đô thị Bắc sông Cấm, phường Thủy Nguyên', '080.31289']],
  'Hồ Chí Minh': [
    ['Trụ sở 1 · 159 Pasteur, phường Xuân Hòa', '028.3822.2409', '028.3829.1302'],
    ['Trụ sở 2 · Đường Lê Lợi, phường Bình Dương', '0274.382.8946'],
    ['Trụ sở 3 · 01 Phạm Văn Đồng, phường Bà Rịa', '0254.385.2151']
  ],
  'Huế': [['18 Nguyễn Sinh Sắc, phường Vỹ Dạ', '0234.384.8018']],
  'Hưng Yên': [
    ['Trụ sở chính · 06 Chùa Chuông, phường Phố Hiến', '0221.386.3434'],
    ['Cơ sở 2 · 08 Lê Lợi, phường Thái Bình'],
    ['Cơ sở 3 · 19 Lê Lợi, phường Thái Bình']
  ],
  'Khánh Hòa': [['05 Pasteur, Nha Trang', '0258.382.7095', '0258.381.2463']],
  'Lai Châu': [['Tầng 1–2, nhà D, Trung tâm Hành chính – Chính trị tỉnh, phường Tân Phong', '0213.379.8983']],
  'Lạng Sơn': [['04 Quang Trung, phường Lương Văn Tri', '0205.381.2110']],
  'Lào Cai': [['159 Đinh Tiên Hoàng, phường Yên Bái', '0216.385.2415']],
  'Lâm Đồng': [['Tầng 7, Trung tâm Hành chính tỉnh, 36 Trần Phú, phường Xuân Hương – Đà Lạt', '0263.382.2393']],
  'Nghệ An': [['30 Phan Đăng Lưu, phường Trường Vinh', '0238.384.3197']],
  'Ninh Bình': [['Km 2 đường Trần Hưng Đạo, phường Hoa Lư', '0229.387.1155']],
  'Phú Thọ': [['370 Nguyễn Tất Thành, phường Việt Trì', '0210.384.6594']],
  'Quảng Ngãi': [['255 Nguyễn Nghiêm, phường Cẩm Thành', '0255.382.2864']],
  'Quảng Ninh': [['Tầng 3, Trụ sở Liên cơ quan số 2, phường Hạ Long', '0203.383.5141']],
  'Quảng Trị': [['72 Ngô Quyền, phường Đồng Hới', '0232.382.2321']],
  'Sơn La': [['Tầng 4, tòa nhà 9 tầng, Khu trụ sở HĐND – UBND – UBMTTQVN tỉnh, phường Chiềng Cơi', '0212.375.2630']],
  'Tây Ninh': [['19 Trần Hưng Đạo, phường Long An', '0272.382.6353']],
  'Thái Nguyên': [['17 Đội Cấn, phường Phan Đình Phùng', '0208.385.6474']],
  'Thanh Hóa': [['44 Đại lộ Lê Lợi, phường Hạc Thành', '0237.375.3739']],
  'Tuyên Quang': [['Đường Lý Thánh Tông, phường Minh Xuân', '0207.382.2432']],
  'Vĩnh Long': [['42 Nguyễn Huệ, phường Long Châu', '0270.382.2233']]
};

// Hộp thư liên hệ của Sở, cần xác nhận trước khi gửi hồ sơ.
const laborEmails = {
  'An Giang': 'sonoivu@angiang.gov.vn',
  'Bắc Ninh': 'snv@bacninh.gov.vn',
  'Cà Mau': 'snv.bbt@camau.gov.vn',
  'Cần Thơ': 'sonv@cantho.gov.vn',
  'Cao Bằng': 'sonoivu@caobang.gov.vn',
  'Đà Nẵng': 'snv@danang.gov.vn',
  'Đắk Lắk': 'sonoivu@noivu.daklak.gov.vn',
  'Điện Biên': 'snv@dienbien.gov.vn',
  'Đồng Nai': 'sonoivu@dongnai.gov.vn',
  'Đồng Tháp': 'snv@dongthap.gov.vn',
  'Gia Lai': 'sonoivu@snv.gialai.gov.vn',
  'Hà Nội': 'vanthu_sonv@hanoi.gov.vn',
  'Hà Tĩnh': 'sonoivu@hatinh.gov.vn',
  'Hải Phòng': 'sonoivu@haiphong.gov.vn',
  'Hồ Chí Minh': 'snv@tphcm.gov.vn',
  'Huế': 'snv@hue.gov.vn',
  'Hưng Yên': 'sonv@hungyen.gov.vn',
  'Khánh Hòa': 'snv@khanhhoa.gov.vn',
  'Lai Châu': 'sonoivu@laichau.gov.vn',
  'Lạng Sơn': 'sonoivu@langson.gov.vn',
  'Lào Cai': 'contact-snv@laocai.gov.vn',
  'Lâm Đồng': 'snv@lamdong.gov.vn',
  'Nghệ An': 'nv@nghean.gov.vn',
  'Ninh Bình': 'snv@ninhbinh.gov.vn',
  'Phú Thọ': 'sonv@phutho.gov.vn',
  'Quảng Ngãi': 'snv@quangngai.gov.vn',
  'Quảng Ninh': 'snv@quangninh.gov.vn',
  'Quảng Trị': 'snv@quangtri.gov.vn',
  'Sơn La': 'snv@sonla.gov.vn',
  'Tây Ninh': 'snv@tayninh.gov.vn',
  'Thái Nguyên': 'sonoivu@thainguyen.gov.vn',
  'Thanh Hóa': 'snv@thanhhoa.gov.vn',
  'Tuyên Quang': 'noivu@tuyenquang.gov.vn',
  'Vĩnh Long': 'snoivu@vinhlong.gov.vn'
};

const laborCities = ['Cần Thơ', 'Đà Nẵng', 'Đồng Nai', 'Hà Nội', 'Hải Phòng', 'Hồ Chí Minh', 'Huế'];

const laborEntries = {
  'Hồ Chí Minh': [
    {
      name: 'Sở Nội vụ TP. Hồ Chí Minh',
      deadline: 'Trước ngày 05/12/2026',
      note: 'Chốt số liệu đến 15/11/2026 theo Mẫu 01/PLI đính kèm Công văn 28771. Khi dùng Google Form của Sở Nội vụ, kê khai thông tin chung, đính kèm bản scan PDF đã ký tên, đóng dấu và bản Excel (.xls hoặc .xlsx). Google Form yêu cầu đăng nhập.',
      links: [
        ['Nộp qua Google Form của Sở Nội vụ', 'https://forms.gle/hwY2iJwc3PQ984Ns9', 'submit'],
        ['Công văn 28771/SNV-VLATLĐ', 'https://cdn.thuvienphapluat.vn/uploads/mst/images/MinhThu/12-11-2026/28771.pdf']
      ]
    }
  ],
  'Tây Ninh': [
    {
      name: 'Sở Nội vụ tỉnh Tây Ninh',
      deadline: 'Trước ngày 05/12/2026',
      note: 'Chốt số liệu đến 15/11/2026. Kê khai qua biểu mẫu của Sở, đính kèm PDF Mẫu 01/PLI đã ký, đóng dấu. Sở khuyến khích gửi kèm Excel và đặt tên tệp theo dạng Tên đơn vị_MST_BC lao dong nam 2026. Google Form yêu cầu đăng nhập.',
      links: [
        ['Nộp qua Google Form của Sở Nội vụ', 'https://byvn.net/eL3s', 'submit'],
        ['Công văn 12090/SNV-LĐVL và Mẫu 01/PLI', 'https://cdn.thuvienphapluat.vn/uploads/mst/images/HaiYen/t11-2026/CV-12090-SNV-LDVL.pdf']
      ]
    }
  ],
  'Đồng Nai': [
    {
      name: 'Sở Nội vụ TP. Đồng Nai',
      deadline: 'Trước ngày 05/12/2026',
      note: 'Khai theo hướng dẫn tại Công văn 9881/SNV-LĐ. Kỳ số liệu từ 01/12/2025 đến 30/11/2026. Biểu mẫu có phần tình hình sử dụng lao động, tiền lương năm 2026 và dự kiến tuyển dụng năm 2027.',
      links: [
        ['Mở biểu mẫu nộp trực tuyến', 'https://docs.google.com/forms/d/e/1FAIpQLSdLUtOIVpDFGHUOZSjXy19XA4Yz9Y5TtfbVGWzQMjxtKLlnpw/viewform', 'submit'],
        ['Công văn 9881/SNV-LĐ trên cổng việc làm Đồng Nai', 'https://vieclamdongnai.gov.vn/van-ban/cong-van-so-9881-snv-ld-ngay-13-thang-11-nam-2026-cua-cua-so-noi-vu-thanh-pho-dong-nai-ve-viec-de-nghi-bao-cao-tinh-hinh-thuc-hien-phap-luat-lao-dong-luat-an-toan-ve-sinh-lao-dong-nam-2026-21682.html'],
        ['Hướng dẫn và kỳ số liệu theo công văn', 'https://thuvienphapluat.vn/ma-so-thue/phap-luat-thue/link-bao-cao-tinh-hinh-su-dung-lao-dong-cuoi-nam-2026-tai-tp-dong-nai-quy-dinh-o-dau-236524.html']
      ]
    }
  ],
  'Lâm Đồng': [
    {
      name: 'Sở Nội vụ tỉnh Lâm Đồng',
      deadline: 'Mốc chung trước 05/12/2026 · Xác nhận hạn với Sở Nội vụ',
      note: 'Biểu mẫu của Sở có mục BC 2 dành cho báo cáo sử dụng lao động năm 2026. Phần báo cáo sử dụng lao động trong bản Công văn 6955 còn ghi năm 2025 ở mục kỳ báo cáo và hạn nộp. Liên hệ 0263 383 4226 để xác nhận mốc áp dụng.',
      links: [
        ['Mở biểu mẫu của Sở Nội vụ (mục BC 2)', 'https://forms.gle/avmZVBbykL7kAWSc7', 'submit'],
        ['Công văn 6955/SNV-LĐVL&TN', 'https://cdn.thuvienphapluat.vn/uploads/DanLuat-BanAn/2026/11/cong-van-6955-snv-ldvltl-2026-lam-dong.pdf']
      ]
    }
  ],
  'Thanh Hóa': [
    {
      name: 'UBND xã Thiệu Trung',
      deadline: 'Trước ngày 05/12/2026',
      note: 'Hướng dẫn này áp dụng cho đơn vị trên địa bàn xã Thiệu Trung. Xem công văn để sử dụng biểu mẫu trực tuyến do Sở Nội vụ công bố. Sau khi nộp, báo Phòng Văn hóa – Xã hội của xã để tổng hợp. Google Form yêu cầu đăng nhập.',
      links: [
        ['Mở biểu mẫu được xã Thiệu Trung hướng dẫn', 'https://docs.google.com/forms/d/e/1FAIpQLSf4-fqZi__NA4-BDWesoKv-UNeL7SOfb3a3p330YYYyuLMOLg/viewform', 'submit'],
        ['Công văn 2664/UBND-VHXH', 'https://cdn.thuvienphapluat.vn/phap-luat/2022-2/DTTM/12-11-2026/2664-UBNDVHXH.pdf']
      ]
    }
  ]
};
