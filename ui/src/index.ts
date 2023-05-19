import { HelloRequest } from "../public/protos/helloworld_pb"
import { MyServiceClient } from "../public/protos/helloworld_grpc_web_pb"

const { PROXY_URL } = process.env;

// Create a gRPC-Web client that connects to the gRPC proxy server
const client = new MyServiceClient(PROXY_URL as string, null, null);

// Make a gRPC request to the proxy server
const request = new HelloRequest();
request.setName("Alice");

client.hello(request, {}, (error, response) => {
	if (error) {
		console.error('Error:', error.message);
		return;
	}

	console.log('Response:', response.toObject());
});