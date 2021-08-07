import { RouteComponentProps } from '@reach/router';

const LandingPage = (props: RouteComponentProps) => {
  var a = 'test';

  return (
    <div className="App">
      <header className="App-header">
        <p>test {a}</p>
      </header>
    </div>
  );
};

export default LandingPage;
