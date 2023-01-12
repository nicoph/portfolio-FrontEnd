import { Injectable } from '@angular/core';
import {Storage, ref, list, getDownloadURL} from "@angular/fire/storage";
import { uploadBytes } from '@firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url:string="";
  constructor(private storage:Storage) { }

  
  getImages(){
    const imagesRef = ref(this.storage, "imagen")
    list(imagesRef).then(async response=>{
      for(let item of response.items){
        this.url = await getDownloadURL(item);
      }
    }).catch(error=> console.log(error))
  }

}
