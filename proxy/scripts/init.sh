set -e

envsubst '${SOCKET_ADDRESS}, ${SOCKET_PORT}' < /etc/envoy/envoy.yaml > /etc/envoy/envoy.yaml

envoy -c /etc/envoy/envoy.yaml