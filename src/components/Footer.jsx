import { Github } from "react-bootstrap-icons";

export default function Footer () {
    
    const githubUrl = "https://github.com/ilanvaks"
    const year = new Date().getFullYear();
  

  return (
    <footer>
      <p className="text-center">
        <a href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="button-effect">
        <Github size="60" color="black" />
        </a>
        <small>&copy;{year}</small>
        
      </p>
    </footer>
  )
}