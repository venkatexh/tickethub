import express from "express";
import { json } from "body-parser";
import { errorHandler, NotFoundError } from "@tickethub-dev/th-common";
import { natsWrapper } from "./nats-wrapper";
import { OrderCreatedListener } from "./events/listeners/order-created-listener";

const app = express();
app.set("trust proxy", true);
app.use(json());

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  try {
    await natsWrapper.connect("tickethub", "test-id", "http://nats-srv:4222");

    natsWrapper.client.on("close", () => {
      console.log("NATS connection closed..");
      process.exit();
    });

    process.on("SIGINT", () => natsWrapper.client.close());
    process.on("SIGTERM", () => natsWrapper.client.close());

    new OrderCreatedListener(natsWrapper.client).listen();
  } catch (err) {
    console.error(err);
  }
};

start();
