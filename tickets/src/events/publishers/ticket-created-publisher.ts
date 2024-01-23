import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@tickethub-dev/th-common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
