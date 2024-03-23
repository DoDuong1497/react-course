import DuongButton from './DuongButton';

function DuongCard({ text = 'No item!', buttonText, onClick }) {
  return (
    <div className='card'>
      <div className='card-header'>{text}</div>
      <div className='card-body'>
        <DuongButton buttonText={buttonText} onClick={onClick} />
      </div>
    </div>
  );
}

export default DuongCard;
