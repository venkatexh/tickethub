import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@tickethub-dev/th-common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
