import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Socials() {
  return (
    <div className="social-icons">
      <a className="social" href="https://twitter.com/traininArc">
        <TwitterIcon />
      </a>
      <a className="social" href="https://github.com/FifonsiDonald">
        <GitHubIcon />
      </a>
      <a
        className="social"
        href="https://www.linkedin.com/in/fifonsi-donald-2866b5267"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}
