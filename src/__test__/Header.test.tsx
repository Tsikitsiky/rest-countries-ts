import React from 'react';
import { render} from '@testing-library/react';
import Header from '../components/Header';

const fakeTitle = 'Title'
test('<Header>', () => {
    const {getByTestId} = render(<Header title={fakeTitle} />);
    expect(getByTestId('title')).toBeTruthy();
})