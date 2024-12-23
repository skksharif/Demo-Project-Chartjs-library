import './App.css';
import Comp from './components/Comp';
import Dn from './components/Dn';
import {Chart,ArcElement,Legend,Title,Tooltip,} from 'chart.js';
Chart.register(
    ArcElement,Legend,Title,Tooltip
)

function App() {
  const data = {
    labels: ['not connected(2)','Connected(2)'],
    datasets: [
      {
        label: '',
        data: [2,2],
        backgroundColor: [
         
         "aliceblue",
         "blue",
        ],
        borderColor: [
         
         "aliceblue",
         "blue",
        ],
        borderWidth: 1,
      },
    ],
  };
  const data1 = {
    labels: ['Failed','Warning','Not Available','Passed'],
    datasets: [
      {
        label: '',
        data: [1689,681,36,7253],
        backgroundColor: [
          'red',
          'grey',
          'yellow',
          'green'
        ],
        borderColor: [
          'red',
          'grey',
          'yellow',
          'green'
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return (
    <div className="App">
      <header className="App-header">
          <h1>CNAPP Dashboard</h1>
          <div className='buttons'>
              <button>Add Widget +</button>
              <button>
              <i class="material-icons">autorenew</i></button>
              <button>
              <i class="material-icons">more_vert</i></button>
              <button>Last 2 days</button>
          </div>
      </header>
      <h2>CSPM Executive Dashboard:</h2>
       <div className='charts'>
        <div className='chart'>
          <Dn data={data} title="Cloud Accounts"/>
        </div>
        <div className='chart'>
          <Dn data={data1} title="Cloud Account Risk Assesment"/>
        </div>
        <div className='chart'>
            <button>Add Widget +</button>
        </div>
        

       </div>
       <h2>CWPP Dashboard:</h2>
       <div className='charts'>
        <div className='chart'>
          <Comp data="No Graphical Data Available" title="Top 5 Namespace Specific Alerts"/>
        </div>
        <div className='chart'>
          <Comp data="No Graphical Data Available" title="Workload Alerts"/>
        </div>
        <div className='chart'>
            <button>Add Widget +</button>
        </div>
        

       </div>
    </div>
  );
}

export default App;
