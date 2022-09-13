const name = 'effa';
const age = 22;
const job = 'engineer';
const city = 'Kuala Terengganu';
let output;

// without template literals
output = '<ul>'+
'<li>Name: '+name+' </li>'+
'<li>Age: '+age+' </li>'+
'<li>Job: '+job+' </li>'+
'<li>City: '+city+' </li>'+
'</ul>';

// template literals
output = `<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
</ul>`;


document.body.innerHTML=output;