import {Component, Input, OnInit} from '@angular/core';
import {ReferentielsComponent} from "../../referentiels.component";
import {ReferentielsService} from "../../referentiels.service";

@Component({
  selector: 'app-item-referentil',
  templateUrl: './item-referentil.component.html',
  styleUrls: ['./item-referentil.component.css']
})
export class ItemReferentilComponent implements OnInit {

  constructor(private service: ReferentielsService) { }
  // @ts-ignore
  @Input() referentiels: Referentiels;
  ngOnInit(): void {
  }

  // @ts-ignore
  supReferentiel(){
    const conf = confirm('Etes vous sur de vouloir suprimer ?');
    if(conf)
    this.service.deleteRferentiel(this.referentiels.id).subscribe(
      ()=>{
        console.log('referentiel supprimé avec succés');
      }
    );
  }
}
