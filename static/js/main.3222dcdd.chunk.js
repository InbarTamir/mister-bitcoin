(this["webpackJsonpmister-bitcoin"]=this["webpackJsonpmister-bitcoin"]||[]).push([[0],{44:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(18),o=n.n(r),s=(n(44),n(5)),i=n(4),l=n(11),u=n(12),d=n(14),m=n(13),h=(n(37),n(1)),b=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"app-header",children:[Object(h.jsx)(s.b,{to:"/",children:Object(h.jsx)("div",{className:"logo",children:"mister BITCoin"})}),Object(h.jsxs)("nav",{className:"main-nav",children:[Object(h.jsx)(s.c,{to:"/",exact:!0,children:"Home"}),Object(h.jsx)(s.c,{to:"/contact",children:"Contacts"}),Object(h.jsx)(s.c,{to:"/statistic",children:"Statistics"})]})]})}}]),n}(a.Component);var p=n(3),j=n.n(p),f=n(6),v=n(39),x=n.n(v);var O={store:function(e,t){localStorage[e]=JSON.stringify(t)},load:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=localStorage[e]||t;return JSON.parse(n)}},A={getRate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return x.a.get("https://blockchain.info/tobtc?currency=USD&value=".concat(e))},getMarketPrice:function(){return g.apply(this,arguments)},getTradeVolume:function(){return k.apply(this,arguments)},getConfirmedTransactions:function(){return w.apply(this,arguments)}};function g(){return(g=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve(O.load("market_price")));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve(O.load("confirmed_transactions")));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y={getUser:function(){return N}},N={name:"Ochoa Hyde",coins:100,moves:[]};var C=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={user:null,rate:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=y.getUser()||{},e.next=3,A.getRate(t.coins);case 3:n=e.sent,this.setState({user:t,rate:n.data});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.user&&Object(h.jsxs)("section",{className:"home-page",children:[Object(h.jsxs)("h2",{children:["Hello ",this.state.user.name,"!"]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("img",{src:"data:image/png;base64,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"})," Coins: ",this.state.user.coins]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA1lSURBVHhe7VtpU1RXGs6HmfkyM/9gamrWPzHbH5ilaj5PTWaqpipVsRtNNGqSSSSjo1FZjQvQTd9eoBtowAUQlESNyCqNaxQQNUFxI9qyLxE58z5nac69fW9zW8BkqnyrnrI597zveZ+zvmfxtVfyStZOcnPjPyj0Gr/P9wa3FHiCgXyP0U6/bxV4jWSBx5jnoN9I4988Rjny5q8L/A660sz/lxxYd+BHROKfBd5gK/07Tf+yFwHX9RjNsAWb0vx3V/asN34tW3AyRSQnyEK5AdZaWs4ScR8bOlnGHnSUsqeJUjZ5uYQDv5E2dNLH8yBvcJvBdbXKmCTbvr05oV/K4r47UrQh+LN8r1FFWFCkq3YG2IV6H0ueL2EzV18MT86Xsr5aH7elKgNlUGVEi9eHfyqL//YEY5S66HvUMjNwjiqCtRz0s4fUmnaEVoL77aWs+WA5K15PPQOV7DGmCFu/tXmi8M3AL6glelWLN+4rZ193rz5xK0a7S1hDMfUIlMt7RLA3zxv5uXTr5UiBJ/RXavVxOFD+b4OPXTtnFcYvlLD+4z52yu9n9fnlzPgwwA5sMtj+jaI1D7xjMGNbgNXuKWf32spsbVhx40QZ87+X6g1jhTnGn6V7ayu0ZK1TY/1oYTkb67NvdUxuV4/5WO3eACvSJrPl0BENDs4NhEcmLvnY6XI/u3zEx6bIll0ZY30l3Afo8bnBE3pDurk2QuQ/4I4SofYKv61TIH6+2sdKtsjWIRTlhFhsd4S1VcXY9VM17F5fHRu/Uc8mb9Wz+buH2dhgPbt/oZbd7qxlzx58xtjT82zk4umUfinZwoRqVx5wLuxfWjFoXpDurq5QYPImCiikgi7U2TszeFzrloTIfyMscayKjQ8Josth4ZEgz5E8z66dbmWh7ZXclv/9wIxdmQpYLeAb8sJX6fbqCHWtv/Bu70B+4mIJO1FCXVE6EPpPhA2eqbEl6QQTeQmk4dtXXbXs6y/q2LORxnsz1ww20OzjZVr9SMRlT/AYz1dtTsBsTwb5hGfX7bFWV2wXs3LxhhDrrq9ic3fsSTohE3lrnmunTvCyKncYLNmbPv/AR3yn4Tq+4tVBrvMJGDxWFEgrDOs9VgF8L/8wwsex7rQbZEMemBzuZIFtUVEmlW0XcxwpEA1SuD6UKHuj7PuSTvZC5N9TBVlne9S+Il+5M8LGBtyNcyD2cQWfFBWxqj01rGpvzbLkFabvdrLKXUuVYO0J8FVbIl9sUhThLW1GaEwhftcLmLhUSvG9KCC6q4JN3XZPHuCOERQh9bcb8gDSUSbKhl7kowD3SfcRcQK+FeaEZl8obKatawwGEOHphoGWQ2LtRbfHEqY77QbQBRQh9beeJxN5lQdlB7aJVQI+Wf3EsMW3fE+wQtJyJ3xXR7M+4m5reNvfJGq2+K2g6zGPLq9IZkJ9UQW7eS7uijyAv0f729i+t0Jcf4CWYd3XR52ltHcg257gs6x2kdjSwmALbT50g1h61NjqPVptciYTFEFXoCHXfbTZFXn1LXG8mesGaD6YvLTkL9B8QPRWWhXKJL3Msmdz+Y9p4piCIw9oB6Yb66wUS0x4R4TNDZtJZoIipxMCdFLJ/jrWdfgIX0qR9+7FMzb5jrCF5DUTeeD5kx4W3l7F9bqi5jgFu0hwwXlC3qbIDyVNZyn0GP+AIezBdUMIcVV4O3Q2nnLcDaAD6E47tWhPg2jN2qK4JR+Rf/IFY3NzjE3cMNkCbp8XoXPpVuoFlr1D7L9iLshbF/y7pOkslPEEMvdZIr5LtClBemRH2OT4cgAB6AHKWSfywOSdDp73k7fDpnwLSUmeY5YqYSilw0Ghc2Sn6AXwVfe9Ly58p57dJGnaCwIftfRZT3LitKuDkb5G92NfEeOFE/A7E3kFlT8tH1p+jsiPU2VYdIDLrSe5Hnaguu9PiIsaBhkDo7x1oT/AAM7wdAM4s8OWFjPqi2xsFCE35PX8tvmsLa9h9n4XK6I5pIj8tAZuwQ/F8C30Bn8r6aYL1dAWZMKhpK58vVF0oeq9FSYCTrASsxKyy6MwdlO04v6NoYz5nFCTH+f6WK51DidLxQROK9w7km664NwemRI15jF0yi+WknNVVSYSdrBzGLpApjwA0jviYhzX5FdkTR5or23i+jhM0Tn0Vst5wBv0S7rpQrXTjkw3W821V5cnxv/A6cxbXDuHkSYLdswDoOU74zERuMCHjibbfMthqOMU14fPOgcVGlNU2Cbppgtl+AqZHlIEpSsbH4jxc/+ic+TnRB7foJsNYnuibPGJ2ZZbPLzSwm1gzOscwInb9xi3Jd10ofD3MTI9TSwpAji0RDqOsazEgRT5qbspRxR5gBecJaK7q9nMSGfKnhugTOwPoH+QfNY5YFWTtr+WdNOFamcemayBxL4NogKmv8xAfmJQBimDJvKALNjWYT3fzN1W3oWNj8RWN0bb5IXHPWl6dlC24CN04bPOASEy0mkIzEm66ZJtBZjIz06KCpidYM9GO015oAvYOZxmizB7v5v53he7vKunTpr07KDbSlUAbdZ0Dq4qIJshkHJ4akRGZ2YsJPtTeaAL2DlssqVhsP1TrlOdJ0JiJ1htrWwIuJwE0xzmPWCCE1+cGeM9QM8jC+a/3ZAH5h92c52DmyO23wGrLQBH7tBLmwQ73EyCyyyD/bQM2jmMNJBGBVjJA7xggtVhO1s6lJ7dN6stBdw7QAc3UDoHV8ugOgewBkIIKpDeXlOf0ZGF5HVbUtAFdEeXIw8oPVP6WMKRPHA2KgIpp0CIOPok3XShDJuRyRoKq1MghJm6M1ZHnEhBF1gunw41BPZvDC+lj11mi9OjbH7kmKlcHVW7xekT7iJ1Dq5CYTxlQSY8TtCV+WaIIjRsNGbvdXFn3JJHOmwCmfJZcaNd6MUoHuBp1PKLU4/EBPvkqqlshbHBOuGnzWYIl6+8AnKM30i66WLaDluOmnFzCwPYcmZDHt9VBbglj2UwkBvjOpdOnuBp3Ba1vBN5AFt16NTtNffgxz3iVIj2OhPL3hPQUtgCIzhE0I2oA5Hwjiib125+liMPQA+wy6dj7kEXb3lFvmJXNQ+EdFuOIJ/C28Nc7/IR8yTOr8yED42SprMUeEOvI3OmI7Eb8kjMDXlAFp4VQB6nQ67IE+AT9MreTT8Si8ojsfyc4N8kTWfBayxaK20PRbuioiZDH0XYNw8+dUUef+PWRxHLBEx4sT3VvNu7bnnC7HA99wk2nA5F0f1dHYpCsFTAGN7k6MZwLF7+vugFiaYWV+SteQBF2OlvwC15oOewWPrsjsWP7xdzF63/pZLe8lKwzv8rXCbgYmS0y9wLcDUNg8Vvhdij622ODjuRB6yErX9nQ34kQTP/BqEP33RfH5HvWBHABbfckp47odUgCqMNxeZeAPC3APQNkxW2rNmQBzAk9Bhf/zsb8oj7cT0HX+CT1c/U8xmPEZa03AsuFPlcQAYQRuqGMRRwP49v0Y9jbFq7HF2OfCZkQx5lqstR+GJ9MDHYIiM/b3Byd47vJ5JWdkLK78KIn8Y9HiTpBejX4xebxVG5Ij/cd4a1x5tc7+UBJ/IzwwhvY+x2h/kyBmWibLvrcQRuPloN8J2wWdLJXhA0UCXwt4BHqDvphQC4fGwL+heTF0LtijxC2ENbRcuManNEJmRq+ZHeWm7r0JZQ6lEVgDLbQn4+zk1+XSlhh2kjBB3q+j0reiABwTMTGgpjMOj0MgyYv0Uha7KLtcUbeeHVeTX8tkaRxIWniup0WMknGqr5yXAqjQIcFd9/Xhljc3dqJ2av+TrtfADORVTQYyTxxkHSWJngwZF6JGWNEHXM9husNRBn+94Om1p//Etx3VX6boWJfGx3jL8U0SugZKu4HH18rS6Vdi9RSzZDrGF/eHTqSskdu7KB1I6PvxkM/Em6vzqiP5PDkzQ7BzioC04NVLHno2dTRK98Ki47GkqWttNoeaQBegUc3S+Owi40LV3BzX5V0z9+sawXtm3LJCDchW9EfnHVn8kpUZMiegIeJ9o5omN+KMoW7p9gPceOc1LXP29NkQcxuwq43CKiRhoG38zeqOiY+aI0MX3l0KKdfQ6qFMwF0AF5+neTdHdtBM9RaU54jgLxGsvpqayOqatlbKSjkj0bbmDfDB8dmfuy5tbcnfpk5a7wYvTjyCJ+87Sb0e65gdCZm5/5+ievHJq2s6UDZacmPAxRb/Bf0s21FcwJeIeHgvFixBonvAxgnVevVWi2f5rnDf5RuvdyhK8O3mAfHADwIAnLop2zqwkseyrCk+R7XvpzeSXyIeVWPEWDM7jXw5sc7MDsnF8JYBMbGx7bg7j4bzmbV7zOr4YgbC7aEIoWekN8bsAkifMEzMx4nGBHyA2gCxuxndTVySa3TRsbIh964fB2LQVP0T7ZGIpQZfAbJlUZOI/DoSROmzFf4JzhKYWvOLgA8Btp+Ia1HBsbdYangBbHlvZb6+7ZCA5Vit4OvU7Do0l2VRMZt5C6jTjJcX2Y8V0TjFE8S6HJ6h0i48fFBBG7RcvWY6og/h8n8RtptLKcRR7CJujk5uZ+T5p5Ja/klbySNZLXXvsfDRo300XDz5cAAAAASUVORK5CYII="})," BTC: ",this.state.rate]})]})}}]),n}(a.Component);function T(e){var t=e.onFilter;return Object(h.jsx)("div",{className:"contact-filter",children:Object(h.jsx)("input",{type:"text",placeholder:"Search",onChange:function(e){return t({term:e.target.value})}})})}var F={getContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(t,n){var a=[].concat(S);e&&e.term&&(a=X(e.term)),t(L(a))}))},getContactById:function(e){return new Promise((function(t,n){var a=S.find((function(t){return t._id===e}));a?t(a):n("Contact id ".concat(e," not found!"))}))},removeContact:function(e){return new Promise((function(t,n){var a=S.findIndex((function(t){return t._id===e}));-1!==a&&S.splice(a,1),t(S)}))},saveContact:function(e){return console.log(e),e._id?B(e):P(e)},getEmptyContact:function(){return{name:"",email:"",phone:""}}},S=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312"},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258"},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082"},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678"},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663"},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851"},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166"},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295"},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550"},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181"},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376"},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557"},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629"},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529"},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291"},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812"}];function L(e){return e.sort((function(e,t){return e.name.toLocaleLowerCase()<t.name.toLocaleLowerCase()?-1:e.name.toLocaleLowerCase()>t.name.toLocaleLowerCase()?1:0}))}function B(e){return new Promise((function(t,n){var a=S.findIndex((function(t){return e._id===t._id}));-1!==a&&(S[a]=e),t(e)}))}function P(e){return new Promise((function(t,n){e._id=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}(),S.push(e),t(e)}))}function X(e){return e=e.toLocaleLowerCase(),S.filter((function(t){return t.name.toLocaleLowerCase().includes(e)||t.phone.toLocaleLowerCase().includes(e)||t.email.toLocaleLowerCase().includes(e)}))}var H=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contact:null},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(this.props),e.next=3,F.getContactById(this.props.match.params.id);case 3:t=e.sent,this.setState({contact:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.contact;return e?Object(h.jsxs)("section",{className:"contact-details",children:[Object(h.jsx)(s.b,{to:"/contact",children:Object(h.jsx)("button",{className:"btn-back",children:"Back"})}),Object(h.jsx)(s.b,{to:"/contact/edit/".concat(e._id),children:Object(h.jsx)("button",{className:"btn-edit",children:"Edit"})}),Object(h.jsxs)("div",{className:"contact-info",children:[Object(h.jsx)("img",{className:"contact-img",src:"https://robohash.org/".concat(e.name,"?set=set5")}),Object(h.jsxs)("p",{children:["Name: ",e.name]}),Object(h.jsxs)("p",{children:["Phone: ",e.phone]}),Object(h.jsxs)("p",{children:["Email: ",e.email]})]})]}):Object(h.jsx)("div",{children:"No Contact."})}}]),n}(a.Component);function R(e){var t=e.contact;return Object(h.jsxs)("div",{className:"contact-preview",children:[Object(h.jsx)("img",{className:"contact-img",src:"https://robohash.org/".concat(t.name,"?set=set5")}),Object(h.jsx)("span",{children:t.name})]})}function q(e){var t=e.contacts;return Object(h.jsx)("div",{children:t&&t.map((function(e){return Object(h.jsx)(s.b,{to:"/contact/".concat(e._id),children:Object(h.jsx)(R,{contact:e})},e._id)}))})}var z=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:null},e.onFilter=function(){var t=Object(f.a)(j.a.mark((function t(n){var a,c,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new RegExp(n.term|/()/,"i"),t.next=3,F.getContacts();case 3:c=t.sent,r=c.filter((function(e){return a.test(e.name)||e.phone.includes(n.term)})),e.setState({contacts:r});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.getContacts();case 2:t=e.sent,this.setState({contacts:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(h.jsxs)("section",{className:"contact-app",children:[Object(h.jsx)(T,{onFilter:this.onFilter}),Object(h.jsx)(s.b,{to:"/contact/edit",children:Object(h.jsx)("button",{className:"add-contact",children:"+"})}),Object(h.jsx)(q,{contacts:this.state.contacts})]})}}]),n}(a.Component),V=n(20);function J(e){return Object(h.jsxs)("div",{className:"chart",children:[Object(h.jsxs)("h3",{children:[" ",e.title," "]}),Object(h.jsx)(V.Sparklines,{data:e.data,width:300,height:50,margin:5,children:Object(h.jsx)(V.SparklinesLine,{style:{stroke:e.color,fill:"black"}})}),Object(h.jsxs)("p",{children:[" ",e.subtitle," "]})]})}var E=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={transaction:null,marketPrice:null},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.getConfirmedTransactions();case 2:return t={name:(t=e.sent).name,desc:t.description,values:t.values.map((function(e){return e.y}))},e.next=6,A.getMarketPrice();case 6:n={name:(n=e.sent).name,desc:n.description,values:n.values.map((function(e){return e.y}))},this.setState({transaction:t,marketPrice:n});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.transaction,n=e.marketPrice;return Object(h.jsxs)("div",{children:[t&&Object(h.jsx)(J,{data:t.values,title:t.name,subtitle:t.desc,color:"green"}),n&&Object(h.jsx)(J,{data:n.values,title:n.name,subtitle:n.desc,color:"blue"})]})}}]),n}(a.Component),I=n(21),Q=n(27),W=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contact:null},e.onSubmit=function(){var t=Object(f.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,F.saveContact(e.state.contact);case 3:e.props.history.push("/contact");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onRemoveContact=Object(f.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("remove me"),t.next=3,F.removeContact(e.state.contact._id);case 3:t.sent;case 4:case"end":return t.stop()}}),t)}))),e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState((function(e){var t=e.contact;return{contact:Object(Q.a)(Object(Q.a)({},t),{},Object(I.a)({},a,c))}}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.props.match.params.id)){e.next=7;break}return e.next=4,F.getContactById(t);case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0=F.getEmptyContact();case 8:n=e.t0,this.setState({contact:n});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!this.state.contact)return Object(h.jsx)("div",{children:"No Contact"});var e=this.state.contact,t=e._id,n=e.name,a=e.phone,c=e.email;return Object(h.jsxs)("section",{className:"contact-edit",children:[Object(h.jsx)(s.b,{to:t?"/contact/".concat(t):"/contact",children:"Back"}),t&&Object(h.jsx)(s.b,{to:"/contact",onClick:this.onRemoveContact,children:"Remove"}),n&&Object(h.jsx)("img",{className:"contact-img",src:"https://robohash.org/".concat(n,"?set=set5")}),Object(h.jsxs)("form",{children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name"}),Object(h.jsx)("input",{id:"name",name:"name",value:n,onChange:this.handleChange,type:"text",placeholder:"Name"}),Object(h.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(h.jsx)("input",{id:"phone",name:"phone",value:a,onChange:this.handleChange,type:"text",placeholder:"Phone"}),Object(h.jsx)("label",{htmlFor:"email",children:"Email"}),Object(h.jsx)("input",{id:"email",name:"email",value:c,onChange:this.handleChange,type:"text",placeholder:"Email"}),Object(h.jsx)("button",{onClick:this.onSubmit,children:"Save"})]})]})}}]),n}(a.Component);function Z(){return Object(h.jsx)(s.a,{children:Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(b,{}),Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{path:"/contact/edit/:id?",component:W}),Object(h.jsx)(i.a,{path:"/contact/:id",component:H}),Object(h.jsx)(i.a,{path:"/contact",component:z}),Object(h.jsx)(i.a,{path:"/statistic",component:E}),Object(h.jsx)(i.a,{path:"/",component:C})]})]})})}n(70);var D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(Z,{})}),document.getElementById("root")),D()}},[[71,1,2]]]);
//# sourceMappingURL=main.3222dcdd.chunk.js.map