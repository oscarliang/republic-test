'use strict';

jest.mock('./photo-api');
import * as photo from './photo-api'

// The promise that is being tested should be returned.
it('test promises with getPhotosAPI', () => {
    return photo.getPhotosAPI()
    .then(results => expect(results.length).toEqual(4));
});

it('test promises with get correct Photo', () => {
    return photo.getPhotosAPI()
    .then(results => {
        let photo0 = {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "http://placehold.it/600/92c952",
            "thumbnailUrl": "http://placehold.it/150/30ac17"
        }
        expect(results[0]).toEqual(photo0)
    }
);
});
