antlr4 = require('antlr4');
fs = require('fs');

var gen_dir = '../gen'
BeautifyGenerator = require (`../lib/BeautifyGenerator`).BeautifyGenerator;
resourcePolicyLexer = require (`${gen_dir}/resourcePolicyLexer`);
resourcePolicyParser = require (`${gen_dir}/resourcePolicyParser`);

var input = fs.readFileSync('./novel_community_p1.policy','utf-8');
console.log('input -', input)
var chars = new antlr4.InputStream(input);
var lexer = new resourcePolicyLexer.resourcePolicyLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new resourcePolicyParser.resourcePolicyParser(tokens);
parser.buildParseTrees = true;
var tree = parser.policy();
var camelcase = require('camelcase')

var gen = new BeautifyGenerator(1);
gen.visit(tree);

fs.writeFile('hl.json', JSON.stringify(gen.policyRows), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

fs.writeFile('h2.html', scanPolicyRows(gen.policyRows), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});


function scanPolicyRows (policyRows){
  var policyRowsHtml = policyRows.map(row => {
    return parsePolicyRow(row)
  }).join('\n')
  return `<div class="poliycy-beauty-box">${policyRowsHtml}</div>`
}

function parsePolicyRow (row){
  const { type, policyRowBody } = row
  var htmlElement = 'div', classNames = [`pbeauty-${type}`], content = policyRowBody
  switch (type) {
    case 'audience': {
      content = `for ${content}:`
      break
    }
    case 'declaration': {
      classNames.push(`pbeauty-d-${row.declareType}`)
      content = parseDeclarationRow(row)
      break
    }
    case 'state': {
      classNames.push(`pbeauty-${type}-${row.stateName}`)
      content = parseStateRow(row)
      break
    }
    default: {}
  }
  return createHTMLString(htmlElement, classNames.join(' '), content)

}

function parseDeclarationRow (row){
  var { highlightMap: { body = '' }, policyRowBody } = row

  var targDeclareStr = policyRowBody

  switch (row.declareType) {
    case 'contract-account': {
      targDeclareStr = policyRowBody.replace(body, createHTMLString('span', 'peauty-d-accountname', body))
      break
    }
    case 'contract-expression': {
      break
    }
    case 'custom-event': {
      targDeclareStr = policyRowBody.replace(body, createHTMLString('span', 'peauty-d-custom-eventname', body))
      break
    }
    default: {}
  }
  return targDeclareStr
}

function parseStateRow (row){
  var { highlightMap: { authorization = [], transition = [], events = {} }, stateName, policyRowBody } = row

  policyRowBody = policyRowBody.replace(stateName, createHTMLString('span', 'pbeauty-s-statename', stateName))
  policyRowBody = parseAuthorizationPart (authorization, policyRowBody)
  policyRowBody = parseTransitionPart (transition, policyRowBody)
  policyRowBody = parseEventPart (events, policyRowBody)
  var contentRows = policyRowBody.split('\n')
  if(contentRows.length > 1){
    return contentRows.map(cont => createHTMLString('div', 'pbeauty-s-row', cont)).join('')
  }else{
    return content
  }

}

function parseAuthorizationPart (authorization, policyRowBody){
  authorization.forEach(authStr => {
    policyRowBody = policyRowBody.replace(authStr, createHTMLString('span', 'pbeauty-s-authorization', authStr))
  })
  return policyRowBody
}

function parseTransitionPart (transition, policyRowBody){
  transition.forEach(transitionStr => {
    policyRowBody = policyRowBody.replace(transitionStr, createHTMLString('span', 'pbeauty-s-transition', transitionStr))
  })
  return policyRowBody
}

function parseEventPart (events, policyRowBody){
  for(let eventName in events){
    let eventBody = events[eventName]
    eventName = eventName.replace(/_/g, '-')
    policyRowBody = policyRowBody.replace(eventBody, createHTMLString('span', `pbeauty-s-event bpeauty-s-${eventName}`, eventBody, eventName))
  }
  return policyRowBody
}

function createHTMLString (htmlElement, className, content, eventName){
  var eventStr = ''
  if(eventName){
    eventName = camelcase(eventName)
    eventStr = `@click="${eventName}"`
  }
  return `<${htmlElement} class="${className}" ${eventStr}>${content}</${htmlElement}>`
}