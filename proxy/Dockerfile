FROM envoyproxy/envoy:dev-122661e80f69d0165173020af1286a36b66df292

COPY envoy.yaml /etc/envoy/envoy.yaml

EXPOSE 8080

CMD ["envoy", "-c", "/etc/envoy/envoy.yaml"]