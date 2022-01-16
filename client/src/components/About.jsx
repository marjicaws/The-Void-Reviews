import './About.css'
export default function Home() {
  return (
    <div class="aboutface">
      <img
        className="aboutimg"
        src="https://i.etsystatic.com/11042475/r/il/69b8e3/2817695969/il_794xN.2817695969_pa3f.jpg"
      />
      <h1 className="abouttitle">Welcome to the Void!</h1>
      <p class="about">
        This is a website created by a software engineering student currently
        attending General Assembly's Software Engineering Immersive! The
        goal with this project is to display my use of React in code. For my
        project I chose to create a website for horror movie fans where they can
        post movies and add reviews to them.
      </p>
    </div>
  );
}
