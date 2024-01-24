import {
  OrderCancelledEvent,
  Publisher,
  Subjects,
} from "@tickethub-dev/th-common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
