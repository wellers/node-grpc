import { HelloRequest } from "../public/protos/helloworld_pb"
import { MyServiceClient } from "../public/protos/helloworld_grpc_web_pb"

// Create a gRPC-Web client that connects to the gRPC proxy server
const client = new MyServiceClient("http://192.168.50.101:4000", null, null);

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