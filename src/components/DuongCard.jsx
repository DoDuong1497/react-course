import DuongButton from './DuongButton';

function DuongCard({ text = 'No item!' }) {
  return (
    <div className='card'>
      <div className='card-header'>{text}</div>
      <div className='card-body'>
        <DuongButton />
      </div>
    </div>
  );
}

export default DuongCard;
