import winningVideo from '../assets/winning.mp4';
import losingVideo from '../assets/losing.mp4';

const ResultModal = ({ win, lose }) => {



  
  return (
    <dialog open={win || lose} className="result-modal">
      {win && <video autoPlay src={winningVideo} />}
      {lose && <video autoPlay loop={false} src={losingVideo} />}
    </dialog>
  );
};

export default ResultModal;
