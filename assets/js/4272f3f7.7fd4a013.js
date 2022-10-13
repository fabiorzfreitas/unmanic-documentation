"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[2258],{2170:function(e,o,s){s.r(o),s.d(o,{assets:function(){return f},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return g},metadata:function(){return h},toc:function(){return P}});var n=s(7462),t=s(3366),r=s(7294),i=s(3905),a=s(4578),c=s(5697),l=s.n(c),u=s(412),d=function(e){function o(o){var s;return(s=e.call(this,o)||this).state={},s}(0,a.Z)(o,e);var n=o.prototype;return n.componentDidMount=function(){u.Z.canUseDOM&&this.setState({Flowchart:s(1677).Z})},n.render=function(){var e=this.state.Flowchart,o=this.props,s=o.chartCode;o.scale;return u.Z.canUseDOM&&e?r.createElement("div",{style:{overflowX:"scroll"}},r.createElement(e,{options:{x:0,y:0,"line-width":2,"line-length":50,"text-margin":10,"font-size":14,"font-color":"black","line-color":"black","element-color":"black",fill:"white","yes-text":"yes","no-text":"no","arrow-end":"block",scale:.7,symbols:{start:{"font-color":"red","element-color":"green","font-weight":"bold"},end:{"font-color":"red","element-color":"green","font-weight":"bold"}},flowstate:{runner:{fill:"pink"},external:{fill:"green"}}},chartCode:s})):r.createElement("div",null)},o}(r.Component);d.propTypes={chartCode:l().string.isRequired,scale:l().number};var p=d,k=["components"],g={title:"Plugins Overview",description:"An Overview of Unmanic Plugins",id:"overview"},m=void 0,h={unversionedId:"configuration/plugins/overview",id:"configuration/plugins/overview",title:"Plugins Overview",description:"An Overview of Unmanic Plugins",source:"@site/docs/configuration/plugins/overview.mdx",sourceDirName:"configuration/plugins",slug:"/configuration/plugins/overview",permalink:"/docs/configuration/plugins/overview",tags:[],version:"current",frontMatter:{title:"Plugins Overview",description:"An Overview of Unmanic Plugins",id:"overview"},sidebar:"docs",previous:{title:"Workers",permalink:"/docs/configuration/workers_settings"},next:{title:"Installing Plugins",permalink:"/docs/configuration/plugins/installing_plugins"}},f={},P=[{value:"Plugin execution during Task flow",id:"plugin-execution-during-task-flow",level:2}],T={toc:P};function w(e){var o=e.components,s=(0,t.Z)(e,k);return(0,i.kt)("wrapper",(0,n.Z)({},T,s,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Unmanic features a plugin system to extend Unmanic\'s capabilities.\nPlugins are stand-alone scripts or "modules" that are executed by Unmanic at defined stages during its task processing.'),(0,i.kt)("p",null,"Usually, plugins are designed to carry out one function only.\nHowever, in order to carry out that one function, some plugins are designed to be executed at multiple stages of task processing."),(0,i.kt)("p",null,"For example, you may install a plugin that will run during the library scan process to detect files that need to be added to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/dashboard/pending_tasks"},"pending tasks")," queue due to an incorrect video codec.\nWhen the ",(0,i.kt)("a",{parentName:"p",href:"/docs/dashboard/workers"},"worker")," picks up the task, it may execute that same plugin again which will now handle the job of transcoding the video streams to the configured codec."),(0,i.kt)("p",null,"In this example the plugin has carried out two separate jobs at different stages of Unmanic's task processing."),(0,i.kt)("p",null,"Use plugins to build powerful library optimisation flows."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"plugin-execution-during-task-flow"},"Plugin execution during Task flow"),(0,i.kt)("p",null,"Sections in pink will execute plugins configured for that stage of the process."),(0,i.kt)(p,{chartCode:"\n    st=>start: Start\n    discoverFile=>operation: File discovered by Library Scanner or Event Monitor.\n    libraryTestFileStart=>operation: Library Manager creates a list of all plugin it needs for testing files.\n    libraryTestFileExecPlugin=>operation: Library Management - File test\nCheck if file should be added to pending tasks?|runner\n    libraryTestPluginRequestIgnoreFile=>condition: Did the plugin request that\nUnmanic ignore this file?\n    libraryTestPluginRequestTaskCreate=>condition: Did the plugin request that\nUnmanic create a task for this file?\n    libraryTestFileTaskCheckLoop=>condition: Has the Library Manager completed\nexecuting all plugins?\n    fileNotAdded=>operation: File not added. to pending tasks queue.\n    pendingTasks=>operation: Added to pending tasks list.\n    workerCollects=>operation: Worker picks up file from pending tasks queue.\n    workerProcessTaskStart=>operation: Worker creates a list of all plugins it needs to run.\n    workerExecPlugin=>operation: Worker - Processing file\nworker executes a single plugin.|runner\n    workerExecPluginCheck=>condition: Did the plugin execute OK?\n    workerExecPluginRequestCommand=>condition: Did the plugin request that\nUnmanic execute a command?\n    workerExecCommand=>operation: Worker executes the command given by the plugin.\n    workerExecCommandCheck=>condition: Did the command execute OK?\n    workerProcessTaskCheckLoop=>condition: Has the worker completed\nexecuting all plugins?\n    workerCompletesTask=>operation: Worker completes task and places it into a Post Processor queue\n    postProcessorFileMoveTaskStart=>operation: Post-processor creates a list of all plugins it needs to run for file movements.\n    postProcessorFileMoveExecPlugin=>operation: Post-processor - File movements\nPost-processor executes a single file movement plugin.|runner\n    postProcessorFileMoveTaskCheckLoop=>condition: Has the Post-processor completed\nexecuting all plugins?\n    postProcessorTaskSuccessTaskStart=>operation: Post-processor creates a list of all plugins it needs to run for task results.\n    postProcessorTaskSuccessExecPlugin=>operation: Post-processor - Marking task success/failure\nPost-processor executes a single task results plugin.|runner\n    postProcessorTaskSuccessTaskCheckLoop=>condition: Has the Post-processor completed\nexecuting all plugins?\n    taskSuccess=>condition: Were all jobs for this task successful?\n    completedTasksFailed=>operation: Task added to history as failure.\n    completedTasksSuccess=>operation: Task added to history as success.\n    eIgnored=>end: End - File ignored\n    eFailed=>end: End - File failed at least one stage of being processed\n    eSuccess=>end: End - File successfully processed\n    \n    st->discoverFile->libraryTestFileStart\n    libraryTestFileStart->libraryTestFileExecPlugin->libraryTestPluginRequestIgnoreFile\n    libraryTestPluginRequestIgnoreFile(yes,right)->fileNotAdded->eIgnored\n    libraryTestPluginRequestIgnoreFile(no,bottom)->libraryTestPluginRequestTaskCreate\n    libraryTestPluginRequestTaskCreate(yes,left)->pendingTasks\n    libraryTestPluginRequestTaskCreate(no,bottom)->libraryTestFileTaskCheckLoop\n    libraryTestFileTaskCheckLoop(no,left)->libraryTestFileExecPlugin\n    libraryTestFileTaskCheckLoop(yes,right)->fileNotAdded->eIgnored\n    pendingTasks->workerCollects->workerProcessTaskStart\n    workerProcessTaskStart->workerExecPlugin->workerExecPluginCheck\n    workerExecPluginCheck(no,right)->workerCompletesTask\n    workerExecPluginCheck(yes,bottom)->workerExecPluginRequestCommand\n    workerExecPluginRequestCommand(yes,bottom)->workerExecCommand\n    workerExecPluginRequestCommand(no,right)->workerProcessTaskCheckLoop\n    workerExecCommand->workerExecCommandCheck\n    workerExecCommandCheck(no,bottom)->workerCompletesTask\n    workerExecCommandCheck(yes,right)->workerProcessTaskCheckLoop\n    workerProcessTaskCheckLoop(no,right)->workerExecPlugin\n    workerProcessTaskCheckLoop(yes,bottom)->workerCompletesTask\n    workerCompletesTask->postProcessorFileMoveTaskStart->postProcessorFileMoveExecPlugin\n    postProcessorFileMoveExecPlugin(bottom)->postProcessorFileMoveTaskCheckLoop\n    postProcessorFileMoveTaskCheckLoop(no,right)->postProcessorFileMoveExecPlugin\n    postProcessorFileMoveTaskCheckLoop(yes,bottom)->postProcessorTaskSuccessTaskStart\n    postProcessorTaskSuccessTaskStart->postProcessorTaskSuccessExecPlugin\n    postProcessorTaskSuccessExecPlugin->postProcessorTaskSuccessTaskCheckLoop\n    postProcessorTaskSuccessTaskCheckLoop(no,right)->postProcessorTaskSuccessExecPlugin\n    postProcessorTaskSuccessTaskCheckLoop(yes,bottom)->taskSuccess\n    taskSuccess(no,right)->completedTasksFailed->eFailed\n    taskSuccess(yes,bottom)->completedTasksSuccess->eSuccess\n",mdxType:"Flowchart"}))}w.isMDXComponent=!0}}]);