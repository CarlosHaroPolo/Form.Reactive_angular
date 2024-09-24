import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface MenuItem{
  title: string,
  route:string
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {

   public reactiveMenu:MenuItem[]=[
     {title:'Basico', route:'./reactive/basic'},
     {title:'Dinamicos', route:'./reactive/dynamic'},
     {title:'Switches', route:'./reactive/switches'},
   ]

   public authMenu:MenuItem[]=[
    {title:'Basico', route:'./auth'},
  ]

}
