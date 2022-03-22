import Homepage from './Components/homepage';
import CheckProvider from './Components/checkContext';
import './App.scss';
function App() {
    return (
        <CheckProvider>
            <Homepage />
        </CheckProvider>
    );
}

export default App;
