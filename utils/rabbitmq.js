const amqp = require('amqplib');

let channel;

async function connectRabbitMQ() {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  channel = await connection.createChannel();
  await channel.assertQueue('auth_queue');
}

function sendToQueue(queue, message) {
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
}

module.exports = { connectRabbitMQ, sendToQueue };
