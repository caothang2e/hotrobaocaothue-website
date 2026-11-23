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
  'Ninh Bình': [{
    name: 'Ban Quản lý Khu kinh tế và các Khu công nghiệp tỉnh Ninh Bình',
    deadline: 'Báo cáo năm: trước ngày 05/12/2026',
    skipPaperInstruction: true,
    note: 'Hướng dẫn doanh nghiệp nộp báo cáo định kỳ đăng ngày 15/6/2026, trang 3, mục II.1: từ 01/7/2026 áp dụng nộp báo cáo tình hình thay đổi lao động theo Mẫu 01/PLI trên Nền tảng hợp đồng lao động điện tử của Bộ Nội vụ. Mở nền tảng → chọn Bắt đầu sử dụng → đăng nhập tài khoản người sử dụng lao động. Đây là nền tảng dùng chung, không phải Google Form riêng của tỉnh. Hướng dẫn của Ban Quản lý dành cho doanh nghiệp thuộc phạm vi quản lý KKT, KCN; đồng thời gửi bản giấy hoặc file điện tử về Ban Quản lý qua pdnld.bqlktcn@ninhbinh.gov.vn để theo dõi. Tài liệu là hướng dẫn định kỳ, không phải công văn riêng ban hành cuối năm. Đã kiểm tra trang công khai và màn hình đăng nhập; chức năng báo cáo bên trong yêu cầu tài khoản.',
    links: [
      ['Mở nền tảng nộp báo cáo (cần đăng nhập)', 'https://hopdonglaodong.moha.gov.vn/landing-page', 'submit'],
      ['Hướng dẫn nộp báo cáo định kỳ Ninh Bình (PDF, xem trang 3)', 'https://iza.ninhbinh.gov.vn/public/files/Pho%20truong%20Ban%20trinh%20the%20manh/2026/PHTGS%20Hu%E1%BB%9Bng%20d%E1%BA%ABn%20DN%20n%E1%BB%99p%20bao%20cao%20d%E1%BB%8Bnh%20ky.pdf'],
      ['Trang công bố hướng dẫn của Ban Quản lý', 'https://iza.ninhbinh.gov.vn/van-ban/chitietvb-294.html'],
      ['Email gửi bổ sung cho Ban Quản lý KKT, KCN', 'mailto:pdnld.bqlktcn@ninhbinh.gov.vn']
    ]
  }],
"Đồng Tháp": [
  {
    "name": "Sở Nội vụ tỉnh Đồng Tháp",
    "deadline": "Trước ngày 05/12/2026",
    "skipPaperInstruction": true,
    "note": "Thông báo trên cổng Sở Nội vụ đăng ngày 19/11/2026: báo cáo sử dụng lao động theo Mẫu 01/PLI. Trường hợp không gửi được qua cổng, có thể chọn gửi văn bản giấy đến Sở Nội vụ, số 375–379 Hùng Vương, phường Đạo Thạnh, hoặc gửi email laodongvieclamdongthap@gmail.com. Tệp gửi email phải có ký, đóng dấu hoặc chữ ký số. Đây là kênh email nhận báo cáo; nút Excel bên dưới chỉ tải mẫu, không phải link nộp trực tuyến.",
    "links": [
      [
        "Email nhận báo cáo lao động Đồng Tháp",
        "mailto:laodongvieclamdongthap@gmail.com"
      ],
      [
        "Tải Mẫu 01/PLI (Excel) của Sở Nội vụ",
        "https://snv.dongthap.gov.vn/documents/d/snvdt/mau-bao-cao-su-dung-lao-dong-01-pli-xlsx"
      ],
      [
        "Thông báo ngày 19/11/2026 trên cổng Sở Nội vụ",
        "https://snv.dongthap.gov.vn/web/snvdt/tin-tuc/chi-tiet?id=12157002"
      ]
    ]
  }
],
"Lào Cai": [
  {
    "name": "Sở Nội vụ tỉnh Lào Cai",
    "deadline": "Trước ngày 05/12/2026",
    "skipPaperInstruction": true,
    "note": "Công văn 4730/SNV-LĐVL ngày 15/11/2026: lập Mẫu 01/PLI, số liệu lao động tại thời điểm 15/11/2026. Gửi bản giấy qua bưu chính hoặc nộp trực tiếp tại Văn thư Sở Nội vụ, số 159 Đinh Tiên Hoàng, phường Yên Bái; đồng thời gửi file Excel đến tranthikimngan@laocai.gov.vn, đặt tên tendoanhnghiep.xls hoặc tendoanhnghiep.xlsx. Không dùng hộp thư danh bạ cũ thay cho email tiếp nhận này. Hỗ trợ: Trần Thị Kim Ngân, 0985.256.650. Đã đối chiếu nội dung file công văn trên cổng Sở Nội vụ.",
    "links": [
      [
        "Xem công văn 4730/SNV-LĐVL (PDF gốc)",
        "https://storage-vnportal.vnpt.vn/lci-ubnd-responsive/2324/Lao%20%C4%91%E1%BB%99ng%20vi%E1%BB%87c%20l%C3%A0m/Nam%202026/0CvguiDNycbaocaodinhkyvelaodongdakysovanthuky_rZgmhNK7Rw8.pdf"
      ],
      [
        "Email gửi file Excel theo công văn",
        "mailto:tranthikimngan@laocai.gov.vn"
      ],
      [
        "Công văn trên cổng Sở Nội vụ Lào Cai",
        "https://snv.laocai.gov.vn/linh-vuc-lao-dong-viec-lam/bao-cao-dinh-ky-trong-linh-vuc-lao-dong-1629236"
      ]
    ]
  }
],

