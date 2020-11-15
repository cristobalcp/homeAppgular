import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class VideoService {

   videoData: JSON;

  constructor(private http: HttpClient) { }

  getVideo(url, formato, no_playlist) {

    let params = new HttpParams()
      .set('url', url)
      .set('formato', formato) // Make radio choose mp3 || mp4
      .set('no_playlist', no_playlist)
    
      console.log('params:', params);
    
    this.http.get(`http://127.0.0.1:5010/video`, { params: params}).subscribe(data => {
      console.log('Response /video :', data);
      if(data['response']) alert(`Descarga de '${data['response']}' completada!`);
    })
  }
}
