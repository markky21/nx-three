import { ResizeObserver } from 'resize-observer';
import { ResizeObserverCallback } from 'resize-observer/lib/ResizeObserverCallback';
import { Observable } from 'rxjs';

export function resizeObserverStream(target: Element): Observable<ResizeObserverCallback> {
  return Observable.create(observer => {
    const resizeObserver = new ResizeObserver(entries => observer.next(entries));
    resizeObserver.observe(target);
  });
}
