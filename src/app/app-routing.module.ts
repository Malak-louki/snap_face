import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';

const routes: Routes = [
  { path: 'faceSnaps/:id', component: SingleFaceSnapComponent},
  { path: 'faceSnaps', component: FaceSnapListComponent },
  { path: 'create', component: NewFaceSnapComponent},
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
