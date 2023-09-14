import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { HomeScreen } from "../screens/home_screen";
import { ContactScreen } from "../screens/contact_screen";
import { ProjectScreen } from "../screens/project_screen";
import { ResumeScreen } from "../screens/resume_screen";
import { AboutScreen } from "../screens/about_screen";

export const AppNavigation = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/contact" element={<ContactScreen />} />
                <Route path='/projects' element={<ProjectScreen />} />
                <Route path='/resume' element={<ResumeScreen />} />
                <Route path='/about' element={<AboutScreen />} />
            </Routes>
        </Router>
    );
}

