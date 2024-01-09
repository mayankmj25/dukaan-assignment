
import './App.css';
import Overview from './Overview';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import TransactionsTable from './TransactionsTable';

function App() {
  return (
    <div className="appContainer">
      <Sidebar />
      <div className="contentContainer">
        <Topbar />
        <div style={{margin: 32}}>
        <Overview />
        <TransactionsTable />
        </div>

      </div>
    </div>

  );
}

export default App;
