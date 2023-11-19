import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayoutTemplate from './AppLayoutTemplate';
import AppNotFound from './AppNotFound';
import ConfessForm from './ConfessForm';
import MisdemeanoursForm from './MisdemeanoursForm';
import Home from './Home';

const Router: React.FC = () => {
    return <Routes>
        <Route path="/" element={<AppLayoutTemplate />} >
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="confess" element={<ConfessForm />} />
            <Route path="misdemeanours" element={<MisdemeanoursForm />} />
            <Route path="*" element={<AppNotFound />} />
        </Route>
    </Routes>;
}

export default Router;