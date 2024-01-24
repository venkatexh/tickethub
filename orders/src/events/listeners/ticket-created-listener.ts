import {
  Listener,
  Subjects,
  TicketCreatedEvent,
} from "@tickethub-dev/th-common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import { Ticket } from "../../models/ticket";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName: string = queueGroupName;
  async onMessage(data: TicketCreatedEvent["data"], msg: Message) {
    const { id, title, price } = data;

    try {
      const ticket = Ticket.build({ id, title, price });
      await ticket.save();
    } catch (err) {
      console.error(err);
    }

    msg.ack();
  }
}
