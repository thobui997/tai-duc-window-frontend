import { Component, OnInit } from '@angular/core';
import { IntroduceService } from '../api/introduce/introduce.service';
import {IntroduceModel} from '../api/introduce/introduce.model';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.css'],
})
export class IntroduceComponent implements OnInit {
  informationIntroduce: IntroduceModel;
  constructor(private introduceService: IntroduceService) {}

  ngOnInit(): void {
    this.introduceService.getInformationOfIntroduce().subscribe(data => this.informationIntroduce = data);
  }
}
