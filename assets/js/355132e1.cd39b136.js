"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[6664],{5681:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=i(1527),s=i(395);const r={title:"Verify a candidate version",sidebar_position:1},a=void 0,o={id:"committers/verify",title:"Verify a candidate version",description:"Introduction",source:"@site/community/committers/verify.md",sourceDirName:"committers",slug:"/committers/verify",permalink:"/community/committers/verify",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-graphar-website/edit/main/community/committers/verify.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Verify a candidate version",sidebar_position:1},sidebar:"docs",previous:{title:"Create a release",permalink:"/community/committers/release"},next:{title:"Reference",permalink:"/community/category/reference"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Download the candidate version",id:"download-the-candidate-version",level:2},{value:"Verify that the uploaded version is compliant",id:"verify-that-the-uploaded-version-is-compliant",level:2},{value:"Check whether the release package is complete",id:"check-whether-the-release-package-is-complete",level:3},{value:"Check gpg signature",id:"check-gpg-signature",level:3},{value:"Import public key",id:"import-public-key",level:4},{value:"Trust the public key",id:"trust-the-public-key",level:4},{value:"Check the gpg signature",id:"check-the-gpg-signature",level:4},{value:"Check sha512 hash",id:"check-sha512-hash",level:3},{value:"Check the source package",id:"check-the-source-package",level:3},{value:"3. Email reply",id:"3-email-reply",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["For detailed check list, please refer to the official ",(0,t.jsx)(n.a,{href:"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist",children:"check list"})]}),"\n",(0,t.jsxs)(n.p,{children:["Version content accessible in browser ",(0,t.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/dev/incubator/graphar/",children:"https://dist.apache.org/repos/dist/dev/incubator/graphar/"})]}),"\n",(0,t.jsx)(n.h2,{id:"download-the-candidate-version",children:"Download the candidate version"}),"\n",(0,t.jsxs)(n.p,{children:["Download the candidate version to be released to the local environment Need to rely on gpg tool, if not, it is recommended to install ",(0,t.jsx)(n.code,{children:"gpg2"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"If the network is poor, downloading may be time-consuming. The download is completed normally in about 20 minutes, please wait patiently."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"#If there is svn locally, you can clone to the local\n$ svn co https://dist.apache.org/repos/dist/dev/incubator/graphar/${release_version}/\n#or download the material file directly\n$ wget https://dist.apache.org/repos/dist/dev/incubator/graphar/${release_version}/xxx.xxx\n"})}),"\n",(0,t.jsx)(n.h2,{id:"verify-that-the-uploaded-version-is-compliant",children:"Verify that the uploaded version is compliant"}),"\n",(0,t.jsx)(n.p,{children:"Start the verification process, which includes but is not limited to the following content and forms."}),"\n",(0,t.jsx)(n.h3,{id:"check-whether-the-release-package-is-complete",children:"Check whether the release package is complete"}),"\n",(0,t.jsx)(n.p,{children:"The package uploaded to dist must include the source code package, and the binary package is optional."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Whether to include the source code package"}),"\n",(0,t.jsx)(n.li,{children:"Whether to include the signature of the source code package"}),"\n",(0,t.jsx)(n.li,{children:"Whether to include the sha512 of the source code package"}),"\n",(0,t.jsx)(n.li,{children:"If the binary package is uploaded, also check the contents listed in (1)-(3)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"check-gpg-signature",children:"Check gpg signature"}),"\n",(0,t.jsx)(n.p,{children:"First import the publisher's public key. Import KEYS from the svn repository to the local environment. (The person who releases the version does not need to import it again, the person who helps to do the verification needs to import it, and the user name is enough for the person who issued the version)"}),"\n",(0,t.jsx)(n.h4,{id:"import-public-key",children:"Import public key"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ curl  https://downloads.apache.org/incubator/graphar/KEYS > KEYS # Download KEYS\n$ gpg --import KEYS # Import KEYS to local\n"})}),"\n",(0,t.jsx)(n.h4,{id:"trust-the-public-key",children:"Trust the public key"}),"\n",(0,t.jsx)(n.p,{children:"Trust the KEY used in this version:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ gpg --edit-key xxxxxxxxxx #KEY user used in this version\ngpg (GnuPG) 2.2.21; Copyright (C) 2020 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nSecret key is available.\ngpg> trust #trust\nPlease decide how far you trust this user to correctly verify other users' keys\n(by looking at passports, checking fingerprints from different sources, etc.)\n\n  1 = I don't know or won't say\n  2 = I do NOT trust\n  3 = I trust marginally\n  4 = I trust fully\n  5 = I trust ultimately\n  m = back to the main menu\n\nYour decision? 5 #choose 5\nDo you really want to set this key to ultimate trust? (y/N) y  #choose y\n                                                            \ngpg>\n         \n"})}),"\n",(0,t.jsx)(n.h4,{id:"check-the-gpg-signature",children:"Check the gpg signature"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i; done\n"})}),"\n",(0,t.jsx)(n.p,{children:"check result"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["If something like the following appears, it means the signature is correct. Keyword: ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Good signature"})})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'apache-graphar-xxx-incubating-src.tar.gz\ngpg: Signature made XXXX\ngpg: using RSA key XXXXX\ngpg: Good signature from "xxx @apache.org>"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"check-sha512-hash",children:"Check sha512 hash"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ for i in *.tar.gz; do echo $i; sha512sum --check  $i.sha512; done\n"})}),"\n",(0,t.jsx)(n.h3,{id:"check-the-source-package",children:"Check the source package"}),"\n",(0,t.jsxs)(n.p,{children:["unzip  ",(0,t.jsx)(n.code,{children:"apache-graphar-${release.version}-incubating-src.tar.gz"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"tar -xzvf apache-graphar-${release.version}-incubating-src.tar.gz\n"})}),"\n",(0,t.jsx)(n.p,{children:"check as follows:"}),"\n",(0,t.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Check whether the source package contains unnecessary files, which makes the tar package too large"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Folder contains the word ",(0,t.jsx)(n.code,{children:"incubating"})]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","There are ",(0,t.jsx)(n.code,{children:"LICENSE"})," and ",(0,t.jsx)(n.code,{children:"NOTICE"})," files"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","There is a ",(0,t.jsx)(n.code,{children:"DISCLAIMER"})," or ",(0,t.jsx)(n.code,{children:"DISCLAIMER-WIP"})," file"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","The year in the ",(0,t.jsx)(n.code,{children:"NOTICE"})," file is correct"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Only text files exist, not binary files"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","All files have ASF license at the beginning"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Able to compile correctly"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","....."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can refer to this article: ",(0,t.jsx)(n.a,{href:"https://apache.org/legal/resolved.html",children:"ASF Third Party License Policy"})]}),"\n",(0,t.jsxs)(n.p,{children:["compile the source code: ",(0,t.jsx)(n.a,{href:"https://graphar.apache.org/community/development",children:"How to build GraphAr"})]}),"\n",(0,t.jsx)(n.h2,{id:"3-email-reply",children:"3. Email reply"}),"\n",(0,t.jsx)(n.p,{children:"If you initiate a posting vote, you can refer to this response example to reply to the email after verification"}),"\n",(0,t.jsxs)("font",{color:"red",children:[(0,t.jsxs)(n.p,{children:["When replying to the email, you must bring the information that you have checked by yourself. Simply replying to ",(0,t.jsx)(n.code,{children:"+1 approve"})," is invalid."]}),(0,t.jsxs)(n.p,{children:["When PPMC votes in the ",(0,t.jsx)(n.a,{href:"mailto:dev@graphar.apache.org",children:"dev@graphar.apache.org"})," GraphAr community, Please bring the binding suffix to indicate that it has a binding vote for the vote in the GraphAr community, and it is convenient to count the voting results."]}),(0,t.jsxs)(n.p,{children:["When IPMC votes in the ",(0,t.jsx)(n.a,{href:"mailto:general@incubator.apache.org",children:"general@incubator.apache.org"})," incubator community. Please bring the binding suffix to indicate that the voting in the incubator community has a binding vote, which is convenient for counting the voting results."]})]}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:["If you have already voted on ",(0,t.jsx)(n.a,{href:"mailto:dev@graphar.apache.org",children:"dev@graphar.apache.org"}),", you can take it directly to the incubator community when you reply to the vote, such as:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"//Incubator community voting, only IPMC members have binding binding\uff0cPPMC needs to be aware of binding changes\nForward my +1 from dev@listgrapharnkis (non-binding)\nCopy my +1 from graphar DEV ML (non-binding)\n"})})]}),"\n",(0,t.jsx)(n.p,{children:"Non-PPMC/Non-IPMC member:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+1 (non-binding)\nI checked:\n     1. All download links are valid\n     2. Checksum and signature are OK\n     3. LICENSE and NOTICE are exist\n     4. Build successfully on macOS(Big Sur)\n     5. \n"})}),"\n",(0,t.jsx)(n.p,{children:"PPMC/IPMC member:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"//Incubator community voting, only IPMC members have binding binding\n+1 (binding)\nI checked:\n     1. All download links are valid\n     2. Checksum and signature are OK\n     3. LICENSE and NOTICE are exist\n     4. Build successfully on macOS(Big Sur)\n     5. \n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["This doc refer from ",(0,t.jsx)(n.a,{href:"https://streampark.apache.org/",children:"Apache StreamPark"})]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},395:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var t=i(959);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);