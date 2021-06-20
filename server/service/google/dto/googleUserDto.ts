export interface RawGoogleUser {
  id: number;
  email: string;
  name: string;
  picture: string;
  locale: string;
}

export class GoogleUserDTO {
  email: string;
  name: string;
  constructor(userData: RawGoogleUser) {
    this.email = userData.email;
    this.name =
      userData.name.length > 5
        ? userData.name.slice(0, 5).replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi, '')
        : userData.name;
  }
}
