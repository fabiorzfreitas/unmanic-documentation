module.exports = {
    docs: [
        {
            type: 'category',
            label: 'Welcome',
            items: [
                'overview',
            ],
        },
        {
            type: 'category',
            label: 'Installation',
            items: [
                'requirements',
                {
                    type: 'category',
                    label: 'Installation',
                    items: [
                        'installation/pip',
                        'installation/docker',
                        'installation/unraid',
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Using Unmanic',
            items: [
                {
                    type: 'category',
                    label: 'Dashboard',
                    items: [
                        'dashboard/task_flow_chart',
                        'dashboard/pending_tasks',
                        'dashboard/workers',
                    ],
                },
                {
                    type: 'category',
                    label: 'Configuration',
                    items: [
                        'configuration/overview_and_general_settings',
                        'configuration/container_settings',
                        'configuration/video_encoder_settings',
                    ],
                },
                {
                    type: 'category',
                    label: 'Plugins',
                    items: [
                        'plugins/overview',
                        'plugins/installing_plugins',
                        'plugins/adding_a_custom_plugin_repo',
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Development',
            items: [
                {
                    type: 'category',
                    label: 'Plugins',
                    items: [
                        'development/developing_plugins',
                        {
                            type: 'category',
                            label: 'Writing Plugins',
                            items: [
                                'development/writing_plugins/introduction',
                                'development/writing_plugins/creating_a_new_plugin',
                                'development/writing_plugins/plugin_settings',
                                'development/writing_plugins/system_info',
                                'development/writing_plugins/plugin_runner_types',
                            ],
                        },
                        {
                            type: 'category',
                            label: 'Plugin Repositories',
                            items: [
                                'development/plugin_repos/creating_your_own_repo',
                                'development/plugin_repos/creating_a_pull_request'
                            ],
                        },
                        'development/plugin_manager_cli',
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Advanced',
            items: [
                {
                    type: 'category',
                    label: 'Configuration',
                    items: [
                        'advanced/hardware_accelerated_encoding_nvenc',
                        'advanced/hardware_accelerated_encoding_vaapi',
                    ],
                },
            ],
        },
    ],
};
