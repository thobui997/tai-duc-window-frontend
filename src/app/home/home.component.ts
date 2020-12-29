import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ourService = [
    {
      title: 'Thi công lắp đặt',
      body:
        'Với đội ngũ nhiều năm kinh nghiệm chuyên lắp đặt các hệ cửa cao cấp như cửa Hyundai Hàn Quốc, cửa nhôm Xingfa, cửa nhôm Schuco, cửa nhôm PMI, cửa nhôm Topalu, cửa nhôm Germany, cửa nhôm JMA, Cửa nhôm cầu cách nhiệt, Cửa nhôm PMA, Cửa nhựa lõi thép... Taiducwindow.com luôn đảm bảo tốt tiến độ, kỹ thuật và thẩm mỹ cao.',
    },
    {
      title: 'Tư vấn thiết kế - phong thủy',
      body:
        'Trong Xây dựng nói chung và đặc biệt lắp đặt các loại cửa làm thế nào để có thể ngăn chặn và làm giảm sự kích thích không mong muốn từ bên ngoài, lấy năng lượng sống, thải ra khí cũ và tiếp nhận không khí mới, Do đó phong thuỷ trong vấn đề lắp đặt cửa rất quan trọng đối với các công trình hay ngôi nhà, không nên bỏ qua.',
    },
    {
      title: 'Phân phối nhôm và phụ kiện',
      body:
        'Taiducwindow.com chuyên cung cấp các Profile nhôm cao cấp như Hyundai, Xingfa, Schuco, JMA, các loại phụ kiện cao cấp như Cmech, Kinlong, Ace (Hàn Quốc) , các hệ cửa tự động.',
    },
    {
      title: 'Gia công và sản xuất',
      body:
        'Với nhà xưởng và máy móc hiện đại, Taiducwindow.com đảm bảo khả năng sản xuất các hệ cửa cao cấp đúng quy trình, kỹ thuật và độ thậm mỹ cao, tiến độ tốt, sản lượng lớn.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
