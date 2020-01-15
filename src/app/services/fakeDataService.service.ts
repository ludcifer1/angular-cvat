import { of } from 'rxjs';

export class FakeDataService {

  constructor() { }

  fetchData() {
    return of({
      images: [
        {
          id: '3a5d16a5ed1',
          image_url: 'https://imgur.com/Fm9NeGr.jpg',
          width: 1024,
          height: 768,
          boxes: [
            {
              id: 0,
              category_id: 'a5sd6a5d1',
              top: 43,
              left: 477,
              width: 85,
              height: 184
            }
          ]
        }
      ]
    });
  }


}
