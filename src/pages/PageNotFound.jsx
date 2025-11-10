// Style
import "./PageNotFound.css";
// Components
import Button from "../components/ui/Button";
import FadeInOnScroll from "../components/utils/FadeInOnScroll";

export default function PageNotFound() {
  return (
    <div className="page not-found">
      <FadeInOnScroll delay={200}>
        <h1>404</h1>
      </FadeInOnScroll>

      <div className="msg-container">
        <FadeInOnScroll delay={400}>
          <h5>Page Not Found</h5>
        </FadeInOnScroll>

        <FadeInOnScroll delay={600}>
          <p>
            The page you’re trying to access doesn’t exist or may have been
            moved. Please check the URL or return to the main page.
          </p>
        </FadeInOnScroll>
      </div>

      <FadeInOnScroll delay={800}>
        <Button text="Return home" to="/" rounded arrowLeft />
      </FadeInOnScroll>
    </div>
  );
}
