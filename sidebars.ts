import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'home',
    {
      type: 'category',
      label: 'Get Started',
      items: [
        'start/what-is-paperclip',
        'start/quickstart',
        'start/core-concepts',
        'start/architecture',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'category',
          label: 'Board Operator',
          items: [
            'guides/board-operator/dashboard',
            'guides/board-operator/creating-a-company',
            'guides/board-operator/managing-agents',
            'guides/board-operator/org-structure',
            'guides/board-operator/managing-tasks',
            'guides/board-operator/approvals',
            'guides/board-operator/costs-and-budgets',
            'guides/board-operator/activity-log',
          ],
        },
        {
          type: 'category',
          label: 'Agent Developer',
          items: [
            'guides/agent-developer/how-agents-work',
            'guides/agent-developer/heartbeat-protocol',
            'guides/agent-developer/writing-a-skill',
            'guides/agent-developer/task-workflow',
            'guides/agent-developer/comments-and-communication',
            'guides/agent-developer/handling-approvals',
            'guides/agent-developer/cost-reporting',
          ],
        },
        'guides/openclaw-docker-setup',
      ],
    },
    {
      type: 'category',
      label: 'Deploy',
      items: [
        'deploy/overview',
        'deploy/local-development',
        'deploy/docker',
        'deploy/deployment-modes',
        'deploy/database',
        'deploy/secrets',
        'deploy/storage',
        'deploy/environment-variables',
      ],
    },
    {
      type: 'category',
      label: 'Adapters',
      items: [
        'adapters/overview',
        'adapters/claude-local',
        'adapters/codex-local',
        'adapters/process',
        'adapters/http',
        'adapters/creating-an-adapter',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/overview',
        'api/authentication',
        'api/companies',
        'api/agents',
        'api/issues',
        'api/approvals',
        'api/goals-and-projects',
        'api/costs',
        'api/secrets',
        'api/activity',
        'api/dashboard',
      ],
    },
    {
      type: 'category',
      label: 'CLI',
      items: [
        'cli/overview',
        'cli/setup-commands',
        'cli/control-plane-commands',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'agents-runtime',
        'specs/agent-config-ui',
      ],
    },
  ],
};

export default sidebars;
