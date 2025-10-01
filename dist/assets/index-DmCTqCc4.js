(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();const Y="modulepreload",Z=function(d,t){return new URL(d,t).href},R={},G=function(t,e,r){let o=Promise.resolve();if(e&&e.length>0){let c=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const s=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");o=c(e.map(l=>{if(l=Z(l,r),l in R)return;R[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(r)for(let g=s.length-1;g>=0;g--){const C=s[g];if(C.href===l&&(!u||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Y,u||(f.as="script"),f.crossOrigin="",f.href=l,i&&f.setAttribute("nonce",i),document.head.appendChild(f),u)return new Promise((g,C)=>{f.addEventListener("load",g),f.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${l}`)))})}))}function n(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&n(a.reason);return t().catch(n)})},W={views:{main:{hash:"#main",file:"/interfaces/main/main.html",title:"Inicio"},login:{hash:"#login",file:"/interfaces/login/login.html",title:"Inicio de sesión",hideNavbar:!0},testing:{hash:"#testing",file:"/interfaces/testing/testing.html",title:"Zona de pruebas"},news:{hash:"#news",file:"/interfaces/news/news.html",title:"Noticias"},notFound:{hash:"#not-found",file:"/interfaces/not-found/not-found.html",title:"Página no encontrada",hideNavbar:!0},profile:{hash:"#profile",file:"/interfaces/profile/profile.html",title:"Perfil"},academicCalendar:{hash:"#academic-calendar",file:"/interfaces/academic/academic-calendar/academic-calendar.html",title:"Calendario Académico"},system:{users:{hash:"#system-users",file:"/interfaces/system/users/users.html",title:"Usuarios"},roles:{hash:"#system-roles",file:"/interfaces/system/roles/roles.html",title:"Roles"},codes:{hash:"#system-codes",file:"/interfaces/system/codes/codes.html",title:"Códigos"},audit:{hash:"#system-audit",file:"/interfaces/system/audit/audit.html",title:"Auditoría"}},planification:{university:{hash:"#planification-university",file:"/interfaces/planification/university/university.html",title:"Universidad"},localities:{hash:"#planification-localities",file:"/interfaces/planification/localities/localities.html",title:"Localidades"},faculties:{hash:"#planification-faculties",file:"/interfaces/planification/faculties/faculties.html",title:"Facultades"},departments:{hash:"#planification-departments",file:"/interfaces/planification/departments/departments.html",title:"Departamentos"},careers:{hash:"#planification-careers",file:"/interfaces/planification/careers/careers.html",title:"Carreras"},pensums:{hash:"#planification-pensums",file:"/interfaces/planification/pensums/pensums.html",title:"Pensums"},subjects:{hash:"#planification-subjects",file:"/interfaces/planification/subjects/subjects.html",title:"Materias"},cycles:{hash:"#planification-cycles",file:"/interfaces/planification/cycles/cycles.html",title:"Ciclos Académicos"},dates:{hash:"#planification-dates",file:"/interfaces/planification/academic-dates/academic-dates.html",title:"Fechas Académicas"},modalities:{hash:"#planification-modalities",file:"/interfaces/planification/modalities/modalities.html",title:"Modalidades"},degrees:{hash:"#planification-degrees",file:"/interfaces/planification/degrees/degrees.html",title:"Grados Académicos"},titles:{hash:"#planification-titles",file:"/interfaces/planification/titles/titles.html",title:"Títulos Académicos"},service:{hash:"#planification-service",file:"/interfaces/planification/social-service/social-service.html",title:"Servicio Social"},documents:{hash:"#planification-documents",file:"/interfaces/planification/documents/documents.html",title:"Documentos"},evaluationInstruments:{hash:"#planification-evaluation-instruments",file:"/interfaces/planification/evaluation-instruments/evaluation-instruments.html",title:"Instrumentos de Evaluación"}},humanResources:{employees:{hash:"#hr-employees",file:"/interfaces/human-resources/employees/employees.html",title:"Gestión de empleados"}},academicRecords:{students:{hash:"#ar-students",file:"/interfaces/academic-records/students/students.html",title:"Gestión de estudiantes"},careerEnrollments:{hash:"#ar-career-enrollments",file:"/interfaces/academic-records/career-enrollments/career-enrollments.html",title:"Inscripción a carreras"},cycleEnrollments:{hash:"#ar-cycle-enrollments",file:"/interfaces/academic-records/cycle-enrollments/cycle-enrollments.html",title:"Inscripción a ciclos"},courseEnrollments:{hash:"#ar-course-enrollments",file:"/interfaces/academic-records/course-enrollments/course-enrollments.html",title:"Inscripción a clases"},studentPerformance:{hash:"#ar-student-performance",file:"/interfaces/academic-records/student-performance/student-performance.html",title:"Desempeño de estudiantes"}},studentPortal:{enrollmentsCourses:{hash:"#sp-enrollments-courses",file:"/interfaces/student-portal/enrollments/courses/courses.html",title:"Inscripción de materias"},enrollmentsCycles:{hash:"#sp-enrollments-cycles",file:"/interfaces/student-portal/enrollments/cycles/cycles.html",title:"Inscripción a ciclos"},grades:{hash:"#sp-grades",file:"/interfaces/student-portal/grades/grades.html",title:"Notas parciales"},pensum:{hash:"#sp-pensum",file:"/interfaces/student-portal/pensum/pensum.html",title:"Pensum"},evaluations:{hash:"#sp-evaluations",file:"/interfaces/student-portal/evaluations/evaluations.html",title:"Evaluaciones"}},teacherPortal:{courses:{hash:"#tp-courses",file:"/interfaces/teacher-portal/courses/courses.html",title:"Materias"},evaluationPlans:{hash:"#tp-evaluation-plans",file:"/interfaces/teacher-portal/evaluation-plans/evaluation-plans.html",title:"Planes de evaluación"},evaluations:{hash:"#tp-evaluations",file:"/interfaces/teacher-portal/evaluations/evaluations.html",title:"Ingreso de notas"},schedules:{hash:"#tp-schedules",file:"/interfaces/teacher-portal/schedules/schedules.html",title:"Horarios"}}}},B=(()=>{const d=l=>l.replace(/([A-Z])/g,"-$1").toLowerCase(),t=[{name:"indigo-blue",light:{bodyFrom:"224, 231, 255",bodyTo:"219, 234, 254",cardFrom:"238, 242, 255",cardTo:"239, 246, 255",textFrom:"129, 140, 248",textTo:"96, 165, 250",buttonFrom:"129, 140, 248",buttonTo:"96, 165, 250",buttonText:"255, 255, 255",placeholderFrom:"165, 180, 252",placeholderTo:"147, 197, 253",offFrom:"199, 210, 254",offTo:"191, 219, 254"},dark:{bodyFrom:"38, 38, 38",bodyTo:"64, 64, 64",cardFrom:"31, 31, 31",cardTo:"38, 38, 38",textFrom:"229, 231, 235",textTo:"209, 213, 219",buttonFrom:"129, 140, 248",buttonTo:"96, 165, 250",buttonText:"255, 255, 255",placeholderFrom:"165, 180, 252",placeholderTo:"147, 197, 253",offFrom:"129, 140, 248",offTo:"96, 165, 250"}},{name:"green-lime",light:{bodyFrom:"240, 253, 244",bodyTo:"247, 254, 231",cardFrom:"245, 252, 245",cardTo:"252, 255, 231",textFrom:"34, 197, 94",textTo:"132, 204, 22",buttonFrom:"34, 197, 94",buttonTo:"132, 204, 22",buttonText:"255, 255, 255",placeholderFrom:"134, 239, 172",placeholderTo:"190, 242, 112",offFrom:"167, 243, 152",offTo:"217, 249, 157"},dark:{bodyFrom:"30, 30, 30",bodyTo:"50, 50, 50",cardFrom:"22, 22, 22",cardTo:"30, 30, 30",textFrom:"229, 231, 235",textTo:"209, 213, 219",buttonFrom:"34, 197, 94",buttonTo:"132, 204, 22",buttonText:"255, 255, 255",placeholderFrom:"134, 239, 172",placeholderTo:"190, 242, 112",offFrom:"34, 197, 94",offTo:"132, 204, 22"}},{name:"red-orange",light:{bodyFrom:"255, 241, 241",bodyTo:"255, 247, 237",cardFrom:"255, 245, 245",cardTo:"255, 249, 240",textFrom:"248, 113, 113",textTo:"249, 115, 22",buttonFrom:"248, 113, 113",buttonTo:"249, 115, 22",buttonText:"255, 255, 255",placeholderFrom:"252, 165, 165",placeholderTo:"253, 186, 116",offFrom:"254, 202, 202",offTo:"254, 215, 170"},dark:{bodyFrom:"32, 32, 32",bodyTo:"54, 54, 54",cardFrom:"20, 20, 20",cardTo:"30, 30, 30",textFrom:"229, 231, 235",textTo:"209, 213, 219",buttonFrom:"248, 113, 113",buttonTo:"249, 115, 22",buttonText:"255, 255, 255",placeholderFrom:"252, 165, 165",placeholderTo:"253, 186, 116",offFrom:"248, 113, 113",offTo:"249, 115, 22"}},{name:"teal-yellow",light:{bodyFrom:"236, 254, 250",bodyTo:"255, 251, 235",cardFrom:"245, 254, 251",cardTo:"255, 253, 236",textFrom:"20, 184, 166",textTo:"234, 179, 8",buttonFrom:"20, 184, 166",buttonTo:"234, 179, 8",buttonText:"255, 255, 255",placeholderFrom:"99, 211, 199",placeholderTo:"253, 224, 71",offFrom:"153, 230, 217",offTo:"253, 230, 138"},dark:{bodyFrom:"34, 34, 34",bodyTo:"60, 60, 60",cardFrom:"28, 28, 28",cardTo:"34, 34, 34",textFrom:"229, 231, 235",textTo:"209, 213, 219",buttonFrom:"20, 184, 166",buttonTo:"234, 179, 8",buttonText:"255, 255, 255",placeholderFrom:"99, 211, 199",placeholderTo:"253, 224, 71",offFrom:"20, 184, 166",offTo:"234, 179, 8"}},{name:"blue-cyan",light:{bodyFrom:"239, 246, 255",bodyTo:"236, 254, 255",cardFrom:"243, 248, 255",cardTo:"240, 254, 255",textFrom:"96, 165, 250",textTo:"34, 211, 238",buttonFrom:"96, 165, 250",buttonTo:"34, 211, 238",buttonText:"255, 255, 255",placeholderFrom:"147, 197, 253",placeholderTo:"125, 211, 252",offFrom:"191, 219, 254",offTo:"165, 243, 252"},dark:{bodyFrom:"30, 30, 30",bodyTo:"58, 58, 58",cardFrom:"20, 20, 20",cardTo:"30, 30, 30",textFrom:"229, 231, 235",textTo:"209, 213, 219",buttonFrom:"96, 165, 250",buttonTo:"34, 211, 238",buttonText:"255, 255, 255",placeholderFrom:"147, 197, 253",placeholderTo:"125, 211, 252",offFrom:"96, 165, 250",offTo:"34, 211, 238"}},{name:"fuchsia-pink",light:{bodyFrom:"245, 230, 240",bodyTo:"245, 230, 240",cardFrom:"248, 238, 243",cardTo:"248, 238, 243",textFrom:"192, 61, 209",textTo:"219, 39, 119",buttonFrom:"192, 61, 209",buttonTo:"219, 39, 119",buttonText:"255, 255, 255",placeholderFrom:"207, 120, 224",placeholderTo:"229, 107, 166",offFrom:"228, 140, 245",offTo:"238, 165, 200"},dark:{bodyFrom:"38, 38, 38",bodyTo:"64, 64, 64",cardFrom:"31, 31, 31",cardTo:"38, 38, 38",textFrom:"255, 255, 255",textTo:"243, 244, 246",buttonFrom:"232, 121, 249",buttonTo:"244, 114, 182",buttonText:"255, 255, 255",placeholderFrom:"240, 171, 252",placeholderTo:"249, 168, 212",offFrom:"244, 185, 255",offTo:"251, 207, 232"}}],e="app_theme_v1";let r={palette:t[0].name,mode:"light"};function o(l,u="light"){const h=t.find(g=>g.name===l);if(!h)return console.error("[THEME] palette not found:",l),!1;const f=h[u]??h.light;return Object.entries(f).forEach(([g,C])=>{const V=`--${d(g)}`;document.documentElement.style.setProperty(V,C)}),u==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),r={palette:l,mode:u},!0}function n(l=r.palette,u=r.mode){const h={palette:l,mode:u};localStorage.setItem(e,JSON.stringify(h))}function s(){const l=localStorage.getItem(e);if(!l)return o(r.palette,r.mode),r;try{const u=JSON.parse(l);return o(u.palette,u.mode)&&(r={palette:u.palette,mode:u.mode}),r}catch{return console.warn("[THEME] invalid stored theme, resetting to default"),o(r.palette,r.mode),r}}function a(l,u="light",h=!0){return o(l,u)?(h&&n(l,u),!0):!1}function i(){return t.map(l=>({name:l.name}))}function c(){return Object.assign({},r)}return{palettes:t,applyPalette:o,setTheme:a,loadTheme:s,saveTheme:n,getPalettes:i,getCurrent:c}})(),J="https://sapientiae-api-bd9a54b3d7a1.herokuapp.com/api",D={request:[],response:[],error:[]};class w{static get(t){return this._request({method:"GET",...t})}static post(t){return this._request({method:"POST",...t})}static put(t){return this._request({method:"PUT",...t})}static patch(t){return this._request({method:"PATCH",...t})}static delete(t){return this._request({method:"DELETE",...t})}static async _request(t){console.info("[Network] Network request:",{path:t.path,method:t.method||"GET",includeCredentials:t.includeCredentials,credentials:t.includeCredentials?"include":"omit",hasBody:!!t.body});const{path:e,method:r="GET",body:o=null,includeCredentials:n=!0,headers:s={}}=t;let a=`${J}${e}`;console.info(`[Network] Full URL: ${a}`);let i={method:r,headers:{"Content-Type":"application/json",...s},credentials:n?"include":"omit"};console.info("[Network] Request options:",{method:i.method,credentials:i.credentials,headers:i.headers}),o&&(i.body=JSON.stringify(o));for(const u of D.request){const h=await u({url:a,options:i});h&&({url:a,options:i}=h)}console.info("[Network] Making fetch request... 🤔");const c=await fetch(a,i);if(console.info("[Network] Response status:",c.status,c.statusText),console.info("[Network] Response headers:"),c.headers.forEach((u,h)=>{console.info(`[Network] ${h}: ${u}`)}),console.info("[Network] Set-Cookie header:",c.headers.get("Set-Cookie")),!c.ok){let u=await this._buildError(c);for(const h of D.error)u=await h(u)||u;throw u}let l=await c.json();for(const u of D.response)l=await u(l)||l;return console.info("[Network] Request successful"),l}static async _buildError(t){const e=await t.json().catch(()=>({}));return{status:t.status,message:e.message||t.statusText,details:Array.isArray(e.errors)?e.errors:typeof e.errors=="object"?Object.values(e.errors).flat():[]}}static get interceptors(){return D}}class M extends Error{constructor(t,e,r={}){super(`[${t}] ${e}`),this.name="ServiceError",this.serviceName=t,this.details=r,this.timestamp=new Date().toISOString(),Error.captureStackTrace&&Error.captureStackTrace(this,M)}}class K extends M{constructor(t,e,r,o){super(t,`Network error: ${r} ${o}`,{endpoint:e,status:r,statusText:o,type:"network"}),this.name="ServiceNetworkError",this.endpoint=e,this.status=r}}class $ extends M{constructor(t,e,r,o){super(t,`Validation failed for endpoint: ${e}`,{endpoint:e,validationErrors:r,inputData:$._sanitizeData(o),type:"validation"}),this.name="ServiceValidationError",this.validationErrors=r}static _sanitizeData(t){if(!t||typeof t!="object")return t;const e={...t};return e.password&&(e.password="***"),e.token&&(e.token="***"),e.email&&(e.email="***@***.***"),e}}class Q extends M{constructor(t,e){super(t,`Authentication failed for endpoint: ${e}`,{endpoint:e,type:"authentication"}),this.name="ServiceAuthenticationError"}}class X{static baseEndpoint="";static contract=null;static async get(t="",e=null,r=null,o=null){try{const n=this._buildPath(t,e?.id),s=await w.get({path:n,includeCredentials:!0});console.log(s);const a=this._parseResult(s,o);return this._dispatchEvent("get",a),a}catch(n){throw this._wrapError(n,t,"GET")}}static async post(t="",e=null,r=null,o=null){try{const n=this._buildPath(t),s=this.contract&&e?this.contract.parse(e,r):e,a=await w.post({path:n,body:s,includeCredentials:!0}),i=this._parseResult(a,o);return this._dispatchEvent("post",i),i}catch(n){throw n.name==="ValidationError"?new $(this.name,t,n.details,e):this._wrapError(n,t,"POST")}}static async put(t="",e=null,r=null,o=null){try{const n=this._buildPath(t,e?.id),s=this.contract&&e?this.contract.parse(e,r):e,a=await w.put({path:n,body:s,includeCredentials:!0}),i=this._parseResult(a,o);return this._dispatchEvent("put",i),i}catch(n){throw n.name==="ValidationError"?new $(this.name,t,n.details,e):this._wrapError(n,t,"PUT")}}static async delete(t="",e=null,r=null){try{const o=this._buildPath(t,e),n=await w.delete({path:o,includeCredentials:!0}),s=this._parseResult(n,r);return this._dispatchEvent("delete",{id:e,result:s}),s}catch(o){throw this._wrapError(o,t,"DELETE")}}static async getRaw(t="",e=null){try{const r=this._buildPath(t,e?.id),o=await w.get({path:r,includeCredentials:!0});return this._dispatchEvent("get",o),o}catch(r){throw this._wrapError(r,t,"GET")}}static async postRaw(t="",e=null,r=null){try{const o=this._buildPath(t),n=this.contract&&e?this.contract.parse(e,r):e,s=await w.post({path:o,body:n,includeCredentials:!0});return this._dispatchEvent("post",s),s}catch(o){throw o.name==="ValidationError"?new $(this.name,t,o.details,e):this._wrapError(o,t,"POST")}}static async putRaw(t="",e=null,r=null){try{const o=this._buildPath(t,e?.id),n=this.contract&&e?this.contract.parse(e,r):e,s=await w.put({path:o,body:n,includeCredentials:!0});return this._dispatchEvent("put",s),s}catch(o){throw o.name==="ValidationError"?new $(this.name,t,o.details,e):this._wrapError(o,t,"PUT")}}static async deleteRaw(t="",e=null){try{const r=this._buildPath(t,e),o=await w.delete({path:r,includeCredentials:!0});return this._dispatchEvent("delete",{id:e,result:o}),o}catch(r){throw this._wrapError(r,t,"DELETE")}}static _buildPath(t,e=null){let r=`${this.baseEndpoint}`;return t&&(r+=`/${t}`),e&&(r+=`/${e}`),r}static _parseResult(t,e){if(!this.contract||!t)return t;try{return Array.isArray(t)?t.map(r=>this.contract.parse(r,e)):this.contract.parse(t,e)}catch(r){return console.warn(`Contract parsing failed for ${this.name}, returning raw data:`,r),t}}static _dispatchEvent(t,e){document.dispatchEvent(new CustomEvent(`${this.name}:${t}`,{detail:e}))}static _wrapError(t,e,r){return t instanceof M?t:t.status===401||t.status===403?new Q(this.name,e):t.status?new K(this.name,e,t.status,t.message||"Unknown error"):new M(this.name,`Network request failed: ${t.message}`,{endpoint:e,method:r,originalError:t.message})}}class O extends Error{constructor(t){super("Validation failed"),this.name="ValidationError",this.details=t}}class F extends Error{constructor(t){super(`Scope "${t}" is not defined in contract`),this.name="ContractScopeError",this.scope=t}}class E extends Error{constructor(t,e,r={},o=null){const n=this._safeStringify(e),s=this._safeStringify(r),a=`Pipe "${t}" failed to parse value ${n} with options: ${s}`;super(a),this.name="PipeParseError",this.pipeName=t,this.value=e,this.options=r,this.originalError=o,Error.captureStackTrace&&Error.captureStackTrace(this,E)}_safeStringify(t){try{if(typeof t=="string")return`"${t}"`;if(typeof t=="number"||typeof t=="boolean")return String(t);if(t===null)return"null";if(t===void 0)return"undefined";const e=JSON.stringify(t);return e.length>100?e.substring(0,100)+"...":e}catch{return"[Complex Object]"}}}class y extends E{constructor(t,e={},r=null){super("StringPipe",t,e,r),this.name="StringPipeParseError"}}class tt{static humanize(t,e={}){try{if(t==null)return e.default||"";let r=String(t);return e.trim&&(r=r.trim()),e.capitalize==="first"?r=r.charAt(0).toUpperCase()+r.slice(1).toLowerCase():e.capitalize==="words"?r=r.replace(/\w\S*/g,o=>o.charAt(0).toUpperCase()+o.substr(1).toLowerCase()):e.capitalize==="all"?r=r.toUpperCase():e.capitalize==="none"&&(r=r.toLowerCase()),e.maxLength&&r.length>e.maxLength&&(r=r.substring(0,e.maxLength)+(e.ellipsis||"...")),e.padStart&&(r=r.padStart(e.padStart.length,e.padStart.char||" ")),e.padEnd&&(r=r.padEnd(e.padEnd.length,e.padEnd.char||" ")),r}catch(r){throw r instanceof y?r:new y(t,e,r)}}static normalize(t,e={}){try{if(t==null)return e.default||"";let r=String(t);if(e.trim&&(r=r.trim()),e.lowercase?r=r.toLowerCase():e.uppercase&&(r=r.toUpperCase()),e.minLength&&r.length<e.minLength)if(e.padEnd)r=r.padEnd(e.minLength,e.padEnd.char||" ");else throw new y(t,e,new Error(`String too short: minimum ${e.minLength} characters`));if(e.maxLength&&r.length>e.maxLength)if(e.truncate)r=r.substring(0,e.maxLength);else throw new y(t,e,new Error(`String too long: maximum ${e.maxLength} characters`));if(e.regex&&!e.regex.test(r))throw new y(t,e,new Error("String does not match required pattern"));if(e.enum&&!e.enum.includes(r))throw new y(t,e,new Error(`String not in allowed values: ${e.enum.join(", ")}`));return r}catch(r){throw r instanceof y?r:new y(t,e,r)}}}class S extends E{constructor(t,e={},r=null){super("NumberPipe",t,e,r),this.name="NumberPipeParseError"}}class et{static humanize(t,e={}){try{if(t==null)return e.default||"";const r=Number(t);return isNaN(r)?e.default||"":r.toLocaleString(e.locale||"en-US",{minimumFractionDigits:e.minFractionDigits||0,maximumFractionDigits:e.maxFractionDigits||2,style:e.currency?"currency":void 0,currency:e.currency})}catch(r){throw r instanceof S?r:new S(t,e,r)}}static normalize(t,e={}){try{if(t==null)return e.default||0;typeof t=="string"&&(t=t.replace(/[^\d.-]/g,""));const r=Number(t);if(isNaN(r))throw new S(t,e,new Error("Invalid number"));if(e.min!==void 0&&r<e.min){if(e.clamp)return e.min;throw new S(t,e,new Error(`Number below minimum: ${e.min}`))}if(e.max!==void 0&&r>e.max){if(e.clamp)return e.max;throw new S(t,e,new Error(`Number above maximum: ${e.max}`))}return r}catch(r){throw r instanceof S?r:new S(t,e,r)}}}class b extends E{constructor(t,e={},r=null){super("BooleanPipe",t,e,r),this.name="BooleanPipeParseError"}}class rt{static humanize(t,e={}){try{if(t==null)return e.default||"";const r=this._normalizeToBoolean(t,e);return e.format==="yesno"?r?e.yesText||"Sí":e.noText||"No":e.format==="onoff"?r?e.onText||"On":e.offText||"Off":e.format==="yn"?r?e.yesText||"Y":e.noText||"N":e.format==="sn"?r?e.yesText||"S":e.noText||"N":e.format==="10"?r?"1":"0":e.format==="custom"&&e.truthy!==void 0?r?e.truthy:e.falsy:e.format==="boolean"?r?"true":"false":r.toString()}catch(r){throw r instanceof b?r:new b(t,e,r)}}static normalize(t,e={}){try{if(t==null){const o=e.default!==void 0?e.default:!1;return this._booleanToNumber(o)}const r=this._normalizeToBoolean(t,e);return this._booleanToNumber(r)}catch(r){throw r instanceof b?r:new b(t,e,r)}}static _normalizeToBoolean(t,e={}){if(typeof t=="boolean")return t;if(typeof t=="number"){if(t===1)return!0;if(t===0)return!1;throw new b(t,e,new Error(`Invalid number for boolean: ${t}. Must be 1 or 0.`))}if(typeof t=="string"){const r=t.trim().toLowerCase();if(["true","t","yes","y","sí","s","on","1","verdadero","v"].includes(r))return!0;if(["false","f","no","n","off","0","falso","f"].includes(r))return!1;throw new b(t,e,new Error(`Invalid string for boolean: "${t}". Must be one of: true/false, yes/no, y/n, s/n, on/off, 1/0`))}if(t===1)return!0;if(t===0)return!1;throw new b(t,e,new Error(`Unsupported type for boolean: ${typeof t}`))}static _booleanToNumber(t){return t?1:0}static fromDatabase(t,e={}){try{return t===1?!0:t===0?!1:this._normalizeToBoolean(t,e)}catch(r){throw r instanceof b?r:new b(t,e,r)}}static toDatabase(t){return this._booleanToNumber(t)}}class x extends E{constructor(t,e={},r=null){super("DatePipe",t,e,r),this.name="DatePipeParseError"}}class ot{static humanize(t,e={}){try{if(t==null)return e.default||"";let r;if(t instanceof Date)r=t;else if(typeof t=="number")r=new Date(t<1e12?t*1e3:t);else if(typeof t=="string")r=new Date(t);else return e.default||"";if(isNaN(r.getTime()))throw new x(t,e,new Error("Invalid date"));switch(e.format||"medium"){case"short":return r.toLocaleDateString(e.locale||"en-US");case"medium":return r.toLocaleDateString(e.locale||"en-US",{year:"numeric",month:"short",day:"numeric"});case"long":return r.toLocaleDateString(e.locale||"en-US",{year:"numeric",month:"long",day:"numeric"});case"datetime":return r.toLocaleString(e.locale||"en-US");case"relative":return this._relativeTime(r,e);case"custom":return this._formatCustom(r,e.pattern);default:return r.toISOString().split("T")[0]}}catch(r){throw r instanceof x?r:new x(t,e,r)}}static normalize(t,e={}){try{if(t==null)return e.default||new Date().toISOString();if(t instanceof Date)return e.output==="timestamp"?t.getTime():t.toISOString();if(typeof t=="number"){const r=new Date(t<1e12?t*1e3:t);if(isNaN(r.getTime()))throw new x(t,e,new Error("Invalid date from number"));return e.output==="timestamp"?r.getTime():r.toISOString()}if(typeof t=="string"){const r=new Date(t);if(isNaN(r.getTime()))throw new x(t,e,new Error("Invalid date from string"));return e.output==="timestamp"?r.getTime():r.toISOString()}throw new x(t,e,new Error("Unsupported date type"))}catch(r){throw r instanceof x?r:new x(t,e,r)}}static _relativeTime(t,e){const o=new Date-t,n=Math.floor(o/1e3),s=Math.floor(n/60),a=Math.floor(s/60),i=Math.floor(a/24);return n<60?"Just now":s<60?`${s} min ago`:a<24?`${a} hours ago`:i===1?"Yesterday":i<7?`${i} days ago`:t.toLocaleDateString(e.locale||"en-US")}static _formatCustom(t,e){const r={YYYY:t.getFullYear(),MM:String(t.getMonth()+1).padStart(2,"0"),DD:String(t.getDate()).padStart(2,"0"),HH:String(t.getHours()).padStart(2,"0"),mm:String(t.getMinutes()).padStart(2,"0"),ss:String(t.getSeconds()).padStart(2,"0")};return e.replace(/YYYY|MM|DD|HH|mm|ss/g,o=>r[o])}}class k extends E{constructor(t,e={},r=null){super("TimestampPipe",t,e,r),this.name="TimestampPipeParseError"}}class nt{static humanize(t,e={}){if(t==null)return e.default||"";let r;try{if(t instanceof Date)r=t.getTime();else if(typeof t=="number")r=t<1e12?t*1e3:t;else if(typeof t=="string")r=this._parseTimestampString(t);else return e.default||"";if(!this._isValidTimestamp(r))return e.default||""}catch(n){throw n instanceof k?n:new k(t,"timestamp",e,n)}switch(e.format||"relative"){case"relative":return this._relativeTime(r,e);case"absolute":return this._absoluteTime(r,e);case"timeago":return this._timeAgo(r,e);case"calendar":return this._calendarTime(r,e);case"since":return this._timeSince(r,e);case"custom":return this._formatCustom(r,e.pattern,e);default:return this._defaultFormat(r,e)}}static normalize(t,e={}){if(t==null)return e.default!==void 0?e.default:e.useCurrent!==!1?Date.now():null;let r;try{if(t instanceof Date)r=t.getTime();else if(typeof t=="number")r=t<1e12?t*1e3:t;else if(typeof t=="string")r=this._parseTimestampString(t);else throw new k(t,"timestamp",e);if(!this._isValidTimestamp(r))throw new k(t,"timestamp",e)}catch(o){throw o instanceof k?o:new k(t,"timestamp",e,o)}return e.precision&&(r=this._applyPrecision(r,e.precision)),e.timezone&&(r=this._adjustTimezone(r,e.timezone)),e.output==="seconds"?Math.floor(r/1e3):r}static _parseTimestampString(t){const e=Date.parse(t);if(!isNaN(e))return e;const r=[/^(\d{1,2})\/(\d{1,2})\/(\d{4}) (\d{1,2}):(\d{2}):(\d{2})$/,/^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{2}):(\d{2})$/];for(const o of r){const n=t.match(o);if(n)return new Date(parseInt(n[3]||n[1]),parseInt(n[1]||n[2])-1,parseInt(n[2]||n[3]),parseInt(n[4]),parseInt(n[5]),parseInt(n[6])).getTime()}if(/^\d+$/.test(t)){const o=parseInt(t);return o<1e12?o*1e3:o}throw new k(t,"timestamp",{},new Error("Unable to parse timestamp string"))}static _isValidTimestamp(t){return typeof t=="number"&&!isNaN(t)&&t>0&&t<864e13}static _applyPrecision(t,e){const r=new Date(t);switch(e){case"second":r.setMilliseconds(0);break;case"minute":r.setSeconds(0,0);break;case"hour":r.setMinutes(0,0,0);break;case"day":r.setHours(0,0,0,0);break;case"month":r.setDate(1),r.setHours(0,0,0,0);break;case"year":r.setMonth(0,1),r.setHours(0,0,0,0);break}return r.getTime()}static _adjustTimezone(t,e){return typeof e=="number"?t+e*36e5:t}static _relativeTime(t,e){const o=Date.now()-t,n=Math.abs(o),s=[{label:"años",labelSingular:"año",milliseconds:31536e6},{label:"meses",labelSingular:"mes",milliseconds:2592e6},{label:"semanas",labelSingular:"semana",milliseconds:6048e5},{label:"días",labelSingular:"día",milliseconds:864e5},{label:"horas",labelSingular:"hora",milliseconds:36e5},{label:"minutos",labelSingular:"minuto",milliseconds:6e4},{label:"segundos",labelSingular:"segundo",milliseconds:1e3}];for(const a of s){const i=Math.floor(n/a.milliseconds);if(i>=1){const l=i===1?a.labelSingular:a.label;if(e.compact){const u=a.labelSingular.charAt(0);return o<0?`en ${i}${u}`:`Hace ${i}${u}`}return o<0?`en ${i} ${l}`:`Hace ${i} ${l}`}}return o<0?"pronto":"ahora mismo"}static _absoluteTime(t,e){const r=new Date(t),o=e.locale||"es-ES";return e.compact?r.toLocaleDateString(o,{month:"short",day:"numeric",year:t<new Date().getTime()-31536e6?"numeric":void 0}):r.toLocaleString(o,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:e.hour12!==!1})}static _timeAgo(t,e){const o=Date.now()-t;if(o<6e4)return"Hace un momento";if(o<36e5){const s=Math.floor(o/6e4);return s===1?"Hace 1 minuto":`Hace ${s} minutos`}if(o<864e5){const s=Math.floor(o/36e5);return s===1?"Hace 1 hora":`Hace ${s} horas`}return new Date(t).toLocaleDateString(e.locale||"es-ES",{month:"short",day:"numeric"})}static _calendarTime(t,e){const r=new Date(t),o=new Date,n=new Date(o);n.setDate(n.getDate()-1);const s=new Date(o);s.setDate(s.getDate()+1);const a=r.toDateString()===o.toDateString(),i=r.toDateString()===n.toDateString(),c=r.toDateString()===s.toDateString(),l=r.toLocaleTimeString(e.locale||"es-ES",{hour:"numeric",minute:"2-digit",hour12:e.hour12!==!1});return a?`Hoy a las ${l}`:i?`Ayer a las ${l}`:c?`Mañana a las ${l}`:r.toLocaleDateString(e.locale||"es-ES",{weekday:"short",month:"short",day:"numeric",year:t<new Date().getTime()-31536e6?"numeric":void 0})}static _timeSince(t){const r=Date.now()-t;if(r<0)return"en el futuro";const o=Math.floor(r/1e3),n=Math.floor(o/60),s=Math.floor(n/60),a=Math.floor(s/24);if(a>0){const c=a===1?"día":"días",l=s%24===1?"hora":"horas";return`Hace ${a} ${c} ${s%24} ${l}`}if(s>0){const c=s===1?"hora":"horas",l=n%60===1?"minuto":"minutos";return`Hace ${s} ${c} ${n%60} ${l}`}if(n>0){const c=n===1?"minuto":"minutos",l=o%60===1?"segundo":"segundos";return`Hace ${n} ${c} ${o%60} ${l}`}return`Hace ${o} ${o===1?"segundo":"segundos"}`}static _formatCustom(t,e){const r=new Date(t),o={YYYY:r.getFullYear(),YY:String(r.getFullYear()).slice(-2),MM:String(r.getMonth()+1).padStart(2,"0"),M:r.getMonth()+1,DD:String(r.getDate()).padStart(2,"0"),D:r.getDate(),HH:String(r.getHours()).padStart(2,"0"),H:r.getHours(),mm:String(r.getMinutes()).padStart(2,"0"),m:r.getMinutes(),ss:String(r.getSeconds()).padStart(2,"0"),s:r.getSeconds(),SSS:String(r.getMilliseconds()).padStart(3,"0"),A:r.getHours()>=12?"PM":"AM",a:r.getHours()>=12?"pm":"am"};return e.replace(/YYYY|YY|MM|M|DD|D|HH|H|mm|m|ss|s|SSS|A|a/g,n=>o[n])}static _defaultFormat(t,e){const r=new Date(t);return e.output==="seconds"?Math.floor(t/1e3).toString():e.output==="iso"?r.toISOString():e.output==="locale"?r.toLocaleString(e.locale||"es-ES"):t.toString()}}class _{static pipes={string:tt,number:et,boolean:rt,date:ot,timestamp:nt};static humanize(t,e,r={}){const o=this.pipes[e];return o?o.humanize(t,r):(console.warn(`No pipe found for type: ${e}`),t)}static normalize(t,e,r={}){const o=this.pipes[e];return o?o.normalize(t,r):(console.warn(`No pipe found for type: ${e}`),t)}static humanizeObject(t,e,r={}){const o={};for(const[n,s]of Object.entries(e))if(t[n]!==void 0){const a={...s,...r[n]};o[n]=this.humanize(t[n],s.type,a)}return o}static normalizeObject(t,e,r={}){const o={};for(const[n,s]of Object.entries(e))if(t[n]!==void 0){const a={...s,...r[n]};o[n]=this.normalize(t[n],s.type,a)}return o}}class m{constructor({schema:t={},scopes:e={},pipes:r={}}={}){if(!t||typeof t!="object")throw new TypeError("Contract schema must be an object.");this.schema=t,this.scopes=e,this.pipes=r}getPrimaryKey(){const t=["id","ID",`${this.constructor.name.replace("Contract","").toLowerCase()}ID`];for(const e of t)if(this.schema[e])return e;return Object.keys(this.schema)[0]}static _toMs(t){if(t instanceof Date)return t.getTime();if(typeof t=="number"&&Number.isFinite(t))return t<1e12?t*1e3:t;if(typeof t=="string"){const e=Date.parse(t);return Number.isNaN(e)?NaN:e}return NaN}static types={string:(t={})=>({type:"string",...t}),number:(t={})=>({type:"number",...t}),boolean:(t={})=>({type:"boolean",...t}),enum:(t,e={})=>({type:"enum",values:t,...e}),date:(t={})=>({type:"date",...t}),timestamp:(t={})=>({type:"timestamp",...t})};_validateFieldWithPipes(t,e,r){const o=[];if(r.required&&(e==null||e===""))return o.push(`${t} is required`),o;if(e==null||e==="")return o;try{const n=_.normalize(e,r.type,r);switch(r.type){case"string":if(typeof n!="string"){o.push(`${t} must be a string`);break}r.min&&n.length<r.min&&o.push(`${t} must be at least ${r.min} characters`),r.max&&n.length>r.max&&o.push(`${t} must be at most ${r.max} characters`),r.regex&&!r.regex.test(n)&&o.push(`${t} format is invalid`);break;case"number":if(typeof n!="number"||Number.isNaN(n)){o.push(`${t} must be a number`);break}r.min!==void 0&&n<r.min&&o.push(`${t} must be >= ${r.min}`),r.max!==void 0&&n>r.max&&o.push(`${t} must be <= ${r.max}`);break;case"boolean":typeof n!="boolean"&&o.push(`${t} must be a boolean`);break;case"enum":r.values?.includes(n)||o.push(`${t} must be one of: ${r.values.join(", ")}`);break;case"date":case"timestamp":{const s=m._toMs(n);if(Number.isNaN(s)){o.push(`${t} must be a valid date/timestamp`);break}if(r.min!==void 0){const a=m._toMs(r.min);(!Number.isFinite(a)||s<a)&&o.push(`${t} must be >= ${r.min}`)}if(r.max!==void 0){const a=m._toMs(r.max);(!Number.isFinite(a)||s>a)&&o.push(`${t} must be <= ${r.max}`)}break}default:o.push(`${t} has unknown type ${r.type}`)}}catch(n){n instanceof E?o.push(`${t} ${n.message}`):o.push(`${t} failed pipe validation: ${n.message}`)}return o}_validateField(t,e,r){if(r.type&&_.pipes[r.type])return this._validateFieldWithPipes(t,e,r);const o=[];if(r.required&&(e==null||e===""))return o.push(`${t} is required`),o;if(e==null||e==="")return o;switch(r.type){case"string":if(typeof e!="string"){o.push(`${t} must be a string`);break}r.min&&e.length<r.min&&o.push(`${t} must be at least ${r.min} characters`),r.max&&e.length>r.max&&o.push(`${t} must be at most ${r.max} characters`),r.regex&&!r.regex.test(e)&&o.push(`${t} format is invalid`);break;case"number":if(typeof e!="number"||Number.isNaN(e)){o.push(`${t} must be a number`);break}r.min!==void 0&&e<r.min&&o.push(`${t} must be >= ${r.min}`),r.max!==void 0&&e>r.max&&o.push(`${t} must be <= ${r.max}`);break;case"boolean":typeof e!="boolean"&&o.push(`${t} must be a boolean`);break;case"enum":r.values?.includes(e)||o.push(`${t} must be one of: ${r.values.join(", ")}`);break;case"date":case"timestamp":{const n=m._toMs(e);if(Number.isNaN(n)){o.push(`${t} must be a valid date/timestamp`);break}if(r.min!==void 0){const s=m._toMs(r.min);(!Number.isFinite(s)||n<s)&&o.push(`${t} must be >= ${r.min}`)}if(r.max!==void 0){const s=m._toMs(r.max);(!Number.isFinite(s)||n>s)&&o.push(`${t} must be <= ${r.max}`)}break}default:o.push(`${t} has unknown type ${r.type}`)}return o}parse(t,e,{usePipes:r=!0}={}){if(!t||typeof t!="object")throw new TypeError("Contract.parse requires an object");let o=this.schema;if(e){if(!this.scopes||!this.scopes[e])throw new F(e);o=Object.fromEntries(this.scopes[e].map(a=>[a,this.schema[a]]))}const n={},s={};for(const[a,i]of Object.entries(o)){let c=t[a];if((c==null||c==="")&&i.default!==void 0&&(c=typeof i.default=="function"?i.default():i.default),r&&i.type&&c!==void 0&&c!==null)try{c=_.normalize(c,i.type,i)}catch(u){s[a]=[`Pipe normalization failed: ${u.message}`];continue}i.trim&&typeof c=="string"&&(c=c.trim());const l=this._validateField(a,c,i);l.length>0?s[a]=l:c!==void 0&&(n[a]=c)}if(Object.keys(s).length>0)throw new O(s);return n}humanize(t,e){const r=this.parse(t,e,{usePipes:!1}),o={};for(const[n,s]of Object.entries(r)){const a=this.schema[n];if(a&&a.type)try{o[n]=_.humanize(s,a.type,{...a,...this.pipes[n]})}catch(i){o[n]=s,console.warn(`Failed to humanize field ${n}:`,i)}else o[n]=s}return o}validateWithPipes(t,e){const r={},o={};let n=this.schema;if(e){if(!this.scopes||!this.scopes[e])throw new F(e);n=Object.fromEntries(this.scopes[e].map(s=>[s,this.schema[s]]))}for(const[s,a]of Object.entries(n)){let i=t[s];if((i==null||i==="")&&a.default!==void 0&&(i=typeof a.default=="function"?a.default():a.default),a.required&&(i==null||i==="")){r[s]=[`${s} is required`];continue}if(!(i==null||i===""))try{const c=_.normalize(i,a.type,a);o[s]=c,a.type==="string"&&a.min&&c.length<a.min&&(r[s]=[`${s} must be at least ${a.min} characters`]),a.type==="string"&&a.max&&c.length>a.max&&(r[s]=[`${s} must be at most ${a.max} characters`]),a.regex&&!a.regex.test(c)&&(r[s]=[`${s} format is invalid`])}catch(c){r[s]=[`${s} validation failed: ${c.message}`]}}if(Object.keys(r).length>0)throw new O(r);return o}describe(t){if(t){if(!this.scopes||!this.scopes[t])throw new F(t);return this.scopes[t]}return this.schema}}class st extends m{constructor(){super({schema:{email:m.types.string({required:!0,trim:!0,regex:/^[A-Za-z0-9.]+@[A-Za-z0-9.]+\.(?:[A-Za-z]{2,}|edu\.sv)$/,default:""}),contrasena:m.types.string({required:!0,min:8,max:256,regex:/^[A-Za-z0-9#!@&]+$/,default:""}),userID:m.types.string({required:!0,trim:!0,default:""}),roleID:m.types.string({required:!0,default:""}),firstName:m.types.string({required:!0,trim:!0,default:""}),lastName:m.types.string({required:!0,trim:!0,default:""}),birthdate:m.types.string({required:!1,default:""}),contactEmail:m.types.string({required:!1,trim:!0,regex:/^[A-Za-z0-9.]+@[A-Za-z0-9.]+\.(?:[A-Za-z]{2,}|edu\.sv)$/,default:""}),phone:m.types.string({required:!1,trim:!0,regex:/^[0-9+\- ]*$/,default:""})},scopes:{login:["email","contrasena"],me:["userID","email","roleID","firstName","lastName","birthdate","contactEmail","phone"]}})}}class H extends X{static baseEndpoint="/Auth";static contract=new st;static async login(t,e){return await this.postRaw("login",{email:t,contrasena:e},"login"),!0}static async me(){return await this.get("me",null,null,"me")}static async logout(){return await this.postRaw("logout"),!0}}class p{static async isAuthenticated(){if(window.location.hash!=="#login"&&window.location.hash!=="#not-found")try{return await H.me()!==null}catch(t){return console.error("AuthGuard.isAuthenticated error:",t),!1}}static async authLogin(){try{return await H.me()!==null}catch(t){return console.error("AuthGuard.authLogin error:",t),!1}}static async ensureAuth(t="#login"){return await p.isAuthenticated()?!0:(window.location.hash=t,!1)}static isAdmin(){return p._user?.roleName==="Administrador"}static isStudent(){return p._user?.roleName==="Estudiante"}static isTeacher(){return p._user?.roleName==="Docente"}static isRA(){return p._user?.roleName==="Registro Académico"}static isRH(){return p._user?.roleName==="Recursos Humanos"}}function at(d,t=14){const e=document.createElement("div");return e.className=`h-${t} w-${t} rounded-full bg-gradient-to-tr from-[rgb(var(--body-from))] to-[rgb(var(--body-to))] flex items-center justify-center drop-shadow text-xs font-bold text-[rgb(var(--button-from))] select-none`,e.textContent=d,e}function it(d){const t=document.createElement("template");return typeof d=="string"?t.innerHTML=d.trim():t.content.append(d.cloneNode(!0)),t.content.querySelectorAll("script").forEach(e=>e.remove()),t}class v extends Error{constructor(t,e,r={}){super(`[${t}] ${e}`),this.name="ComponentError",this.componentName=t,this.details=r,Error.captureStackTrace&&Error.captureStackTrace(this,v)}}class T extends v{constructor(t,e,r=null){super(t,`Render failed during ${e}`,{renderStep:e,originalError:r?.message}),this.name="ComponentRenderError",this.renderStep=e,this.originalError=r}}class I extends v{constructor(t,e,r){super(t,`Template error: ${r}`,{templateUrl:e,reason:r}),this.name="ComponentTemplateError",this.templateUrl=e}}class U extends v{constructor(t,e,r){super(t,"Initialization failed - host element not found",{hostSelector:e,originalError:r?.message}),this.name="ComponentInitializationError",this.hostSelector=e}}class N{constructor(t={}){try{if(!t.host)throw new v(this.constructor.name,"Component requires a host element");if(this.host=typeof t.host=="string"?document.querySelector(t.host):t.host,!this.host)throw new U(this.constructor.name,t.host,new Error("Element not found in DOM"));this.id=t.id||`comp-${Math.random().toString(36).substr(2,9)}`,this.classes=t.classes||[],this.template=this.constructor.getTemplate?this.constructor.getTemplate():"",this.isRendered=!1}catch(e){throw e instanceof v?e:new v(this.constructor.name,"Construction failed",{originalError:e.message})}}_processTemplate(){if(!this.template)return this._getFallbackTemplate();try{const t=it(this.template);if(!t.content.firstElementChild)throw new I(this.constructor.name,"inline template","Template is empty or invalid");return t}catch(t){throw t instanceof I?t:new I(this.constructor.name,"inline template",`Failed to process template: ${t.message}`)}}async render(){try{await this._beforeRender(),await this._render(),this.isRendered=!0,await this._afterRender()}catch(t){throw t instanceof T?t:new T(this.constructor.name,"main render phase",t)}}async _render(){throw new v(this.constructor.name,"_render() method must be implemented by subclass")}async _beforeRender(){}async _afterRender(){}_renderFallback(){this.host.innerHTML=`<div class="component-error">${this.constructor.name} failed to render</div>`}destroy(){this.host.innerHTML="",this.host.classList.remove("component-host"),this.isRendered=!1}static events=new EventTarget;static emit(t,e){this.events.dispatchEvent(new CustomEvent(t,{detail:e}))}static on(t,e){this.events.addEventListener(t,e)}static off(t,e){this.events.removeEventListener(t,e)}}class lt extends N{static getTemplate(){return`
        <button type="button" class="">
            <svg id="button-icon" class="w-6 h-6 stroke-current fill-none" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
            </svg>
            <div class="flex justify-center w-full">
                <span id="button-text" class="drop-shadow-sm"></span>
            </div>
        </button>
        `}constructor(t={}){if(!t.host)throw new Error("Button requires a host element");const e=typeof t.host=="string"?document.querySelector(t.host):t.host;if(!e)throw new U("Button",t.host,new Error("Button host element not found"));super({host:e}),this.text=t.text||"",this.collapseText=t.collapseText||!0,this.icon=t.icon||"",this.onClick=t.onClick||null,this.buttonType=t.buttonType||1,this.showIcon=t.showIcon!==void 0?t.showIcon:!0,this.sizeMultiplier=t.sizeMultiplier||1,this.iconSize=t.iconSize||null,this.color=t.color||null,this.roundness=t.roundness||null,this.showIcon?this.collapseText=t.collapseText||!1:this.collapseText=!1,this._render()}async _render(){try{const t=this._processTemplate();switch(this.root=t.content.firstElementChild.cloneNode(!0),this.buttonType){case 1:this.root.classList.add("btn-component");break;case 2:this.root.classList.add("secondary-btn-component");break;case 3:this.root.classList.add("btn-confirm");break;case 4:this.root.classList.add("btn-deny");break;default:this.root.classList.add("btn-component");break}const e=20,r=16;this.root.style.padding=`${r*this.sizeMultiplier}px ${e*this.sizeMultiplier}px`;const o=this.root.querySelector("#button-icon");o&&(this.showIcon?(this.icon&&(o.outerHTML=this.icon),this.iconSize&&(o.style.width=`${this.iconSize}px`,o.style.height=`${this.iconSize}px`)):o.remove());const n=this.root.querySelector("#button-text");n&&(this.text?(n.textContent=this.text,n.classList.toggle("hidden",this.collapseText),n.classList.toggle("lg:block",this.collapseText)):n.remove()),this.onClick&&this.root.addEventListener("click",this.onClick),this.host.innerHTML="",this.host.appendChild(this.root)}catch(t){console.error("Button _render failed:",t),this.host.innerHTML=`
        <button class="bg-blue-500 text-white px-4 py-2 rounded">
          ${this.text||"Button"}
        </button>
      `,this.onClick&&this.host.firstElementChild.addEventListener("click",this.onClick)}}setText(t){const e=this.root?.querySelector("#button-text");e&&(e.textContent=t)}setIcon(t){const e=this.root?.querySelector("#button-icon");e&&t&&(e.outerHTML=t)}}class q extends N{static getTemplate(){return`
			<div class="toast relative pointer-events-auto bg-gradient-to-r from-[rgb(var(--button-from))] to-[rgb(var(--button-to))] text-[rgb(var(--button-text))] px-5 py-5 rounded shadow-lg text-md overflow-hidden max-w-sm min-w-[200px]">
  				<span class="toast-message text-shadow"></span>
  				<div class="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[rgb(var(--off-from))] to-[rgb(var(--off-to))] progress-bar">
				</div>
			</div>
			`}constructor(t={}){const e=t.containerId||"toast-container",r=document.getElementById(e)||document.body;super({host:r}),this.containerId=e,this.defaults={dismissOnClick:!0,url:null,...t.defaults},this.toastTemplate=null}async _beforeRender(){await this.loadTemplate(),this.ensureContainer()}async loadTemplate(){const t=document.createElement("template");t.innerHTML=q.getTemplate().trim(),this.toastTemplate=t.content.firstElementChild,this.toastTemplate||(console.error("[Toast] Toast template element not found!"),this.toastTemplate=document.createElement("div"),this.toastTemplate.className="toast",this.toastTemplate.innerHTML=`
        <span class="toast-message"></span>
        <div class="progress-bar"></div>
      `)}ensureContainer(){if(this.host.id===this.containerId){this.container=this.host;return}this.container=this.host.querySelector(`#${this.containerId}`),this.container||(this.container=document.createElement("div"),this.container.id=this.containerId,this.container.className="fixed top-5 right-5 flex flex-col gap-2 max-w-sm z-[9999]",this.host.appendChild(this.container))}async _render(){this.isRendered=!0}show(t,e=7500,r={}){if(!this.isRendered){console.error("[Toast] Toast not initialized. Call render() first.");return}const{dismissOnClick:o,url:n}={...this.defaults,...r},s=this.toastTemplate.cloneNode(!0),a=s.querySelector(".toast-message");if(!a){console.error("[Toast] .toast-message not found in template");return}a.textContent=t,s.style.userSelect="none",s.style.cursor="pointer",s.style.animation=`toast-fade ${e}ms ease-in-out forwards`;const i=s.querySelector(".progress-bar");i&&(i.style.width="100%",i.style.transition="none",requestAnimationFrame(()=>{i.offsetWidth,i.style.transition=`width ${e-100}ms linear`,i.style.width="0%"})),s.addEventListener("click",()=>{n&&(window.location.href=n),o&&s.remove()}),this.container.appendChild(s),s.addEventListener("animationend",c=>{c.animationName==="toast-fade"&&s.remove()})}async init(){await this.render()}}class P extends N{static getTemplate(){return`
<template id="tmpl-body">
  <body id="body"
    class="relative flex justify-center min-h-screen mb-1 md:justify-start bg-gradient-to-tr from-[rgb(var(--body-from))] to-[rgb(var(--body-to))]">

    <!-- <div
        class="fixed bottom-10 left-0 w-[600px] h-[600px] rounded-full z-[-20] pointer-events-none 
              bg-gradient-to-tr from-indigo-400 to-blue-400 opacity-60 translate-x-[-50%] translate-y-[50%] animate-left-spin-pulse">
    </div>
    <div
        class="fixed top-0 right-0 w-[300px] h-[300px] rounded-full z-[-20] pointer-events-none 
              bg-gradient-to-tl from-blue-400 to-indigo-400 opacity-40 translate-x-[50%] translate-y-[-50%] animate-right-spin-pulse">
    </div> -->

    <div
        class="fixed bottom-10 left-0 w-[600px] h-[600px] z-[50] pointer-events-none animate-left-spin-pulse">
        <div class="absolute inset-0 border-2 border-[rgb(var(--button-to))] opacity-20"></div>
        <div class="absolute border-2 border-[rgb(var(--placeholder-to))] inset-1 opacity-5"></div>
        <div class="absolute inset-0 rotate-45 border-2 border-[rgb(var(--button-from))] opacity-40"></div>
        <div class="absolute rotate-45 border-2 border-[rgb(var(--placeholder-from))] inset-1 opacity-20"></div>
    </div>
    <div
        class="fixed top-0 right-0 w-[300px] h-[300px] z-[-20] pointer-events-none animate-right-spin-pulse">
        <div class="absolute inset-0 border-2 border-[rgb(var(--button-to))] opacity-20"></div>
        <div class="absolute border-2 border-[rgb(var(--placeholder-to))] inset-1 opacity-5"></div>
        <div class="absolute inset-0 rotate-45 border-2 border-[rgb(var(--button-from))] opacity-40"></div>
        <div class="absolute rotate-45 border-2 border-[rgb(var(--placeholder-from))] inset-1 opacity-20"></div>
    </div>

    <div id="navbar"></div>
    <div id="main-view" class="flex-1 w-full"></div>
    <footer id="footer"></footer>
  </body>
</template>
    `}constructor(t={}){super({host:document.body,autoRender:!1}),this.content=t.content||"",this.afterLoad=t.afterLoad||null,this.mainSelector=t.mainSelector||"#main-view",this.originalBodyHTML=document.body.innerHTML,this._load()}async _load(){try{const t=document.createElement("template");t.innerHTML=P.getTemplate();const r=t.content.querySelector("#tmpl-body").content.firstElementChild;if(document.body.outerHTML=r.outerHTML,this.content){const o=document.querySelector(this.mainSelector);o&&(o.innerHTML=this.content)}typeof this.afterLoad=="function"&&this.afterLoad()}catch(t){console.error("Body component failed :(",t)}}async _beforeRender(){this.originalBodyClasses=document.body.className}async _render(){try{const t=document.createElement("template");t.innerHTML=P.getTemplate();const r=t.content.querySelector("#tmpl-body").content.firstElementChild;if(!r)throw new T(this.constructor.name,"template fetching",new Error("Failed to load body template"));document.body.outerHTML=r.outerHTML,this.host=document.body,this.originalBodyClasses&&(document.body.className+=" "+this.originalBodyClasses),this.content&&await this._injectContent()}catch(t){throw new T(this.constructor.name,"body replacement",t)}}async _afterRender(){if(typeof this.afterLoad=="function")try{await this.afterLoad()}catch(t){console.error("[Body] afterLoad callback failed:",t)}}async _injectContent(){const t=document.querySelector(this.mainSelector);t?t.innerHTML=this.content:console.warn(`[Body] Main content area not found with selector: ${this.mainSelector}`)}async setContent(t,e=null){this.content=t;const r=e||this.mainSelector,o=document.querySelector(r);if(o)o.innerHTML=t;else throw new T(this.constructor.name,"content injection",new Error(`Content area not found: ${r}`))}async appendContent(t,e=null){const r=e||this.mainSelector,o=document.querySelector(r);if(o)o.innerHTML+=t;else throw new T(this.constructor.name,"content appending",new Error(`Content area not found: ${r}`))}async clearContent(t=null){const e=t||this.mainSelector,r=document.querySelector(e);r&&(r.innerHTML="")}async restore(){try{document.body.outerHTML=this.originalBodyHTML,this.host=document.body}catch(t){throw new T(this.constructor.name,"body restoration",t)}}getMainElement(){return document.querySelector(this.mainSelector)}hasMainElement(){return!!document.querySelector(this.mainSelector)}async destroy(){await this.restore(),await super.destroy()}_getFallbackTemplate(){const t=document.createElement("template");return t.innerHTML=P.getTemplate().replace('<template id="tmpl-body">',"").replace("</template>",""),t}}class z extends N{static getTemplate(){return`
<template id="tmpl-footer">
  <footer id="footer"
    class="fixed bottom-0 left-0 w-full bg-gradient-to-tr from-[rgb(var(--button-from))] to-[rgb(var(--button-to))] z-[999] opacity-0 pointer-events-none translate-y-full transition-all duration-700 ease-in-out grid grid-cols-1 md:grid-cols-12 rounded-t-2xl md:rounded-t-none cursor-pointer">
    <div class="flex flex-row col-span-1 gap-4 p-4 md:col-span-4 lg:col-span-3">
      <div class="flex items-center justify-center flex-shrink-0 col-span-1 p-6">
        <svg width="64" height="80" viewBox="0 0 48 60" fill="none" xmlns="http://www.w3.org/2000/svg"
          class="text-d4 drop-shadow">
          <path
            d="M47.1,42.4a.9.9,0,1,0-.1-1.7H45.7l1-1a.9.9,0,0,0,0-1.2.8.8,0,0,0-1.1,0l-1,1a21.9,21.9,0,0,0-3.5-5.8l-.6-6.1a2.2,2.2,0,0,0-2.6-2l-6.1,1a17.1,17.1,0,0,0-4.4-1.3c.3-.2.5-.4.4-.7s-2-.2-2-.2c1.5-1.3,1.1-1.9,1.1-1.9s-2.8,1.2-2.8,1.2-.4-1.6-.4-1.6-2,2.2-2.2,3A20.8,20.8,0,0,0,13.7,28L7.6,27A2.2,2.2,0,0,0,5,29l-.9,9.2h0a16,16,0,0,0-1.8,6.7c0,.5.1,1,.1,1.4H.8a.9.9,0,0,0-.8.9.9.9,0,0,0,.8.8H2.6l-1.5.7a.7.7,0,0,0-.4,1,.8.8,0,0,0,1,.5l1.2-.6-.6,1.3A.9.9,0,0,0,2.7,52a.8.8,0,0,0,1.1-.4l.3-.7C7.5,56.3,15.1,60,24,60c12,0,21.7-6.8,21.7-15.1v-.6l.8.3a.7.7,0,0,0,1-.5.7.7,0,0,0-.4-1l-1.7-.6h1.7ZM28.4,44.1h-.6a2.7,2.7,0,0,1-1.4-.4,1.8,1.8,0,0,1-.5-.7l-.4.6a2.6,2.6,0,0,1-2.1.8h0a.3.3,0,0,1-.3-.3c0-.1.1-.2.3-.2a1.8,1.8,0,0,0,1.7-.7,1.4,1.4,0,0,0,.4-1v-.2h0c-1.6.1-2.9-.3-3-1s1.2-1.2,2.8-1.4,2.8.3,2.9,1S27.3,41.8,26,42v.3a3,3,0,0,0,.7,1.1,2.5,2.5,0,0,0,1.6.2l.3.2C28.6,43.9,28.6,44.1,28.4,44.1Z"
            transform="translate(0 0)" style="fill:#2b2b2b" />
          <path
            d="M40.3,18.4a5.3,5.3,0,0,1-2.2.4s6.3-3.6,2.2-6.4a1.2,1.2,0,0,0-1.8.8s-1.3,3.6-4.6,4.4a9.1,9.1,0,0,0,.1-3.3,10.1,10.1,0,0,0-4.1-6.5C20.6-4.7,4.7,1.6,4.7,1.6L12,10.9A9.5,9.5,0,0,0,10.3,18c.9,5.8,6.9,9.6,13.5,8.6A12.9,12.9,0,0,0,32,21.8c.4,1.6,1.6,5.3,3.9,3.5,0,0,2.4-1.5-1-3.7,0,0,6.5,3.1,6.7-2.6A.8.8,0,0,0,40.3,18.4ZM21,4.5c.4,0,.7.7.7,1.5s-.3,1.4-.7,1.4-.7-.6-.7-1.4S20.6,4.5,21,4.5ZM32.9,16.2c-1.6,3.8-6.1,3.7-6.1,3.7h-.1c-8,0-8.5-7.8-8.5-7.9l.2-.2c.2-.1.3.1.3.2s.5,7.4,8,7.4h.1c.2,0,4.1,0,5.6-3.2L25.7,9.5a.2.2,0,0,1,0-.3h.4L32.9,16Z"
            transform="translate(0 0)" style="fill:#2b2b2b" />
        </svg>
      </div>
      <div class="flex flex-col justify-center col-span-3 gap-1">
        <p class="text-sm font-bold text-white select-none text-shadow">Sistema de Registro</p>
        <p class="text-sm font-bold text-white select-none text-shadow">Académico Universitario</p>
        <p class="text-xl italic font-bold text-white select-none text-shadow">Sapientiae</p>
      </div>
    </div>

    <div class="hidden col-span-1 md:block md:col-span-4 lg:col-span-6"></div>

    <div class="flex items-center justify-center col-span-1 pb-10 pl-10 pr-10 md:col-span-4 lg:col-span-3 md:pb-0 md:pl-0 md:pr-15 md:mt-0">
      <div>
        <p class="font-bold text-white select-none text-shadow">
          <!-- &copy; 2025 B. Alvarenga, D. Gómez, I. Nolazco, J. Pérez, J. Portillo. Todos los derechos reservados. -->
          &copy; 2025 La Morenita, Tortillería & Meat Market. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>
    `}constructor(t="#footer",e){super({host:document.createElement("div"),autoRender:!1}),this.selector=t,this.url=e,this.footerElement=null,this.onScroll=this.onScroll.bind(this),this._load()}async _load(){try{const t=document.createElement("template");t.innerHTML=z.getTemplate();const r=t.content.querySelector("#tmpl-footer").content.firstElementChild,o=document.querySelector(this.selector);if(!o)throw new Error(`Element ${this.selector} not found`);if(o.outerHTML=r.outerHTML,this.footerElement=document.querySelector(this.selector),!this.footerElement)throw new Error(`New ${this.selector} element not found after replacing HTML`);this.attachListeners()}catch(t){console.error("Footer failed to load :(",t)}}attachListeners(){window.addEventListener("scroll",this.onScroll),this.onScroll(),this.footerElement.addEventListener("click",()=>{this.footerElement.classList.remove("opacity-100","pointer-events-auto","translate-y-0"),this.footerElement.classList.add("opacity-0","pointer-events-none","translate-y-full")})}onScroll(){const t=window.scrollY,e=window.innerHeight;document.documentElement.scrollHeight-(t+e)<=1?(this.footerElement.classList.remove("opacity-0","pointer-events-none","translate-y-full"),this.footerElement.classList.add("opacity-100","pointer-events-auto","translate-y-0")):(this.footerElement.classList.remove("opacity-100","pointer-events-auto","translate-y-0"),this.footerElement.classList.add("opacity-0","pointer-events-none","translate-y-full"))}async render(){}}const A=d=>d.querySelector("span:not(.profile-initials)");class j extends N{static getTemplate(){return`
<template id="tmpl-navbar">

<button id="burger-btn"
    class="fixed z-50 p-2 text-[rgb(var(--text-from))] dark:text-[rgb(var(--card-from))] bg-[rgb(var(--body-from))] dark:bg-[rgb(var(--button-from))] shadow-md top-4 left-4 rounded-xl md:hidden backdrop-blur drop-shadow">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round">
        <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
</button>

<div id="sidebar-wrapper"
    class="fixed inset-y-0 left-0 z-40 transition-transform duration-300 transform -translate-x-full w-80 md:translate-x-0 scrollbar-width-none">
    <aside id="sidebar"
        class="flex flex-col w-full h-full gap-6 px-4 py-6 overflow-y-auto bg-[rgb(var(--body-from))]/70 backdrop-blur md:bg-transparent md:backdrop-blur-0 scrollbar-width-none">
        <header class="flex items-center justify-between px-2">
            <div class="flex items-center justify-between flex-1 gap-2">
                <svg width="64" height="80" viewBox="0 0 48 60" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="hidden transition-all duration-200 md:block drop-shadow">
                    <defs>
                        <linearGradient id="header-gradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stop-color="rgb(var(--button-from))" />
                            <stop offset="100%" stop-color="rgb(var(--button-to))" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M47.58,40.67a.83.83,0,0,0-.58,0H45.7l1-1a.89.89,0,0,0,0-1.2.8.8,0,0,0-1.1,0l-1,1a22,22,0,0,0-3.5-5.8l-.6-6.1a2.2,2.2,0,0,0-2.36-2,1,1,0,0,0-.24,0l-6.1,1a16.56,16.56,0,0,0-4.13-1.25A12.79,12.79,0,0,0,32,21.8c.4,1.6,1.6,5.3,3.9,3.5,0,0,2.39-1.49-1-3.69.4.18,6.49,2.9,6.68-2.61a.8.8,0,0,0-.82-.78.83.83,0,0,0-.48.18,5.37,5.37,0,0,1-2.2.4s6.3-3.6,2.2-6.4a1.21,1.21,0,0,0-1.65.4,1.49,1.49,0,0,0-.15.4s-1.3,3.6-4.6,4.4a9.15,9.15,0,0,0,.1-3.3,10.11,10.11,0,0,0-4.1-6.5C20.6-4.7,4.7,1.6,4.7,1.6L12,10.9A9.51,9.51,0,0,0,10.3,18a10.34,10.34,0,0,0,7.29,8.11A20.55,20.55,0,0,0,13.7,28L7.6,27A2.21,2.21,0,0,0,5,28.76L5,29l-.9,9.2a16,16,0,0,0-1.8,6.7c0,.5.1,1,.1,1.4H.8a.9.9,0,0,0-.8.9.89.89,0,0,0,.8.8H2.6l-1.5.7a.7.7,0,0,0-.45.88.61.61,0,0,0,0,.12.8.8,0,0,0,1,.5l1.2-.6-.6,1.3A.89.89,0,0,0,2.7,52a.81.81,0,0,0,1.08-.35s0,0,0,0l.3-.7C7.5,56.3,15.1,60,24,60c12,0,21.7-6.8,21.7-15.1v-.6l.8.3a.7.7,0,0,0,.94-.32.55.55,0,0,0,.06-.18.71.71,0,0,0-.28-1l-.12,0-1.7-.6h1.7v-.1a.9.9,0,1,0,.48-1.73ZM21,4.5c.4,0,.7.7.7,1.5s-.3,1.4-.7,1.4-.7-.6-.7-1.4S20.6,4.5,21,4.5Zm-2.6,7.3c.2-.1.3.1.3.2s.5,7.4,8,7.4h.1c.2,0,4.1,0,5.6-3.2L25.7,9.5a.2.2,0,0,1,0-.28l0,0h.4L32.9,16v.2c-1.6,3.8-6.1,3.7-6.1,3.7h-.1c-8,0-8.5-7.8-8.5-7.9Zm10,32.3h-.6a2.68,2.68,0,0,1-1.4-.4,1.84,1.84,0,0,1-.5-.7l-.4.6a2.58,2.58,0,0,1-2.1.8.29.29,0,0,1-.3-.3c0-.1.1-.2.3-.2a1.79,1.79,0,0,0,1.7-.7,1.4,1.4,0,0,0,.4-1V42L25,42c-1.37,0-2.43-.39-2.52-1s1.2-1.2,2.8-1.4,2.8.3,2.9,1S27.3,41.8,26,42v.3a3,3,0,0,0,.7,1.1,2.53,2.53,0,0,0,1.6.2l.3.2C28.6,43.9,28.6,44.1,28.4,44.1Z"
                        transform="translate(0 -0.01)" fill="url(#header-gradient)" />
                </svg>
                <a href="#news" id="bell-btn"
                    class="relative p-2 ml-auto rounded-full cursor-pointer md:ml-0 group">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-6 h-6 text-[rgb(var(--button-from))] transition-all duration-300 stroke-current hover:scale-105 drop-shadow fill-none">
                        <path d="M15 18h-5" />
                        <path d="M18 14h-8" />
                        <path
                            d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
                        <rect width="8" height="4" x="10" y="6" rx="1" />
                    </svg>
                    <!-- <span id="bell-dot"
                        class="absolute w-3 h-3 bg-red-500 rounded-full opacity-75 -top-1 -right-1 animate-ping">
                    </span>
                    <span id="bell-dot-static" class="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-red-500">
                    </span> -->
                </a>
            </div>
        </header>

        <nav class="flex-1">
            <ul class="space-y-2">

                <!-- PÁGINA PRINCIPAL -->
                <li>
                    <a href="#main"
                        class="block transition-shadow duration-300 bg-transparent group rounded-xl hover:shadow-lg nav-btn"
                        data-hash="#main">

                        <div
                            class="flex items-center gap-5 px-5 py-4 transition-colors duration-300 inner rounded-xl group-hover:bg-gradient-to-r group-hover:from-[rgb(var(--button-from))] group-hover:to-[rgb(var(--button-to))]">

                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="flex-shrink-0 w-5 h-5 text-[rgb(var(--button-from))] transition-colors duration-300 group-hover:text-white drop-shadow">
                                <path d="M3 9.5l9-7 9 7V19a2 2 0 0 1-2 2h-5v-5H10v5H5a2 2 0 0 1-2-2Z" />
                            </svg>

                            <span
                                class="flex-1 font-medium text-[rgb(var(--button-from))] transition-all duration-300 select-none group-hover:bg-gradient-to-r group-hover:font-medium drop-shadow group-hover:text-white">
                                Página Principal
                            </span>

                        </div>

                    </a>

                </li>

                <!-- MÓDULO DE SISTEMA -->
                <li>
                    <div
                        class="group block rounded-xl hover:bg-gradient-to-tr hover:from-[rgb(var(--body-from))] hover:to-[rgb(var(--body-to))] hover:shadow-lg transition-shadow duration-300 nav-btn">

                        <button type="button" data-toggle="collapse" data-target="#mod-system"
                            class="flex items-center justify-between w-full px-5 py-4 text-[rgb(var(--button-from))] transition-colors duration-300 cursor-pointer rounded-xl group-hover:bg-gradient-to-r group-hover:from-[rgb(var(--button-from))] group-hover:to-[rgb(var(--button-to))]">

                            <div class="flex items-center gap-5">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="flex-shrink-0 w-5 h-5 text-[rgb(var(--button-from))] transition-colors duration-300 group-hover:text-white drop-shadow">
                                    <path d="M3 3h18v18H3V3Z" />
                                </svg>
                                <span
                                    class="font-medium transition-all duration-300 select-none group-hover:text-white drop-shadow">
                                    Sistema
                                </span>
                            </div>

                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="w-4 h-4 text-[rgb(var(--button-from))] transition-transform duration-300 group-hover:text-white drop-shadow">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>

                        <ul id="mod-system"
                            class="rounded-b-lg pl-9 py-6 space-y-1 hidden hover:bg-gradient-to-tr hover:from-[rgb(var(--body-from))] hover:to-[rgb(var(--body-to))] group-hover:bg-gradient-to-tr group-hover:from-[rgb(var(--body-from))] group-hover:to-[rgb(var(--body-to))]">
                            <li><a href="#system-users"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Usuarios</a>
                            </li>
                            <li><a href="#system-roles"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Roles</a>
                            </li>
                            <li><a href="#system-codes"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Códigos</a>
                            </li>
                            <li><a href="#system-audit"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Auditoría</a>
                            </li>
                        </ul>
                    </div>
                </li>


                <!-- MÓDULO DE PLANIFICACIÓN -->
                <li>
                    <div
                        class="group block rounded-xl hover:bg-gradient-to-tr hover:from-[rgb(var(--body-from))] hover:to-[rgb(var(--body-to))] hover:shadow-lg transition-shadow duration-300 nav-btn">
                        <button type="button" data-toggle="collapse" data-target="#mod-planification"
                            class="flex items-center justify-between w-full px-5 py-4 text-[rgb(var(--button-from))] transition-colors duration-300 cursor-pointer rounded-xl group-hover:bg-gradient-to-r group-hover:from-[rgb(var(--button-from))] group-hover:to-[rgb(var(--button-to))]">
                            <div class="flex items-center gap-5">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="flex-shrink-0 w-5 h-5 text-[rgb(var(--button-from))] transition-colors duration-300 group-hover:text-white drop-shadow">
                                    <path d="M2 3h20" />
                                    <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                                    <path d="m7 21 5-5 5 5" />
                                </svg>
                                <span
                                    class="font-medium transition-all duration-300 select-none group-hover:text-white drop-shadow">
                                    Planificación
                                </span>
                            </div>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="w-4 h-4 text-[rgb(var(--button-from))] transition-transform duration-300 group-hover:text-white drop-shadow">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>

                        <ul id="mod-planification"
                            class="rounded-b-lg pl-9 py-6 space-y-1 hidden hover:bg-gradient-to-tr hover:from-[rgb(var(--body-from))] hover:to-[rgb(var(--body-to))] group-hover:bg-gradient-to-tr group-hover:from-[rgb(var(--body-from))] group-hover:to-[rgb(var(--body-to))]">
                            <li>
                                <a href="#planification-university"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Universidad</a>
                            </li>
                            <li>
                                <a href="#planification-localities"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Localidades</a>
                            </li>
                            <li>
                                <a href="#planification-faculties"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Facultades</a>
                            </li>
                            <li>
                                <a href="#planification-departments"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Departamentos</a>
                            </li>
                            <li>
                                <a href="#planification-careers"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Carreras</a>
                            </li>
                            <li>
                                <a href="#planification-pensums"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Pensums</a>
                            </li>
                            <li>
                                <a href="#planification-subjects"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Materias</a>
                            </li>
                            <li>
                                <a href="#planification-cycles"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Ciclos</a>
                            </li>
                            <li>
                                <a href="#planification-dates"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Fechas
                                    Académicas</a>
                            </li>
                            <li>
                                <a href="#planification-modalities"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Modalidades</a>
                            </li>
                            <li>
                                <a href="#planification-titles"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Títulos</a>
                            </li>
                            <li>
                                <a href="#planification-degrees"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Grados</a>
                            </li>
                            <li>
                                <a href="#planification-service"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Servicio
                                    Social</a>
                            </li>
                            <li>
                                <a href="#planification-documents"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Documentos</a>
                            </li>
                            <li>
                                <a href="#planification-evaluation-instruments"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Instrumentos</a>
                            </li>
                        </ul>
                    </div>
                </li>

                <!-- MÓDULO DE RECURSOS HUMANOS -->
                <li>
                    <div
                        class="group block rounded-xl hover:bg-gradient-to-tr hover:from-[rgb(var(--body-from))] hover:to-[rgb(var(--body-to))] hover:shadow-lg transition-shadow duration-300 nav-btn cursor-pointer">

                        <a href="#hr-employees"
                            class="flex items-center gap-5 px-5 py-4 text-[rgb(var(--button-from))] transition-colors duration-300 rounded-xl hover:bg-gradient-to-r hover:from-[rgb(var(--button-from))] hover:to-[rgb(var(--button-to))]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="flex-shrink-0 w-5 h-5 text-[rgb(var(--button-from))] transition-colors duration-300 group-hover:text-white drop-shadow">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            <span
                                class="font-medium transition-all duration-300 select-none group-hover:text-white drop-shadow">
                                Empleados
                            </span>
                        </a>
                    </div>
                </li>

                <!-- MÓDULO DE REGISTRO ACADÉMICO -->
                <li>
                    <div
                        class="group block rounded-xl hover:bg-gradient-to-tr hover:from-[rgb(var(--body-from))] hover:to-[rgb(var(--body-to))] hover:shadow-lg transition-shadow duration-300 nav-btn">

                        <button type="button" data-toggle="collapse" data-target="#mod-ar"
                            class="flex items-center justify-between w-full px-5 py-4 text-[rgb(var(--button-from))] transition-colors duration-300 cursor-pointer rounded-xl group-hover:bg-gradient-to-r group-hover:from-[rgb(var(--button-from))] group-hover:to-[rgb(var(--button-to))]">
                            <div class="flex items-center gap-5">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="flex-shrink-0 w-5 h-5 text-[rgb(var(--button-from))] transition-colors duration-300 group-hover:text-white drop-shadow">
                                    <path d="M4 19.5A8.38 8.38 0 0 1 12 15a8.38 8.38 0 0 1 8 4.5" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                                <span
                                    class="font-medium transition-all duration-300 select-none group-hover:text-white drop-shadow">
                                    Registro Académico
                                </span>
                            </div>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="w-4 h-4 text-[rgb(var(--button-from))] transition-transform duration-300 group-hover:text-white drop-shadow">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>

                        <ul id="mod-ar"
                            class="rounded-b-lg pl-9 py-6 space-y-1 hidden hover:bg-gradient-to-tr hover:from-[rgb(var(--body-from))] hover:to-[rgb(var(--body-to))] group-hover:bg-gradient-to-tr group-hover:from-[rgb(var(--body-from))] group-hover:to-[rgb(var(--body-to))]">
                            <li><a href="#ar-students"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Estudiantes</a>
                            </li>
                            <li><a href="#ar-career-enrollments"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Inscripciones
                                    Carreras</a></li>
                            <li><a href="#ar-cycle-enrollments"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Inscripciones
                                    Ciclos</a></li>
                            <li><a href="#ar-course-enrollments"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Inscripciones
                                    Cursos</a></li>
                            <li><a href="#ar-student-performance"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Rendimiento</a>
                            </li>
                        </ul>
                    </div>
                </li>


                <!-- MÓDULO DE PORTAL DE DOCENTE -->
                <li>
                    <a href="#tp-courses"
                        class="group block rounded-xl hover:bg-gradient-to-tr hover:from-[rgb(var(--body-from))] hover:to-[rgb(var(--body-to))] hover:shadow-lg transition-shadow duration-300 nav-btn cursor-pointer">
                        <div
                            class="flex items-center gap-5 px-5 py-4 transition-colors duration-300 inner rounded-xl group-hover:bg-gradient-to-r group-hover:from-[rgb(var(--button-from))] group-hover:to-[rgb(var(--button-to))]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="flex-shrink-0 w-5 h-5 text-[rgb(var(--button-from))] transition-colors duration-300 group-hover:text-white drop-shadow">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                            </svg>
                            <span
                                class="font-medium text-[rgb(var(--button-from))] transition-all duration-300 select-none group-hover:text-white drop-shadow">
                                Cursos
                            </span>
                        </div>
                    </a>
                </li>

                <li>
                    <a href="#tp-evaluation-plans"
                        class="group block rounded-xl hover:bg-gradient-to-tr hover:from-[rgb(var(--body-from))] hover:to-[rgb(var(--body-to))] hover:shadow-lg transition-shadow duration-300 nav-btn cursor-pointer">
                        <div
                            class="flex items-center gap-5 px-5 py-4 transition-colors duration-300 inner rounded-xl group-hover:bg-gradient-to-r group-hover:from-[rgb(var(--button-from))] group-hover:to-[rgb(var(--button-to))]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="flex-shrink-0 w-5 h-5 text-[rgb(var(--button-from))] transition-colors duration-300 group-hover:text-white drop-shadow">
                                <path d="M4 4h16v16H4V4Z" />
                                <path d="M4 10h16" />
                            </svg>
                            <span
                                class="font-medium text-[rgb(var(--button-from))] transition-all duration-300 select-none group-hover:text-white drop-shadow">
                                Planes de Evaluación
                            </span>
                        </div>
                    </a>
                </li>

                <li>
                    <a href="#tp-evaluations"
                        class="group block rounded-xl hover:bg-gradient-to-tr hover:from-[rgb(var(--body-from))] hover:to-[rgb(var(--body-to))] hover:shadow-lg transition-shadow duration-300 nav-btn cursor-pointer">
                        <div
                            class="flex items-center gap-5 px-5 py-4 transition-colors duration-300 inner rounded-xl group-hover:bg-gradient-to-r group-hover:from-[rgb(var(--button-from))] group-hover:to-[rgb(var(--button-to))]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="flex-shrink-0 w-5 h-5 text-[rgb(var(--button-from))] transition-colors duration-300 group-hover:text-white drop-shadow">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                            </svg>
                            <span
                                class="font-medium text-[rgb(var(--button-from))] transition-all duration-300 select-none group-hover:text-white drop-shadow">
                                Evaluaciones
                            </span>
                        </div>
                    </a>
                </li>


                <!-- MÓDULO DE PORTAL DE ESTUDIANTE -->
                <li>
                    <a href="#sp-evaluations"
                        class="group block rounded-xl hover:bg-gradient-to-tr hover:from-[rgb(var(--body-from))] hover:to-[rgb(var(--body-to))] hover:shadow-lg transition-shadow duration-300 nav-btn cursor-pointer">
                        <div
                            class="flex items-center gap-5 px-5 py-4 transition-colors duration-300 inner rounded-xl group-hover:bg-gradient-to-r group-hover:from-[rgb(var(--button-from))] group-hover:to-[rgb(var(--button-to))]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="flex-shrink-0 w-5 h-5 text-[rgb(var(--button-from))] transition-colors duration-300 group-hover:text-white drop-shadow">
                                <path d="M4 4h16v16H4V4Z" />
                                <path d="M4 10h16" />
                            </svg>
                            <span
                                class="font-medium text-[rgb(var(--button-from))] transition-all duration-300 select-none group-hover:text-white drop-shadow">
                                Evaluaciones
                            </span>
                        </div>
                    </a>
                </li>

                <li>
                    <div
                        class="group block rounded-xl hover:bg-gradient-to-tr hover:from-[rgb(var(--body-from))] hover:to-[rgb(var(--body-to))] hover:shadow-lg transition-shadow duration-300 nav-btn">

                        <button type="button" data-toggle="collapse" data-target="#mod-sp-enrollments"
                            class="flex items-center justify-between w-full px-5 py-4 text-[rgb(var(--button-from))] transition-colors duration-300 cursor-pointer rounded-xl group-hover:bg-gradient-to-r group-hover:from-[rgb(var(--button-from))] group-hover:to-[rgb(var(--button-to))]">

                            <div class="flex items-center gap-5">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="flex-shrink-0 w-5 h-5 text-[rgb(var(--button-from))] transition-colors duration-300 group-hover:text-white drop-shadow">
                                    <path d="M4 4h16v16H4V4Z" />
                                    <path d="M12 8v8" />
                                    <path d="M8 12h8" />
                                </svg>
                                <span
                                    class="font-medium transition-all duration-300 select-none group-hover:text-white drop-shadow">
                                    Inscripciones
                                </span>
                            </div>

                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="w-4 h-4 text-[rgb(var(--button-from))] transition-transform duration-300 group-hover:text-white drop-shadow">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>

                        <ul id="mod-sp-enrollments"
                            class="rounded-b-lg pl-9 py-6 space-y-1 hidden hover:bg-gradient-to-tr hover:from-[rgb(var(--body-from))] hover:to-[rgb(var(--body-to))] group-hover:bg-gradient-to-tr group-hover:from-[rgb(var(--body-from))] group-hover:to-[rgb(var(--body-to))]">
                            <li><a href="#sp-enrollments-cycles"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Inscripción
                                    Ciclos</a>
                            </li>
                            <li><a href="#sp-enrollments-courses"
                                    class="block px-3 py-1 text-[rgb(var(--button-from))] rounded hover:text-[rgb(var(--text-from))]">Inscripción
                                    Materias</a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li>
                    <a href="#sp-pensum"
                        class="group block rounded-xl hover:bg-gradient-to-tr hover:from-[rgb(var(--body-from))] hover:to-[rgb(var(--body-to))] hover:shadow-lg transition-shadow duration-300 nav-btn cursor-pointer">
                        <div
                            class="flex items-center gap-5 px-5 py-4 transition-colors duration-300 inner rounded-xl group-hover:bg-gradient-to-r group-hover:from-[rgb(var(--button-from))] group-hover:to-[rgb(var(--button-to))]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="flex-shrink-0 w-5 h-5 text-[rgb(var(--button-from))] transition-colors duration-300 group-hover:text-white drop-shadow">
                                <path d="M4 19.5A8.38 8.38 0 0 1 12 15a8.38 8.38 0 0 1 8 4.5" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            <span
                                class="font-medium text-[rgb(var(--button-from))] transition-all duration-300 select-none group-hover:text-white drop-shadow">
                                Pensum
                            </span>
                        </div>
                    </a>
                </li>

                <li>
                    <a href="#sp-grades"
                        class="group block rounded-xl hover:bg-gradient-to-tr hover:from-[rgb(var(--body-from))] hover:to-[rgb(var(--body-to))] hover:shadow-lg transition-shadow duration-300 nav-btn cursor-pointer">
                        <div
                            class="flex items-center gap-5 px-5 py-4 transition-colors duration-300 inner rounded-xl group-hover:bg-gradient-to-r group-hover:from-[rgb(var(--button-from))] group-hover:to-[rgb(var(--button-to))]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="flex-shrink-0 w-5 h-5 text-[rgb(var(--button-from))] transition-colors duration-300 group-hover:text-white drop-shadow">
                                <path d="M12 20h9" />
                                <path d="M12 4v16" />
                                <path d="M8 8H4v8h4" />
                            </svg>
                            <span
                                class="font-medium text-[rgb(var(--button-from))] transition-all duration-300 select-none group-hover:text-white drop-shadow">
                                Notas
                            </span>
                        </div>
                    </a>
                </li>

                <!-- PERFIL -->
                <li>
                    <a href="#profile"
                        class="block transition-shadow duration-300 bg-transparent group rounded-xl hover:shadow-lg nav-btn"
                        data-hash="#profile">

                        <div class="flex items-center gap-5 px-5 py-4 transition-colors duration-300 inner rounded-xl group-hover:bg-gradient-to-r group-hover:from-[rgb(var(--button-from))] group-hover:to-[rgb(var(--button-to))]"
                            id="nav-profile">


                            <div class="flex items-center justify-center h-14 w-14 profile-avatar" id="profile-avatar">
                            </div>

                            <span
                                class="flex-1 font-medium text-[rgb(var(--button-from))] transition-all duration-300 select-none group-hover:bg-clip-text group-hover:text-white group-hover:font-medium drop-shadow">Mi
                                Perfil</span>
                        </div>

                    </a>

                </li>

                <!-- CERRAR SESIÓN -->
                <li>

                    <div class="block transition-shadow duration-300 bg-transparent group rounded-xl hover:shadow-lg nav-btn"
                        id="logout-btn">

                        <button type="button"
                            class="flex items-center justify-between w-full px-5 py-4 text-[rgb(var(--button-from))] transition-colors duration-300 cursor-pointer rounded-xl group-hover:bg-gradient-to-r group-hover:from-[rgb(var(--button-from))] group-hover:to-[rgb(var(--button-to))]">

                            <div class="flex items-center gap-5">

                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="flex-shrink-0 w-5 h-5 text-[rgb(var(--button-from))] transition-colors duration-300 group-hover:text-white drop-shadow">

                                    <path d="m16 17 5-5-5-5" />

                                    <path d="M21 12H9" />

                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />

                                </svg>

                                <span
                                    class="font-medium transition-all duration-300 select-none group-hover:text-white drop-shadow">

                                    Cerrar Sesión

                                </span>

                            </div>

                        </button>

                    </div>

                </li>

            </ul>

        </nav>

    </aside>

</div>

<template id="tmpl-logout-confirm">
    <div class="flex flex-col gap-10 p-10 mx-auto">
        <div class="text-left">
            <span
                class="min-w-full text-3xl font-bold bg-gradient-to-r from-[rgb(var(--text-from))] to-[rgb(var(--text-to))] bg-clip-text text-transparent drop-shadow select-none text-left">
                ¿Cerrar sesión?
            </span>
            <p
                class="mt-2 font-semibold text-sm bg-gradient-to-r from-[rgb(var(--text-from))] to-[rgb(var(--text-to))] bg-clip-text text-transparent select-none text-left">
                Su sesión se cerrará y volverá al inicio de sesión.
            </p>
        </div>
        <div class="flex justify-end gap-4">
            <div id="logout-confirm" class="group"></div>
        </div>
    </div>
</template>

</template>
    `}constructor(t={}){const e=document.querySelector("#navbar");if(!e){console.error("Navbar host (#navbar) not found, will retry..."),super({host:document.createElement("div"),autoRender:!1}),this._retryRender();return}super({host:e}),this._render()}async _retryRender(){await new Promise(e=>setTimeout(e,100));const t=document.querySelector("#navbar");t?(this.host=t,await this.render()):console.error("Navbar host still not found after retry")}async _render(){try{const t=document.createElement("template");t.innerHTML=j.getTemplate();const e=t.content.querySelector("#tmpl-navbar");if(!e)throw new Error("Navbar template missing");const r=e.content.cloneNode(!0);await this.filterByRole(r),this.host.innerHTML="",this.host.appendChild(r),await this.injectProfilePicture(),this.attachCollapses(),this.highlightActive(),window.addEventListener("hashchange",()=>this.highlightActive()),this.attachLogoutHandler()}catch(t){throw console.error("Navbar render failed:",t),new T("Navbar","rendering",t)}}async attachLogoutHandler(){const t=document.querySelector("#logout-btn");if(!t){console.warn("Logout button not found");return}t.addEventListener("click",async()=>{const e=new L({templateId:"tmpl-logout-confirm",size:"sm",components:[{type:lt,opts:{host:"#logout-confirm",text:"Confirmar",buttonType:2,onClick:r=>{r.preventDefault(),H.logout(),e.close(),window.location.href="/#login"},showIcon:!1,sizeMultiplier:.75}}]})})}async injectProfilePicture(){try{const t=(await H.me()).user,e=`${t.firstName?.[0]??""}${t.lastName?.[0]??""}`.toUpperCase(),r=document.querySelector("#profile-avatar");if(!r){console.warn("Profile avatar host not found");return}r.innerHTML="",r.appendChild(at(e||"?"))}catch(t){console.error("[Navbar] user fetch failed:",t)}}highlightActive(){const t=window.location.hash||"#main";document.querySelectorAll("#sidebar .nav-btn").forEach(n=>{n.classList.remove("bg-gradient-to-r","from-[rgb(var(--button-from))]","to-[rgb(var(--button-to))]","shadow-lg"),n.querySelectorAll("svg").forEach(a=>a.classList.remove("text-white"));const s=A(n);s?.classList.remove("text-white"),s?.classList.add("text-[rgb(var(--button-from))]"),n.querySelector("ul")?.classList.remove("bg-gradient-to-tr","from-[rgb(var(--body-from))]","to-[rgb(var(--body-to))]")});const e=document.querySelector(`#sidebar a[href="${t}"]`),r=e?.closest(".nav-btn");if(!r)return;r.classList.add("bg-gradient-to-r","from-[rgb(var(--button-from))]","to-[rgb(var(--button-to))]","shadow-lg"),r.querySelectorAll("svg").forEach(n=>n.classList.add("text-white"));const o=A(r);if(o){o.classList.add("text-white"),o.classList.remove("text-[rgb(var(--button-from))]");const n=r.querySelector("ul")?.classList.contains("hidden");o.dataset.originalLabel??=o.textContent,e&&n?o.textContent=e.textContent.trim():o.textContent=o.dataset.originalLabel}r.querySelector("ul")?.classList.add("bg-gradient-to-tr","from-[rgb(var(--body-from))]","to-[rgb(var(--body-to))]")}attachCollapses(){document.querySelectorAll('[data-toggle="collapse"]').forEach(t=>{const e=t.dataset.target,r=e?document.querySelector(e):null;if(!r){console.warn("[Navbar] collapse target not found:",e);return}t.addEventListener("click",()=>{const o=r.classList.contains("hidden");r.classList.toggle("hidden"),t.querySelector("svg:last-child")?.classList.toggle("rotate-180");const n=A(t);if(n)if(n.dataset.originalLabel??=n.textContent,o)n.textContent=n.dataset.originalLabel;else{const s=window.location.hash||"#main",a=r.querySelector(`a[href="${s}"]`);a?n.textContent=a.textContent.trim():n.textContent=n.dataset.originalLabel}})})}async filterByRole(t){try{const e=(await H.me()).user.roleID,o={Administrador:["#system-","#planification-"],"Recursos Humanos":["#hr-"],"Registro Académico":["#ar-"],Docente:["#tp-"],Estudiante:["#sp-"]}[e]||[];t.querySelectorAll("a[href]").forEach(n=>{const s=n.getAttribute("href");!["#main","#notifications","#not-found","#profile"].includes(s)&&!o.some(i=>s.startsWith(i))&&n.closest("li")?.remove()}),t.querySelectorAll("ul").forEach(n=>{n.querySelector("li")||n.closest(".nav-btn")?.remove()})}catch(e){console.error("[Navbar] role filtering failed:",e)}}}class L extends N{static instances=new Map;static getTemplate(){return`
<template id="tmpl-modal">
  <div id="modal-overlay"
       class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center
              opacity-0 pointer-events-none transition-opacity duration-300 z-[999] scrollbar-width-none">
      <div id="modal-container"
           class="relative w-full max-w-lg transition-all duration-300 scale-90 opacity-0">
          <div class="bg-gradient-to-bl from-[rgb(var(--off-from))] to-[rgb(var(--off-from))] p-[2px] rounded-2xl">
              <div id="modal-content" class="bg-gradient-to-bl from-[rgb(var(--body-from))] to-[rgb(var(--body-to))] rounded-2xl"></div>
          </div>
          <button id="modal-close"
                  class="absolute w-6 h-6 text-[rgb(var(--off-from))] transition-colors duration-300 cursor-pointer top-5 right-5 hover:text-[rgb(var(--placeholder-from))] drop-shadow">
              <svg class="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
          </button>
      </div>
  </div>
</template>`}constructor(t={}){if(super({host:document.body,autoRender:!1}),this.id=t.id||"default-modal",L.instances.has(this.id))return L.instances.get(this.id);L.instances.set(this.id,this),this.size=t.size||"md",this.content=t.content,this.templateId=t.templateId,this.renderMode=t.renderMode||"template",this.overlay=null,this.container=null,this.contentHost=null,this.closeBtn=null,this.hideCloseButton=!!t.hideCloseButton,this.components=Array.isArray(t.components)?t.components:[],this._open()}_sizeClasses(){return{sm:"max-w-sm",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl"}}_applySize(){if(!this.container)return;const t=this._sizeClasses();Object.values(t).forEach(e=>this.container.classList.remove(e)),this.container.classList.add(t[this.size]??t.md)}_setContent(){if(this.contentHost)if(this.contentHost.innerHTML="",this.renderMode==="template")if(this.templateId){const t=document.getElementById(this.templateId);t?this.contentHost.appendChild(t.content.cloneNode(!0)):console.warn(`[Modal] templateId "${this.templateId}" not found`)}else typeof this.content=="string"?this.contentHost.innerHTML=this.content:this.content instanceof HTMLElement&&this.contentHost.appendChild(this.content);else this.renderMode==="component"?this.content instanceof HTMLElement?this.contentHost.appendChild(this.content):this.content&&this.content.root instanceof HTMLElement&&this.contentHost.appendChild(this.content.root):console.warn(`[Modal] Unknown renderMode: ${this.renderMode}`)}async _load(){if(this.overlay)return;const t=document.createElement("template");t.innerHTML=L.getTemplate(),document.getElementById("tmpl-modal")||document.body.appendChild(t.content.cloneNode(!0));const r=document.getElementById("tmpl-modal").content.cloneNode(!0);if(document.body.appendChild(r),this.overlay=document.getElementById("modal-overlay"),this.container=document.getElementById("modal-container"),this.contentHost=document.getElementById("modal-content"),this.closeBtn=document.getElementById("modal-close"),!this.overlay||!this.container||!this.contentHost){console.error("[Modal] Modal template is missing required elements (overlay/container/content).");return}!this.hideCloseButton&&this.closeBtn?this.closeBtn.addEventListener("click",()=>this.close()):this.closeBtn&&this.closeBtn.classList.add("hidden"),this.overlay.addEventListener("click",o=>{o.target===this.overlay&&this.close()}),this._applySize()}async _open(){this.overlay||await this._load(),this._setContent(),requestAnimationFrame(()=>{this.overlay.classList.remove("opacity-0","pointer-events-none"),this.overlay.classList.add("opacity-100"),this.container.classList.remove("scale-90","opacity-0"),this.container.classList.add("scale-100","opacity-100"),this._initComponents()})}_initComponents(){const t=[];Array.isArray(this.components)&&t.push(...this.components),this.renderMode==="component"&&Array.isArray(this.content)&&t.push(...this.content);for(const e of t){if(!e||typeof e.type!="function")continue;const r=Object.assign({},e.opts||{});let o=null;r.host&&typeof r.host=="string"&&r.host.startsWith("#")&&(o=this.rootQuery(r.host),!o&&this.contentHost&&(o=document.createElement("div"),o.id=r.host.slice(1),this.contentHost.appendChild(o))),r.host?r.host=o||this.rootQuery(r.host)||this.contentHost:r.host=this.contentHost,"templateId"in r&&!r.templateId&&delete r.templateId;try{new e.type(r)}catch(n){console.error("[Modal] Failed to init component",e,n)}}}rootQuery(t){try{if(!t)return this.contentHost;if(this.contentHost){const e=this.contentHost.querySelector(t);if(e)return e}if(this.container){const e=this.container.querySelector(t);if(e)return e}return document.querySelector(t)}catch{return document.querySelector(t)}}close(){if(!this.overlay)return;this.overlay.classList.remove("opacity-100"),this.overlay.classList.add("opacity-0","pointer-events-none");const t=r=>{if(!(r&&r.target!==this.overlay)){this.overlay.removeEventListener("transitionend",t);try{this.overlay.remove()}catch{}this.overlay=null,this.container=null,this.contentHost=null,this.closeBtn=null,L.instances.delete(this.id)}};getComputedStyle(this.overlay).transitionDuration!=="0s"?this.overlay.addEventListener("transitionend",t):t()}async render(){}async _render(){}}class ct{constructor(){this.currentView=null,this.ALL_VIEWS=this.flattenRoutes(W.views),this.init()}init(){document.addEventListener("DOMContentLoaded",async()=>{await this.initializeApp()}),window.addEventListener("hashchange",()=>{B.loadTheme(),this.render()}),window.location.hash||(window.location.hash="#main")}async initializeApp(){await new P().render(),await new z().render(),this.toast=new q,await this.toast.init(),await p.isAuthenticated()||(window.location.hash="#login"),B.loadTheme(),this.render()}flattenRoutes(t){const e=[];for(const r of Object.values(t))r?.hash?e.push(r):typeof r=="object"&&e.push(...this.flattenRoutes(r));return e}async render(t=window.location.hash||"#main"){const e=this.ALL_VIEWS.find(r=>r.hash===t);if(!e){window.location.hash="#not-found";return}if(e.hash!=="#login"&&e.hash!=="#not-found"){if(!await p.isAuthenticated()){window.location.hash="#login";return}if(e.guard==="admin"&&!p.isAdmin()){window.location.hash="#main";return}}await this.handleNavbar(e),await this.loadInterface(e)}async handleNavbar(t){if(t.hideNavbar){const e=document.querySelector("#navbar");e&&(e.innerHTML="")}else{await new j().render("#navbar");const e=document.querySelector("#burger-btn"),r=document.querySelector("#sidebar-wrapper");e&&r&&e.addEventListener("click",()=>{r.classList.toggle("-translate-x-full")})}}async loadInterface(t){try{const e=await this.getInterfaceModule(t);await new e.default().render("#main-view"),document.title=t.title}catch(e){console.error("Interface load error",e),window.location.hash="#not-found"}}async getInterfaceModule(t){const r={"#login":()=>G(()=>import("./login-CBgZ06Lh.js"),[],import.meta.url)}[t.hash];if(!r)throw new Error(`No interface mapping found for hash: ${t.hash}`);return await r()}navigate(t){window.location.hash=t}getCurrentView(){return this.ALL_VIEWS.find(t=>t.hash===window.location.hash)}}new ct;export{H as A,N as C,q as T,U as a,p as b};
