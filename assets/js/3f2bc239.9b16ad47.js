"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[4263],{7389:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(1527),t=r(395);const s={title:"Create a release",sidebar_position:1},i=void 0,o={id:"committers/release",title:"Create a release",description:"This document mainly introduces how the release manager",source:"@site/community/committers/release.md",sourceDirName:"committers",slug:"/committers/release",permalink:"/community/committers/release",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-graphar-website/edit/main/community/committers/release.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create a release",sidebar_position:1},sidebar:"docs",previous:{title:"Committers",permalink:"/community/category/committers"},next:{title:"Verify a candidate version",permalink:"/community/committers/verify"}},h={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Some Terminology of release",id:"some-terminology-of-release",level:2},{value:"Preparation",id:"preparation",level:2},{value:"Start discussion about the next release",id:"start-discussion-about-the-next-release",level:2},{value:"Start a tracking issue about the next release",id:"start-a-tracking-issue-about-the-next-release",level:2},{value:"GitHub Side",id:"github-side",level:2},{value:"Bump version in project",id:"bump-version-in-project",level:3},{value:"Push release candidate tag",id:"push-release-candidate-tag",level:3},{value:"ASF Side",id:"asf-side",level:2},{value:"Create an ASF Release",id:"create-an-asf-release",level:3},{value:"Upload artifacts to the SVN dist repo",id:"upload-artifacts-to-the-svn-dist-repo",level:3},{value:"Rescue",id:"rescue",level:3},{value:"Voting",id:"voting",level:2},{value:"GraphAr Community Vote",id:"graphar-community-vote",level:3},{value:"Incubator Community Vote",id:"incubator-community-vote",level:3},{value:"Official Release",id:"official-release",level:2},{value:"Push the release git tag",id:"push-the-release-git-tag",level:3},{value:"Publish artifacts to SVN RELEASE branch",id:"publish-artifacts-to-svn-release-branch",level:3},{value:"Create a GitHub Release",id:"create-a-github-release",level:3},{value:"Send the announcement",id:"send-the-announcement",level:3},{value:"Post release",id:"post-release",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This document mainly introduces how the release manager\nreleases a new version in accordance with the Apache requirements."}),"\n",(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Source Release"})," is the key point which Apache values, and is also necessary for an ASF release."]}),"\n",(0,a.jsx)(n.p,{children:"Please remember that publishing software has legal consequences."}),"\n",(0,a.jsx)(n.p,{children:"This guide complements the foundation-wide policies and guides:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.apache.org/legal/release-policy.html",children:"Release Policy"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://infra.apache.org/release-distribution",children:"Release Distribution Policy"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://infra.apache.org/release-publishing.html",children:"Release Creation Process"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"some-terminology-of-release",children:"Some Terminology of release"}),"\n",(0,a.jsx)(n.p,{children:"In the context of our release, we use several terms to describe different stages of the release process."}),"\n",(0,a.jsx)(n.p,{children:"Here's an explanation of these terms:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"graphar_version"}),": the version of GraphAr to be released, like ",(0,a.jsx)(n.code,{children:"0.12.0"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"release_version"}),": the version of release candidate, like ",(0,a.jsx)(n.code,{children:"0.12.0-rc.1"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"rc_version"}),": the minor version for voting round, like ",(0,a.jsx)(n.code,{children:"rc.1"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"This section is the requirements for individuals who are new to the role of release manager."})}),"\n",(0,a.jsx)(n.h2,{id:"start-discussion-about-the-next-release",children:"Start discussion about the next release"}),"\n",(0,a.jsxs)(n.p,{children:["Start a discussion about the next release via sending email to: ",(0,a.jsx)(n.a,{href:"mailto:dev@graphar.apache.org",children:"dev@graphar.apache.org"}),":"]}),"\n",(0,a.jsx)(n.p,{children:"Title:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[DISCUSS] Release Apache GraphAr(incubating) ${graphar_version}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Content:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hello, Apache GraphAr(incubating) Community,\n\nThis is a call for a discussion to release Apache GraphAr(incubating) version ${graphar_version}.\n\nThe change lists about this release:\n\nhttps://github.com/apache/incubator-graphar/compare/v${graphar_last_version}...main\n\nPlease leave your comments here about this release plan. We will bump the version in the repo and start the release process after the discussion.\n\nThanks\n\n${name}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"start-a-tracking-issue-about-the-next-release",children:"Start a tracking issue about the next release"}),"\n",(0,a.jsx)(n.p,{children:"Start a tracking issue on GitHub for the upcoming release to track all tasks that need to be completed."}),"\n",(0,a.jsx)(n.p,{children:"Title:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Tracking issues of GraphAr ${graphar_version} Release\n"})}),"\n",(0,a.jsx)(n.p,{children:"Content:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",children:"This issue is used to track tasks of the graphar ${graphar_version} release.\n\n## Tasks\n\n### Blockers\n\n> Blockers are the tasks that must be completed before the release.\n\n### Build Release\n\n#### GitHub Side\n\n- [ ] Bump version in project\n  - [ ] cpp\n  - [ ] scala\n- [ ] Update docs\n- [ ] Push release candidate tag to GitHub\n\n#### ASF Side\n\n- [ ] Create an ASF Release\n- [ ] Upload artifacts to the SVN dist repo\n\n### Voting\n\n- [ ] Start VOTE at graphar community\n- [ ] Start VOTE at incubator community\n\n### Official Release\n\n- [ ] Push the release git tag\n- [ ] Publish artifacts to SVN RELEASE branch\n- [ ] Change GraphAr Website download link\n- [ ] Send the announcement\n\nFor details of each step, please refer to: https://graphar.apache.org/community/committers/release\n"})}),"\n",(0,a.jsx)(n.h2,{id:"github-side",children:"GitHub Side"}),"\n",(0,a.jsx)(n.h3,{id:"bump-version-in-project",children:"Bump version in project"}),"\n",(0,a.jsx)(n.p,{children:"Bump all components' version in the project to the new graphar version.\nPlease note that this version is the exact version of the release, not the release candidate version."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["cpp library: bump version in ",(0,a.jsx)(n.code,{children:"cpp/CMakeLists.txt"})]}),"\n",(0,a.jsxs)(n.li,{children:["scala with spark library: bump version in ",(0,a.jsx)(n.code,{children:"maven-projects/pom.xml"})]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"push-release-candidate-tag",children:"Push release candidate tag"}),"\n",(0,a.jsx)(n.p,{children:"After bump version PR gets merged, we can create a GitHub release for the release candidate:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Create a tag at ",(0,a.jsx)(n.code,{children:"main"})," branch on the ",(0,a.jsx)(n.code,{children:"Bump Version"})," / ",(0,a.jsx)(n.code,{children:"Patch up version"})," commit: ",(0,a.jsx)(n.code,{children:'git tag -s "v0.12.0-rc.1"'}),", please correctly check out the corresponding commit instead of directly tagging on the main branch."]}),"\n",(0,a.jsxs)(n.li,{children:["Push tags to GitHub: ",(0,a.jsx)(n.code,{children:"git push --tags"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"asf-side",children:"ASF Side"}),"\n",(0,a.jsx)(n.p,{children:"If any step in the ASF Release process fails and requires code changes,\nwe will abandon that version and prepare for the next one.\nOur release page will only display ASF releases instead of GitHub Releases."}),"\n",(0,a.jsx)(n.h3,{id:"create-an-asf-release",children:"Create an ASF Release"}),"\n",(0,a.jsx)(n.p,{children:"After GitHub Release has been created, we can start to create ASF Release."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Checkout to released tag. (e.g. ",(0,a.jsx)(n.code,{children:"git checkout v0.12.0-rc.1"}),", tag is created in the previous step)"]}),"\n",(0,a.jsxs)(n.li,{children:["create a new branch for the release: ",(0,a.jsx)(n.code,{children:"git checkout -b release-0.12.0-rc.1"})]}),"\n",(0,a.jsxs)(n.li,{children:["Use the release script to create a new release: ",(0,a.jsx)(n.code,{children:"python ./dev/release/release.py"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["This script will generate the release candidate artifacts under ",(0,a.jsx)(n.code,{children:"dist"}),", including:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"apache-graphar-{version}-incubating-src.tar.gz"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"apache-graphar-{version}-incubating-src.tar.gz.asc"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"apache-graphar-{version}-incubating-src.tar.gz.sha512"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Push the newly created branch to GitHub"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"upload-artifacts-to-the-svn-dist-repo",children:"Upload artifacts to the SVN dist repo"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"SVN is required for this step."})}),"\n",(0,a.jsxs)(n.p,{children:["The svn repository of the dev branch is: ",(0,a.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/dev/incubator/graphar",children:"https://dist.apache.org/repos/dist/dev/incubator/graphar"})]}),"\n",(0,a.jsx)(n.p,{children:"First, checkout GraphAr to local directory:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.\nsvn co https://dist.apache.org/repos/dist/dev/incubator/graphar graphar-dist-dev\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then, upload the artifacts:"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"${release_version}"})," here should be like ",(0,a.jsx)(n.code,{children:"0.12.0-rc.1"})]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'cd graphar-dist-dev\n# create a directory named by version\nmkdir ${release_version}\n# copy source code and signature package to the versioned directory\ncp ${repo_dir}/dist/* ${release_version}/\n# check svn status\nsvn status\n# add to svn\nsvn add ${release_version}\n# check svn status\nsvn status\n# commit to SVN remote server\nsvn commit -m "Prepare for graphar ${release_version}"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Visit ",(0,a.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/dev/incubator/graphar/",children:"https://dist.apache.org/repos/dist/dev/incubator/graphar/"})," to make sure the artifacts are uploaded correctly."]}),"\n",(0,a.jsx)(n.h3,{id:"rescue",children:"Rescue"}),"\n",(0,a.jsxs)(n.p,{children:["If you accidentally published wrong or unexpected artifacts, like wrong signature files, wrong sha256 files,\nplease cancel the release for the current ",(0,a.jsx)(n.code,{children:"release_version"}),",\n",(0,a.jsx)(n.em,{children:"increase th RC counting"})," and re-initiate a release with the new ",(0,a.jsx)(n.code,{children:"release_version"}),".\nAnd remember to delete the wrong artifacts from the SVN dist repo."]}),"\n",(0,a.jsx)(n.h2,{id:"voting",children:"Voting"}),"\n",(0,a.jsx)(n.p,{children:"GraphAr requires votes from both the GraphAr Community and the Incubator Community."}),"\n",(0,a.jsx)(n.h3,{id:"graphar-community-vote",children:"GraphAr Community Vote"}),"\n",(0,a.jsxs)(n.p,{children:["GraphAr Community Vote should send email to: ",(0,a.jsx)(n.a,{href:"mailto:dev@graphar.apache.org",children:"dev@graphar.apache.org"})]}),"\n",(0,a.jsx)(n.p,{children:"Title:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[VOTE] Release Apache GraphAr(incubating) ${release_version} - GraphAr Vote Round 1\n"})}),"\n",(0,a.jsx)(n.p,{children:"Content:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hello, Apache GraphAr(incubating) Community,\n\nThis is a call for a vote to release Apache GraphAr(incubating) version ${graphar_version}.\n\nThe tag to be voted on is ${graphar_version}.\n\nThe release candidate:\n\nhttps://dist.apache.org/repos/dist/dev/incubator/graphar/${release_version}/\n\nKeys to verify the release candidate:\n\nhttps://downloads.apache.org/incubator/graphar/KEYS\n\nGit tag for the release:\n\nhttps://github.com/apache/incubator-graphar/releases/tag/v${release_version}\n\nThe change lists about this release:\n\nhttps://github.com/apache/incubator-fury/compare/v0.11.4...v0.12.0-rc.1\n\nPlease download, verify, and test.\n\nThe VOTE will be open for at least 72 hours and until the necessary\nnumber of votes are reached.\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\nTo learn more about apache graphar, please see https://graphar.apache.org/\n\nChecklist for reference:\n\n[ ] Download links are valid.\n[ ] Checksums and PGP signatures are valid.\n[ ] Source code distribution have correct names matching the current release.\n[ ] LICENSE/NOTICE files exist and are correct.\n[ ] No unexpected binary files bundled in the source archive.\n[ ] All source files have ASF headers.\n[ ] Can compile from source.\n\nMore detailed checklist please refer to:\n\nhttps://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist\n\n\nHow to Build GraphAr, please refer to:\n\nhttps://graphar.apache.org/community/development\n\n\nThanks\n\n${name}\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Tips: The 72 hours is the minimum time for voting, so we can ensure that community members from various time zones can participate in the verification process."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["After at least 3 ",(0,a.jsx)(n.code,{children:"+1"})," binding vote (",(0,a.jsx)(n.a,{href:"https://people.apache.org/phonebook.html?podling=graphar",children:"from GraphAr Podling PMC member"}),") and no veto, claim the vote result:"]}),"\n",(0,a.jsx)(n.p,{children:"Title:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[RESULT][VOTE] Release Apache GraphAr(incubating) ${release_version} - GraphAr Vote Round 1\n"})}),"\n",(0,a.jsx)(n.p,{children:"Content:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hello, Apache GraphAr(incubating) Community,\n\nThe vote to release Apache GraphAr(incubating) ${release_version} has passed.\n\nThe vote PASSED with 3 +1 binding and 1 +1 non-binding votes, no +0 or -1 votes:\n\nBinding votes:\n\n- xxx\n- yyy\n- zzz\n\nNon-Binding votes:\n\n- aaa\n\nVote thread: ${vote_thread_url}\n\nThanks\n\n${name}\n"})}),"\n",(0,a.jsx)(n.p,{children:"It's better to use the real name or the public name which is displayed on the voters' profile page,\nor Apache ID of the voter, to show who voted in the vote result email,\nand avoid using nicknames, it will make the vote result hard for others to track the voter.\nWe should make sure the binding votes are from the people who have the right to vote the binding one."}),"\n",(0,a.jsx)(n.h3,{id:"incubator-community-vote",children:"Incubator Community Vote"}),"\n",(0,a.jsxs)(n.p,{children:["Incubator Community Vote should send email to: ",(0,a.jsx)(n.a,{href:"mailto:general@incubator.apache.org",children:"general@incubator.apache.org"}),":"]}),"\n",(0,a.jsx)(n.p,{children:"Title:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[VOTE] Release Apache GraphAr(incubating) ${release_version} - Incubator Vote Round 1\n"})}),"\n",(0,a.jsx)(n.p,{children:"Content:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hello Incubator PMC,\n\nThe Apache GraphAr community has voted and approved the release of Apache\nGraphAr(incubating) ${release_version}. We now kindly request the IPMC members\nreview and vote for this release.\n\nApache GraphAr(incubating) is an open-source and language-independent data file format designed for\nefficient graph data storage and retrieval.\n\nGraphAr community vote thread:\n\n${community_vote_thread_url}\n\nVote result thread:\n\n${community_vote_result_thread_url}\n\nThe release candidate:\n\nhttps://dist.apache.org/repos/dist/dev/incubator/graphar/${release_version}/\n\nThis release has been signed with a PGP available here:\n\nhttps://downloads.apache.org/incubator/graphar/KEYS\n\nGit tag for the release:\n\nhttps://github.com/apache/incubator-graphar/releases/tag/${release_version}\n\nPlease download, verify, and test.\n\nThe VOTE will be open for at least 72 hours and until the necessary\nnumber of votes are reached.\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\nTo learn more about apache graphar, please see https://graphar.apache.org/\n\nChecklist for reference:\n\n[ ] Download links are valid.\n[ ] Checksums and signatures.\n[ ] LICENSE/NOTICE files exist\n[ ] No unexpected binary files\n[ ] All source files have ASF headers\n[ ] Can compile from source\n\nMore detailed checklist please refer to:\nhttps://github.com/apache/incubator-graphar/tree/main/scripts\n\nTo compile from source, please refer to:\nhttps://graphar.apache.org/community/development\n\nThanks\n\n${name}\n"})}),"\n",(0,a.jsx)(n.p,{children:"After at least 72 hours with at least 3 +1 binding vote (from Incubator PMC member) and no veto, claim the vote result:"}),"\n",(0,a.jsx)(n.p,{children:"Title:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[RESULT][VOTE] Release Apache GraphAr(incubating) ${release_version} - Incubator Vote Round 1\n"})}),"\n",(0,a.jsx)(n.p,{children:"Content:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hi Incubator PMC,\n\nThe vote to release Apache GraphAr(incubating) ${release_version} has passed with\n4 +1 binding and 3 +1 non-binding votes, no +0 or -1 votes.\n\nBinding votes\uff1a\n\n- xxx\n- yyy\n- zzz\n\nNon-Binding votes:\n\n- aaa\n\nVote thread: ${incubator_vote_thread_url}\n\nThanks for reviewing and voting for our release candidate.\n\nWe will proceed with publishing the approved artifacts and sending out the announcement soon.\n"})}),"\n",(0,a.jsx)(n.h2,{id:"official-release",children:"Official Release"}),"\n",(0,a.jsx)(n.h3,{id:"push-the-release-git-tag",children:"Push the release git tag"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"# Checkout the tags that passed VOTE\ngit checkout ${release_version}\n# Tag with the graphar version\ngit tag -s ${graphar_version}\n# Push tags to GitHub to trigger releases\ngit push origin ${graphar_version}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"publish-artifacts-to-svn-release-branch",children:"Publish artifacts to SVN RELEASE branch"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'svn mv https://dist.apache.org/repos/dist/dev/incubator/graphar/${release_version} https://dist.apache.org/repos/dist/release/incubator/graphar/${graphar_version} -m "Release ${graphar_version}"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"create-a-github-release",children:"Create a GitHub Release"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.a,{href:"https://github.com/apache/incubator-graphar/releases/new",children:"here"})," to create a new release."]}),"\n",(0,a.jsx)(n.li,{children:"Pick the git tag of this release version from the dropdown menu."}),"\n",(0,a.jsxs)(n.li,{children:["Make sure the branch target is ",(0,a.jsx)(n.code,{children:"main"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Generate the release note by clicking the ",(0,a.jsx)(n.code,{children:"Generate release notes"})," button."]}),"\n",(0,a.jsxs)(n.li,{children:["Add the release note from every component's ",(0,a.jsx)(n.code,{children:"upgrade.md"})," if there are breaking changes before the content generated by GitHub. Check them carefully."]}),"\n",(0,a.jsx)(n.li,{children:"Publish the release."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"send-the-announcement",children:"Send the announcement"}),"\n",(0,a.jsxs)(n.p,{children:["Send the release announcement to ",(0,a.jsx)(n.code,{children:"dev@graphar.apache.org"})," and CC ",(0,a.jsx)(n.code,{children:"announce@apache.org"}),"."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Tips: Please follow the ",(0,a.jsx)(n.a,{href:"https://infra.apache.org/committer-email.html",children:"Committer Email"})," guide to make sure you have already set up the email SMTP. Otherwise, your email cannot be sent to the announcement mailing list."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:'Instead of adding breaking changes, let\'s include the new features as "notable changes" in the announcement.'}),"\n",(0,a.jsx)(n.p,{children:"Title:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[ANNOUNCE] Release Apache GraphAr(incubating) ${graphar_version}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Content:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hi all,\n\nThe Apache GraphAr(incubating) community is pleased to announce\nthat Apache GraphAr(incubating) ${graphar_version} has been released!\n\nGraphAr is a data access layer that allows users to easily and efficiently\nretrieve data from various storage services in a unified way.\n\nThe notable changes since ${graphar_version} include:\n1. xxxxx\n2. yyyyyy\n3. zzzzzz\n\nPlease refer to the change log for the complete list of changes:\nhttps://github.com/apache/incubator-graphar/releases/tag/v${graphar_version}\n\nApache GraphAr website: https://graphar.apache.org/\n\nDownload Links: https://graphar.apache.org/download\n\nGraphAr Resources:\n- Issue: https://github.com/apache/incubator-graphar/issues\n- Mailing list: dev@graphar.apache.org\n\nThanks\nOn behalf of Apache GraphAr community\n\n---\nApache GraphAr (incubating) is an effort undergoing incubation at the Apache\nSoftware Foundation (ASF), sponsored by the Apache Incubator PMC.\n\nIncubation is required of all newly accepted projects until a further review\nindicates that the infrastructure, communications, and decision making process\nhave stabilized in a manner consistent with other successful ASF projects.\n\nWhile incubation status is not necessarily a reflection of the completeness\nor stability of the code, it does indicate that the project has yet to be\nfully endorsed by the ASF.\n"})}),"\n",(0,a.jsx)(n.h2,{id:"post-release",children:"Post release"}),"\n",(0,a.jsx)(n.p,{children:"After the official release out, you may perform a few post actions."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.p,{children:["This doc refer from ",(0,a.jsx)(n.a,{href:"https://opendal.apache.org/",children:"Apache OpenDAL"})]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},395:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var a=r(959);const t={},s=a.createContext(t);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);