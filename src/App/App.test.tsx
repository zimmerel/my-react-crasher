import { render } from '@testing-library/react';
import { BugSplat } from 'bugsplat-react';
import App from './App';

jest.mock('bugsplat', () => ({
  BugSplat: jest.fn(() => ({
    post: jest.fn(),
  })),
}));

const BugSplatMock = jest.fn<BugSplat, []>();

describe('<App />', () => {
  let bugsplat: BugSplat;

  beforeEach(() => {
    bugsplat = new BugSplat('fred', 'my-react-crasher', '9001.0.0');
  });

  test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
