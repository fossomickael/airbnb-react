import Flat from './flat';

const FlatList = (props) => {
    return (
      <div className="flat-list">
        {props.flats.map(flat => <Flat flat={flat} key={flat.name} updateMapFunction={props.updateMapFunction} />)}
      </div>
    );
  };

export default FlatList;