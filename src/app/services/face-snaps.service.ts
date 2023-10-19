import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
import { HttpClient } from "@angular/common/http";
import { Observable, map, switchMap } from "rxjs";
@Injectable({
    providedIn: "root" // This is the default value. You can omit it if you
})

export class FaceSnapsService {
  constructor(private http: HttpClient){}


    getAllFaceSnaps(): Observable<FaceSnap[]> {
      return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }
    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
      return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
    }

    snapFaceSnapById(faceSnapId:number, snapType: 'snap' | 'unSnap'): Observable<FaceSnap>{
      return  this.getFaceSnapById(faceSnapId).pipe(
        map(faceSnap => ({
          ...faceSnap,
          snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
        })),
        switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap))
      )
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

    addFaceSnap(formValue: {title: string, description: string, imgURL: string, location?:string}): Observable<FaceSnap>{
      return this.getAllFaceSnaps().pipe(
        map(faceSnaps => [...faceSnaps].sort((a:FaceSnap, b:FaceSnap) => a.id - b.id)),
        map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length -1]),
        map(previousFaceSnap => ({
          ...formValue,
          snaps : 0,
          createdDate: new Date(),
          id: previousFaceSnap.id + 1
        })),
        switchMap(newFaceSnap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps/', newFaceSnap))
      );
    }
    }
    
