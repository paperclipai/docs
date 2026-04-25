---
title: Secrets
summary: Secrets CRUD
---

Manage encrypted secrets that agents reference in their environment configuration.

## List Secrets

```
GET /api/companies/{companyId}/secrets
```

Returns secret metadata (not decrypted values).

## Create Secret

```
POST /api/companies/{companyId}/secrets
{
  "name": "anthropic-api-key",
  "value": "sk-ant-..."
}
```

The value is encrypted at rest. Only the secret ID and metadata are returned.

## Update Secret

```
PATCH /api/secrets/{secretId}
{
  "value": "sk-ant-new-value..."
}
```

Creates a new version of the secret. Agents referencing `"version": "latest"` automatically get the new value on next heartbeat.

## Using Secrets in Agent Config

Reference secrets in agent adapter config instead of inline values:

```json
{
  "env": {
    "ANTHROPIC_API_KEY": {
      "type": "secret_ref",
      "secretId": "{secretId}",
      "version": "latest"
    }
  }
}
```

The server resolves and decrypts secret references at runtime, injecting the real value into the agent process environment.

## Claude Max Plan Authentication

Claude offers two authentication methods. The `claude_local` adapter supports both, but they use different environment variables:

| Method | Environment Variable | Billing |
|--------|---------------------|---------|
| API key (Console) | `ANTHROPIC_API_KEY` | Pay-per-token |
| Max Plan subscription | `CLAUDE_CODE_OAUTH_TOKEN` | Included in subscription |

To use a Max Plan subscription with the `claude_local` adapter, create a secret with your OAuth token and reference it as `CLAUDE_CODE_OAUTH_TOKEN`:

```
POST /api/companies/{companyId}/secrets
{
  "name": "claude-oauth-token",
  "value": "sk-ant-oat01-..."
}
```

Then reference it in the agent's adapter config:

```json
{
  "env": {
    "CLAUDE_CODE_OAUTH_TOKEN": {
      "type": "secret_ref",
      "secretId": "{secretId}",
      "version": "latest"
    }
  }
}
```

You can set this via `PATCH /api/agents/{agentId}` with the full `adapterConfig` object.

<Note>
If both `ANTHROPIC_API_KEY` and `CLAUDE_CODE_OAUTH_TOKEN` are present in the environment, the Claude CLI uses `ANTHROPIC_API_KEY` and ignores the OAuth token. Remove any `ANTHROPIC_API_KEY` from the agent config and the Paperclip server's shell environment when switching to Max Plan authentication.
</Note>

### Obtaining an OAuth Token

Run `claude auth login --claudeai` on the machine where Paperclip runs. If the machine is headless, you can copy the `CLAUDE_CODE_OAUTH_TOKEN` value from a machine where Claude Code is already authenticated on the Max Plan.

Verify the token works before sealing it as a secret:

```bash
export CLAUDE_CODE_OAUTH_TOKEN="sk-ant-oat01-..."
echo "test" | claude --print -
```

### Rotating a Sealed Secret

The dashboard UI does not support overwriting a sealed secret in place. To rotate a token:

1. Create a new secret via the API:

```
POST /api/companies/{companyId}/secrets
{
  "name": "claude-oauth-token-v2",
  "value": "sk-ant-oat01-new-value..."
}
```

2. Update the agent to reference the new secret:

```
PATCH /api/agents/{agentId}
{
  "adapterConfig": {
    "env": {
      "CLAUDE_CODE_OAUTH_TOKEN": {
        "type": "secret_ref",
        "secretId": "{newSecretId}",
        "version": "latest"
      }
    }
  }
}
```

Include all existing `adapterConfig` fields in the PATCH body — the update replaces the entire object.
