import OrderDetail from "../OrderDetail/OrderDetail"

export default function OrderListItem({ order }) {
  console.log("OrderListItem:" + order)
  return (
    <div>
      {/* {order.OrderListItem} */}
      <OrderDetail order={order} />
    </div>

  )
}