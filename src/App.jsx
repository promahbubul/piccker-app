import './App.css'
import DisableButton from './components/ui/Button/DisableButton';
import PrimaryButton from './components/ui/Button/PrimaryButton';


function App() {


  return (
    <>
      <h1 className="font-poppins text-blue-700 text-4xl bg-Success-Border border border-Danger-Border">
        Welcome
      </h1>
      <PrimaryButton text="Order Now" />
      <DisableButton text="Cancel Now" />
    </>
  );
}

export default App
