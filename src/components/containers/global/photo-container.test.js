import PhotoContainer from './photo-container';
import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../actions/photo-actions'

const photos = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "http://placehold.it/600/92c952",
        "thumbnailUrl": "http://placehold.it/150/30ac17"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "http://placehold.it/600/771796",
        "thumbnailUrl": "http://placehold.it/150/dff9f6"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "http://placehold.it/600/24f355",
        "thumbnailUrl": "http://placehold.it/150/1941e9"
    },
    {
        "albumId": 2,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "http://placehold.it/600/d32776",
        "thumbnailUrl": "http://placehold.it/150/39e985"
    }]

    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const initialState = {
        photoState : {
            records: photos,
            filterTitle : "",
            filterAlbumId : ""
        }
    }

    describe('PhotoContainer default', () => {
        let store;
        let wrapper;

        beforeAll(() => {
            let curState = JSON.parse(JSON.stringify(initialState));
            store = mockStore(curState);
            wrapper = mount(
                <PhotoContainer store={store}/>
            );
        });

        it('init the default state ', () => {
            const countNode = wrapper.find('.count');
            expect(countNode.text()).toEqual('4');
        });

    });

    describe('PhotoContainer with filterTitle', () => {
        let store;
        let wrapper;
        beforeAll(() => {
            let curState = JSON.parse(JSON.stringify(initialState));
            curState.photoState.filterTitle = 'qui'
            store = mockStore(curState);
            wrapper = mount(
                <PhotoContainer store={store}/>
            );
        });

        it('add filterTitle on the component ', () => {
            expect(wrapper.find('.count').text()).toEqual('2')
        });
    });

    describe('PhotoContainer with filterAlbumId', () => {
        let store;
        let wrapper;
        beforeAll(() => {
            let curState = JSON.parse(JSON.stringify(initialState));
            curState.photoState.filterAlbumId = '2'
            store = mockStore(curState);
            wrapper = mount(
                <PhotoContainer store={store}/>
            );
        });

        it('add filterTitle on the component ', () => {
            console.log(wrapper.find('.count').html());
            expect(wrapper.find('.count').text()).toEqual('1')
        });
    });
