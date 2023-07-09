import { MockBuilder, MockRender } from 'ng-mocks';
import { AuthButtonComponent } from './auth-button.component';
import { AppModule } from '../../app.module';

describe('AuthButtonComponent', () => {
  beforeEach(() => MockBuilder(AuthButtonComponent, [AppModule]));

  it('should create', () => {
    const fixture = MockRender(AuthButtonComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
