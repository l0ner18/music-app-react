import './App.css';
import MainPage from './Pages/MainPage';
import PlayBar from './components/PlayBar/PlayBar';
import style from './global.module.scss'

const App = () => {


  return (
    <>
      <div className={style.wrapper}>
        <MainPage />
        <PlayBar />
      </div>

    </>
  )
}

export default App;