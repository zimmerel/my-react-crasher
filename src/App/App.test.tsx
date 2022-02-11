import { render, screen } from '@testing-library/react';
// import { BugSplat } from 'bugsplat-react';
import App from './App';

// const mockPost = jest.fn(async () => ({}));
// jest.mock('bugsplat-react', () => ({
//   BugSplat: jest.fn().mockImplementation(() => ({
//     post: mockPost,
//   })),
// }));

// beforeEach(() => {
//   mockPost.mockClear();
// });

describe('<App />', () => {
  // let bugsplat: BugSplat;

  // beforeEach(() => {
  //   bugsplat = new BugSplat('fred', 'my-react-crasher', '9001.0.0');
  // });

  it('should render title in h1 tag', () => {
    render(<App />);
    const titleElement = screen.getByText('Welcome to my-react-crasher');
    expect(titleElement).toBeInTheDocument();
  });
});
