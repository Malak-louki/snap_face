import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
@Injectable({
    providedIn: "root" // This is the default value. You can omit it if you
})

export class FaceSnapsService {

    faceSnaps:FaceSnap[]=[
    {
        id:1,
          title:'Mimi',
          description:`with the best Friend the world!`,
          createdDate:new Date(),
          snaps: 0,
          imgURL: 'https://img.freepik.com/photos-gratuite/vue-verticale-du-celebre-rocher-plage-santa-giulia_268835-3733.jpg?w=740&t=st=1690539294~exp=1690539894~hmac=d78c5208849f953b6cea3564422c29a1a5603e2d92fc6b14360b30c4fdd2fe73',
          location:'Bali'
        },
      {
          id:2,
          title:'Maissa',
          description:`food time`,
          createdDate:new Date(),
          snaps: 150,
          imgURL: 'https://img.freepik.com/photos-gratuite/steak-bien-cuit-pommes-terre-maison_140725-3989.jpg?w=360&t=st=1690635734~exp=1690636334~hmac=f7b26fed05089596e158b82e28fd53755d08f54486c703abbcd188d94716c6ab',
          location: 'Antaliya'
        },
    
        {
          id:3,
          title:'Sirine',
          description:`pyjama party`,
          createdDate:new Date(),
          snaps: 4,
          imgURL: 'https://img.freepik.com/photos-gratuite/belle-femme-lapin-kigurumi-posant-ami_197531-12854.jpg?w=740&t=st=1690635887~exp=1690636487~hmac=8a2ab0556b6cf410c4e5d4a89b70b527fa733bf5f1cb92b746b00bd82a4143ed'
        }
    ]
    getAllFaceSnaps(): FaceSnap[]{
      return this.faceSnaps;
    }
    getFaceSnapById(faceSnapId: number): FaceSnap{
      
      const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
      if(!faceSnap){
        throw new Error('FaceSnap not found! ');
      }else{
        return faceSnap;
      }

    }

    snapFaceSnapById(faceSnapId:number, snapType: 'snap' | 'unSnap'):void{
      const faceSnap = this.getFaceSnapById(faceSnapId);
      snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;

    }
    // snapFaceSnapById(faceSnapId:number):void{
    //   const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    //   if(faceSnap){
    //     faceSnap.snaps++;
    //   }

    // unSnapFaceSnapById(faceSnapId:number):void{
    //   const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    //   if(faceSnap){
    //     faceSnap.snaps--;
    //   }

    addFaceSnap(formValue: {title: string, description: string, imgURL: string, location?:string}):void{
      const faceSnap: FaceSnap = {
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
        id: this.faceSnaps[this.faceSnaps.length - 1].id +1
      };
      this.faceSnaps.push(faceSnap);
    }
    }
    
