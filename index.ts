// Import stylesheets
import './style.css';
import { Observable, range, of, interval, fromEvent, from, throwError, empty } from 'rxjs';
import { filter, map, flatMap, scan, take, tap, buffer, debounceTime, catchError } from 'rxjs/operators';

var input = document.getElementById('textInput');

var inputObservable = fromEvent<KeyboardEvent>(input, 'keypress')
  .pipe(
   map(event => event.key),
   filter(x => x.match(/^[a-zA-Z]+$/)),
   map(c => c.toUpperCase)
  )

inputObservable.subscribe(x => sendValues(x));

function sendValues(x){
  var pre = document.createElement('pre');
  pre.innerHTML = JSON.stringify(x);
  document.getElementById('results').appendChild(pre);
}