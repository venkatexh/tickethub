import {
  OrderCreatedEvent,
  Publisher,
  Subjects,
} from "@tickethub-dev/th-common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
