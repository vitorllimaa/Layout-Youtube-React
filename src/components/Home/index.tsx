import React from "react";
import NavBar from '../navBar/';

interface Props {
    onThemeChange: () => void,
    themeMode: string,
}

const Home: React.FC<Props> = ({onThemeChange, themeMode}): JSX.Element => {

    return (
        <NavBar onThemeChange={onThemeChange} themeMode={themeMode} />
    )
}

export default Home;