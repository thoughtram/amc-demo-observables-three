import {Observable} from 'rxjs'
import {debounceTime} from 'rxjs/operators';

let myObservable = Observable.create(observer => {
  observer.next(1);
  setTimeout(() => observer.next(2), 100);
  setTimeout(() => observer.next(3), 150);
  setTimeout(() => observer.next(4), 200);
  setTimeout(() => observer.next(5), 350);
});

myObservable
  .pipe(
    debounceTime(100)
  ).subscribe(
      val   => console.log(val),
      error => console.error(error),
      ()    => console.log('completed')
    );