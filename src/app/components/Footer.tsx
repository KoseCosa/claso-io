import { faGithub, faLinkedin, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type FooterIconProps = {
  icon: IconDefinition;
  href: string;
  label?: string;
}

function FooterIcon({ icon, href, label }: FooterIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label || "Social media link"}
    >
      <FontAwesomeIcon
        icon={icon}
        className="transition-transform transition-colors duration-400 hover:scale-125 hover:text-cyan-500"
      />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="flex justify-center items-center h-16 text-2xl gap-x-2" aria-label="Footer with social media links">
        
        <FooterIcon
          icon={faGithub}
          href="https://github.com/kosecosa"
          label="GitHub profile"
        />
        <FooterIcon
          icon={faLinkedin}
          href="https://linkedin.com/in/kosecosa"
          label="LinkedIn profile"
        />
      </footer>
  );
}