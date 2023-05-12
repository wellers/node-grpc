import grpc from "grpc";
import { MyServiceService, HelloRequest, HelloResponse } from "./protos/helloworld";

process.on("unhandledRejection", function (e) {
	process.exit(1);
});

async function boot() {
	// Define the service methods
	const serviceMethods: { [name: string]: grpc.handleUnaryCall<HelloRequest, HelloResponse> } = {
		hello: (call, callback) => {			
			const response = HelloResponse.create({
				message: `Hello ${call.request.name}`
			});
			callback(null, response);
		}
	};

	// Create a new gRPC server
	const server = new grpc.Server();

	// Add the service definition to the server
	server.addService(MyServiceService, serviceMethods);

	// Start the server
	server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
	console.log("Server running on port 50051");
	server.start();
}

boot().catch(function (e) {
	console.log("Boot failure", e);
	process.exit(1);
});