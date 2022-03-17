import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { forkJoin } from 'rxjs';
import { Advisories, BannerModel } from '../api/advisories/advisories.model';
import { AdvisoriesService } from '../api/advisories/advisories.service';
import { IntroduceModel } from '../api/introduce/introduce.model';
import { IntroduceService } from '../api/introduce/introduce.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  services = [
    {
      image: '../../assets/images/thi cong.jpg',
      title: 'Thi công lắp đặt',
      body:
        'Với đội ngũ nhiều năm kinh nghiệm chuyên lắp đặt các hệ cửa cao cấp như cửa Hyundai Hàn Quốc, cửa nhôm Xingfa, cửa nhôm Schuco, cửa nhôm PMI, cửa nhôm Topalu, cửa nhôm Germany, cửa nhôm JMA, Cửa nhôm cầu cách nhiệt, Cửa nhôm PMA, Cửa nhựa lõi thép... Tài Đức luôn đảm bảo tốt tiến độ, kỹ thuật và thẩm mỹ cao.',
    },
    {
      image: '../../assets/images/phong thủy.jpg',
      title: 'Tư vấn thiết kế - phong thủy',
      body:
        'Trong Xây dựng nói chung và đặc biệt lắp đặt các loại cửa làm thế nào để có thể ngăn chặn và làm giảm sự kích thích không mong muốn từ bên ngoài, lấy năng lượng sống, thải ra khí cũ và tiếp nhận không khí mới, Do đó phong thuỷ trong vấn đề lắp đặt cửa rất quan trọng đối với các công trình hay ngôi nhà, không nên bỏ qua.',
    },
    {
      image: '../../assets/images/vận chuyển.jpg',
      title: 'Phân phối nhôm và phụ kiện',
      body:
        'Tài Đức chuyên cung cấp các Profile nhôm cao cấp như Hyundai, Xingfa, Schuco, JMA, các loại phụ kiện cao cấp như Cmech, Kinlong, Ace (Hàn Quốc) , các hệ cửa tự động.',
    },
    {
      image: '../../assets/images/gia công.jpg',
      title: 'Gia công và sản xuất',
      body:
        'Với nhà xưởng và máy móc hiện đại, Tài Đức đảm bảo khả năng sản xuất các hệ cửa cao cấp đúng quy trình, kỹ thuật và độ thậm mỹ cao, tiến độ tốt, sản lượng lớn.',
    },
  ];
  introduce: IntroduceModel;
  urlSafe: SafeResourceUrl;
  news: Advisories[];
  constructionNews: Advisories[];
  banner: BannerModel;

  constructor(
    private introduceService: IntroduceService,
    private advisoriesService: AdvisoriesService
  ) {
  }

  ngOnInit(): void {
    this.introduceService.getInformationOfIntroduce().subscribe((data) => {
      this.introduce = data;
    });

    forkJoin([
      this.advisoriesService.getBanner(),
      this.advisoriesService.getAllNews(),
      this.advisoriesService.getAllAdvisoryContruction(),
    ]).subscribe((data) => {
      [this.banner, this.news, this.constructionNews] = data;
    });
  }
}
