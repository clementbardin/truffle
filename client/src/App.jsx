import { EthProvider } from "./contexts/EthContext";
import { Mariage } from "./truffle/contracts/mariage.sol"

function App() {
  return (
      <EthProvider>
        <Mariage />
      </EthProvider>
    )
}

export default App;
