(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return m})),n.d(t,"toc",(function(){return g})),n.d(t,"default",(function(){return h}));var a=n(3),i=n(7),r=n(0),o=n.n(r),s=n(96),l=n(97),c=n(77),u=n.n(c);function p({toc:e,isChild:t}){return e.length?o.a.createElement("ul",{className:t?"":"table-of-contents"},e.map((e=>o.a.createElement("li",{key:e.id},o.a.createElement("a",{href:`#${e.id}`,dangerouslySetInnerHTML:{__html:e.value}}),o.a.createElement(p,{isChild:!0,toc:e.children}))))):null}var b=function({toc:e}){return o.a.createElement("div",{className:Object(l.a)(u.a.tableOfContentsInline)},o.a.createElement(p,{toc:e}))},d={title:"Plugin Runners",id:"plugin_runner_types"},m={unversionedId:"plugins/writing_plugins/plugin_runner_types",id:"plugins/writing_plugins/plugin_runner_types",isDocsHomePage:!1,title:"Plugin Runners",description:"This page outlines the various Plugin types and their",source:"@site/docs/plugins/writing_plugins/plugin_runner_types.mdx",sourceDirName:"plugins/writing_plugins",slug:"/plugins/writing_plugins/plugin_runner_types",permalink:"/docs/plugins/writing_plugins/plugin_runner_types",version:"current",frontMatter:{title:"Plugin Runners",id:"plugin_runner_types"},sidebar:"docs",previous:{title:"Accessing System Info",permalink:"/docs/plugins/writing_plugins/system_info"},next:{title:"Plugin Manager CLI",permalink:"/docs/plugins/plugin_manager_cli"}},g=[{value:"Library Management - File test",id:"library-management---file-test",children:[]},{value:"Worker - Processing file",id:"worker---processing-file",children:[]},{value:"Post-processor - File movements",id:"post-processor---file-movements",children:[]},{value:"Post-processor - Marking task success/failure",id:"post-processor---marking-task-successfailure",children:[]}],f={toc:g};function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This page outlines the various Plugin types and their\n",Object(s.b)("a",{parentName:"p",href:"/docs/plugins/writing_plugins/introduction#runners"},Object(s.b)("strong",{parentName:"a"},"runners")),"."),Object(s.b)(b,{toc:g,mdxType:"TOCInline"}),Object(s.b)("hr",null),Object(s.b)("h2",{id:"library-management---file-test"},"Library Management - File test"),Object(s.b)("h5",{id:"executed"},"Executed:"),Object(s.b)("p",null,"After Unmanic carries out tests on a file to determine if it should be added to the task queue. Prior to returning a result of said tests."),Object(s.b)("h5",{id:"function"},"Function:"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"on_library_management_file_test(data)")),Object(s.b)("h5",{id:"provided-data"},"Provided data:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"strong"},"path"))," - String containing the full path to the file being tested."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"strong"},"issues"))," - List of currently found issues for not processing the file."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"strong"},"add_file_to_pending_tasks"))," - Boolean, is the file currently marked to be added to the queue for processing.")),Object(s.b)("h5",{id:"example"},"Example:"),Object(s.b)("details",null,Object(s.b)("summary",null,"plugin.py"),Object(s.b)("p",null,"For an up-to-date example, see the ",Object(s.b)("a",{parentName:"p",href:"https://github.com/Unmanic/unmanic-plugins/blob/examples/source/custom_ffmpeg_process/plugin.py"},"Example Plugins Repo")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"import os\n\n\ndef on_library_management_file_test(data):\n    \"\"\"\n    Runner function - enables additional actions during the library management file tests.\n    The 'data' object argument includes:\n        path                            - String containing the full path to the file being tested.\n        issues                          - List of currently found issues for not processing the file.\n        add_file_to_pending_tasks       - Boolean, is the file currently marked to be added to the queue for processing.\n    :param data:\n    :return:\n    \"\"\"\n\n    # Get the file extension\n    file_extension = os.path.splitext(data.get('path'))[-1][1:]\n\n    # Ensure the file's extension is lowercase\n    file_extension = file_extension.lower()\n\n    # If this is flash video file, add it to pending tasks\n    if file_extension.lower() in ['flv']:\n        data['add_file_to_pending_tasks'] = True\n\n    return data\n"))),Object(s.b)("h5",{id:"details"},"Details:"),Object(s.b)("p",null,"This Plugin runner should be used when you wish to create custom actions or tests to be carried\nout on a file during the file test triggered by either the Library scan or the Library event watcher."),Object(s.b)("p",null,"When you fail a test, you should also update the ",Object(s.b)("inlineCode",{parentName:"p"},"issues")," list provided in the ",Object(s.b)("inlineCode",{parentName:"p"},"data")," dictionary."),Object(s.b)("p",null,"For example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"data['issues'].append({\n    'id':      '<PLUGIN NAME>',\n    'message': \"File should be ignored because <X>\",\n})\n")),Object(s.b)("hr",null),Object(s.b)("h2",{id:"worker---processing-file"},"Worker - Processing file"),Object(s.b)("h5",{id:"executed-1"},"Executed:"),Object(s.b)("p",null,"Just prior to the execution of the FFmpeg subprocess within a Unmanic Worker process."),Object(s.b)("h5",{id:"function-1"},"Function:"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"on_worker_process(data)")),Object(s.b)("h5",{id:"provided-data-1"},"Provided data:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"strong"},"exec_ffmpeg"))," - Boolean, should Unmanic run FFmpeg with the data returned from this plugin."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"strong"},"file_probe"))," - A dictionary object containing the current file probe state."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"strong"},"ffmpeg_args"))," - A list of Unmanic's default FFmpeg args."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"strong"},"file_in"))," - The source file to be processed by the FFmpeg command."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"strong"},"file_out"))," - The destination that the FFmpeg command will output."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"strong"},"original_file_path"))," - The absolute path to the original library file.")),Object(s.b)("h5",{id:"example-1"},"Example:"),Object(s.b)("details",null,Object(s.b)("summary",null,"plugin.py"),Object(s.b)("p",null,"For an up-to-date example, see the ",Object(s.b)("a",{parentName:"p",href:"https://github.com/Unmanic/unmanic-plugins/blob/examples/source/custom_ffmpeg_process/plugin.py"},"Example Plugins Repo")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},'from unmanic.libs.unplugins.settings import PluginSettings\nfrom unmanic.libs.system import System\n\n\nclass Settings(PluginSettings):\n    """\n    An object to hold a dictionary of settings accessible to the Plugin\n    class and able to be configured by users from within the Unmanic WebUI.\n\n    This class has a number of methods available to it for accessing these settings:\n\n        > get_setting(<key>)            - Fetch a single setting value. Or leave the \n                                        key argument empty and return the full dictionary.\n        > set_setting(<key>, <value>)   - Set a singe setting value.\n                                        Used by the Unmanic WebUI to save user settings.\n                                        Settings are stored on disk in order to be persistent.\n\n    """\n    settings = {\n        "Execute FFmpeg": True,\n        "Insert string into cache file name": "custom-string"\n    }\n\n\ndef on_worker_process(data):\n    """\n    Runner function - carries out additional processing during the worker stages of a task.\n\n    The \'data\' object argument includes:\n        exec_ffmpeg             - Boolean, should Unmanic run FFmpeg with the data returned from this plugin.\n        file_probe              - A dictionary object containing the current file probe state.\n        ffmpeg_args             - A list of Unmanic\'s default FFmpeg args.\n        file_in                 - The source file to be processed by the FFmpeg command.\n        file_out                - The destination that the FFmpeg command will output.\n        original_file_path      - The absolute path to the original library file.\n\n    :param data:\n    :return:\n    """\n    settings = Settings()\n    system = System()\n    system_info = system.info()\n\n    custom_string = settings.get_setting(\'Insert string into cache file name\')\n    if custom_string:\n        tmp_file_out = os.path.splitext(data[\'file_out\'])\n        data[\'file_out\'] = "{}-{}-{}{}".format(tmp_file_out[0], custom_string, tmp_file_out[1])\n\n    if not settings.get_setting(\'Execute FFmpeg\'):\n        data[\'exec_ffmpeg\'] = False\n\n        \n\n    return data\n'))),Object(s.b)("h5",{id:"details-1"},"Details:"),Object(s.b)("p",null,"This Plugin runner should be used for carrying any custom FFmpeg command execution stages.\nThe runner itself is only required to configure the parameters of the FFmpeg command execution.\nThe main Unmanic process will take the data dictionary returned from this runner and execute\nthe FFmpeg command within it's own shell."),Object(s.b)("hr",null),Object(s.b)("h2",{id:"post-processor---file-movements"},"Post-processor - File movements"),Object(s.b)("h5",{id:"executed-2"},"Executed:"),Object(s.b)("p",null,"Just prior to file copy operation from cached output file to source file's directory."),Object(s.b)("h5",{id:"function-2"},"Function:"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"on_postprocessor_file_movement(data)")),Object(s.b)("h5",{id:"provided-data-2"},"Provided data:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"strong"},"source_data"))," - Dictionary containing data pertaining to the original source file."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"strong"},"remove_source_file"))," - Boolean, should Unmanic remove the original source file after all copy operations are complete."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"strong"},"copy_file"))," - Boolean, should Unmanic run a copy operation with the returned data variables."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"strong"},"file_in"))," - The converted cache file to be copied by the postprocessor."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"strong"},"file_out"))," - The destination file that the file will be copied to.")),Object(s.b)("h5",{id:"example-2"},"Example:"),Object(s.b)("details",null,Object(s.b)("summary",null,"plugin.py"),Object(s.b)("p",null,"For an up-to-date example, see the ",Object(s.b)("a",{parentName:"p",href:"https://github.com/Unmanic/unmanic-plugins/blob/examples/source/example_postprocessor_file_movement/plugin.py"},"Example Plugins Repo")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},'def on_postprocessor_file_movement(data):\n    """\n    Runner function - configures additional postprocessor file movements during the postprocessor stage of a task.\n\n    The \'data\' object argument includes:\n        source_data             - Dictionary containing data pertaining to the original source file.\n        remove_source_file      - Boolean, should Unmanic remove the original source file after all copy operations are complete.\n        copy_file               - Boolean, should Unmanic run a copy operation with the returned data variables.\n        file_in                 - The converted cache file to be copied by the postprocessor.\n        file_out                - The destination file that the file will be copied to.\n\n    :param data:\n    :return:\n    """\n\n    return data\n'))),Object(s.b)("h5",{id:"details-2"},"Details:"),Object(s.b)("p",null,"This Plugin runner should be used for executing additional file movements of a completed task."),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"This Plugin runner is only executed on a successfully completed task."))),Object(s.b)("hr",null),Object(s.b)("h2",{id:"post-processor---marking-task-successfailure"},"Post-processor - Marking task success/failure"),Object(s.b)("h5",{id:"executed-3"},"Executed:"),Object(s.b)("p",null,"Just prior to the task cache directory cleanup."),Object(s.b)("h5",{id:"function-3"},"Function:"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"on_postprocessor_task_results(data)")),Object(s.b)("h5",{id:"provided-data-3"},"Provided data:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"strong"},"task_processing_success"))," - Boolean, did all task processes complete successfully."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"strong"},"file_move_processes_success"))," - Boolean, did all postprocessor movement tasks complete successfully.")),Object(s.b)("h5",{id:"example-3"},"Example:"),Object(s.b)("details",null,Object(s.b)("summary",null,"plugin.py"),Object(s.b)("p",null,"For an up-to-date example, see the ",Object(s.b)("a",{parentName:"p",href:"https://github.com/Unmanic/unmanic-plugins/blob/examples/source/example_postprocessor_task_results/plugin.py"},"Example Plugins Repo")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},'def on_postprocessor_task_results(data):\n    """\n    Runner function - provides a means for additional postprocessor functions based on the task success.\n\n    The \'data\' object argument includes:\n        task_processing_success         - Boolean, did all task processes complete successfully.\n        file_move_processes_success     - Boolean, did all postprocessor movement tasks complete successfully.\n\n    :param data:\n    :return:\n    """\n    return data\n'))))}h.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||r;return n?i.a.createElement(m,s(s({ref:t},c),{},{components:n})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}}}]);