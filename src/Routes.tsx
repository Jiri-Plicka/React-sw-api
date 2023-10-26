import { BrowserRouter, Route, Routes as DOMRoutes } from 'react-router-dom';
import { SWList } from './components/sw-list/SWList';
import { SWCard } from './components/sw-card/SWCard';
import { List } from './pages/List';

export const Routes = () => {
    return (
        <BrowserRouter>
            <DOMRoutes>
                <Route path={'/'} element={<List />} />
                {/* <Route path={'/sw-card/:people'} element={<SWCard name={''} />} /> */}
            </DOMRoutes>
        </BrowserRouter>
    );
};