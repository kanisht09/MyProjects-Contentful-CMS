import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>My Projects</h1>
          <p>
            Hello Visitor 🙏, view all my work below. Below are the projects
            which I have worked on. Some are self made and others are the ones
            which I have made during my learning phase. Hope you will like my
            work 😄.
          </p>
        </div>
        <div className="img-container">
          <img className="img" src={heroImg} alt="woman and the browser" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
