import {Header} from '../components/Header';
import './NotFoundPage.css';

export function NotFoundPage() {
    return (
        <>
            <title>404 page not found</title>
            <link rel="icon" type="image/svg+xml" href="images/home-favicon.png" />
            <Header />
            <div className="container-page">
                <p className="not-found-page">404</p>
                <p> Page Not Found :( </p>
            </div>
        </>
    );
}