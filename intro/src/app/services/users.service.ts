import { Injectable } from '@angular/core';
import { Usermodel } from '../interfaces/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  allChars: Array<Usermodel> =[
    {
      id: 1,
      firstName: 'King',
      lastName: 'McCaughran',
      email: 'kmccaugHran@gov.uk',
      expDate: '1616717128000',
      salary: 2000,
      deletedUser: false
    },
    {
      id: 2,
      firstName: 'Margaretha',
      lastName: 'Gallaher',
      email: 'mgallaher1@ucoz.RU',
      expDate: '1641204026000',
      salary: 2700,
      deletedUser: false,
    },
    {
      id: 3,
      firstName: 'BeitriS',
      lastName: 'Chamberlin',
      email: 'bchamberlin2@google.ca',
      expDate: '1617902537000',
      salary: 2300,
      deletedUser: false,
    },
    {
      id: 4,
      firstName: 'Isadora',
      lastName: 'Beneteau',
      email: 'ibeneteau3@GOOGLE.es',
      expDate: '1641082210000',
      salary: 1500,
      deletedUser: false,
    },
    {
      id: 5,
      firstName: 'JiLL',
      lastName: 'Cecil',
      email: 'jcecil4@boston.com',
      expDate: '1620952941000',
      salary: 3000,
      deletedUser: false,
    },
    {
      id: 6,
      firstName: 'Rina',
      lastName: 'Mackiewicz',
      email: 'Rmackiewicz5@de.vu',
      expDate: '1614199523000',
      salary: 4000,
      deletedUser: false,
    },
    {
      id: 7,
      firstName: 'Lemmie',
      lastName: 'Jaffra',
      email: 'ljaffra6@npr.org',
      expDate: '1624553256000',
      salary: 3300,
      deletedUser: false,
    },
    {
      id: 8,
      firstName: 'rustie',
      lastName: 'Minmagh',
      email: 'rminmagh7@yahoo.com',
      expDate: '1612206483000',
      salary: 700,
      deletedUser: false,
    },
    {
      id: 9,
      firstName: 'Somerset',
      lastName: 'McVee',
      email: 'smcvee8@nps.gov',
      expDate: '1614345098000',
      salary: 1500,
      deletedUser: false,
    },
    {
      id: 10,
      firstName: 'vin',
      lastName: 'Fearnside',
      email: 'vfearnside9@tripod.com',
      expDate: '1637918861000',
      salary: 3050,
      deletedUser: false,
    },
  ];
  savedUsers: Array<Usermodel> =[
    {
      id: 1,
      firstName: 'King',
      lastName: 'McCaughran',
      email: 'kmccaugHran@gov.uk',
      expDate: '1616717128000',
      salary: 2000,
      deletedUser: false
    },
    {
      id: 2,
      firstName: 'Margaretha',
      lastName: 'Gallaher',
      email: 'mgallaher1@ucoz.RU',
      expDate: '1641204026000',
      salary: 2700,
      deletedUser: false,
    },
    {
      id: 3,
      firstName: 'BeitriS',
      lastName: 'Chamberlin',
      email: 'bchamberlin2@google.ca',
      expDate: '1617902537000',
      salary: 2300,
      deletedUser: false,
    },
    {
      id: 4,
      firstName: 'Isadora',
      lastName: 'Beneteau',
      email: 'ibeneteau3@GOOGLE.es',
      expDate: '1641082210000',
      salary: 1500,
      deletedUser: false,
    },
    {
      id: 5,
      firstName: 'JiLL',
      lastName: 'Cecil',
      email: 'jcecil4@boston.com',
      expDate: '1620952941000',
      salary: 3000,
      deletedUser: false,
    },
    {
      id: 6,
      firstName: 'Rina',
      lastName: 'Mackiewicz',
      email: 'Rmackiewicz5@de.vu',
      expDate: '1614199523000',
      salary: 4000,
      deletedUser: false,
    },
    {
      id: 7,
      firstName: 'Lemmie',
      lastName: 'Jaffra',
      email: 'ljaffra6@npr.org',
      expDate: '1624553256000',
      salary: 3300,
      deletedUser: false,
    },
    {
      id: 8,
      firstName: 'rustie',
      lastName: 'Minmagh',
      email: 'rminmagh7@yahoo.com',
      expDate: '1612206483000',
      salary: 700,
      deletedUser: false,
    },
    {
      id: 9,
      firstName: 'Somerset',
      lastName: 'McVee',
      email: 'smcvee8@nps.gov',
      expDate: '1614345098000',
      salary: 1500,
      deletedUser: false,
    },
    {
      id: 10,
      firstName: 'vin',
      lastName: 'Fearnside',
      email: 'vfearnside9@tripod.com',
      expDate: '1637918861000',
      salary: 3050,
      deletedUser: false,
    },
  ];

  getEven(): Array<Usermodel> {
    return this.allChars.filter(user => user.id % 2 === 0);
  }

  getOdds(): Array<Usermodel> {
    return this.allChars.filter(user => user.id % 2 !== 0);
  }

  resetTable(): Array<Usermodel> {
    return this.savedUsers;
  }
}
