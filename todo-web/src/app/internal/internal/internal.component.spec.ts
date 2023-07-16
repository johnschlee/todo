import { InternalComponent } from './internal.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { InternalModule } from '../internal.module';
import { MediaMatcher } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

describe('InternalComponent', () => {
  beforeEach(() => {
    return MockBuilder(InternalComponent, InternalModule).provide({
      provide: MediaMatcher,
      useClass: FakeMediaMatcher,
    });
  });

  it('should create', () => {
    const fixture = MockRender(InternalComponent);
    expect(fixture.point.componentInstance).toBeDefined();
  });
});

// pinched implementations from breakpoints-observer.spec.ts in angular components repo
export class FakeMediaQueryList {
  /** The callback for change events. */
  private _listeners: ((mql: MediaQueryListEvent) => void)[] = [];

  constructor(
    public matches: boolean,
    public media: string,
  ) {}

  addEventListener<K extends keyof MediaQueryListEventMap>(
    type: K,
    listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any,
  ): void {
    this._listeners.push(listener);
  }
}

@Injectable()
export class FakeMediaMatcher {
  /** A map of match media queries. */
  private _queries = new Map<string, FakeMediaQueryList>();

  /** Fakes the match media response to be controlled in tests. */
  matchMedia(query: string): FakeMediaQueryList {
    const mql = new FakeMediaQueryList(true, query);
    this._queries.set(query, mql);
    return mql;
  }
}
