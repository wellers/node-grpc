import { credentials } from "@grpc/grpc-js";
import { HelloRequest, MyServiceClient } from "./protos/helloworld";

process.on("unhandledRejection", function (e) {
	process.exit(1);
});

async function boot() {
	// Create a new gRPC client
	const client = new MyServiceClient("192.168.50.101:50051", credentials.createInsecure());

	const request = HelloRequest.create({ name: "Alice" });

	// Call the "hello" method on the service
	client.hello(request, (error, response) => {
		if (error) {
			console.error(error);
		} else {
			console.log(response.message);
		}
	});
}

boot().catch(function (e) {
	console.log("Boot failure", e);
	process.exit(1);
});