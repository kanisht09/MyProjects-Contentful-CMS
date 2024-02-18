import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ullam
            labore ut molestiae fugiat officia, perferendis, dicta optio
            laudantium officiis voluptate repellendus! Vel illum cumque cum odit
            quas, debitis animi.
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
