import { HttpAgent } from "@dfinity/agent";

const isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";

export const agent = new HttpAgent({
  host: isLocal ? "http://127.0.0.1:4943" : "https://ic0.app",
});

// Needed only for local replica (self-signed cert)
// Note: fetchRootKey will be called when agent is first used
if (isLocal) {
  agent.fetchRootKey().catch(console.error);
}
