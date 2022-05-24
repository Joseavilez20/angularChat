export class SchoolResponse {
  public school_id: number;
  public school_name: string;
  public photo: string | null;
  public location: number;

  constructor(school_id: number, school_name: string, photo: string | null, location: number) {
    this.school_id = school_id;
    this.school_name = school_name;
    this.photo = photo;
    this.location = location;
  }
}
