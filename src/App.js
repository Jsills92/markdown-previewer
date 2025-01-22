
import './App.css';
import MarkdownPreviewer from './MarkdownPreviewer/MarkdownPreviewer';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


function App() {
  return (
    <div className="App">
    <ErrorBoundary>
    <MarkdownPreviewer />
    </ErrorBoundary>
     
    </div>
  );
}

export default App;
