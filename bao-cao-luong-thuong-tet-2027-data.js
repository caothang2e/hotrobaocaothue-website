// Công văn, mẫu biểu và đường nộp theo địa phương.
const checkedOn = '13/11/2026';

const provinces = [
  "An Giang",
  "TP. Bắc Ninh",
  "Cà Mau",
  "TP. Cần Thơ",
  "Cao Bằng",
  "TP. Đà Nẵng",
  "Đắk Lắk",
  "Điện Biên",
  "TP. Đồng Nai",
  "Đồng Tháp",
  "Gia Lai",
  "Hà Nội",
  "Hà Tĩnh",
  "TP. Hải Phòng",
  "TP. Hồ Chí Minh",
  "TP. Huế",
  "Hưng Yên",
  "Khánh Hòa",
  "Lai Châu",
  "Lạng Sơn",
  "Lào Cai",
  "Lâm Đồng",
  "Nghệ An",
  "Ninh Bình",
  "Phú Thọ",
  "Quảng Ngãi",
  "TP. Quảng Ninh",
  "Quảng Trị",
  "Sơn La",
  "Tây Ninh",
  "Thái Nguyên",
  "Thanh Hóa",
  "Tuyên Quang",
  "Vĩnh Long"
];
const entries = {
  "TP. Hồ Chí Minh": [
    {
      "name": "Doanh nghiệp gửi trực tiếp Sở Nội vụ",
      "deadline": "Trước ngày 20/11/2026",
      "note": "Chọn một kênh: tải PDF có ký tên, đóng dấu lên biểu mẫu, gửi PDF qua email hoặc gửi phiếu đến Phòng Lao động – Tiền lương – Bảo hiểm xã hội, 159 Pasteur, phường Xuân Hòa.",
      "links": [
        [
          "Mở biểu mẫu nộp",
          "https://forms.gle/31depH1PHtHLsHuw6",
          "submit"
        ],
        [
          "Gửi email cho Sở",
          "mailto:ldtlbhxh.snv@tphcm.gov.vn",
          "submit"
        ],
        [
          "Mẫu phiếu khảo sát",
          "https://docs.google.com/document/d/19ybY7qooOeg9A1j7iiF3mmBgVgMg8qTf/edit"
        ],
        [
          "Công văn 28304/SNV-LĐTLBHXH",
          "https://cdn.thuvienphapluat.vn/phap-luat/2022-2/TTKP/CV-28304-SNV.pdf"
        ],
        [
          "Cổng Sở Nội vụ",
          "https://sonoivu.hochiminhcity.gov.vn"
        ]
      ]
    },
    {
      "name": "Khu chế xuất, khu công nghiệp và khu công nghệ cao",
      "deadline": "Theo hướng dẫn của Ban Quản lý",
      "note": "Mục 2.2(b), (c) của Công văn 28304 chỉ định Ban Quản lý tương ứng. Xem cách nộp và thời hạn do Ban Quản lý thông báo.",
      "links": [
        [
          "Công văn 28304/SNV-LĐTLBHXH",
          "https://cdn.thuvienphapluat.vn/phap-luat/2022-2/TTKP/CV-28304-SNV.pdf"
        ]
      ]
    }
  ],
  "Lâm Đồng": [
    {
      "name": "Báo cáo 1 gửi Sở Nội vụ",
      "deadline": "Công văn: trước ngày 23/11/2026. Biểu mẫu: trước ngày 20/11/2026.",
      "note": "Công văn 6955 ghi mốc 23/11. Biểu mẫu trực tuyến được nguồn tổng hợp dẫn ghi mốc 20/11 và cho cập nhật bổ sung đến 05/02/2027. Nên gửi trước mốc sớm hơn hoặc xác nhận lại với Sở. Dùng phần Báo cáo 1 về lương, thưởng Tết trong biểu mẫu gộp.",
      "links": [
        [
          "Link trong công văn",
          "https://forms.gle/avmZVBbykL7kAWSc7",
          "submit"
        ],
        [
          "Biểu mẫu gộp được dẫn",
          "https://docs.google.com/forms/d/e/1FAIpQLSe-zmC-_-UfXZvmNWf0OPdvmfacIMVRov1CqO8r5ksZ9xDUUA/viewform"
        ],
        [
          "Công văn 6955/SNV-LĐVL&TN",
          "https://cdn.thuvienphapluat.vn/phap-luat/2022-2/NDBT/051126/cong-van-6955-snv-ldvltl-2026-lam-dong.pdf"
        ]
      ]
    }
  ],
  "Gia Lai": [
    {
      "name": "Doanh nghiệp trên địa bàn tỉnh",
      "deadline": "Trước ngày 20/11/2026",
      "note": "Gửi về Sở Nội vụ tại 180 Tăng Bạt Hổ, phường Quy Nhơn và gửi qua email.",
      "links": [
        [
          "Gửi email cho Sở",
          "mailto:anhbtk@snv.gialai.gov.vn",
          "submit"
        ],
        [
          "Thông báo và mẫu trên cổng Sở",
          "https://snv.gialai.gov.vn/vi/news/thong-bao/v-v-bao-cao-tinh-hinh-tien-luong-tien-thuong-va-quan-he-lao-dong-trong-doanh-nghiep-1879.html"
        ],
        [
          "Công văn 8597/SNV-LĐVL",
          "https://cdn.thuvienphapluat.vn/phap-luat/2022-2/NHND/Thang-11/CV-8597-GL.pdf"
        ]
      ]
    }
  ],
  "TP. Hải Phòng": [
    {
      "name": "Doanh nghiệp gửi Sở Nội vụ",
      "deadline": "Trước ngày 15/11/2026",
      "note": "Gửi báo cáo theo mẫu về Sở Nội vụ, tòa I‑6, J‑5 Trung tâm Chính trị – Hành chính, Khu đô thị Bắc sông Cấm, phường Thủy Nguyên.",
      "links": [
        [
          "Công văn 7017/SNV-LĐVL",
          "https://cdn.thuvienphapluat.vn/phap-luat/2022-2/NDBT/071126/cong-van-7071-snv-ldvl-2026-tp-hai-phong.pdf"
        ],
        [
          "Mẫu báo cáo",
          "https://cdn.thuvienphapluat.vn/phap-luat/2022-2/NDBT/071126/mau-bao-cao-luong-2026-thuong-tet-2027-hai-phong.pdf"
        ]
      ]
    }
  ],
  "Đắk Lắk": [
    {
      "name": "Doanh nghiệp gửi Sở Nội vụ",
      "deadline": "Trước ngày 12/11/2026",
      "note": "Mốc này đã qua tại ngày rà soát. Theo công văn, dùng Biểu 1 và 2, chọn gửi theo email ghi trong văn bản hoặc qua bưu điện đến Sở Nội vụ, 23 Trường Chinh, phường Buôn Ma Thuột. Liên hệ Sở để hỏi cách gửi nếu chưa nộp.",
      "links": [
        [
          "Công văn 7494/SNV-LĐVL",
          "https://cdn.thuvienphapluat.vn/phap-luat/2022-2/DTML/061126/7494.pdf"
        ]
      ]
    }
  ],
  "Nghệ An": [
    {
      "name": "Doanh nghiệp gửi Sở Nội vụ",
      "deadline": "Trước ngày 19/11/2026",
      "note": "Gửi theo mẫu về Sở Nội vụ, 30 Phan Đăng Lưu, phường Trường Vinh.",
      "links": [
        [
          "Công văn 9658/SNV-LĐVL",
          "https://cdn.thuvienphapluat.vn/phap-luat/2022-2/NDBT/071126/cong-van-9658-snv-ldtl-2026-nghe-an.pdf"
        ],
        [
          "Biểu mẫu từ nguồn tổng hợp",
          "https://cdn.thuvienphapluat.vn/phap-luat/2022-2/NDBT/091126/mau-bao-cao-luong-2026-thuong-2027-nghe-an.docx"
        ]
      ]
    }
  ],
  "TP. Đà Nẵng": [
    {
      "name": "Doanh nghiệp gửi Sở Nội vụ",
      "deadline": "Trước ngày 18/11/2026",
      "note": "Chọn nộp trực tuyến, đính kèm PDF đã ký, đóng dấu, hoặc gửi bản giấy đến Phòng Lao động, việc làm, tầng 19, 24 Trần Phú, phường Hải Châu và đồng thời gửi bản điện tử qua email.",
      "links": [
        [
          "Mở biểu mẫu nộp",
          "https://forms.gle/Qs7xqDSXDjhUy1vcA",
          "submit"
        ],
        [
          "Email khi gửi bản giấy",
          "mailto:thaodt@danang.gov.vn",
          "submit"
        ],
        [
          "Công văn 10456/SNV-LĐVL và biểu mẫu",
          "https://cdn.thuvienphapluat.vn/phap-luat/2022-2/NDBT/091126/cong-van-10456-snv-ldvl-2026-tp-da-nang.pdf"
        ]
      ]
    }
  ],
  "Hưng Yên": [
    {
      "name": "Doanh nghiệp gửi Sở Nội vụ",
      "deadline": "Trước ngày 17/11/2026",
      "note": "Gửi báo cáo về Sở Nội vụ, số 6 đường Chùa Chuông, phường Phố Hiến, đồng thời gửi bản điện tử theo địa chỉ email ghi trong công văn.",
      "links": [
        [
          "Công văn 18355/SNV-LĐVL",
          "https://cdn.thuvienphapluat.vn/phap-luat/2022-2/NDBT/101126/cong-van-18355-snv-ldvl-hung-yen-2026.pdf"
        ],
        [
          "Mẫu báo cáo từ nguồn tổng hợp",
          "https://cdn.thuvienphapluat.vn/phap-luat/2022-2/NDBT/101126/mau-bao-cao-luong-2026-thuong-2027-hung-yen.docx"
        ]
      ]
    }
  ],
  "TP. Bắc Ninh": [
    {
      "name": "Doanh nghiệp trên địa bàn",
      "deadline": "Chậm nhất ngày 20/11/2026",
      "note": "Điền biểu mẫu trực tuyến hoặc mở biểu mẫu qua mã QR kèm công văn.",
      "links": [
        [
          "Mở Google Form nộp trực tiếp",
          "https://docs.google.com/forms/d/e/1FAIpQLScILCxx3As-V-AbFyQZI1xMd6RFkl2KBGExCkT5DXmIquBWiQ/viewform",
          "submit"
        ],
        [
          "Link rút gọn trong công văn",
          "https://byvn.net/SLy3",
          "submit"
        ],
        [
          "Công văn 6238/SNV-CSLĐ",
          "https://cdn.thuvienphapluat.vn/phap-luat/2022-2/DTML/101126/6238-bac-ninh.pdf"
        ]
      ]
    }
  ],
  "TP. Đồng Nai": [
    {
      "name": "Sở Nội vụ Đồng Nai – Báo cáo thưởng Tết 2027",
      "deadline": "Trước ngày 20/11/2026",
      "note": "Doanh nghiệp, tổ chức, đơn vị và cá nhân có sử dụng lao động trên địa bàn thành phố gửi báo cáo tiền thưởng Tết Dương lịch và Tết Nguyên đán 2027 trực tiếp qua biểu mẫu của Sở Nội vụ.",
      "links": [
        [
          "Mở bảng khai trực tuyến",
          "https://docs.google.com/forms/d/e/1FAIpQLSewRwePfLxWTCVnAWCUaBNc5RjJjcb1Rf2DkWTxsHIdIISXbA/viewform",
          "submit"
        ],
        [
          "Công văn 9876/SNV-LĐ ngày 13/11/2026",
          "cong-van-9876-dong-nai.jpg"
        ]
      ]
    },
    {
      "name": "Hướng dẫn của Sở Nội vụ",
      "deadline": "Theo đầu mối tiếp nhận",
      "note": "Đối chiếu đối tượng và nơi nhận trong Công văn 9366. Doanh nghiệp kiểm tra hướng dẫn của xã, phường hoặc Ban Quản lý phụ trách địa bàn.",
      "links": [
        [
          "Công văn 9366/SNV-LĐ",
          "https://cdn.thuvienphapluat.vn/phap-luat/2022-2/NDBT/101126/cong-van-9366-snv-ld-tp-dong-nai-2026.pdf"
        ],
        [
          "Mẫu báo cáo từ nguồn tổng hợp",
          "https://cdn.thuvienphapluat.vn/phap-luat/2022-2/NDBT/111126/mau-bao-cao-luong-2026-thuong-tet-2027-tp-dong-nai.pdf"
        ]
      ]
    },
    {
      "name": "Doanh nghiệp thuộc Ban Quản lý các KCN, KKT",
      "deadline": "Trước ngày 15/11/2026",
      "note": "Vừa gửi qua biểu mẫu trực tuyến, vừa gửi file báo cáo qua email. Mẫu biểu có trong thông báo của Ban Quản lý.",
      "links": [
        [
          "Mở biểu mẫu nộp",
          "https://forms.gle/NC9DtivV3kccBDXF8",
          "submit"
        ],
        [
          "Gửi file qua email",
          "mailto:pquanlylaodong@gmail.com",
          "submit"
        ],
        [
          "Thông báo và mẫu của Ban Quản lý",
          "https://dnieza.dongnai.gov.vn/Pages/newsdetail.aspx?CatId=99&NewsId=5156"
        ],
        [
          "Công văn 3543 của Ban Quản lý",
          "https://dnieza.dongnai.gov.vn/Shared%20Documents/3543%20-%20Trien%20khai%20Nghi%20dinh%20luong%20toi%20thieu%20v%C3%A0%20de%20nghi%20bao%20cao.pdf"
        ]
      ]
    },
    {
      "name": "Phường Tân Phú",
      "deadline": "Trước ngày 13/11/2026",
      "note": "Dùng biểu mẫu theo thông báo của phường. Mốc trước ngày 13/11 đã qua tại ngày rà soát. Hỏi phường cách gửi nếu chưa nộp.",
      "links": [
        [
          "Mở biểu mẫu nộp",
          "https://docs.google.com/forms/d/e/1FAIpQLSd87TXusWDH9CyDgN0ia0p0IoYlRH2iH29_C8scXfmlRTSsEg/viewform",
          "submit"
        ],
        [
          "Thông báo và công văn trên cổng phường",
          "https://tanphu.dongnai.gov.vn/vi/news/thong-tin-tuyen-truyen/thong-tin-den-doanh-nghiep-ve-tinh-hinh-lao-dong-tien-luong-tien-thuong-nam-2026-457.html"
        ]
      ]
    }
  ],
  "Hà Nội": [
    {
      "name": "Hướng dẫn chung của Sở Nội vụ",
      "deadline": "Doanh nghiệp xem hạn theo phường, xã hoặc Ban Quản lý",
      "note": "Mốc trước ngày 20/11/2026 trong công văn áp dụng cho các đầu mối tổng hợp và doanh nghiệp do Nhà nước nắm giữ 100% vốn điều lệ thuộc UBND Thành phố. Nhóm doanh nghiệp này dùng Mẫu 04 và gửi đến Sở Nội vụ, 18B Lê Thánh Tông, phường Cửa Nam.",
      "links": [
        [
          "Công văn 8513/SNV-LĐTLDN",
          "https://cdn.thuvienphapluat.vn/uploads/laodongtienluong/20230301/HTT/11-2026/8531-SNV_HN.pdf"
        ]
      ]
    },
    {
      "name": "Phường Bồ Đề",
      "deadline": "Chưa xác minh hạn của địa phương",
      "note": "Đường dẫn do người dùng cung cấp. Xem tên đơn vị trên bảng và xác nhận cách gửi với UBND phường, xã trước khi khai.",
      "links": [
        [
          "Mở bảng khai trực tuyến",
          "https://docs.google.com/spreadsheets/d/1lkcCQJ4gMgopr8a_reg-aNS76qF0qTNC/edit?gid=1145814093#gid=1145814093",
          "submit"
        ]
      ]
    },
    {
      "name": "Phường Cầu Giấy",
      "deadline": "Chưa xác minh hạn của địa phương",
      "note": "Đường dẫn do người dùng cung cấp. Xem tên đơn vị trên bảng và xác nhận cách gửi với UBND phường, xã trước khi khai.",
      "links": [
        [
          "Mở bảng khai trực tuyến",
          "https://docs.google.com/spreadsheets/d/1IPAs7M-RVqxp_MCBCpYCjoKWts83_4jT/edit?gid=1429323643#gid=1429323643",
          "submit"
        ]
      ]
    },
    {
      "name": "Phường Cửa Nam",
      "deadline": "Chưa xác minh hạn của địa phương",
      "note": "Nộp bản giấy tại Phòng Nội vụ – Tư pháp, UBND phường Cửa Nam, phòng 502, số 102 Hai Bà Trưng.",
      "links": [
        [
          "Danh sách phường, xã Hà Nội",
          "https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/danh-sach-phuong-xa-ha-noi-da-co-link-bao-cao-tien-luong-thuong-tet-2027-chi-tiet-nhu-the-nao-301695.html"
        ]
      ]
    },
    {
      "name": "Phường Dương Nội",
      "deadline": "Trước ngày 18/11/2026",
      "note": "Điền bảng trực tuyến hoặc gửi bản giấy về UBND phường Dương Nội qua Phòng Nội vụ – Tư pháp.",
      "links": [
        [
          "Mở bảng khai trực tuyến",
          "https://docs.google.com/spreadsheets/d/119zLbr98SKa_p6HPfgwC4mcebsCHoOOCTq-U6ijavwc/edit?gid=0#gid=0",
          "submit"
        ],
        [
          "Công văn 2932/UBND-NVTP ngày 09/11/2026",
          "https://cdn.thuvienphapluat.vn/uploads/laodongtienluong/20230301/HTT/11-2026/2932.pdf"
        ]
      ]
    },
    {
      "name": "Phường Đại Mỗ",
      "deadline": "Chưa xác minh hạn của địa phương",
      "note": "Đường dẫn do người dùng cung cấp. Xem tên đơn vị trên bảng và xác nhận cách gửi với UBND phường, xã trước khi khai.",
      "links": [
        [
          "Mở bảng khai trực tuyến",
          "https://docs.google.com/spreadsheets/d/1x2Yb6Tg3hz5ivtJuHTFRyCBFt4I2VBFg/edit?gid=1851350132#gid=1851350132",
          "submit"
        ]
      ]
    },
    {
      "name": "Phường Định Công",
      "deadline": "Chưa xác minh hạn của địa phương",
      "note": "Nơi nhận được dẫn: Phòng Nội vụ – Tư pháp, số 1 ngõ 282 đường Kim Giang.",
      "links": [
        [
          "Mở bảng khai trực tuyến",
          "https://docs.google.com/spreadsheets/d/1lkOswj_wAcZPCE8ttudLDsKgf81_FNdol4uyWukwhss/edit?usp=sharing",
          "submit"
        ],
        [
          "Danh sách phường, xã Hà Nội",
          "https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/danh-sach-phuong-xa-ha-noi-da-co-link-bao-cao-tien-luong-thuong-tet-2027-chi-tiet-nhu-the-nao-301695.html"
        ]
      ]
    },
    {
      "name": "Phường Đống Đa",
      "deadline": "Chưa xác minh hạn của phường",
      "note": "Danh sách địa phương có dẫn biểu mẫu hoặc tài liệu này. Xem hướng dẫn trong tài liệu và hỏi phường nếu cần xác nhận cách gửi.",
      "links": [
        [
          "Mở tài liệu hướng dẫn",
          "https://docs.google.com/document/d/1jx4YLLulyzmnt_04nzkf9IvY3pybfYHOtgB4a1NPINI/edit?tab=t.0#heading=h.lv43rfgs9sa0"
        ],
        [
          "Danh sách phường, xã Hà Nội",
          "https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/danh-sach-phuong-xa-ha-noi-da-co-link-bao-cao-tien-luong-thuong-tet-2027-chi-tiet-nhu-the-nao-301695.html"
        ]
      ]
    },
    {
      "name": "Phường Giảng Võ",
      "deadline": "Chưa xác minh hạn của địa phương",
      "note": "Nơi nhận được dẫn: Phòng Nội vụ – Tư pháp, 525 Kim Mã.",
      "links": [
        [
          "Danh sách phường, xã Hà Nội",
          "https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/danh-sach-phuong-xa-ha-noi-da-co-link-bao-cao-tien-luong-thuong-tet-2027-chi-tiet-nhu-the-nao-301695.html"
        ]
      ]
    },
    {
      "name": "Phường Hà Đông",
      "deadline": "Trước ngày 18/11/2026",
      "note": "Điền bảng trực tuyến hoặc gửi bản giấy về UBND phường Hà Đông qua Phòng Nội vụ – Tư pháp.",
      "links": [
        [
          "Mở bảng khai trực tuyến",
          "https://docs.google.com/spreadsheets/d/1xoq3XbWfWCBP-10Cvh-cmsc3VBcayL-b/edit?gid=1451800128#gid=1451800128",
          "submit"
        ],
        [
          "Công văn 4865/UBND-NVTP ngày 09/11/2026",
          "https://cdn.nhansu.vn/uploads/img/HTT/10-2026/CV-4865.pdf"
        ]
      ]
    },
    {
      "name": "Phường Hai Bà Trưng",
      "deadline": "Trước ngày 18/11/2026",
      "note": "Điền bộ mẫu và gửi Phòng Nội vụ – Tư pháp, UBND phường Hai Bà Trưng, 30 Lê Đại Hành. Liên hệ tiếp nhận: Hoàng Thanh Tâm, 0913 299 994.",
      "links": [
        [
          "Mở bộ mẫu",
          "https://docs.google.com/document/d/13C7nR8CP2mTQsiRLLB1YDXrdzQMUYcQ_/edit"
        ],
        [
          "Công văn 2991/UBND-NVTP ngày 09/11/2026",
          "https://cdn.thuvienphapluat.vn/uploads/laodongtienluong/20230301/HTT/10-2026/bc-2991.pdf"
        ]
      ]
    },
    {
      "name": "Phường Hoàng Mai",
      "deadline": "Chưa xác minh hạn của phường",
      "note": "Danh sách địa phương có dẫn biểu mẫu hoặc tài liệu này. Xem hướng dẫn trong tài liệu và hỏi phường nếu cần xác nhận cách gửi.",
      "links": [
        [
          "Mở bảng được dẫn",
          "https://docs.google.com/spreadsheets/d/1B_DkEY75jifpaaPr4dRpX7jAqheIS7IhWS8vybvJClk/edit?gid=0"
        ],
        [
          "Danh sách phường, xã Hà Nội",
          "https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/danh-sach-phuong-xa-ha-noi-da-co-link-bao-cao-tien-luong-thuong-tet-2027-chi-tiet-nhu-the-nao-301695.html"
        ]
      ]
    },
    {
      "name": "Phường Khương Đình",
      "deadline": "Chưa xác minh hạn của địa phương",
      "note": "Bảng này cũng xuất hiện dưới tên Thanh Xuân trong danh sách gửi thêm. Kiểm tra tên phường trên bảng hoặc xác nhận với UBND phường Khương Đình trước khi khai.",
      "links": [
        [
          "Mở bảng khai trực tuyến",
          "https://docs.google.com/spreadsheets/d/15HedfXtyQE7Y-UIOfeLVZZLEW1P-xfhS/edit?gid=800472999#gid=800472999",
          "submit"
        ]
      ]
    },
    {
      "name": "Phường Kiến Hưng",
      "deadline": "Trước ngày 18/11/2026",
      "note": "Điền bảng trực tuyến hoặc gửi bản giấy về UBND phường Kiến Hưng qua Phòng Nội vụ – Tư pháp.",
      "links": [
        [
          "Mở bảng khai trực tuyến",
          "https://docs.google.com/spreadsheets/d/1IbyyL0m-spW4oMubRZGg8Fb5U6cXq45rCKHuocleUI0/edit?gid=0#gid=0",
          "submit"
        ],
        [
          "Công văn 3176/UBND-NVTP ngày 09/11/2026",
          "https://cdn.nhansu.vn/uploads/img/HTT/10-2026/CV-3176.pdf"
        ]
      ]
    },
    {
      "name": "Phường Kim Liên",
      "deadline": "Chưa xác minh hạn của phường",
      "note": "Danh sách địa phương có dẫn biểu mẫu hoặc tài liệu này. Xem hướng dẫn trong tài liệu và hỏi phường nếu cần xác nhận cách gửi.",
      "links": [
        [
          "Mở bảng được dẫn",
          "https://docs.google.com/spreadsheets/d/1z9z3uvxO1XQ1mcvbmexPi7bROrumB9MT/edit?gid=387306274"
        ],
        [
          "Danh sách phường, xã Hà Nội",
          "https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/danh-sach-phuong-xa-ha-noi-da-co-link-bao-cao-tien-luong-thuong-tet-2027-chi-tiet-nhu-the-nao-301695.html"
        ]
      ]
    },
    {
      "name": "Phường Láng",
      "deadline": "Chưa xác minh hạn của phường",
      "note": "Danh sách địa phương có dẫn biểu mẫu hoặc tài liệu này. Xem hướng dẫn trong tài liệu và hỏi phường nếu cần xác nhận cách gửi.",
      "links": [
        [
          "Mở bảng được dẫn",
          "https://docs.google.com/spreadsheets/d/1XsjhlwtlBTX4fjodALzfMrNGtl6QOsoPQ8NnfDKUQzU/edit?gid=0#gid=0"
        ],
        [
          "Danh sách phường, xã Hà Nội",
          "https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/danh-sach-phuong-xa-ha-noi-da-co-link-bao-cao-tien-luong-thuong-tet-2027-chi-tiet-nhu-the-nao-301695.html"
        ]
      ]
    },
    {
      "name": "Phường Long Biên",
      "deadline": "Chưa xác minh hạn của địa phương",
      "note": "Nơi nhận được dẫn: Phòng Nội vụ – Tư pháp, 199 đường Bát Khối.",
      "links": [
        [
          "Danh sách phường, xã Hà Nội",
          "https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/danh-sach-phuong-xa-ha-noi-da-co-link-bao-cao-tien-luong-thuong-tet-2027-chi-tiet-nhu-the-nao-301695.html"
        ]
      ]
    },
    {
      "name": "Phường Nghĩa Đô",
      "deadline": "Trước ngày 17/11/2026",
      "note": "Điền biểu 1, 2, 3 và gửi UBND phường Nghĩa Đô qua Phòng Nội vụ – Tư pháp, số 45 phố Nghĩa Tân. Liên hệ tiếp nhận: Chử Thị Quỳnh Hương, 0904 227 635.",
      "links": [
        [
          "Tải bộ mẫu",
          "https://cdn.thuvienphapluat.vn/uploads/laodongtienluong/20230301/HTT/10-2026/bieu-so-1%2C2.3.docx"
        ],
        [
          "Công văn 2367/UBND-NVTP ngày 10/11/2026",
          "https://cdn.thuvienphapluat.vn/uploads/laodongtienluong/20230301/HTT/10-2026/phuong-nghia-do.doc"
        ],
        [
          "Mở bảng được dẫn",
          "https://docs.google.com/spreadsheets/d/1VaAmt9fc71QawlEODW09JCQxdejGYWME/edit?gid=1792705786"
        ],
        [
          "Danh sách phường, xã Hà Nội",
          "https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/danh-sach-phuong-xa-ha-noi-da-co-link-bao-cao-tien-luong-thuong-tet-2027-chi-tiet-nhu-the-nao-301695.html"
        ]
      ]
    },
    {
      "name": "Phường Ngọc Hà",
      "deadline": "Trước ngày 18/11/2026",
      "note": "Dùng mẫu kèm công văn. Gửi báo cáo đã ký, đóng dấu về Phòng Nội vụ – Tư pháp, UBND phường Ngọc Hà, 25 Liễu Giai. Bảng trực tuyến được dẫn để đối chiếu, cách gửi theo công văn.",
      "links": [
        [
          "Công văn 2664/UBND-NVTP và mẫu",
          "https://cdn.thuvienphapluat.vn/uploads/laodongtienluong/20230301/HTT/11-2026/CV-2664-phuong-Ngoc-Ha.pdf"
        ],
        [
          "Mở bảng phường Ngọc Hà",
          "https://docs.google.com/spreadsheets/d/14laUXFpX1Qv5c3iIkw9pQ45-WikPYHg56m9PSL1wtQk/edit?gid=1385867739#gid=1385867739"
        ]
      ]
    },
    {
      "name": "Phường Ô Chợ Dừa",
      "deadline": "Trước ngày 17/11/2026",
      "note": "Dùng biểu 1, 2, 3 kèm công văn và gửi bản giấy về UBND phường Ô Chợ Dừa qua Phòng Nội vụ – Tư pháp, 61 phố Hoàng Cầu. Liên hệ tiếp nhận: Nguyễn Thị Thùy Trang, 0987 558 382.",
      "links": [
        [
          "Công văn 2596/UBND-NVTP ngày 10/11/2026 và mẫu",
          "https://cdn.thuvienphapluat.vn/uploads/laodongtienluong/20230301/HTT/11-2026/CV-2596-UBND-O-Cho-Dua.pdf"
        ]
      ]
    },
    {
      "name": "Phường Phú Diễn",
      "deadline": "Chưa xác minh hạn của phường",
      "note": "Danh sách địa phương có dẫn biểu mẫu hoặc tài liệu này. Xem hướng dẫn trong tài liệu và hỏi phường nếu cần xác nhận cách gửi.",
      "links": [
        [
          "Mở bảng được dẫn",
          "https://docs.google.com/spreadsheets/d/1bZa0Iq9T9QHFTnbgqSY2D0qwoFJ44d_u/edit?gid=1899816963#gid=1899816963"
        ],
        [
          "Danh sách phường, xã Hà Nội",
          "https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/danh-sach-phuong-xa-ha-noi-da-co-link-bao-cao-tien-luong-thuong-tet-2027-chi-tiet-nhu-the-nao-301695.html"
        ]
      ]
    },
    {
      "name": "Phường Phương Liệt",
      "deadline": "Chưa xác minh hạn của phường",
      "note": "Danh sách địa phương có dẫn biểu mẫu hoặc tài liệu này. Xem hướng dẫn trong tài liệu và hỏi phường nếu cần xác nhận cách gửi.",
      "links": [
        [
          "Mở bảng được dẫn",
          "https://docs.google.com/spreadsheets/d/11ITv-HxjTQ3DglPoXbddbQfk0kwUNXZd/edit?gid=711823865"
        ],
        [
          "Danh sách phường, xã Hà Nội",
          "https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/danh-sach-phuong-xa-ha-noi-da-co-link-bao-cao-tien-luong-thuong-tet-2027-chi-tiet-nhu-the-nao-301695.html"
        ]
      ]
    },
    {
      "name": "Phường Thanh Liệt",
      "deadline": "Chưa xác minh hạn của địa phương",
      "note": "Đường dẫn do người dùng cung cấp. Xem tên đơn vị trên bảng và xác nhận cách gửi với UBND phường, xã trước khi khai.",
      "links": [
        [
          "Mở bảng khai trực tuyến",
          "https://docs.google.com/forms/d/e/1FAIpQLSfX3E9jMGE3kBbH7jmd4y_lIhshwn72C2hpUCOrzYVT_w13DA/viewform",
          "submit"
        ]
      ]
    },
    {
      "name": "Phường Thanh Xuân",
      "deadline": "Chưa xác minh hạn của phường",
      "note": "Danh sách địa phương có dẫn biểu mẫu hoặc tài liệu này. Xem hướng dẫn trong tài liệu và hỏi phường nếu cần xác nhận cách gửi.",
      "links": [
        [
          "Mở bảng phường Thanh Xuân",
          "https://docs.google.com/spreadsheets/d/1LAbTDbnt47O52_BITFS-BEyFKw1XeScnfkZZQcww5no/edit?usp=sharing"
        ],
        [
          "Mở bảng từ danh sách đối chiếu",
          "https://docs.google.com/spreadsheets/u/0/d/15HedfXtyQE7Y-UIOfeLVZZLEW1P-xfhS/htmlview"
        ],
        [
          "Danh sách phường, xã Hà Nội",
          "https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/danh-sach-phuong-xa-ha-noi-da-co-link-bao-cao-tien-luong-thuong-tet-2027-chi-tiet-nhu-the-nao-301695.html"
        ]
      ]
    },
    {
      "name": "Phường Từ Liêm",
      "deadline": "Trước ngày 17/11/2026",
      "note": "Tổng hợp số liệu theo biểu 01, 02, 03 trong bảng và đồng thời gửi về Phòng Nội vụ – Tư pháp phường Từ Liêm. Liên hệ tiếp nhận: Nghiêm Thị Thu, 0983 393 118.",
      "links": [
        [
          "Xem bảng mẫu",
          "https://docs.google.com/spreadsheets/d/1as2XK_DiLfSPOFnvT15AXpvyEBqvgtU2DkhcezrGsII/htmlview?usp=sharing&pru=AAABofKhB_E*hAXEXQtSP9BKNP0pXdLnrw"
        ],
        [
          "Công văn 5014/UBND-NVTP ngày 11/11/2026",
          "https://cdn.thuvienphapluat.vn/uploads/laodongtienluong/20230301/HTT/11-2026/tu-liem.pdf"
        ]
      ]
    },
    {
      "name": "Phường Tương Mai",
      "deadline": "Chưa xác minh hạn của phường",
      "note": "Danh sách địa phương có dẫn biểu mẫu hoặc tài liệu này. Xem hướng dẫn trong tài liệu và hỏi phường nếu cần xác nhận cách gửi.",
      "links": [
        [
          "Mở bảng được dẫn",
          "https://docs.google.com/spreadsheets/d/1JnJfXGDgn5H4jFFD-7HcoCl-6uq09uxkIefCJ17bQfY/edit?gid=0#gid=0"
        ],
        [
          "Danh sách phường, xã Hà Nội",
          "https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/danh-sach-phuong-xa-ha-noi-da-co-link-bao-cao-tien-luong-thuong-tet-2027-chi-tiet-nhu-the-nao-301695.html"
        ]
      ]
    },
    {
      "name": "Phường Xuân Đỉnh",
      "deadline": "Chưa xác minh hạn của phường",
      "note": "Danh sách địa phương có dẫn biểu mẫu hoặc tài liệu này. Xem hướng dẫn trong tài liệu và hỏi phường nếu cần xác nhận cách gửi.",
      "links": [
        [
          "Mở bảng được dẫn",
          "https://docs.google.com/spreadsheets/d/1jyij7Gk9HsrDMDurX7pJraibr6uXOLSu1MIuzeNDfWw/edit?gid=0#gid=0"
        ],
        [
          "Danh sách phường, xã Hà Nội",
          "https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/danh-sach-phuong-xa-ha-noi-da-co-link-bao-cao-tien-luong-thuong-tet-2027-chi-tiet-nhu-the-nao-301695.html"
        ]
      ]
    },
    {
      "name": "Phường Xuân Phương",
      "deadline": "Chưa xác minh hạn của địa phương",
      "note": "Gửi về UBND phường Xuân Phương qua Phòng Nội vụ – Tư pháp, số 28 đường Foresa 4B, KĐT Xuân Phương. Liên hệ 0376 230 586.",
      "links": [
        [
          "Danh sách phường, xã Hà Nội",
          "https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/danh-sach-phuong-xa-ha-noi-da-co-link-bao-cao-tien-luong-thuong-tet-2027-chi-tiet-nhu-the-nao-301695.html"
        ]
      ]
    },
    {
      "name": "Phường Yên Hòa",
      "deadline": "Trước ngày 15/11/2026",
      "note": "Điền mẫu Excel và gửi UBND phường Yên Hòa qua Phòng Văn hóa – Xã hội, 231 Nguyễn Ngọc Vũ. Liên hệ tiếp nhận: Nguyễn Thị Thanh Nhàn, 0975 731 372.",
      "links": [
        [
          "Mẫu Excel",
          "https://cdn.thuvienphapluat.vn/uploads/laodongtienluong/20230301/HTT/10-2026/bao-cao-yen-hoa.xlsx"
        ],
        [
          "Công văn 2981/UBND-VHXH ngày 10/11/2026",
          "https://cdn.thuvienphapluat.vn/uploads/laodongtienluong/20230301/HTT/10-2026/CV-2981.pdf"
        ]
      ]
    },
    {
      "name": "Xã Đại Thanh",
      "deadline": "Chưa xác minh hạn của địa phương",
      "note": "Đường dẫn do người dùng cung cấp. Xem tên đơn vị trên bảng và xác nhận cách gửi với UBND phường, xã trước khi khai.",
      "links": [
        [
          "Mở bảng khai trực tuyến",
          "https://docs.google.com/spreadsheets/d/1lJMlB-PAtIqs0VnRswAVp1HFUqhdHcGGgJ-5LoWqUZc/edit?usp=sharing",
          "submit"
        ]
      ]
    },
    {
      "name": "Xã Hoài Đức",
      "deadline": "Chưa xác minh hạn của địa phương",
      "note": "Đường dẫn do người dùng cung cấp. Xem tên đơn vị trên bảng và xác nhận cách gửi với UBND phường, xã trước khi khai.",
      "links": [
        [
          "Mở bảng khai trực tuyến",
          "https://docs.google.com/spreadsheets/d/1lZ_FQzIG1lZklYA69Znp4Ssju0YUXQeZ/edit?usp=sharing",
          "submit"
        ]
      ]
    },
    {
      "name": "Xã Nam Phù",
      "deadline": "Chưa xác minh hạn của địa phương",
      "note": "Đường dẫn do người dùng cung cấp. Xem tên đơn vị trên bảng và xác nhận cách gửi với UBND phường, xã trước khi khai.",
      "links": [
        [
          "Mở bảng khai trực tuyến",
          "https://docs.google.com/spreadsheets/d/1wAecAgEd_3uceGVsOukVLPfc3XTDV05L/edit?usp=sharing",
          "submit"
        ]
      ]
    },
    {
      "name": "Xã Nội Bài",
      "deadline": "Chưa xác minh hạn của địa phương",
      "note": "Nơi nhận được dẫn: Phòng Nội vụ – Tư pháp, thôn Thanh Nhàn.",
      "links": [
        [
          "Danh sách phường, xã Hà Nội",
          "https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/danh-sach-phuong-xa-ha-noi-da-co-link-bao-cao-tien-luong-thuong-tet-2027-chi-tiet-nhu-the-nao-301695.html"
        ]
      ]
    }
  ]
};

