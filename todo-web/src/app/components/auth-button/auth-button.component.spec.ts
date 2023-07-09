import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { AuthButtonComponent } from './auth-button.component';
import { AppModule } from '../../app.module';
import { of } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import * as exp from 'constants';

describe('AuthButtonComponent', () => {
  beforeEach(() => {
    return MockBuilder(AuthButtonComponent, [AppModule]).mock(AuthService, {
      isAuthenticated$: of(false),
    });
  });

  it('should create', () => {
    const fixture = MockRender(AuthButtonComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });

  it('it should invoke auth.loginWithRedirect() when the Log in button is clicked', () => {
    const fixture = MockRender(AuthButtonComponent);
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(
      fixture.point.componentInstance.auth.loginWithRedirect,
    ).toHaveBeenCalled();
  });

  it('it should invoke auth.logout() when the Log out button is clicked', async () => {
    const fixture = MockRender(AuthButtonComponent);
    ngMocks.stubMember(
      fixture.point.componentInstance.auth,
      'isAuthenticated$',
      of(true),
    );
    fixture.detectChanges();

    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
    button.click();
    fixture.whenStable().then(() => {
      expect(fixture.point.componentInstance.auth.logout).toHaveBeenCalled();
    });
  });
});
