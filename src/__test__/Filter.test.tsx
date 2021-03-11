import React from 'react';
import { fireEvent, render} from '@testing-library/react';
import Filter from '../components/Filter';
const searchCountry = jest.fn()
test('<Search a city>', () => {
    const {getByTestId} = render(<Filter />);
    expect(getByTestId('search')).toBeTruthy();
    fireEvent.change(getByTestId('search')), {
		target: { value: 'ma' }
    }

    // fireEvent.change(searchCountry('ma'));
    // expect(searchCountry()).toHaveBeenCalledWith('ma');
})
