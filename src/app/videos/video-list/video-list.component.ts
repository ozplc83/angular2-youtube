import {Component, OnInit} from "@angular/core";
import {VideoListItemComponent} from "../video-list-item";
import {VideoService} from "../shared/video.service";
import {PaginationControlsCmp, PaginatePipe, PaginationService} from "ng2-pagination";
import {Video} from "../shared/video.model";
import * as moment from 'moment';
import {AppState} from "../../shared/app-state.service";
import {Persona} from "../../shared/persona.service";
import {Oscar} from "../shared/oscar.model";

@Component({
  moduleId: module.id,
  selector: 'dl-video-list',
  templateUrl: 'video-list.component.html',
  styleUrls: ['video-list.component.css'],
  directives: [VideoListItemComponent, PaginationControlsCmp],
  pipes: [PaginatePipe],
  providers: [PaginationService]
})
export class VideoListComponent implements OnInit {

  videoList:Video[] = [];

  constructor(private videoService:VideoService, private appState:AppState, private persona:Persona) {
  }


  ngOnInit() {
    this.videoService.fetchVideos('adele')
      .subscribe(data => {
        this.appState.videoList = data.items.map(item => {
          return new Video(
            item.id.videoId,
            item.snippet.title,
            item.snippet.thumbnails.high.url,
            item.snippet.channelTitle,
            item.snippet.channelId,
            moment(item.snippet.publishedAt).fromNow(),
            item.snippet.description)
        });
        this.appState.activeVideo = this.appState.videoList[0];

        this.persona.personaLista=[new Oscar("Luis","Filoquio","32"),
                                   new Oscar("ernesto","Leon","32"),
                                   new Oscar("juan","Suarez","32"),
                                   new Oscar("petra","Cartagen","32"),
                                   new Oscar("jimena","Moreno","32"),
                                   new Oscar("adolfo","Rojas","32"),
          new Oscar("david","Ciliberto","32"),
          new Oscar("carolina","Quilot","32"),
          new Oscar("pedro","sanchez","32")];
          this.persona.personaActiva= this.persona.personaLista[5];
        //console("personas", this.persona.personaLista.length);



      });
  }


}
