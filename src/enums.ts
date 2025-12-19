enum OrderStatus {
  DELIVERED = "DELIVERED",
  PENDING = "PENDING",
  RETURN = "RETURN",
  CANCELLED = "CANCELLED",
}

function getOrderStatus(status: string): void {
  if (status == OrderStatus.DELIVERED) {
    console.log("Order is delivered");
  } else if (status == OrderStatus.CANCELLED) {
    console.log("Order is cancelled");
  } else if (status == OrderStatus.PENDING) {
    console.log("Order is pending");
  } else if (status == OrderStatus.RETURN) {
    console.log("Order is retured");
  }
}

// getOrderStatus("DELIVERED");
// getOrderStatus("CANCELLED");
// getOrderStatus("PENDING");
// getOrderStatus("RETURN");
