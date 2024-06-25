import { useTheme } from "../context/ThemeContext"
import { ThemeContext } from "../context/ThemeContext";

const Main = () => {
  const [theme] = useTheme(ThemeContext);

  return (
    <main className={`content-${theme}`}>
      <h1>テーマの切り替え</h1>
    </main>
  );
};

export default Main;
