import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
        setInterval(()=>{
          observer.next(count);
          if(count === 2){
            observer.complete();
          }
          if(count>3){
            observer.error(new Error('Count is greater than 3'));
          }
          count++;
        }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
        console.log(error);
        alert(error.message);
    }, ()=>{
      console.log('Completed!');
    });
    
  }

  ngOnDestroy(){
    this.firstObsSubscription.unsubscribe();
  }
  
}
