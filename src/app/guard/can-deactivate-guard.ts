import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface IHasUnsavedChanges {
    canDeactivate: () => Observable<boolean>;
}

@Injectable({
    providedIn: 'root'
})

export class AuthGuard {

    constructor(private router: Router) {
    }

    canActivate(component: IHasUnsavedChanges): boolean {
        const username = localStorage.getItem('username');
        if (!username) this.router.navigate(['/login']).then();
        return !!username;
    }
}
