import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { Media } from '../media';
import { ApiConfig, ImageConfig } from '../api-config';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  headliner?: Media;
  json_api_config!: ApiConfig;
  json_images_config! : ImageConfig
  overview = '';

  constructor(
    private mediaService: MediaService,
  ) { }

  ngOnInit(): void {
    this.mediaService.getHeadliner().subscribe(response => {
      this.headliner = response
      const api_config = localStorage.getItem("app-config")

      if(api_config){
        this.json_api_config = JSON.parse(api_config)
        this.json_images_config = this.json_api_config.images
      }

      const backdrop_url = this.json_images_config.secure_base_url + this.json_images_config.poster_sizes[4] + this.headliner.poster_path
      document.documentElement.style.setProperty('--hero-url', 'url(' + backdrop_url + ')')
      this.overview = this.headliner.overview.substring(0, this.headliner.overview.indexOf('.'))

    })


  }

}
