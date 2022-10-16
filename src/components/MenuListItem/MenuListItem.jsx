import './MenuListItem.css';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  console.log(menuItem.emoji)
  return (
    <div className="MenuListItem">
      <img className="emoji flex-ctr-ctr" src={menuItem.emoji}/>
      <div className="name">{menuItem.name}</div>
      <div className="buy">
        <span>${menuItem.price.toFixed(2)} per day</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}