import cls from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import Alert from '@/assets/Alert24.svg'
import Photo from '@/assets/photo_5217930561203589910_y.jpg'

export const App = () => {
    return <div className={cls.app}>
        Hello world!!!

        <h1>MAIN {__PLATFORM__} 123 123 </h1>

        <div className={cls.routing}>
            <Alert color={'red'} width={150} height={150}/>
            <img width={200} height={200} src={Photo}/>
            <Link to={'/shop'}>to shop</Link>
            <Link to={'/about'}>to about</Link>
        </div>

        <div className={cls.content}>
            <Outlet/>
        </div>

    </div>
}