const central = [
  [
    "Công văn 12421/BNV-CTL&BHXH (PDF)",
    "https://cdn.thuvienphapluat.vn/uploads/laodongtienluong/20230301/NTD/261103/Cong-van-12421.pdf"
  ],
  [
    "Ba biểu tổng hợp của Bộ (PDF)",
    "https://cdn.thuvienphapluat.vn/uploads/laodongtienluong/20230301/NTTU/bieu-mau-bao-cao-tien-luong-2026-cv.pdf"
  ]
];
const sources = [
  [
    "Bộ Nội vụ – hướng dẫn và thời hạn báo cáo tổng hợp",
    "https://moha.gov.vn/tin-tuc/bo-noi-vu-yeu-cau-bao-cao-tinh-hinh-tien-luong-tien-thuong-tet-2027-truoc-ngay-25112026---id19805"
  ],
  [
    "Thư Viện Pháp Luật – mẫu báo cáo và link theo tỉnh, thành",
    "https://thuvienphapluat.vn/lao-dong-tien-luong/tong-hop-mau-bao-cao-tien-luong-thuong-tet-2027-kem-link-nop-tai-34-tinh-thanh-ra-sao-68070.html"
  ],
  [
    "Thư Viện Pháp Luật – các đầu mối tại Hà Nội và TP. Hồ Chí Minh",
    "https://thuvienphapluat.vn/lao-dong-tien-luong/link-bao-cao-tinh-hinh-lao-dong-tien-luong-2026-va-ke-hoach-thuong-tet-2027-tai-ha-noi-tphcm-o-dau-68410.html"
  ],
  [
    "Thư Viện Pháp Luật – bảng đối chiếu công văn, hạn và kênh nộp",
    "https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/tong-hop-link-bao-cao-tien-luong-thuong-tet-2027-cua-so-noi-vu-34-tinh-thanh-doanh-nghiep-can-thuc-300243.html"
  ],
  [
    "Danh sách phường, xã Hà Nội và link biểu mẫu",
    "https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/danh-sach-phuong-xa-ha-noi-da-co-link-bao-cao-tien-luong-thuong-tet-2027-chi-tiet-nhu-the-nao-301695.html"
  ]
];
