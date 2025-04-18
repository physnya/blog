import{f as M}from"./chunk-FASC7IG4-CkXw6_ak.js";import{m as J}from"./chunk-ZN7TASNU-Nsi7hlR5.js";import{m as w,bp as H,bq as Y,br as j,bs as _,t as a,H as q,bt as Q,bu as V,bd as W,bv as Z,bi as $,be as D,bc as z,bw as K,bx as U}from"./mermaid.esm.min-Cz2nyI4W.js";import{s as x,_ as ee,J as G}from"./chunk-5ZJXQJOJ-DDM2I2rn.js";import"./app-CZ_4pePg.js";function X(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:k(e),edges:P(e)};return x(e.graph())||(t.value=ee(e.graph())),t}w(X,"write");function k(e){return G(e.nodes(),function(t){var r=e.node(t),d=e.parent(t),l={v:t};return x(r)||(l.value=r),x(d)||(l.parent=d),l})}w(k,"writeNodes");function P(e){return G(e.edges(),function(t){var r=e.edge(t),d={v:t.v,w:t.w};return x(t.name)||(d.name=t.name),x(r)||(d.value=r),d})}w(P,"writeEdges");var c=new Map,E=new Map,B=new Map,re=w(()=>{E.clear(),B.clear(),c.clear()},"clear"),I=w((e,t)=>{let r=E.get(t)||[];return a.trace("In isDescendant",t," ",e," = ",r.includes(e)),r.includes(e)},"isDescendant"),te=w((e,t)=>{let r=E.get(t)||[];return a.info("Descendants of ",t," is ",r),a.info("Edge is ",e),e.v===t||e.w===t?!1:r?r.includes(e.v)||I(e.v,t)||I(e.w,t)||r.includes(e.w):(a.debug("Tilt, ",t,",not in descendants"),!1)},"edgeInCluster"),A=w((e,t,r,d)=>{a.warn("Copying children of ",e,"root",d,"data",t.node(e),d);let l=t.children(e)||[];e!==d&&l.push(e),a.warn("Copying (nodes) clusterId",e,"nodes",l),l.forEach(o=>{if(t.children(o).length>0)A(o,t,r,d);else{let i=t.node(o);a.info("cp ",o," to ",d," with parent ",e),r.setNode(o,i),d!==t.parent(o)&&(a.warn("Setting parent",o,t.parent(o)),r.setParent(o,t.parent(o))),e!==d&&o!==e?(a.debug("Setting parent",o,e),r.setParent(o,e)):(a.info("In copy ",e,"root",d,"data",t.node(e),d),a.debug("Not Setting parent for node=",o,"cluster!==rootId",e!==d,"node!==clusterId",o!==e));let s=t.edges(o);a.debug("Copying Edges",s),s.forEach(u=>{a.info("Edge",u);let b=t.edge(u.v,u.w,u.name);a.info("Edge data",b,d);try{te(u,d)?(a.info("Copying as ",u.v,u.w,b,u.name),r.setEdge(u.v,u.w,b,u.name),a.info("newGraph edges ",r.edges(),r.edge(r.edges()[0]))):a.info("Skipping copy of edge ",u.v,"-->",u.w," rootId: ",d," clusterId:",e)}catch(N){a.error(N)}})}a.debug("Removing node",o),t.removeNode(o)})},"copy"),T=w((e,t)=>{let r=t.children(e),d=[...r];for(let l of r)B.set(l,e),d=[...d,...T(l,t)];return d},"extractDescendants"),ne=w((e,t,r)=>{let d=e.edges().filter(s=>s.v===t||s.w===t),l=e.edges().filter(s=>s.v===r||s.w===r),o=d.map(s=>({v:s.v===t?r:s.v,w:s.w===t?t:s.w})),i=l.map(s=>({v:s.v,w:s.w}));return o.filter(s=>i.some(u=>s.v===u.v&&s.w===u.w))},"findCommonEdges"),S=w((e,t,r)=>{let d=t.children(e);if(a.trace("Searching children of id ",e,d),d.length<1)return e;let l;for(let o of d){let i=S(o,t,r),s=ne(t,r,i);if(i)if(s.length>0)l=i;else return i}return l},"findNonClusterChild"),O=w(e=>!c.has(e)||!c.get(e).externalConnections?e:c.has(e)?c.get(e).id:e,"getAnchorId"),ae=w((e,t)=>{if(!e||t>10){a.debug("Opting out, no graph ");return}else a.debug("Opting in, graph ");e.nodes().forEach(function(r){e.children(r).length>0&&(a.warn("Cluster identified",r," Replacement id in edges: ",S(r,e,r)),E.set(r,T(r,e)),c.set(r,{id:S(r,e,r),clusterData:e.node(r)}))}),e.nodes().forEach(function(r){let d=e.children(r),l=e.edges();d.length>0?(a.debug("Cluster identified",r,E),l.forEach(o=>{let i=I(o.v,r),s=I(o.w,r);i^s&&(a.warn("Edge: ",o," leaves cluster ",r),a.warn("Descendants of XXX ",r,": ",E.get(r)),c.get(r).externalConnections=!0)})):a.debug("Not a cluster ",r,E)});for(let r of c.keys()){let d=c.get(r).id,l=e.parent(d);l!==r&&c.has(l)&&!c.get(l).externalConnections&&(c.get(r).id=l)}e.edges().forEach(function(r){let d=e.edge(r);a.warn("Edge "+r.v+" -> "+r.w+": "+JSON.stringify(r)),a.warn("Edge "+r.v+" -> "+r.w+": "+JSON.stringify(e.edge(r)));let l=r.v,o=r.w;if(a.warn("Fix XXX",c,"ids:",r.v,r.w,"Translating: ",c.get(r.v)," --- ",c.get(r.w)),c.get(r.v)||c.get(r.w)){if(a.warn("Fixing and trying - removing XXX",r.v,r.w,r.name),l=O(r.v),o=O(r.w),e.removeEdge(r.v,r.w,r.name),l!==r.v){let i=e.parent(l);c.get(i).externalConnections=!0,d.fromCluster=r.v}if(o!==r.w){let i=e.parent(o);c.get(i).externalConnections=!0,d.toCluster=r.w}a.warn("Fix Replacing with XXX",l,o,r.name),e.setEdge(l,o,d,r.name)}}),a.warn("Adjusted Graph",X(e)),R(e,0),a.trace(c)},"adjustClustersAndEdges"),R=w((e,t)=>{var l,o;if(a.warn("extractor - ",t,X(e),e.children("D")),t>10){a.error("Bailing out");return}let r=e.nodes(),d=!1;for(let i of r){let s=e.children(i);d=d||s.length>0}if(!d){a.debug("Done, no node has children",e.nodes());return}a.debug("Nodes = ",r,t);for(let i of r)if(a.debug("Extracting node",i,c,c.has(i)&&!c.get(i).externalConnections,!e.parent(i),e.node(i),e.children("D")," Depth ",t),!c.has(i))a.debug("Not a cluster",i,t);else if(!c.get(i).externalConnections&&e.children(i)&&e.children(i).length>0){a.warn("Cluster without external connections, without a parent and with children",i,t);let s=e.graph().rankdir==="TB"?"LR":"TB";(o=(l=c.get(i))==null?void 0:l.clusterData)!=null&&o.dir&&(s=c.get(i).clusterData.dir,a.warn("Fixing dir",c.get(i).clusterData.dir,s));let u=new J({multigraph:!0,compound:!0}).setGraph({rankdir:s,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});a.warn("Old graph before copy",X(e)),A(i,e,u,i),e.setNode(i,{clusterNode:!0,id:i,clusterData:c.get(i).clusterData,label:c.get(i).label,graph:u}),a.warn("New graph after copy node: (",i,")",X(u)),a.debug("Old graph after copy",X(e))}else a.warn("Cluster ** ",i," **not meeting the criteria !externalConnections:",!c.get(i).externalConnections," no parent: ",!e.parent(i)," children ",e.children(i)&&e.children(i).length>0,e.children("D"),t),a.debug(c);r=e.nodes(),a.warn("New list of nodes",r);for(let i of r){let s=e.node(i);a.warn(" Now next level",i,s),s!=null&&s.clusterNode&&R(s.graph,t+1)}},"extractor"),F=w((e,t)=>{if(t.length===0)return[];let r=Object.assign([],t);return t.forEach(d=>{let l=e.children(d),o=F(e,l);r=[...r,...o]}),r},"sorter"),ie=w(e=>F(e,e.children()),"sortNodesByHierarchy"),L=w(async(e,t,r,d,l,o)=>{a.warn("Graph in recursive render:XAX",X(t),l);let i=t.graph().rankdir;a.trace("Dir in recursive render - dir:",i);let s=e.insert("g").attr("class","root");t.nodes()?a.info("Recursive render XXX",t.nodes()):a.info("No nodes found for",t),t.edges().length>0&&a.info("Recursive edges",t.edge(t.edges()[0]));let u=s.insert("g").attr("class","clusters"),b=s.insert("g").attr("class","edgePaths"),N=s.insert("g").attr("class","edgeLabels"),p=s.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(g){let n=t.node(g);if(l!==void 0){let f=JSON.parse(JSON.stringify(l.clusterData));a.trace(`Setting data for parent cluster XXX
 Node.id = `,g,`
 data=`,f.height,`
Parent cluster`,l.height),t.setNode(l.id,f),t.parent(g)||(a.trace("Setting parent",g,l.id),t.setParent(g,l.id,f))}if(a.info("(Insert) Node XXX"+g+": "+JSON.stringify(t.node(g))),n==null?void 0:n.clusterNode){a.info("Cluster identified XBX",g,n.width,t.node(g));let{ranksep:f,nodesep:v}=t.graph();n.graph.setGraph({...n.graph.graph(),ranksep:f+25,nodesep:v});let m=await L(p,n.graph,r,d,t.node(g),o),C=m.elem;Q(n,C),n.diff=m.diff||0,a.info("New compound node after recursive render XAX",g,"width",n.width,"height",n.height),V(C,n)}else t.children(g).length>0?(a.trace("Cluster - the non recursive path XBX",g,n.id,n,n.width,"Graph:",t),a.trace(S(n.id,t)),c.set(n.id,{id:S(n.id,t),node:n})):(a.trace("Node - the non recursive path XAX",g,p,t.node(g),i),await W(p,t.node(g),{config:o,dir:i}))})),await w(async()=>{let g=t.edges().map(async function(n){let f=t.edge(n.v,n.w,n.name);a.info("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(n)),a.info("Edge "+n.v+" -> "+n.w+": ",n," ",JSON.stringify(t.edge(n))),a.info("Fix",c,"ids:",n.v,n.w,"Translating: ",c.get(n.v),c.get(n.w)),await Z(N,f)});await Promise.all(g)},"processEdges")(),a.info("Graph before layout:",JSON.stringify(X(t))),a.info("############################################# XXX"),a.info("###                Layout                 ### XXX"),a.info("############################################# XXX"),M(t),a.info("Graph after layout:",JSON.stringify(X(t)));let h=0,{subGraphTitleTotalMargin:y}=$(o);return await Promise.all(ie(t).map(async function(g){var f;let n=t.node(g);if(a.info("Position XBX => "+g+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n==null?void 0:n.clusterNode)n.y+=y,a.info("A tainted cluster node XBX1",g,n.id,n.width,n.height,n.x,n.y,t.parent(g)),c.get(n.id).node=n,D(n);else if(t.children(g).length>0){a.info("A pure cluster node XBX1",g,n.id,n.x,n.y,n.width,n.height,t.parent(g)),n.height+=y,t.node(n.parentId);let v=(n==null?void 0:n.padding)/2||0,m=((f=n==null?void 0:n.labelBBox)==null?void 0:f.height)||0,C=m-v||0;a.debug("OffsetY",C,"labelHeight",m,"halfPadding",v),await z(u,n),c.get(n.id).node=n}else{let v=t.node(n.parentId);n.y+=y/2,a.info("A regular node XBX1 - using the padding",n.id,"parent",n.parentId,n.width,n.height,n.x,n.y,"offsetY",n.offsetY,"parent",v,v==null?void 0:v.offsetY,n),D(n)}})),t.edges().forEach(function(g){let n=t.edge(g);a.info("Edge "+g.v+" -> "+g.w+": "+JSON.stringify(n),n),n.points.forEach(C=>C.y+=y/2);let f=t.node(g.v);var v=t.node(g.w);let m=K(b,n,c,r,f,v,d);U(n,m)}),t.nodes().forEach(function(g){let n=t.node(g);a.info(g,n.type,n.diff),n.isGroup&&(h=n.diff)}),a.warn("Returning from recursive render XAX",s,h),{elem:s,diff:h}},"recursiveRender"),ce=w(async(e,t)=>{var o,i,s,u,b,N;let r=new J({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:((o=e.config)==null?void 0:o.nodeSpacing)||((s=(i=e.config)==null?void 0:i.flowchart)==null?void 0:s.nodeSpacing)||e.nodeSpacing,ranksep:((u=e.config)==null?void 0:u.rankSpacing)||((N=(b=e.config)==null?void 0:b.flowchart)==null?void 0:N.rankSpacing)||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),d=t.select("g");H(d,e.markers,e.type,e.diagramId),Y(),j(),_(),re(),e.nodes.forEach(p=>{r.setNode(p.id,{...p}),p.parentId&&r.setParent(p.id,p.parentId)}),a.debug("Edges:",e.edges),e.edges.forEach(p=>{if(p.start===p.end){let h=p.start,y=h+"---"+h+"---1",g=h+"---"+h+"---2",n=r.node(h);r.setNode(y,{domId:y,id:y,parentId:n.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),r.setParent(y,n.parentId),r.setNode(g,{domId:g,id:g,parentId:n.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10}),r.setParent(g,n.parentId);let f=structuredClone(p),v=structuredClone(p),m=structuredClone(p);f.label="",f.arrowTypeEnd="none",f.id=h+"-cyclic-special-1",v.arrowTypeStart="none",v.arrowTypeEnd="none",v.id=h+"-cyclic-special-mid",m.label="",n.isGroup&&(f.fromCluster=h,m.toCluster=h),m.id=h+"-cyclic-special-2",m.arrowTypeStart="none",r.setEdge(h,y,f,h+"-cyclic-special-0"),r.setEdge(y,g,v,h+"-cyclic-special-1"),r.setEdge(g,h,m,h+"-cyc<lic-special-2")}else r.setEdge(p.start,p.end,{...p},p.id)}),a.warn("Graph at first:",JSON.stringify(X(r))),ae(r),a.warn("Graph after XAX:",JSON.stringify(X(r)));let l=q();await L(d,r,e.type,e.diagramId,void 0,l)},"render");export{ce as render};
