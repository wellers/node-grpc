FROM envoyproxy/envoy:dev-122661e80f69d0165173020af1286a36b66df292

RUN apt-get update && \
	apt-get install -y cron gettext-base procps

COPY scripts /app/scripts
COPY config/envoy.yaml /etc/envoy/envoy.yaml

EXPOSE 8080
CMD ["bash", "/app/scripts/init.sh"]