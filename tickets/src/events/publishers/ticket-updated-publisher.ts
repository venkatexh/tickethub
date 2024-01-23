import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@tickethub-dev/th-common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
