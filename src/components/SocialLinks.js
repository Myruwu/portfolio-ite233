import { FaGithub, FaFacebook, FaTiktok } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Nav.Link href="https://github.com/Myruwu">
        <FaGithub />
      </Nav.Link>
      <Nav.Link href="https://www.facebook.com/myro.mercado10/">
        <FaFacebook />
      </Nav.Link>
      <Nav.Link href="https://www.tiktok.com/@myruwuu">
        <FaTiktok />
      </Nav.Link>
    </div>
  );
};

export default SocialLinks;