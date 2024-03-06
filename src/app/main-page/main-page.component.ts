import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { Media } from '../media';
import { ApiConfig, ImageConfig } from '../api-config';
import  Carouflix  from 'carouflix';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  headliner?: Media;
  json_api_config!: ApiConfig;
  json_images_config! : ImageConfig;
  overview = '';
  dataSet: string[] = [];
  hrefArray: string[] = [];

  config = {
    setup: {
        imageStep: 1,
        transitionTime: 0.8,
        imageDisplayed: 5,
        stopOnLastPicture: true,
        aWraper: false,
    },
    style: {
        backgroundColor: 'rgb(20, 20, 20)',
        useDefaultNavigationToggle: true,
        navigationToggleSize: 'md',
        color: 'white',
    }
  };

  constructor(
    private mediaService: MediaService,
  ) { }

  ngOnInit(): void {
    const container = document.getElementsByClassName('carouflix')[0];

    if(document.documentElement.clientWidth < 900) {
      this.config.setup.imageDisplayed = 3;
    }

    this.mediaService.getHeadliner().subscribe(response => {
      this.headliner = response
      const api_config = localStorage.getItem("app-config")

      if(api_config){
        this.json_api_config = JSON.parse(api_config)
        this.json_images_config = this.json_api_config.images
      }

      const backdrop_url = this.json_images_config.secure_base_url + this.json_images_config.poster_sizes[6] + this.headliner.poster_path
      document.documentElement.style.setProperty('--hero-url', 'url(' + backdrop_url + ')')
      this.overview = this.headliner.overview.substring(0, this.headliner.overview.indexOf('.'))
    })

    this.mediaService.getTopTen().subscribe(response => {
      response.forEach(element => {
        this.dataSet.push(this.json_images_config.secure_base_url + this.json_images_config.poster_sizes[6] + element.poster_path);
        this.hrefArray.push('#');
      });

      (new Carouflix(container, this.dataSet, this.config, this.hrefArray));
    })
  }
}