"Khánh Hòa": [
  {
    "name": "Sở Nội vụ tỉnh Khánh Hòa",
    "deadline": "Trước ngày 05/12/2026",
    "skipPaperInstruction": true,
    "note": "Công văn 11059/SNV-LĐVL ngày 17/11/2026: lập Mẫu 01/PLI, nhập thông tin chung trên Google Form và đính kèm bản scan PDF có ký tên, đóng dấu đỏ. Link đã đối chiếu với bản công văn được LuatVietnam đăng lại; Google yêu cầu đăng nhập nên chưa đọc được câu hỏi bên trong. Hỗ trợ Phòng Lao động, Việc làm: 0258.3822493.",
    "links": [
      ["Xem công văn 11059/SNV-LĐVL (PDF)", "https://mcdn.thuvienphapluat.vn/uploads/Hoidapphapluat/2026/LNMT/Thang_11/261119/CV-11059-2026.pdf"],
      [
        "Mở biểu mẫu Khánh Hòa (cần đăng nhập Google)",
        "https://forms.gle/BoT8kGDERWWWFFic8",
        "submit"
      ],
      [
        "Xem công văn 11059 và mẫu kèm theo (bản đăng lại)",
        "https://luatvietnam.vn/lao-dong/cong-van-11059-snv-ldvl-khanh-hoa-2026-huong-dan-bao-cao-tinh-hinh-su-dung-lao-dong-456994-d2.html"
      ]
    ]
  }
],
"Đắk Lắk": [
  {
    "name": "Sở Nội vụ tỉnh Đắk Lắk",
    "deadline": "Công văn ghi trước 06/12/2026; nên hoàn thành trước 05/12/2026 theo hạn chung",
    "skipPaperInstruction": true,
    "note": "Công văn 7864/SNV-LĐVL ngày 18/11/2026 yêu cầu báo cáo theo Mẫu 01/PLI và đồng thời nhập số liệu qua Google Form. Mốc trước 06/12 trong công văn khác hạn chung trước 05/12; liên hệ Nguyễn Thị Bích Trâm, Phòng Lao động việc làm: 0909.128312 để xác nhận. Link đối chiếu theo nội dung công văn được LuatVietnam đăng lại; Google yêu cầu đăng nhập nên chưa đọc được câu hỏi bên trong.",
    "links": [
      ["Xem công văn 7864/SNV-LĐVL (PDF)", "https://mcdn.thuvienphapluat.vn/uploads/Hoidapphapluat/2026/MDV/19-11/CV-7864.pdf"],
      [
        "Mở biểu mẫu Đắk Lắk (cần đăng nhập Google)",
        "https://forms.gle/6jvEbqKQ447NdQ82A",
        "submit"
      ],
      [
        "Xem công văn 7864 (bản đăng lại; tải PDF cần đăng nhập)",
        "https://luatvietnam.vn/lao-dong/cong-van-7864-snv-ldvl-dak-lak-2026-bao-cao-dinh-ky-tinh-hinh-su-dung-lao-dong-457023-d2.html"
      ]
    ]
  }
],
"Hải Phòng": [
  {
    "name": "Ban Quản lý Khu kinh tế Hải Phòng · Chỉ doanh nghiệp trong KCN, KKT",
    "deadline": "Báo cáo sử dụng lao động: trước ngày 05/12/2026",
    "skipPaperInstruction": true,
    "note": "Công văn 7507/BQL-QLLĐ ngày 12/11/2026: dùng Phụ lục 1 cho lao động Việt Nam và Phụ lục 2 cho lao động nước ngoài. Chọn nộp qua hệ thống eHEZA đã được cấp tài khoản hoặc email Phòng Quản lý Lao động: quanlylaodong.kkthaiphong@gmail.com. Thư mục Drive bên dưới là nơi tải mẫu, không phải nơi nộp báo cáo. Hướng dẫn này áp dụng cho doanh nghiệp trong khu công nghiệp, khu kinh tế; không áp dụng thay cho hướng dẫn Sở Nội vụ đối với đơn vị ngoài khu.",
    "links": [
      ["Xem công văn 7507 và danh sách chuyên viên hỗ trợ (PDF, không cần đăng nhập)", "https://mcdn.thuvienphapluat.vn/uploads/khoinghiep/2026/11/19/HAI-PHONG.pdf"],
      [
        "Tải biểu mẫu kèm công văn (Google Drive)",
        "https://drive.google.com/drive/folders/1NqD--bCnAC8XWKrRJLEoYWxGKeAz9VxC?usp=sharing"
      ],
      [
        "Email nhận báo cáo của Ban Quản lý",
        "mailto:quanlylaodong.kkthaiphong@gmail.com"
      ],
      [
        "Xem công văn 7507 và danh sách hỗ trợ (bản đăng lại; tải PDF cần đăng nhập)",
        "https://luatvietnam.vn/lao-dong/cong-van-7507-bql-qlld-hai-phong-2026-bao-cao-tinh-hinh-lao-dong-tien-luong-no-luong-457040-d2.html"
      ]
    ]
  }
],
"Lạng Sơn": [
  {
    "name": "Sở Nội vụ tỉnh Lạng Sơn",
    "deadline": "Trước ngày 05/12/2026",
    "skipPaperInstruction": true,
    "note": "Công văn 4093/SNV-LĐVL ngày 11/11/2026, mục 3.1: lập báo cáo theo Phụ lục 03, gửi PDF có ký xác nhận và đóng dấu đến vlatld.solaodonglangson@gmail.com; đồng thời cập nhật số liệu trên bảng khai trực tuyến. Bảng có cả phần lao động, tiền lương, tiền thưởng và quan hệ lao động năm 2026; đây là bảng được công văn chỉ định. Hỗ trợ tổng hợp lao động: Đinh Thị Lan Hương, 0394.806.906.",
    "links": [
      ["Xem công văn 4093/SNV-LĐVL (PDF gốc)", "https://sonv.langson.gov.vn/upload/105373/20261119/Vv_de_nghi_bao_cao_tinh_hinh_su_dung_lao_dong__tien_luong__tien_thuong__quan_he_lao_dong__an_toan__ve_sinh_lao_dong__tai_nan_lao_dong__su_dung_nguoi_lao_dong_nuoc_ngoai_nam_2026_46413.pdf"],
      [
        "Mở bảng khai trực tuyến Lạng Sơn",
        "https://docs.google.com/spreadsheets/d/1rCIrJzePF_r43AOXFRAgMpbDJ0q3G1st/edit?gid=432615136#gid=432615136",
        "submit"
      ],
      [
        "Email nhận PDF báo cáo",
        "mailto:vlatld.solaodonglangson@gmail.com"
      ],
      [
        "Tải Phụ lục 03 báo cáo sử dụng lao động",
        "https://sonv.langson.gov.vn/upload/105373/20261119/Phu_luc_03__Bao_cao_tinh_hinh_su_dung_lao_dong_c205f.doc"
      ],
      [
        "Công văn 4093/SNV-LĐVL và các phụ lục trên cổng Sở Nội vụ",
        "https://sonv.langson.gov.vn/thong-bao/v-v-de-nghi-bao-cao-dinh-ky-tinh-hinh-su-dung-lao-dong-tien-luong-tien-thuong-quan-he-lao-dong-an-toan-ve-sinh-lao-dong-.html"
      ]
    ]
  }
],

  'Đà Nẵng': [
    {
      name: 'Sở Nội vụ TP. Đà Nẵng',
      deadline: 'Trước ngày 05/12/2026',
      note: 'Công văn 11017/SNV-LĐVL ngày 19/11/2026: lập Mẫu 01/PLI, chốt số liệu đến 15/11/2026 theo mẫu kèm công văn. Khi gửi qua Google Form, kê khai thông tin chung, đính kèm PDF đã ký tên, đóng dấu và bản Excel (.xlsx hoặc .xls). Biểu mẫu yêu cầu đăng nhập Google; chưa kiểm tra được câu hỏi bên trong. Sở không tiếp nhận báo cáo sau thời hạn. Hỗ trợ Phòng Lao động, việc làm: tầng 19 Trung tâm Hành chính, 24 Trần Phú; điện thoại 0236.382.2124.',
      links: [
        ['Xem công văn 11017/SNV-LĐVL và Mẫu 01/PLI (PDF)', 'https://mcdn.thuvienphapluat.vn/uploads/Hoidapphapluat/2026/TTTT/261120/CV-11017-snv-ldvl.pdf'],
        ['Mở biểu mẫu Đà Nẵng (cần đăng nhập Google)', 'https://forms.gle/pQiv6myidcR9L3hDA', 'submit'],
        ['Hướng dẫn và nguồn công văn 11017 (Thư Viện Pháp Luật)', 'https://thuvienphapluat.vn/phap-luat-doanh-nghiep/bai-viet/link-bao-cao-tinh-hinh-su-dung-lao-dong-nam-2026-tai-da-nang-theo-cong-van-11017-snv-ldvl-24557.html']
      ]
    }
  ],
  'Hà Nội': [
    {
      name: 'Kênh chuyên trách nộp báo cáo Hà Nội · hces.vn',
      deadline: 'Kỳ báo cáo 6 tháng cuối năm 2026 · Đến hết ngày 05/12/2026 theo Công văn 8865/SNV-VLATLĐ',
      note: 'Theo thông báo bổ sung kênh tiếp nhận: không phải đăng ký tài khoản, không phải kích hoạt và không sử dụng mật khẩu. Các bước: truy cập hces.vn → chọn báo cáo tình hình sử dụng lao động → điền mã số thuế → điền email nhận xác nhận → điền thông tin đơn vị, chọn đúng Doanh nghiệp/Tổ chức/Hợp tác xã → điền thông tin báo cáo và tải PDF báo cáo đã ký số hoặc bản scan đã ký, đóng dấu → nộp báo cáo → kiểm tra email xác nhận nộp thành công. Lưu lại email xác nhận. Nếu cần hỗ trợ, nhắn Fanpage Cổng thông tin việc làm thành phố Hà Nội bên dưới.',
      links: [
        ['Mở bảng khai trực tuyến Hà Nội (không cần tài khoản)', 'https://hces.vn/', 'submit'],
        ['Fanpage hỗ trợ Cổng thông tin việc làm Hà Nội', 'https://www.facebook.com/profile.php?id=61584342332490']
      ]
    },
    {
      name: 'Sở Nội vụ TP. Hà Nội · Kênh cần đăng nhập',
      deadline: 'Đến hết ngày 05/12/2026 theo Công văn 8865/SNV-VLATLĐ',
      note: 'Dùng Mẫu 01/PLI, tổng hợp số liệu đến thời điểm báo cáo. Đăng nhập Cổng thông tin việc làm TP. Hà Nội và tải PDF ký số hoặc bản scan đã ký, đóng dấu nếu có. Sau khi bấm Lưu, chụp màn hình xác nhận. Trạng thái nộp thành công trên cổng này xác nhận đơn vị đã hoàn tất việc nộp cho Sở Nội vụ Hà Nội và được miễn gửi thêm bản giấy. Có thể sửa và lưu lại trước khi hết hạn, hệ thống ghi nhận bản cuối cùng. Đơn vị đã nộp qua Cổng Dịch vụ công Quốc gia được đề nghị cập nhật dữ liệu lên Cổng thông tin việc làm Hà Nội. Nếu đã liên hệ hỗ trợ kỹ thuật mà vẫn không nộp được do lỗi hệ thống, gửi bản giấy qua bưu chính về Phòng Việc làm và An toàn lao động, Sở Nội vụ Hà Nội, số 62 Trần Quốc Toản, phường Cửa Nam. Hạn bản giấy tính theo dấu bưu điện nơi gửi.',
      links: [
        ['Cổng thông tin việc làm TP. Hà Nội (cần đăng nhập)', 'https://congvieclam.hanoi.gov.vn/', 'submit'],
        ['Hướng dẫn thao tác của Hà Nội', 'https://docs.google.com/document/d/1GmMvOIneTiB2Hl8FZyQpDfIiW-GstEjzxYXGhMuEOtg/edit'],
        ['Nhóm Zalo hỗ trợ kỹ thuật theo công văn', 'https://zalo.me/g/wavddee6ktmt0v9lryyk'],
        ['Công văn 8865/SNV-VLATLĐ ngày 17/11/2026', 'https://cdn.thuvienphapluat.vn/phap-luat/2022-2/TTKP/CV-8865.pdf']
      ]
    }
  ],
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
