import { useParticipantList } from "../../state/hooks/useParticipantList";
import { useNavigate } from "react-router-dom";
import "./styles.css"
import { useSortition } from "../../state/hooks/useSortition";

function Footer() {
  const participants = useParticipantList();
  const navigateTo = useNavigate();
  const draw = useSortition();
  const start = () => {
    draw();
    navigateTo("/sortition");
  };
  return (
    <footer className="footer-config">
      <button className="button" disabled={participants.length < 3} onClick={start}>
        {" "}
        Start
      </button>
      <img src="../../../public/assets/sacolas.png" alt="Shop Bag" />
    </footer>
  );
}

export default Footer;
