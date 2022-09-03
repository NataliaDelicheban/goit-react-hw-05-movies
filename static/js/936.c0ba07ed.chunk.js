"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{9155:function(A,e,r){r.d(e,{Z:function(){return l}});var t=r(501),n=r(6871),a=r(4757),u="MoviesList_list__0Owr9",i="MoviesList_item__eePYv",c="MoviesList_movie__gS8QL",s=r(184),o=function(A){var e=A.items,r=(0,n.TH)(),o=e.map((function(A){var e=A.id,n=A.title,u=A.poster_path;return(0,s.jsx)("li",{className:i,children:(0,s.jsxs)(t.rU,{className:c,state:{from:r},to:"/movies/".concat(e),children:[(0,s.jsx)("img",{width:"200px",src:u?"https://image.tmdb.org/t/p/w500".concat(u):a,alt:n}),(0,s.jsx)("p",{children:n})]})},e)}));return(0,s.jsx)("ul",{className:u,children:o})},l=o;o.defaultProps={items:[]}},4936:function(A,e,r){r.r(e),r.d(e,{default:function(){return x}});var t=r(2982),n=r(1413),a=r(5861),u=r(885),i=r(7757),c=r.n(i),s=r(2791),o=r(385),l=r(9155),p=r(6673),f=r(8174),h=(r(5462),"Home_title__L087v"),d=r(184),x=function(){var A=(0,s.useState)({items:[],loading:!1,error:null}),e=(0,u.Z)(A,2),r=e[0],i=e[1];(0,s.useEffect)((function(){var A=function(){var A=(0,a.Z)(c().mark((function A(){var e;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,i((function(A){return(0,n.Z)((0,n.Z)({},A),{},{loading:!0,error:null})})),A.next=4,(0,o.Tg)();case 4:e=A.sent,i((function(A){return(0,n.Z)((0,n.Z)({},A),{},{items:[].concat((0,t.Z)(A.items),(0,t.Z)(e.results))})})),A.next=11;break;case 8:A.prev=8,A.t0=A.catch(0),i(f.Am.error("Something went wrong..."));case 11:return A.prev=11,i((function(A){return(0,n.Z)((0,n.Z)({},A),{},{loading:!1})})),A.finish(11);case 14:case"end":return A.stop()}}),A,null,[[0,8,11,14]])})));return function(){return A.apply(this,arguments)}}();A()}),[]);var x=r.items,m=r.loading;return(0,d.jsxs)("div",{children:[(0,d.jsx)(f.Ix,{autoClose:1500,position:"top-center",closeOnClick:!0}),(0,d.jsx)("h2",{className:h,children:"The most popular movies for today"}),x.length>0&&(0,d.jsx)(l.Z,{items:x}),m&&(0,d.jsx)(p.Z,{})]})}},385:function(A,e,r){r.d(e,{Ai:function(){return h},Hx:function(){return v},Tg:function(){return o},Y5:function(){return p},uV:function(){return x}});var t=r(5861),n=r(7757),a=r.n(n),u=r(4569),i=r.n(u),c="979be2e8af6c311d4581ad02e7161f2f",s="https://api.themoviedb.org/3";function o(){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(a().mark((function A(){var e,r,t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e="".concat(s,"/trending/movie/day?api_key=").concat(c,"&language=en-US&include_adult=false"),A.next=3,i().get(e);case 3:return r=A.sent,t=r.data,A.abrupt("return",t);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function p(A){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(a().mark((function A(e){var r,t,n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return r="".concat(s,"/movie/").concat(e,"?api_key=").concat(c,"&language=en-US&include_adult=false"),A.next=3,i().get(r);case 3:return t=A.sent,n=t.data,A.abrupt("return",n);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function h(A){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(a().mark((function A(e){var r,t,n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return r="".concat(s,"/search/movie?api_key=").concat(c,"&query=").concat(e,"&language=en-US&include_adult=false"),A.next=3,i().get(r);case 3:return t=A.sent,n=t.data,A.abrupt("return",n);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function x(A){return m.apply(this,arguments)}function m(){return(m=(0,t.Z)(a().mark((function A(e){var r,t,n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return r="".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(c,"&language=en-US&include_adult=false"),A.next=3,i().get(r);case 3:return t=A.sent,n=t.data,A.abrupt("return",n);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function v(A){return E.apply(this,arguments)}function E(){return(E=(0,t.Z)(a().mark((function A(e){var r,t,n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return r="".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(c,"&language=en-US&include_adult=false"),A.next=3,i().get(r);case 3:return t=A.sent,n=t.data,A.abrupt("return",n);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}},4757:function(A){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIAu4B9AMBIgACEQEDEQH/xAAsAAEBAQEBAQEAAAAAAAAAAAAABQQDAgEHAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAD9iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4/ZJS0xbQBx8Zc5STRSTRSTRSTRSTRSTRSTRSTRa++fQ5dZ5o7xdhvAAAAAAAAAAAAAAAABwl1JZ9rxxYRx34AAAAAAAABW9RxYw5Q1ZdRRAAAAAAAAAAAAAAAABwl1JYAAAAAAAAAAAAA1ZdRRAAAAAAAAAAAAAAAABwl1JZ9qS7RxdhK46M4AAAAAAABU+9PRxx0p5k1ZdRRAAAAAAAAAAAAAAAABwl1JZ9tRN5sYxwz9eQAAAAAAABZ9Yvpsn9Mxx1ZdRRAAAAAAAAAAAAAAAABwl1JYAAAAAAAAAAAAA1ZdRRAAAAAAAAAAAAAAAABwl1JY9+bRHWBF+aM4AAAAAAAB7VvRH82p5k1ZdRRAAAAAAAAAAAAAAAABwl1JZ9tRbQBMz6M4AAAAAAABZ9efQn0J5k1ZdRRAAAAAAAAAAAAAAAABwl1JY7cR2cR68gAAAAAAAB2cR25+Q1ZdRRAAAAAAAAAAAAAAAABwl1JYNhjbBjdOYAAAAAAAAa/pjbOBy1ZdRRAAAAAAAAAAAAAAAABwl1JZ9tRbQBMz6M4AAAAAAABZ9efQn0J5k1ZdRRAAAAAAAAAAAAAAAABwl1JZ9rxxYRx34AAAAAAAABW9RxYw5Q1ZdRRAAAAAAAAAAAAAAAABwl1JYAAAAAAAAAAAAA1ZdRRAAAAAAAAAAAAAAAAByk2+JLqeNJxdhK41fBNUhNUhNUhNUhNUhNUhNUhNUh6+9fpxx0uRJ2d+59AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABx588RbyfZxW64uZ354vpU7RKZo59Mp8+zvRW9xqR7zYhv1RexUyfMJu94uhoT/AEUufPGUOk/Se0/0U+0SmaAAAAAAAAAAAAAAAYcW3EffnrybcW3GbNs/aTfXjoU8urKTtuIOzsZa8eoeJu7CbMdTicqMWiTtuLad5dSWdtPLuTt2EfdeOsdQAAAAAAAAAAAAAAYcdfmfJlvicGr2RFbmTqnv2MurwR6vzsffHsR/FrOTdOvuYcVfiTqfrsRNvf2eJdnkTNOr2SO+3oR6Pv0dQAAAAAAAAAAAAAAAGXCWHCaWWX6aUfeaUfcaiUVU7mVU6iDgd0aqdHiSWUbqVGecWXDoe0YWWDeAAAAAAAAAAAAAAADmTuL2bcfrSZvvAe9vjgce3jwW49OYduPbidqU2kJtCOfNmYVY9eQaM/rybsO7CU+vLqR9OYU9E+gAAAAAAAAAAAAAAAMG+aZumjsTamPST/m3yaJlHMc+dLiM3YOOrmc9WcaZ+z4cOdLMd5+zkdMnf2ec9TEe+2bqY9PkbNGLaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/EADYQAAECAwUFCAICAgIDAAAAAAECAwAEERASFDNSITFhcoETMkBBUFFxkSKhILEjQ0KgYIDw/9oACAEBAAE/AP8Aq9rfaQaE7YxTXH+C30IVdNaximuMYprjGKa4ximuMYprjGKa4ximuMYprjGKa4ximuMYprjGKa4ximuMYprjGKa4ximuMYprjANQDa48hsgKrAmmuMAgioNR6E8opaURYN4/hNZp+B4JHdT8C2c76eWyTUaqT5Ur6FMZK+lg3iO0b1p+47RvWn7jtG9afuJkgukggig8Elxu6n807veO0b1p+47RvWn7iaUlS00IOyyUzFcvoUxkr6eNlMxXL6FMZK+njZTMVy+hTGSvp42UzFcvoUxkr6WDeIw7OiMOzojDs6ImEpS4QkUFPBJYaKQbnlGHZ0Rh2dETKEoWkJFNlkpmK5fQpjJX0sG8fwms0/A8Ejup+BbOd9PLZKZiuX0KYyV9LBvH8JrNPwPBI7qfgWznfTy2SmYrl9CmMlfSwRjE6DGMToMYxOgw64HF3gKeCE2kAC4YxidBjGJ0GHnQ4oEClBZKZiuX0KYyV9PGymYrl9CmMlfTxspmK5fQpjJX0t7NzQr6js3NCvqOzc0K+oIINCKeC7NzQr6js3NCvqOzc0K+oKVJ3giyUzFcvoUxkr6WDeP4TWafgeCR3U/AtnO+nlslMxXL6FMZK+lg3j+E1mn4Hgkd1PwLZzvp5bJTMVy+hTGSvpYN4/hNZp+B4JHdT8C2c76eWyUzFcvoUxkr6W4h7XGIe1xiHtcKUpRqo1Pgg+7rjEPa4xD2uFrUs1Ua2SmYrl9CmMlfTxspmK5fQpjJX08bKZiuX0KYyV9LcGrWIwatYjBq1iHGy2q6TXwQlFEA3xGDVrEYNWsQ60WyATWoslMxXL6FMZK+lg3j+E1mn4Hgkd1PwLZzvp5bJTMVy+hTGSvpYN4/hNZp+B4JHdT8C2c76eWyUzFcvoUxkr6WDeI7RvWn7jtG9afuO0b1p+4mSC6SDXYPBJcRdT+Y3e8do3rT9x2jetP3E0oFaaEHZZKZiuX0KYyV9PGymYrl9CmMlfTxspmK5fQpjJX08bKZiuX0J5JU0oCwbxGHZ0Rh2dEYdnREwlKHCEigp4JLDRSDc8ow7OiMOzoiZQlC0hIpssk0mqleVKehrYaWakbYwrXH+C2ELVeNaxhWuMYVrjGFa4xhWuMYVrjGFa4xhWuMYVrjGFa4xhWuMYVrjGFa4xhWuMYVrjGFa4xhWuMYVrjAFABa4yhwgqrAlWuMAACgFB/7NOvJapUE1hM02SBQizGI0mGnQ7WgIpYuaQncCqBOe6P3Db7bmwGh9ja64G0gkHfSMYjSYE237KhDiF901scdQ33jBnPZEJm0nvJIgKChUGogkAEk0EKm0juprAnPdH7hU0hKiLp2GkYxGkxjEaTAfSW1OUNAaRjEaTGMRpMIfStKyAfxFYxiNJjGI0qhD7a9gO32Pj5z/X1slnbwuHeLJPcvpEy8VKKAdgsII3iyXdvpoe8LJvLHNYUqABIIBhKikgg7RCngGgv3GyFKKiSTUwATuFjLpbVwO8RNq/FAG47bEtuGhCDSHGXS4shBoVGxKFrrdFYuKRKuBQob1iWnFAEJJENIWht+8KVTYEqIqEmlks4Vood48dOf6+tiVFJBG8WSpoh02SjaSCsjzoIIBFCIeQEOEDdEsaPJ42TeWOax1xGHQmoJoLHCezaHAn7MJF5SR7mkJQlAokRMthSCrzFhQXZdBG9NjL5b/E7U/wBQCCARZJ719ImclfT+7ETDiEhIpQQh1TjT17yTZLOIQ0q8oD8oO0mJPevx05/r6wIWgoUUmyVFUOCCCCQYlngiqVbjBeaArfEOr7RZVEsmroPtZN5Y5rWmFuEbKJ94m0UuEbqUgEggjyMIfbWO8AfYxMPpKShJrXebGiltpAUQCfeJhtspKwQD/dkoolsj2NknvX0iZyV9P7sblr6Aq/SvCAz2TTv5Vqk/wZbDaAPHTn+vrA3iJhq+mo7wsk9y+kTLBJK0j5FqUlRAAqYZa7NPE77JvLHNY0hFxBuit0eVjiAtJSYW2ptVFC1hgrIUofj/AHE5/r62yyChvbvJrZJ719ImclfT+7KmGCbj/JYG7zJWN4UfqyVcvJuHePHLbQul4VpGHZ0fs2FhokkohDaEVuilbFsNr2lO33ECUa91QhtCO6mlq0JWKKFRGGZ0fswAAABuFqkpUKEAiDKtH3EJlmk+VfmxbaHKXhBlGvdUIl2kGoFTxswzOj9mENIRW6KVhSUqSUqFRGGZ0fsxhmdH7MJZbSFAJ3ihjDM6P2YQhCAQkUEYZnR+zCWWkGqU0Pyf/H5pwpSEg0JgOLB7x+4cq4zVJINKxfXrP3Eq4VJKSakRMuFKKA7TF9es/cM1QzfUT7wXFkk3j9xKuFSSkmpFji1hxf5HvGJZSi7QqJ2Q4tYcX+R7xiWUou0Kidlswu42abzsi+vWfuGV320mHMtfKYvr1n7i+vWfuETDiDvqPYw8urBUk+0X16z9xLEloEmu0w5lr5TF9es/cX16z9xKqUXDVRP4+gvrvuq9hsFkouqSn2h5FxxQhhdxxJ8txiZXedPsNkNovrSn3MTSqICB52MLuOpPkdhsdzHOYxK5vQw7mOcxiVzehtml3nKabJRe1SOoh3Lc5TYOx7A1pfsIIk9v/wBtslcofJh3Lc5TYylgpPaGhrDKWAols1NPQHl3G1GxSCkJJ/5CsMLuOpPQxNoqEr9thtlEd5fQQ+u+6o+Q2CEoKgoj/iK2MrvtpP3DuY5zGJXN6GHcxzmMSub0NilBKSo+QgkkkmCghAX5E0hCri0q9jDhq0vlNgQsi8EmlinO0llHzFAbJXKHyYdy3OU2yffVy+gTa9qUdTYt1SwAaUFiCHmdvmKGCCCQbD/hY40/ZsQ6pAIFNtkouhUj32iHcxzmMSub0MO5jnMYac7Nd6lYE4NH7ibXRIT72F1RQEbKWNrvSyx5hJFjUwhtq6QSbEA4d08RY1MBtF27WA+HUOi7SiDYy+G0lN2u2sNTAcVdu02egLZfWtSrm8+4hqVJr2gIjCNcYVLO1NE1HyIlkOIvBSaCH2FqcKkJqDDUu4HElaaARMocXdCU1ECWdqKpoPkRhGuMOypFOzBPvCGX0LSq5uPuIWw6VrITsJPmIl2XEOVUmgpC5d0rWQnYSfMRhntH7ECXeqPw/Yh5p5bhITs3DaIblVFX5igjCNcYXLOBRuJqmGmnk3wU7FJI3iMM9o/YjDPaP2IRKLJ/IgCHG/8ACUIEYZ7R+xGGe0fsQ0y4kOVTvQQIwz2j9iMM9o/YiXZcQ5VSaCn/AGd//8QAFBEBAAAAAAAAAAAAAAAAAAAAoP/aAAgBAgEBPwA8H//EABQRAQAAAAAAAAAAAAAAAAAAAKD/2gAIAQMBAT8APB//2Q=="}}]);
//# sourceMappingURL=936.c0ba07ed.chunk.js.map