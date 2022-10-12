import OrderListItem from "../OrderListItem/OrderListItem";

export default function OrderList({ orders }) {
  const orderListItems = orders.map(o =>
    < OrderListItem
      order={o}
      key={o._id}
    />

  )

  return (
    <main>
      <h1>Mumbo Jumbo</h1>
      {orderListItems}
    </main>
  )
}